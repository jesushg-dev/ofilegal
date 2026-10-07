import { Award, Bookmark, BookOpen, ChevronRight, ExternalLink, GraduationCap, Handshake, Languages, Lock, Mail, MapPin, Quote, Scale, Share2, Shield, Stamp, University } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ArticleStatusBadge } from "@/components/article-status-badge";
import { LinkedInIcon, TikTokIcon, WhatsAppIcon } from "@/components/brand-icons";
import { ContactForm } from "@/components/contact-form";
import { OwnerName } from "@/components/owner-name";
import { ServiceIcon } from "@/components/service-icon";
import type { Article, SiteSettings } from "@/features/cms/types";
import { LEGAL_SERVICES } from "@/lib/legal-services";
import { whatsappHref } from "@/lib/whatsapp";

const VALUES = [
  {
    icon: Scale,
    title: "Justicia Social",
    text: "Canalizar la abogacía con visión humana, velando por el orden constitucional y los derechos esenciales.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    text: "Atención personalizada y rigurosa en cada asunto encomendado, sin improvisaciones.",
  },
  {
    icon: Shield,
    title: "Lealtad",
    text: "Relaciones abogado-cliente regidas por el estricto secreto profesional y la coherencia ética.",
  },
  {
    icon: BookOpen,
    title: "Estudio Riguroso",
    text: "Fundamentación jurídica en doctrina, jurisprudencia y normativa vigente para decisiones firmes.",
  },
] as const;

export function HomeView({ site, articles }: { site: SiteSettings; articles: Article[] }) {
  const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&hl=es&z=17&output=embed`;
  const mapsLink = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}`;

  return (
    <>
      <section
        id="inicio"
        className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b-2 border-navy-gold/30 bg-gradient-to-b from-navy-darker via-navy-dark to-navy-slate py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
          <div className="h-[92%] w-[95%] rounded-sm border-2 border-navy-gold/40" />
          <div className="absolute h-[88%] w-[92%] rounded-sm border border-navy-amber/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-8 text-left lg:col-span-7">
              <div className="space-y-4">
                <h1 className="font-cinzel text-5xl leading-none font-black tracking-wider text-slate-100 drop-shadow-md sm:text-6xl md:text-7xl">{site.firmName}</h1>
                <div className="border-l-4 border-navy-accent pt-2 pl-4">
                  <p className="font-script text-3xl font-normal tracking-wide text-slate-100 sm:text-4xl">
                    <OwnerName />
                  </p>
                  <p className="mt-1 font-cinzel text-xs font-bold tracking-[0.25em] text-navy-gold uppercase sm:text-sm">{site.professionalTitle}</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300">
                <p className="font-serif text-2xl leading-tight text-navy-gold italic sm:text-3xl">{site.tagline}</p>
                <p className="font-sans text-sm leading-relaxed text-slate-200 sm:text-base">{site.heroIntro}</p>
                <blockquote className="relative rounded-r-sm border-t border-r border-b border-navy-gold/30 border-l-4 border-l-navy-gold bg-navy-darker p-5 text-xs leading-relaxed text-slate-200 italic shadow-xl sm:text-sm">
                  <div className="absolute top-2 right-4 font-serif text-4xl text-navy-gold/30">
                    <Quote className="size-8" />
                  </div>
                  “{site.quote}”
                </blockquote>
              </div>

              <div className="flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center">
                <a
                  href={whatsappHref(site.phoneE164, "Hola Isaí, deseo agendar una consulta jurídica")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-sm border border-navy-gold/60 bg-gradient-to-r from-navy-accent to-blue-700 px-7 py-4 font-cinzel text-xs font-bold tracking-widest text-white uppercase shadow-xl transition-all hover:from-navy-hover hover:to-blue-600">
                  <WhatsAppIcon className="size-5 text-white transition-transform group-hover:scale-110" />
                  <span>Consulta por WhatsApp</span>
                </a>
                <Link
                  href="/#servicios"
                  className="rounded-sm border-2 border-navy-gold/50 bg-navy-slate/80 px-7 py-4 text-center font-cinzel text-xs font-bold tracking-widest text-slate-100 uppercase transition-all hover:border-navy-gold hover:bg-navy-slate">
                  Servicios Legales
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5">
              <div className="group relative w-full max-w-md overflow-hidden rounded-t-[6.25rem] rounded-b-sm border-2 border-navy-gold/50 bg-navy-slate/90 p-5 shadow-2xl">
                <div className="relative h-[28.125rem] w-full overflow-hidden rounded-t-[5rem] rounded-b-sm border-2 border-navy-gold/40 bg-navy-darker shadow-2xl">
                  <Image
                    src={site.portraitUrl}
                    alt={site.portraitAlt}
                    fill
                    className="object-cover object-[center_22%] transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 24rem"
                    priority
                    unoptimized={site.portraitUrl.endsWith(".svg")}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-darker/45 via-transparent to-navy-darker/20" />
                </div>
                <div className="pt-4 text-center">
                  <h3 className="font-cinzel text-xl font-bold tracking-wide text-white">{site.ownerName}</h3>
                  <p className="font-script text-sm text-navy-gold">Abogado & Notario Público</p>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-navy-gold/30 pt-3 font-mono text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3 text-navy-gold" /> {site.locationShort}
                  </span>
                  {site.available ? (
                    <span className="flex items-center gap-1 font-semibold text-emerald-400">
                      <span className="size-2 animate-pulse rounded-full bg-emerald-400" /> Disponible
                    </span>
                  ) : (
                    <span className="text-slate-400">Consulta previa</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b-2 border-navy-gold/30 bg-navy-slate py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="group relative space-y-3 overflow-hidden rounded-sm border border-navy-gold/30 bg-navy-card p-6 shadow-xl transition hover:border-navy-gold">
                <div className="flex size-10 items-center justify-center rounded-sm border border-navy-gold/40 bg-navy-accent/20 text-navy-gold transition-colors group-hover:bg-navy-accent group-hover:text-white">
                  <value.icon className="size-4" />
                </div>
                <h3 className="font-cinzel text-lg font-bold text-slate-100">{value.title}</h3>
                <p className="font-sans text-xs leading-relaxed text-slate-300">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="perfil" className="border-b-2 border-navy-gold/30 bg-gradient-to-b from-navy-slate via-navy-dark to-navy-darker py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-6 rounded-sm border-2 border-navy-gold/40 bg-navy-card/90 p-8 shadow-2xl lg:sticky lg:top-28 lg:col-span-4">
              <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-navy-gold uppercase">Perfil Profesional</span>
              <h2 className="font-cinzel text-3xl leading-tight font-extrabold text-slate-100 sm:text-4xl">{site.ownerName}</h2>
              <p className="font-script text-2xl text-navy-gold">
                <OwnerName />
              </p>
              <div className="h-1 w-20 bg-navy-gold/80" />
              <p className="font-sans text-xs leading-relaxed text-slate-200">{site.profileSummary}</p>
              <p className="rounded-r-sm border-l-2 border-navy-gold bg-navy-darker/60 p-3 pl-3 text-xs leading-relaxed text-slate-300 italic">“{site.profileQuote}”</p>
            </div>

            <div className="space-y-8 lg:col-span-8">
              <div className="relative space-y-4 rounded-sm border-2 border-navy-gold/30 bg-navy-card/90 p-8 shadow-xl">
                <div className="flex items-center gap-3 border-b border-navy-gold/30 pb-3">
                  <University className="size-6 text-navy-gold" />
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">Presentación Institucional</h3>
                </div>
                <p className="font-sans text-sm leading-relaxed text-slate-200">
                  <strong className="font-serif text-base text-navy-gold">{site.firmName}</strong> {site.institutional.replace(`${site.firmName} `, "")}
                </p>
              </div>

              <div className="space-y-6 rounded-sm border-2 border-navy-gold/30 bg-navy-card/90 p-8 shadow-xl">
                <div className="flex items-center gap-3 border-b border-navy-gold/30 pb-3">
                  <GraduationCap className="size-6 text-navy-gold" />
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">Formación Académica & Idiomas</h3>
                </div>
                <div className="space-y-4 font-sans">
                  <div className="flex items-start gap-4 border-b border-navy-gold/20 pb-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-sm border border-navy-gold/40 bg-navy-darker text-navy-gold">
                      <Stamp className="size-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-100">Licenciado en Derecho</h4>
                      <p className="text-xs font-medium text-navy-gold">Universidad Nacional Politécnica (UNP).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-b border-navy-gold/20 pb-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-sm border border-navy-gold/40 bg-navy-darker text-navy-gold">
                      <Award className="size-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-100">Candidato a Máster en Derecho Empresarial Corporativo</h4>
                      <p className="text-xs font-medium text-navy-gold">Universidad Americana (UAM).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-sm border border-navy-gold/40 bg-navy-darker text-navy-gold">
                      <Languages className="size-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-100">Idiomas</h4>
                      <p className="text-xs text-slate-300">Español (Nativo) e Inglés.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-sm border-2 border-navy-gold/30 bg-navy-card/90 p-8 shadow-xl">
                <div className="flex items-center gap-3 border-b border-navy-gold/30 pb-3">
                  <Share2 className="size-6 text-navy-gold" />
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">Divulgación Digital & Redes</h3>
                </div>
                <p className="font-sans text-xs leading-relaxed text-slate-300">Comparto criterios jurídicos, análisis práctico y cultura de prevención legal a través de canales digitales.</p>
                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                  <a
                    href={site.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-sm border border-navy-gold/40 bg-navy-darker p-4 transition hover:border-navy-gold">
                    <TikTokIcon className="size-6 text-slate-200 group-hover:text-navy-gold" />
                    <div>
                      <p className="text-xs font-bold text-slate-100">TikTok Profesional</p>
                      <p className="font-mono text-[0.6875rem] text-navy-gold">{site.tiktokHandle}</p>
                    </div>
                  </a>
                  <a
                    href={site.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-sm border border-navy-gold/40 bg-navy-darker p-4 transition hover:border-navy-gold">
                    <LinkedInIcon className="size-6 text-slate-200 group-hover:text-navy-gold" />
                    <div>
                      <p className="text-xs font-bold text-slate-100">Perfil en LinkedIn</p>
                      <p className="font-mono text-[0.6875rem] text-navy-gold">{site.ownerName}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-b-2 border-navy-gold/30 bg-gradient-to-b from-navy-darker via-navy-dark to-navy-slate py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
            <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-navy-gold uppercase">Áreas de Ejercicio</span>
            <h2 className="font-cinzel text-3xl font-black text-slate-100 sm:text-5xl">Servicios Legales</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-navy-gold" />
            <p className="pt-2 font-sans text-xs text-slate-300 sm:text-sm">
              Asesoría integral y representación legal estructurada para proteger el patrimonio e inversiones de personas físicas y jurídicas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {LEGAL_SERVICES.map((service) => (
              <div key={service.id} className="group flex flex-col justify-between space-y-5 rounded-sm border-2 border-navy-gold/30 bg-navy-card p-7 shadow-2xl transition-all hover:border-navy-gold">
                <div className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-sm border border-navy-gold/50 bg-navy-accent/20 text-navy-gold transition-colors group-hover:bg-navy-accent group-hover:text-white">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">{service.title}</h3>
                  <p className="font-sans text-xs leading-relaxed text-slate-300">{service.description}</p>
                  <ul className="space-y-2 pt-2 font-sans text-xs text-slate-200">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <ChevronRight className="size-2.5 text-navy-gold" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={whatsappHref(site.phoneE164, `Hola Isaí, quisiera consultar sobre ${service.whatsappTopic}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-t border-navy-gold/20 pt-4 font-cinzel text-xs font-bold tracking-wider text-navy-gold uppercase transition-colors hover:text-white">
                  <span>{service.ctaLabel}</span>
                  <WhatsAppIcon className="size-4 text-emerald-400" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publicaciones" className="border-b-2 border-navy-gold/30 bg-gradient-to-b from-navy-slate via-navy-dark to-navy-darker py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl space-y-4">
            <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-navy-gold uppercase">Plataforma Editorial & Criterio Legal</span>
            <h2 className="font-cinzel text-3xl font-black text-slate-100 sm:text-5xl">Publicaciones & Análisis</h2>
            <p className="border-l-4 border-navy-gold py-1 pl-4 font-serif text-sm leading-relaxed text-slate-200 italic sm:text-base">
              Espacio dedicado a la divulgación, comentario de reformas normativas, criterios de opinión legal y reflexiones.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.id} className="flex flex-col justify-between space-y-4 rounded-sm border-2 border-navy-gold/30 bg-navy-card p-7 shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs text-navy-gold">
                    <span className="text-[0.625rem] tracking-widest uppercase">{article.category}</span>
                    <ArticleStatusBadge status={article.status} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-100">{article.title}</h3>
                  <p className="font-sans text-xs leading-relaxed text-slate-300">{article.excerpt}</p>
                </div>
                {article.externalUrl ? (
                  <div className="border-t border-navy-gold/20 pt-4">
                    <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-cinzel text-xs font-bold text-navy-gold hover:text-white">
                      <span>Ver en TikTok ({site.tiktokHandle})</span>
                      <TikTokIcon className="size-3" />
                    </a>
                  </div>
                ) : article.status === "published" ? (
                  <Link href={`/publicaciones/${article.slug}`} className="flex items-center justify-between border-t border-navy-gold/20 pt-4 font-mono text-xs text-navy-gold">
                    Leer artículo
                    <Bookmark className="size-3.5" />
                  </Link>
                ) : (
                  <div className="flex items-center justify-between border-t border-navy-gold/20 pt-4 font-mono text-xs text-slate-400">
                    <span>OFILEGAL Editorial</span>
                    <span className="flex items-center gap-1 text-navy-gold">
                      <Bookmark className="size-3.5" /> Archivo
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-b-2 border-navy-gold/30 bg-gradient-to-b from-navy-darker via-navy-dark to-navy-slate py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-5">
              <div className="space-y-3">
                <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-navy-gold uppercase">Atención Directa</span>
                <h2 className="font-cinzel text-3xl font-extrabold text-slate-100 sm:text-4xl">Contacto Profesional</h2>
                <p className="font-sans text-xs leading-relaxed text-slate-300 sm:text-sm">Agendá una atención presencial en Managua o consulta ordinaria por vías digitales.</p>
              </div>
              <div className="space-y-4 font-sans">
                <a href={`mailto:${site.email}`} className="group flex items-center gap-4 rounded-sm border-2 border-navy-gold/30 bg-navy-card p-5 shadow-md transition hover:border-navy-gold">
                  <div className="flex size-12 items-center justify-center rounded-sm border border-navy-gold/50 bg-navy-accent/20 text-navy-gold transition-colors group-hover:bg-navy-accent group-hover:text-white">
                    <Mail className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-cinzel text-[0.625rem] font-bold tracking-wider text-navy-gold uppercase">Correo Electrónico</p>
                    <p className="text-sm font-bold break-all text-slate-100">{site.email}</p>
                    <p className="text-[0.6875rem] text-slate-400">Correspondencia oficial e institucional</p>
                  </div>
                </a>
                <a
                  href={whatsappHref(site.phoneE164, "Hola Isaí, quisiera realizar una consulta")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-sm border-2 border-navy-gold/30 bg-navy-card p-5 shadow-md transition hover:border-navy-gold">
                  <div className="flex size-12 items-center justify-center rounded-sm border border-emerald-600 bg-emerald-950/80 text-emerald-400 transition-transform group-hover:scale-105">
                    <WhatsAppIcon className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-cinzel text-[0.625rem] font-bold tracking-wider text-emerald-400 uppercase">WhatsApp Directo</p>
                    <p className="text-sm font-bold text-slate-100">{site.phoneDisplay}</p>
                    <p className="text-[0.6875rem] text-slate-400">Atención rápida y confidencial</p>
                  </div>
                </a>
                <div className="space-y-3 rounded-sm border-2 border-navy-gold/30 bg-navy-card p-5 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-sm border border-navy-gold/50 bg-navy-accent/20 text-navy-gold">
                      <MapPin className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-cinzel text-[0.625rem] font-bold tracking-wider text-navy-gold uppercase">Ubicación Profesional</p>
                      <p className="text-sm font-bold text-slate-100">{site.locationFull}</p>
                    </div>
                  </div>
                  <div className="space-y-1 border-t border-navy-gold/20 pt-3 text-xs leading-relaxed text-slate-300">
                    <p>
                      <strong className="text-slate-100">Dirección:</strong> {site.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-7">
              <div className="space-y-6 rounded-sm border-2 border-navy-gold/40 bg-navy-card p-8 shadow-2xl">
                <div className="flex items-center justify-between border-b border-navy-gold/30 pb-4">
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">Enviar Consulta Jurídica</h3>
                  <span className="flex items-center gap-1 font-mono text-[0.6875rem] text-navy-gold">
                    <Lock className="size-3" /> Confidencial
                  </span>
                </div>
                <ContactForm email={site.email} />
              </div>
              <div className="space-y-3 rounded-sm border-2 border-navy-gold/30 bg-navy-card p-4 shadow-xl">
                <div className="flex items-center justify-between px-2 font-sans text-xs text-slate-300">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="size-3 text-navy-gold" /> {site.locationShort}
                  </span>
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-cinzel text-xs font-bold text-navy-gold hover:underline">
                    <span>Mapa interactivo</span>
                    <ExternalLink className="size-2.5" />
                  </a>
                </div>
                <div className="relative h-64 w-full overflow-hidden rounded-sm border border-navy-gold/20 bg-black">
                  <iframe
                    title="Ubicación Exacta OFILEGAL en Google Maps"
                    src={mapsSrc}
                    className="h-full w-full border-0 opacity-90 transition-opacity duration-300 hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
