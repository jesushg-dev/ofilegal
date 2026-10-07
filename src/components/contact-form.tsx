"use client";

import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { LEGAL_SERVICES } from "@/lib/legal-services";

const OPTIONS = [
  ...LEGAL_SERVICES.map((service) => service.whatsappTopic),
  "Consulta General / Asunto Legal",
];

export function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(OPTIONS[0] ?? "");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Consulta Jurídica OFILEGAL: ${service} - ${name}`;
    const body = `Estimado Isaí Alexander Zeledón,\n\nMi nombre es ${name}.\nTeléfono/WhatsApp: ${phone}\nMotivo de Consulta: ${service}\n\nDetalle de la consulta:\n${message}\n\nSaludos cordiales,\n${name}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 font-sans">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="form-name" className="text-xs font-bold text-slate-300">
            Nombre Completo *
          </label>
          <input
            id="form-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            required
            placeholder="Su nombre completo"
            className="w-full rounded-sm border border-navy-gold/40 bg-navy-darker px-4 py-3 text-xs text-slate-100 transition focus:border-navy-gold focus:outline-none"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="form-phone" className="text-xs font-bold text-slate-300">
            Teléfono / WhatsApp *
          </label>
          <input
            id="form-phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            required
            placeholder="+505 0000 0000"
            className="w-full rounded-sm border border-navy-gold/40 bg-navy-darker px-4 py-3 text-xs text-slate-100 transition focus:border-navy-gold focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="form-service" className="text-xs font-bold text-slate-300">
          Motivo de la Consulta *
        </label>
        <select
          id="form-service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          className="w-full rounded-sm border border-navy-gold/40 bg-navy-darker px-4 py-3 text-xs text-slate-200 transition focus:border-navy-gold focus:outline-none"
        >
          {OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="form-message" className="text-xs font-bold text-slate-300">
          Detalle Breve de la Consulta *
        </label>
        <textarea
          id="form-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          required
          placeholder="Describa brevemente los hechos o requerimiento legal..."
          className="w-full rounded-sm border border-navy-gold/40 bg-navy-darker px-4 py-3 text-xs text-slate-100 transition focus:border-navy-gold focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-sm border border-navy-gold/60 bg-gradient-to-r from-navy-accent to-blue-700 py-4 font-cinzel text-xs font-bold tracking-widest text-white uppercase shadow-xl transition hover:from-navy-hover hover:to-blue-600"
      >
        <Send className="size-3.5" />
        <span>Enviar a {email}</span>
      </button>
    </form>
  );
}
