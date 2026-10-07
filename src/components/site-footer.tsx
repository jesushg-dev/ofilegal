import { Scale } from "lucide-react";
import Link from "next/link";

import { LinkedInIcon, TikTokIcon, WhatsAppIcon } from "@/components/brand-icons";
import { OwnerName } from "@/components/owner-name";
import type { SiteSettings } from "@/features/cms/types";
import { whatsappHref } from "@/lib/whatsapp";

export function SiteFooter({ site }: { site: SiteSettings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-navy-gold/40 bg-navy-darker py-12 font-sans text-xs text-slate-400">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="space-y-2 md:col-span-5">
            <div className="flex items-center gap-2">
              <Scale className="size-5 text-navy-gold" />
              <span className="block font-cinzel text-2xl font-black tracking-widest text-slate-100">
                {site.firmName}
              </span>
            </div>
            <p className="font-script text-base text-navy-gold">
              <OwnerName /> — {site.professionalTitle}
            </p>
            <p className="pt-1 text-xs leading-relaxed text-slate-400">
              Managua, República de Nicaragua.
            </p>
          </div>

          <div className="space-y-2 md:col-span-3">
            <p className="font-cinzel text-xs font-bold tracking-widest text-slate-200 uppercase">
              Navegación
            </p>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <Link href="/#inicio" className="transition hover:text-navy-gold">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#perfil" className="transition hover:text-navy-gold">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="transition hover:text-navy-gold">
                  Servicios Legales
                </Link>
              </li>
              <li>
                <Link href="/#publicaciones" className="transition hover:text-navy-gold">
                  Publicaciones & Criterio
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="transition hover:text-navy-gold">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-4">
            <p className="font-cinzel text-xs font-bold tracking-widest text-slate-200 uppercase">
              Canales Profesionales
            </p>
            <div className="flex space-x-5 text-slate-300">
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-navy-gold"
              >
                <LinkedInIcon className="size-5" />
              </a>
              <a
                href={site.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-navy-gold"
              >
                <TikTokIcon className="size-5" />
              </a>
              <a
                href={whatsappHref(site.phoneE164, "")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-400"
              >
                <WhatsAppIcon className="size-5" />
              </a>
            </div>
            <p className="pt-1 text-[0.6875rem] leading-normal text-slate-400">
              {site.locationShort} & Consultas Digitales.
            </p>
          </div>
        </div>

        <div className="space-y-2 border-t border-navy-gold/20 pt-6 text-[0.6875rem] leading-relaxed text-slate-400">
          <p>
            <strong>Aviso Legal:</strong> La información publicada en este sitio
            web tiene carácter estrictamente informativo, divulgativo y
            orientativo. No constituye por sí misma asesoría jurídica formal ni
            establece automáticamente una relación abogado-cliente.
          </p>
          <div className="flex flex-col items-center justify-between gap-2 pt-2 font-mono text-[0.625rem] text-slate-400 sm:flex-row">
            <p>
              © {year} {site.firmName} — {site.ownerName}. Todos los derechos
              reservados.
            </p>
            <p>Firma Profesional {site.firmName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
