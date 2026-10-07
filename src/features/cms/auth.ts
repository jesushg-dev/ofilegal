import "server-only";

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "ofilegal_admin";
const SESSION_DAYS = 7;

function getPassword(): string | null {
  return process.env.ADMIN_PASSWORD ?? null;
}

function getSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ??
    process.env.ADMIN_PASSWORD ??
    "dev-only-change-me"
  );
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) {
    return false;
  }
  return timingSafeEqual(left, right);
}

export function isAdminConfigured(): boolean {
  return Boolean(getPassword());
}

export async function createAdminSession(): Promise<void> {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const nonce = randomBytes(16).toString("hex");
  const payload = `${exp}.${nonce}`;
  const token = `${payload}.${sign(payload)}`;
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(exp),
  });
}

export async function clearAdminSession(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function hasAdminSession(): Promise<boolean> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) {
    return false;
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return false;
  }

  const [expRaw, nonce, signature] = parts;
  if (!expRaw || !nonce || !signature) {
    return false;
  }

  const payload = `${expRaw}.${nonce}`;
  if (!safeEqual(signature, sign(payload))) {
    return false;
  }

  const exp = Number(expRaw);
  return Number.isFinite(exp) && exp > Date.now();
}

export function verifyAdminPassword(password: string): boolean {
  const expected = getPassword();
  if (!expected) {
    return false;
  }
  return safeEqual(password, expected);
}

export async function requireAdmin(): Promise<void> {
  if (!(await hasAdminSession())) {
    redirect("/admin/login");
  }
}
