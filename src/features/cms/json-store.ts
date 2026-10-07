import "server-only";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import type {
  Article,
  ContentStore,
  MediaAsset,
  SiteSettings,
} from "@/features/cms/types";
import { ARTICLE_STATUSES } from "@/features/cms/types";

const CONTENT_DIR = path.join(process.cwd(), "content");
const SITE_PATH = path.join(CONTENT_DIR, "site.json");
const ARTICLES_PATH = path.join(CONTENT_DIR, "articles.json");
const MEDIA_PATH = path.join(CONTENT_DIR, "media.json");

async function readJson<T>(filePath: string): Promise<T> {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

async function writeJson(filePath: string, data: unknown): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function isArticleStatus(value: unknown): value is Article["status"] {
  return (
    typeof value === "string" &&
    (ARTICLE_STATUSES as readonly string[]).includes(value)
  );
}

function parseArticle(value: unknown): Article {
  if (typeof value !== "object" || value === null) {
    throw new Error("Artículo inválido");
  }

  const record = value as Record<string, unknown>;
  if (
    typeof record.id !== "string" ||
    typeof record.slug !== "string" ||
    typeof record.title !== "string" ||
    typeof record.excerpt !== "string" ||
    typeof record.body !== "string" ||
    typeof record.category !== "string" ||
    !isArticleStatus(record.status) ||
    typeof record.updatedAt !== "string"
  ) {
    throw new Error("Artículo incompleto");
  }

  const cover = record.coverImageUrl;
  const publishedAt = record.publishedAt;
  const externalUrl = record.externalUrl;

  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    excerpt: record.excerpt,
    body: record.body,
    category: record.category,
    coverImageUrl: typeof cover === "string" ? cover : null,
    status: record.status,
    externalUrl: typeof externalUrl === "string" ? externalUrl : undefined,
    publishedAt: typeof publishedAt === "string" ? publishedAt : null,
    updatedAt: record.updatedAt,
  };
}

export const jsonContentStore: ContentStore = {
  async getSite() {
    return readJson<SiteSettings>(SITE_PATH);
  },

  async updateSite(patch) {
    const current = await readJson<SiteSettings>(SITE_PATH);
    const next = { ...current, ...patch };
    await writeJson(SITE_PATH, next);
    return next;
  },

  async listArticles() {
    const items = await readJson<unknown[]>(ARTICLES_PATH);
    return items.map(parseArticle);
  },

  async getArticleById(id) {
    const items = await this.listArticles();
    return items.find((item) => item.id === id) ?? null;
  },

  async getArticleBySlug(slug) {
    const items = await this.listArticles();
    return items.find((item) => item.slug === slug) ?? null;
  },

  async saveArticle(article) {
    const items = await this.listArticles();
    const index = items.findIndex((item) => item.id === article.id);
    const next =
      index === -1
        ? [...items, article]
        : items.map((item, i) => (i === index ? article : item));
    await writeJson(ARTICLES_PATH, next);
    return article;
  },

  async deleteArticle(id) {
    const items = await this.listArticles();
    await writeJson(
      ARTICLES_PATH,
      items.filter((item) => item.id !== id),
    );
  },

  async listMedia() {
    return readJson<MediaAsset[]>(MEDIA_PATH);
  },

  async saveMedia(asset) {
    const items = await this.listMedia();
    await writeJson(MEDIA_PATH, [asset, ...items]);
    return asset;
  },

  async deleteMedia(id) {
    const items = await this.listMedia();
    await writeJson(
      MEDIA_PATH,
      items.filter((item) => item.id !== id),
    );
  },
};

export const contentStore: ContentStore = jsonContentStore;
