"use client";

import { Menu, Scale, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { LinkedInIcon, TikTokIcon, WhatsAppIcon } from "@/components/brand-icons";
import { OwnerName } from "@/components/owner-name";
import type { SiteSettings } from "@/features/cms/types";
import { whatsappHref } from "@/lib/whatsapp";

const NAV = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#perfil", label: "Sobre Mí" },
  { href: "/#servicios", label: "Servicios Legales" },
  { href: "/#publicaciones", label: "Publicaciones" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export function SiteHeader({ site }: { site: SiteSettings }) {
  const [open, setOpen] = useState(false);
  const consultHref = whatsappHref(
    site.phoneE164,
    "Hola Isaí, quisiera realizar una consulta jurídica",
  );

  return (
    <header className="sticky top-0 z-40 border-b-2 border-navy-gold/40 bg-navy-darker/95 shadow-2xl backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/#inicio" className="group flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <Scale className="size-5 text-navy-gold transition-transform group-hover:rotate-6" />
            <span className="font-cinzel text-2xl font-black tracking-widest text-slate-100 transition-colors group-hover:text-navy-gold sm:text-3xl">
              {site.firmName}
            </span>
          </div>
          <span className="-mt-1 pl-7 font-script text-xs font-normal tracking-wide text-navy-gold sm:text-sm">
            <OwnerName />
          </span>
        </Link>

        <nav className="hidden items-center space-x-8 font-cinzel text-xs font-bold tracking-widest text-slate-300 uppercase md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-1 transition-colors hover:text-navy-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center space-x-5 lg:flex">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition-colors hover:text-navy-gold"
            title="LinkedIn"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href={site.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition-colors hover:text-navy-gold"
            title="TikTok"
          >
            <TikTokIcon className="size-5" />
          </a>
          <a
            href={consultHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-navy-gold/50 bg-gradient-to-r from-navy-accent to-blue-700 px-5 py-2.5 text-xs font-bold tracking-wider text-slate-100 uppercase shadow-lg transition-all hover:from-navy-hover hover:to-blue-600"
          >
            <WhatsAppIcon className="size-3.5 text-white" />
            <span>Consulta Directa</span>
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-slate-300 hover:text-navy-gold focus:outline-none md:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="space-y-4 border-b-2 border-navy-gold/40 bg-navy-slate px-6 py-6 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block font-cinzel text-sm font-bold tracking-wider text-slate-200 uppercase hover:text-navy-gold"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between border-t border-navy-gold/30 pt-4">
            <div className="flex space-x-5 text-slate-300">
              <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="size-5 hover:text-navy-gold" />
              </a>
              <a href={site.tiktokUrl} target="_blank" rel="noopener noreferrer">
                <TikTokIcon className="size-5 hover:text-navy-gold" />
              </a>
            </div>
            <a
              href={consultHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm bg-navy-accent px-4 py-2 text-xs font-bold tracking-wider text-white uppercase hover:bg-navy-hover"
            >
              <WhatsAppIcon className="size-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
