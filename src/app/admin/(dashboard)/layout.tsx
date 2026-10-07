import Link from "next/link";

import { logoutAction } from "@/features/cms/actions";
import { requireAdmin } from "@/features/cms/auth";

const LINKS = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/articulos", label: "Artículos" },
  { href: "/admin/fotos", label: "Fotos" },
  { href: "/admin/sitio", label: "Sitio" },
] as const;

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-navy-gold/40 bg-navy-darker">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <p className="font-cinzel text-sm font-black tracking-widest text-navy-gold">
            OFILEGAL · Edición
          </p>
          <nav className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-wider text-slate-300 uppercase">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-navy-gold">
                {link.label}
              </Link>
            ))}
            <Link href="/" className="hover:text-navy-gold">
              Ver sitio
            </Link>
            <form action={logoutAction}>
              <button type="submit" className="hover:text-navy-gold">
                Salir
              </button>
            </form>
          </nav>
        </div>
      </header>
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</div>
    </div>
  );
}
