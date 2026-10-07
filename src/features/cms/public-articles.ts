import type { Article } from "@/features/cms/types";

export function isListedOnSite(article: Article): boolean {
  return article.status === "published" || article.status === "coming_soon";
}

export function isReadableArticle(article: Article): boolean {
  return article.status === "published";
}
