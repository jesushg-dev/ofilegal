import type { Metadata } from "next";
import Link from "next/link";

import { ArticleStatusBadge } from "@/components/article-status-badge";
import { contentStore } from "@/features/cms/json-store";
import { isListedOnSite } from "@/features/cms/public-articles";

export const metadata: Metadata = {
  title: "Publicaciones",
};

export default async function PublicationsPage() {
  const articles = (await contentStore.listArticles()).filter(isListedOnSite);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl space-y-4">
        <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-navy-gold uppercase">
          Plataforma Editorial
        </span>
        <h1 className="font-cinzel text-3xl font-black text-slate-100 sm:text-5xl">
          Publicaciones & Análisis
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col justify-between space-y-4 rounded-sm border-2 border-navy-gold/30 bg-navy-card p-7 shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-navy-gold">
                <span className="text-[0.625rem] tracking-widest uppercase">
                  {article.category}
                </span>
                <ArticleStatusBadge status={article.status} />
              </div>
              <h2 className="font-serif text-lg font-bold text-slate-100">
                {article.title}
              </h2>
              <p className="text-xs leading-relaxed text-slate-300">
                {article.excerpt}
              </p>
            </div>
            {article.status === "published" ? (
              <Link
                href={`/publicaciones/${article.slug}`}
                className="border-t border-navy-gold/20 pt-4 font-cinzel text-xs font-bold text-navy-gold"
              >
                Leer artículo
              </Link>
            ) : (
              <p className="border-t border-navy-gold/20 pt-4 font-mono text-xs text-slate-400">
                Próximamente
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
