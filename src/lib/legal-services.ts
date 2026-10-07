import type { LegalService } from "@/features/cms/types";

export const LEGAL_SERVICES: readonly LegalService[] = [
  {
    id: "notaria",
    icon: "stamp",
    title: "Notaría",
    description:
      "Fe pública notarial, otorgamiento de escrituras y formalización de actos o negocios jurídicos con rigor legal.",
    items: [
      "Notaría Corporativa",
      "Escrituras de Compraventa y Donaciones",
      "Poderes Generales, Especiales y Judiciales",
      "Auténticas, Certificaciones y Actas Notariales",
    ],
    ctaLabel: "Consultar Notaría",
    whatsappTopic: "Servicios de Notaría",
  },
  {
    id: "civil",
    icon: "contract",
    title: "Civil y Contratos",
    description:
      "Diseño, negociación y ejecución contractual civil y patrimonial para la protección de activos.",
    items: [
      "Elaboración y revisión de contratos privados",
      "Incumplimientos e interpretación contractual",
      "Cobro y reclamo de obligaciones",
      "Inmobiliario y sucesiones hereditarias",
    ],
    ctaLabel: "Consultar Contratos",
    whatsappTopic: "Civil y Contratos",
  },
  {
    id: "negocios",
    icon: "briefcase",
    title: "Asesoría para Negocios",
    description:
      "Estructuración corporativa y acompañamiento legal constante a emprendimientos y sociedades.",
    items: [
      "Constitución e incorporación comercial",
      "Permisos regulatorios y habilitación",
      "Inversiones Extranjeras & Asesoría corporativa",
      "Gestión integral de riesgos comerciales",
    ],
    ctaLabel: "Consultar Negocios",
    whatsappTopic: "Asesoría para Negocios",
  },
  {
    id: "laboral",
    icon: "labor",
    title: "Asesoría Laboral",
    description:
      "Prevención de contingencias laborales y orientación normativa para gestión de talento humano.",
    items: [
      "Consejería al departamento de Gestión Humana",
      "Dictámenes legales y reglamentos internos",
      "Licencias y relaciones individuales o colectivas",
      "Seguridad Social e inspecciones",
    ],
    ctaLabel: "Consultar Laboral",
    whatsappTopic: "Asesoría Laboral",
  },
  {
    id: "osfl",
    icon: "ngo",
    title: "Asesoría para OSFL",
    description:
      "Atención especializada a Organismos Sin Fines de Lucro, asociaciones y fundaciones.",
    items: [
      "Constitución, formalización y gobierno institucional",
      "Actualización y gestión registral",
      "Cumplimiento regulatorio y prevención LA/FT/FP",
      "Disolución y liquidación",
    ],
    ctaLabel: "Consultar OSFL",
    whatsappTopic: "Asesoría para OSFL",
  },
  {
    id: "litigios",
    icon: "gavel",
    title: "Disputas & Litigios",
    description:
      "Estrategia procesal, negociación extrajudicial y representación en sede judicial o administrativa.",
    items: [
      "Litigios civiles, penales y laborales",
      "Mediación y conciliación previa",
      "Recursos e impugnaciones administrativas",
    ],
    ctaLabel: "Consultar Litigios",
    whatsappTopic: "Resolución de Disputas y Litigios",
  },
];
