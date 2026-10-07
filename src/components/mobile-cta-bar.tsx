import { WhatsAppIcon } from "@/components/brand-icons";
import type { SiteSettings } from "@/features/cms/types";
import { whatsappHref } from "@/lib/whatsapp";

export function MobileCtaBar({ site }: { site: SiteSettings }) {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-30 flex items-center justify-between border-t-2 border-navy-gold/40 bg-navy-slate/95 p-3 px-4 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2">
        <span className="size-2.5 animate-ping rounded-full bg-emerald-400" />
        <div>
          <p className="font-cinzel text-xs font-black text-white">{site.firmName}</p>
          <p className="text-[0.625rem] font-medium text-navy-gold">
            WhatsApp Disponible
          </p>
        </div>
      </div>
      <a
        href={whatsappHref(
          site.phoneE164,
          "Hola Isaí, quisiera realizar una consulta jurídica",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-sm border border-navy-gold/40 bg-navy-accent px-4 py-2 font-cinzel text-xs font-bold tracking-wider text-white uppercase shadow-lg hover:bg-navy-hover"
      >
        <WhatsAppIcon className="size-3.5" />
        <span>Consultar</span>
      </a>
    </div>
  );
}
