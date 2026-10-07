import { updateSiteAction } from "@/features/cms/actions";
import { contentStore } from "@/features/cms/json-store";

export default async function SiteAdminPage() {
  const [site, media] = await Promise.all([
    contentStore.getSite(),
    contentStore.listMedia(),
  ]);

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="font-cinzel text-3xl font-black text-slate-100">
        Datos del sitio
      </h1>
      <form action={updateSiteAction} className="space-y-4">
        <Field label="Foto de perfil" htmlFor="portraitUrl">
          <select
            id="portraitUrl"
            name="portraitUrl"
            defaultValue={site.portraitUrl}
            className={fieldClass}
          >
            <option value="/portrait.jpg">Retrato oficial</option>
            <option value="/portrait-placeholder.svg">Marcador de posición</option>
            {media.map((asset) => (
              <option key={asset.id} value={asset.url}>
                {asset.alt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Texto alternativo de la foto" htmlFor="portraitAlt">
          <input
            id="portraitAlt"
            name="portraitAlt"
            required
            defaultValue={site.portraitAlt}
            className={fieldClass}
          />
        </Field>
        <label className="flex items-center gap-2 text-sm text-slate-200">
          <input
            type="checkbox"
            name="available"
            defaultChecked={site.available}
          />
          Mostrar estado Disponible
        </label>
        <Field label="Teléfono (visible)" htmlFor="phoneDisplay">
          <input
            id="phoneDisplay"
            name="phoneDisplay"
            required
            defaultValue={site.phoneDisplay}
            className={fieldClass}
          />
        </Field>
        <Field label="Teléfono WhatsApp (solo dígitos)" htmlFor="phoneE164">
          <input
            id="phoneE164"
            name="phoneE164"
            required
            defaultValue={site.phoneE164}
            className={fieldClass}
          />
        </Field>
        <Field label="Correo" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={site.email}
            className={fieldClass}
          />
        </Field>
        <Field label="Dirección" htmlFor="address">
          <textarea
            id="address"
            name="address"
            required
            rows={3}
            defaultValue={site.address}
            className={fieldClass}
          />
        </Field>
        <button
          type="submit"
          className="rounded-sm border border-navy-gold/60 bg-navy-accent px-6 py-3 font-cinzel text-xs font-bold tracking-widest text-white uppercase"
        >
          Guardar sitio
        </button>
      </form>
    </div>
  );
}

const fieldClass =
  "w-full rounded-sm border border-navy-gold/40 bg-navy-darker px-4 py-3 text-sm text-slate-100 focus:border-navy-gold focus:outline-none";

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
