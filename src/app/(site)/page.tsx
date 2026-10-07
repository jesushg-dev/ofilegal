import { HomeView } from "@/components/home-view";
import { contentStore } from "@/features/cms/json-store";
import { isListedOnSite } from "@/features/cms/public-articles";

export default async function HomePage() {
  const [site, articles] = await Promise.all([
    contentStore.getSite(),
    contentStore.listArticles(),
  ]);

  return (
    <HomeView
      site={site}
      articles={articles.filter(isListedOnSite)}
    />
  );
}
