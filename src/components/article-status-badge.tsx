import type { ArticleStatus } from "@/features/cms/types";

export function ArticleStatusBadge({ status }: { status: ArticleStatus }) {
  switch (status) {
    case "published":
      return (
        <span className="rounded-xs bg-navy-accent px-2 py-0.5 text-[0.625rem] text-white">
          Activo
        </span>
      );
    case "coming_soon":
      return (
        <span className="rounded-xs border border-navy-gold/30 bg-navy-darker px-2 py-0.5 text-[0.625rem]">
          Próximamente
        </span>
      );
    case "draft":
      return (
        <span className="rounded-xs border border-slate-500/40 bg-navy-darker px-2 py-0.5 text-[0.625rem] text-slate-400">
          Borrador
        </span>
      );
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}
