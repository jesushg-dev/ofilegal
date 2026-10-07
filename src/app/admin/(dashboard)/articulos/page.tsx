import Link from "next/link";

import { ArticleStatusBadge } from "@/components/article-status-badge";
import { deleteArticleAction } from "@/features/cms/actions";
import { contentStore } from "@/features/cms/json-store";

export default async function ArticlesAdminPage() {
  const articles = await contentStore.listArticles();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-cinzel text-3xl font-black text-slate-100">Artículos</h1>
        <Link
          href="/admin/articulos/nuevo"
          className="rounded-sm border border-navy-gold/50 bg-navy-accent px-4 py-2 font-cinzel text-xs font-bold tracking-widest text-white uppercase"
        >
          Nuevo artículo
        </Link>
      </div>
      <ul className="space-y-3">
        {articles.map((article) => (
          <li
            key={article.id}
            className="flex flex-col gap-3 rounded-sm border border-navy-gold/30 bg-navy-card p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-serif text-base font-bold text-slate-100">
                {article.title}
              </p>
              <p className="mt-1 text-xs text-slate-400">{article.category}</p>
            </div>
            <div className="flex items-center gap-3">
              <ArticleStatusBadge status={article.status} />
              <Link
                href={`/admin/articulos/${article.id}`}
                className="text-xs font-bold text-navy-gold"
              >
                Editar
              </Link>
              <form action={deleteArticleAction}>
                <input type="hidden" name="id" value={article.id} />
                <button type="submit" className="text-xs text-red-300">
                  Eliminar
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
