import { PublicChrome } from "@/components/public-chrome";
import { contentStore } from "@/features/cms/json-store";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await contentStore.getSite();

  return <PublicChrome site={site}>{children}</PublicChrome>;
}
