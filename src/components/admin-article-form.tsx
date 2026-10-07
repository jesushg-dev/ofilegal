import { saveArticleAction } from "@/features/cms/actions";
import type { Article, MediaAsset } from "@/features/cms/types";

const fieldClass =
  "w-full rounded-sm border border-navy-gold/40 bg-navy-darker px-4 py-3 text-sm text-slate-100 focus:border-navy-gold focus:outline-none";

export function AdminArticleForm({
  article,
  media,
}: {
  article?: Article;
  media: MediaAsset[];
}) {
  return (
    <form action={saveArticleAction} className="space-y-4">
      {article ? <input type="hidden" name="id" value={article.id} /> : null}
      <Field label="Título" htmlFor="title">
        <input
          id="title"
          name="title"
          required
          defaultValue={article?.title}
          className={fieldClass}
        />
      </Field>
      <Field label="Slug (opcional)" htmlFor="slug">
        <input
          id="slug"
          name="slug"
          defaultValue={article?.slug}
          className={fieldClass}
        />
      </Field>
      <Field label="Categoría" htmlFor="category">
        <input
          id="category"
          name="category"
          required
          defaultValue={article?.category}
          className={fieldClass}
        />
      </Field>
      <Field label="Resumen" htmlFor="excerpt">
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={3}
          defaultValue={article?.excerpt}
          className={fieldClass}
        />
      </Field>
      <Field label="Cuerpo del artículo" htmlFor="body">
        <textarea
          id="body"
          name="body"
          required
          rows={10}
          defaultValue={article?.body}
          className={fieldClass}
        />
      </Field>
      <Field label="Estado" htmlFor="status">
        <select
          id="status"
          name="status"
          defaultValue={article?.status ?? "draft"}
          className={fieldClass}
        >
          <option value="draft">Borrador</option>
          <option value="coming_soon">Próximamente</option>
          <option value="published">Publicado</option>
        </select>
      </Field>
      <Field label="Imagen de portada" htmlFor="coverImageUrl">
        <select
          id="coverImageUrl"
          name="coverImageUrl"
          defaultValue={article?.coverImageUrl ?? ""}
          className={fieldClass}
        >
          <option value="">Sin imagen</option>
          {media.map((asset) => (
            <option key={asset.id} value={asset.url}>
              {asset.alt}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Enlace externo (opcional)" htmlFor="externalUrl">
        <input
          id="externalUrl"
          name="externalUrl"
          type="url"
          defaultValue={article?.externalUrl ?? ""}
          className={fieldClass}
        />
      </Field>
      <button
        type="submit"
        className="rounded-sm border border-navy-gold/60 bg-navy-accent px-6 py-3 font-cinzel text-xs font-bold tracking-widest text-white uppercase"
      >
        Guardar artículo
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={htmlFor} className="text-xs font-bold text-slate-300">
        {label}
      </label>
      {children}
    </div>
  );
}
