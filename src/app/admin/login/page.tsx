import { isAdminConfigured } from "@/features/cms/auth";

import { LoginForm } from "./login-form";

export default function AdminLoginPage() {
  const configured = isAdminConfigured();

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-6 rounded-sm border-2 border-navy-gold/40 bg-navy-card p-8 shadow-2xl">
        <div className="space-y-2">
          <p className="font-cinzel text-xs font-bold tracking-[0.25em] text-navy-gold uppercase">
            OFILEGAL
          </p>
          <h1 className="font-cinzel text-2xl font-black text-slate-100">
            Panel de edición
          </h1>
          <p className="text-sm text-slate-300">
            Desde aquí se actualizan fotos, artículos y datos de contacto.
          </p>
        </div>
        {configured ? (
          <LoginForm />
        ) : (
          <p className="rounded-sm border border-navy-gold/30 bg-navy-darker p-4 text-sm text-slate-300">
            Defina <code>ADMIN_PASSWORD</code> en <code>.env.local</code> para
            habilitar el acceso.
          </p>
        )}
      </div>
    </main>
  );
}
