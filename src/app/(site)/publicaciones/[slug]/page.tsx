import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleStatusBadge } from "@/components/article-status-badge";
import { contentStore } from "@/features/cms/json-store";
import { isListedOnSite, isReadableArticle } from "@/features/cms/public-articles";

type Props = PageProps<"/publicaciones/[slug]">;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await contentStore.getArticleBySlug(slug);
  if (!article || !isListedOnSite(article)) {
    return { title: "Publicación" };
  }
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await contentStore.getArticleBySlug(slug);
  if (!article || !isListedOnSite(article)) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#publicaciones"
        className="font-cinzel text-xs font-bold tracking-widest text-navy-gold uppercase"
      >
        ← Publicaciones
      </Link>
      <div className="mt-6 flex items-center gap-3 font-mono text-xs text-navy-gold">
        <span className="tracking-widest uppercase">{article.category}</span>
        <ArticleStatusBadge status={article.status} />
      </div>
      <h1 className="mt-4 font-cinzel text-3xl font-black text-slate-100 sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-4 font-serif text-lg text-slate-300 italic">
        {article.excerpt}
      </p>
      {article.coverImageUrl ? (
        <div className="relative mt-8 h-72 overflow-hidden rounded-sm border border-navy-gold/30">
          <Image
            src={article.coverImageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 48rem"
          />
        </div>
      ) : null}
      {isReadableArticle(article) ? (
        <div className="mt-8 space-y-4 text-sm leading-relaxed whitespace-pre-wrap text-slate-200">
          {article.body}
        </div>
      ) : (
        <p className="mt-8 rounded-sm border border-navy-gold/30 bg-navy-card p-6 text-sm text-slate-300">
          Este análisis se publicará próximamente.
        </p>
      )}
    </article>
  );
}
