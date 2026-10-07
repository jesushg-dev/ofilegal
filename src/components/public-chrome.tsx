import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TopBar } from "@/components/top-bar";
import type { SiteSettings } from "@/features/cms/types";

export function PublicChrome({
  children,
  site,
}: {
  children: React.ReactNode;
  site: SiteSettings;
}) {
  return (
    <>
      <TopBar site={site} />
      <SiteHeader site={site} />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <SiteFooter site={site} />
      <MobileCtaBar site={site} />
    </>
  );
}
