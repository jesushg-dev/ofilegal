"use client";

import { useActionState } from "react";

import { loginAction } from "@/features/cms/actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="password" className="text-xs font-bold text-slate-300">
          Clave de administración
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full rounded-sm border border-navy-gold/40 bg-navy-darker px-4 py-3 text-sm text-slate-100 focus:border-navy-gold focus:outline-none"
        />
      </div>
      {state?.error ? (
        <p className="text-sm text-red-300">{state.error}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-sm border border-navy-gold/60 bg-navy-accent py-3 font-cinzel text-xs font-bold tracking-widest text-white uppercase disabled:opacity-60"
      >
        {pending ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
