import Link from "next/link";

import { contentStore } from "@/features/cms/json-store";

export default async function AdminHomePage() {
  const [articles, media] = await Promise.all([
    contentStore.listArticles(),
    contentStore.listMedia(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-cinzel text-3xl font-black text-slate-100">
          Cómo editar la página
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Este panel es la base para publicar sin tocar código. Los artículos
          viven en `content/articles.json` y las fotos en `public/uploads`. Más
          adelante se puede cambiar el almacén a una base de datos o Blob
          sin reescribir la web pública.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/admin/articulos"
          className="rounded-sm border border-navy-gold/30 bg-navy-card p-6 hover:border-navy-gold"
        >
          <p className="font-cinzel text-lg font-bold text-slate-100">Artículos</p>
          <p className="mt-2 text-sm text-slate-400">{articles.length} publicados o en borrador</p>
        </Link>
        <Link
          href="/admin/fotos"
          className="rounded-sm border border-navy-gold/30 bg-navy-card p-6 hover:border-navy-gold"
        >
          <p className="font-cinzel text-lg font-bold text-slate-100">Fotos</p>
          <p className="mt-2 text-sm text-slate-400">{media.length} archivos</p>
        </Link>
        <Link
          href="/admin/sitio"
          className="rounded-sm border border-navy-gold/30 bg-navy-card p-6 hover:border-navy-gold"
        >
          <p className="font-cinzel text-lg font-bold text-slate-100">Sitio</p>
          <p className="mt-2 text-sm text-slate-400">Foto de perfil y contacto</p>
        </Link>
      </div>
    </div>
  );
}
