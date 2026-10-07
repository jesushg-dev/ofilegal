import { notFound } from "next/navigation";

import { AdminArticleForm } from "@/components/admin-article-form";
import { contentStore } from "@/features/cms/json-store";

type Props = PageProps<"/admin/articulos/[id]">;

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params;
  const [article, media] = await Promise.all([
    contentStore.getArticleById(id),
    contentStore.listMedia(),
  ]);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="font-cinzel text-3xl font-black text-slate-100">
        Editar artículo
      </h1>
      <AdminArticleForm article={article} media={media} />
    </div>
  );
}
