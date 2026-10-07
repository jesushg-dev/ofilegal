export const ARTICLE_STATUSES = [
  "draft",
  "coming_soon",
  "published",
] as const;

export type ArticleStatus = (typeof ARTICLE_STATUSES)[number];

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  coverImageUrl: string | null;
  status: ArticleStatus;
  externalUrl?: string;
  publishedAt: string | null;
  updatedAt: string;
};

export type MediaAsset = {
  id: string;
  filename: string;
  url: string;
  alt: string;
  createdAt: string;
};

export type SiteSettings = {
  firmName: string;
  ownerName: string;
  professionalTitle: string;
  tagline: string;
  heroIntro: string;
  quote: string;
  profileSummary: string;
  profileQuote: string;
  institutional: string;
  portraitUrl: string;
  portraitAlt: string;
  available: boolean;
  phoneDisplay: string;
  phoneE164: string;
  email: string;
  locationShort: string;
  locationFull: string;
  address: string;
  mapsQuery: string;
  linkedinUrl: string;
  tiktokUrl: string;
  tiktokHandle: string;
  seoDescription: string;
};

export type LegalService = {
  id: string;
  icon: ServiceIconName;
  title: string;
  description: string;
  items: string[];
  ctaLabel: string;
  whatsappTopic: string;
};

export type ServiceIconName =
  | "stamp"
  | "contract"
  | "briefcase"
  | "labor"
  | "ngo"
  | "gavel";

export type ContentStore = {
  getSite(): Promise<SiteSettings>;
  updateSite(patch: Partial<SiteSettings>): Promise<SiteSettings>;
  listArticles(): Promise<Article[]>;
  getArticleById(id: string): Promise<Article | null>;
  getArticleBySlug(slug: string): Promise<Article | null>;
  saveArticle(article: Article): Promise<Article>;
  deleteArticle(id: string): Promise<void>;
  listMedia(): Promise<MediaAsset[]>;
  saveMedia(asset: MediaAsset): Promise<MediaAsset>;
  deleteMedia(id: string): Promise<void>;
};
