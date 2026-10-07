import Image from "next/image";

import { deleteMediaAction, uploadMediaAction } from "@/features/cms/actions";
import { contentStore } from "@/features/cms/json-store";

export default async function PhotosAdminPage() {
  const media = await contentStore.listMedia();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-cinzel text-3xl font-black text-slate-100">Fotos</h1>
        <p className="mt-2 text-sm text-slate-300">
          Suba JPEG, PNG o WebP (máximo 5 MB). Luego puede usarla como retrato o
          portada de un artículo.
        </p>
      </div>
      <form
        action={uploadMediaAction}
        className="space-y-4 rounded-sm border border-navy-gold/30 bg-navy-card p-6"
      >
        <div className="space-y-1">
          <label htmlFor="file" className="text-xs font-bold text-slate-300">
            Archivo
          </label>
          <input
            id="file"
            name="file"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            required
            className="block w-full text-sm text-slate-200"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="alt" className="text-xs font-bold text-slate-300">
            Texto alternativo
          </label>
          <input
            id="alt"
            name="alt"
            required
            minLength={4}
            placeholder="Descripción de la foto"
            className="w-full rounded-sm border border-navy-gold/40 bg-navy-darker px-4 py-3 text-sm text-slate-100 focus:border-navy-gold focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-sm border border-navy-gold/60 bg-navy-accent px-6 py-3 font-cinzel text-xs font-bold tracking-widest text-white uppercase"
        >
          Subir foto
        </button>
      </form>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((asset) => (
          <li
            key={asset.id}
            className="overflow-hidden rounded-sm border border-navy-gold/30 bg-navy-card"
          >
            <div className="relative h-48">
              <Image
                src={asset.url}
                alt={asset.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 20rem"
              />
            </div>
            <div className="space-y-3 p-4">
              <p className="text-xs text-slate-300">{asset.alt}</p>
              <p className="font-mono text-[0.625rem] break-all text-slate-500">
                {asset.url}
              </p>
              <form action={deleteMediaAction}>
                <input type="hidden" name="id" value={asset.id} />
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
