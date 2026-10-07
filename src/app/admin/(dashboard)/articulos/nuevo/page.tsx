import { AdminArticleForm } from "@/components/admin-article-form";
import { contentStore } from "@/features/cms/json-store";

export default async function NewArticlePage() {
  const media = await contentStore.listMedia();

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="font-cinzel text-3xl font-black text-slate-100">
        Nuevo artículo
      </h1>
      <AdminArticleForm media={media} />
    </div>
  );
}
