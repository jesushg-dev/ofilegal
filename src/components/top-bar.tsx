import { Mail, Phone } from "lucide-react";

import type { SiteSettings } from "@/features/cms/types";

export function TopBar({ site }: { site: SiteSettings }) {
  return (
    <div className="relative z-50 border-b border-navy-gold/30 bg-navy-darker px-4 py-2.5 text-xs text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block size-2.5 animate-pulse rounded-full bg-navy-gold shadow-[0_0_0.5rem_#D4AF37]" />
          <span className="font-cinzel text-[0.6875rem] font-semibold tracking-widest text-navy-gold uppercase">
            {site.firmName}
          </span>
        </div>
        <div className="flex items-center gap-5 font-sans text-slate-300">
          <a
            href={`tel:+${site.phoneE164}`}
            className="flex items-center gap-1.5 transition hover:text-navy-gold"
          >
            <Phone className="size-2.5 text-navy-gold" />
            <span className="font-medium">{site.phoneDisplay}</span>
          </a>
          <span className="hidden text-navy-amber/40 sm:inline">|</span>
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-1.5 transition hover:text-navy-gold sm:flex"
          >
            <Mail className="size-2.5 text-navy-gold" />
            <span className="font-medium">{site.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
