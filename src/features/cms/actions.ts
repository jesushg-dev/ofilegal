"use server";

import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  clearAdminSession,
  createAdminSession,
  requireAdmin,
  verifyAdminPassword,
} from "@/features/cms/auth";
import { contentStore } from "@/features/cms/json-store";
import { articleFormSchema, siteFormSchema } from "@/features/cms/schemas";
import { slugify } from "@/features/cms/slug";
import type { Article } from "@/features/cms/types";

const ALLOWED_IMAGE_TYPES = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
]);

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

function revalidatePublic(): void {
  revalidatePath("/");
  revalidatePath("/publicaciones");
  revalidatePath("/admin");
}

export async function loginAction(
  _prev: { error: string } | null,
  formData: FormData,
): Promise<{ error: string } | null> {
  const password = String(formData.get("password") ?? "");
  if (!verifyAdminPassword(password)) {
    return { error: "Clave incorrecta o ADMIN_PASSWORD no está configurada." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function saveArticleAction(formData: FormData): Promise<void> {
  await requireAdmin();

  const parsed = articleFormSchema.safeParse({
    id: formData.get("id") || undefined,
    title: formData.get("title"),
    slug: formData.get("slug") || undefined,
    excerpt: formData.get("excerpt"),
    body: formData.get("body"),
    category: formData.get("category"),
    coverImageUrl: formData.get("coverImageUrl") || null,
    status: formData.get("status"),
    externalUrl: formData.get("externalUrl") || "",
  });

  if (!parsed.success) {
    throw new Error("Revise los campos del artículo.");
  }

  const input = parsed.data;
  const now = new Date().toISOString();
  const existing = input.id ? await contentStore.getArticleById(input.id) : null;
  const slug = slugify(input.slug || input.title);

  if (!slug) {
    throw new Error("No se pudo generar un slug válido.");
  }

  const article: Article = {
    id: existing?.id ?? randomUUID(),
    slug,
    title: input.title,
    excerpt: input.excerpt,
    body: input.body,
    category: input.category,
    coverImageUrl: input.coverImageUrl,
    status: input.status,
    externalUrl: input.externalUrl || undefined,
    publishedAt:
      input.status === "published"
        ? (existing?.publishedAt ?? now)
        : existing?.publishedAt ?? null,
    updatedAt: now,
  };

  await contentStore.saveArticle(article);
  revalidatePublic();
  revalidatePath(`/publicaciones/${article.slug}`);
  redirect("/admin/articulos");
}

export async function deleteArticleAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) {
    throw new Error("Artículo no encontrado.");
  }
  await contentStore.deleteArticle(id);
  revalidatePublic();
  redirect("/admin/articulos");
}

export async function updateSiteAction(formData: FormData): Promise<void> {
  await requireAdmin();

  const parsed = siteFormSchema.safeParse({
    portraitUrl: formData.get("portraitUrl"),
    portraitAlt: formData.get("portraitAlt"),
    available: formData.get("available") === "on",
    phoneDisplay: formData.get("phoneDisplay"),
    phoneE164: formData.get("phoneE164"),
    email: formData.get("email"),
    address: formData.get("address"),
  });

  if (!parsed.success) {
    throw new Error("Revise los datos del sitio.");
  }

  await contentStore.updateSite(parsed.data);
  revalidatePublic();
  redirect("/admin/sitio");
}

export async function uploadMediaAction(formData: FormData): Promise<void> {
  await requireAdmin();

  const file = formData.get("file");
  const alt = String(formData.get("alt") ?? "").trim();

  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Seleccione una imagen.");
  }

  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error("La imagen supera 5 MB.");
  }

  const extension = ALLOWED_IMAGE_TYPES.get(file.type);
  if (!extension) {
    throw new Error("Use JPEG, PNG o WebP.");
  }

  if (alt.length < 4) {
    throw new Error("Escriba un texto alternativo descriptivo.");
  }

  const id = randomUUID();
  const filename = `${id}${extension}`;
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadsDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadsDir, filename), buffer);

  const url = `/uploads/${filename}`;
  await contentStore.saveMedia({
    id,
    filename,
    url,
    alt,
    createdAt: new Date().toISOString(),
  });

  revalidatePath("/admin/fotos");
  revalidatePublic();
}

export async function deleteMediaAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const items = await contentStore.listMedia();
  const asset = items.find((item) => item.id === id);
  if (!asset) {
    return;
  }

  const filePath = path.join(process.cwd(), "public", asset.url.replace(/^\//, ""));
  try {
    await unlink(filePath);
  } catch {
    // File may already be gone; still drop the catalog entry.
  }

  await contentStore.deleteMedia(id);
  revalidatePath("/admin/fotos");
  revalidatePublic();
}
