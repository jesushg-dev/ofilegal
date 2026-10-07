import { z } from "zod";

import { ARTICLE_STATUSES } from "@/features/cms/types";

export const articleFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(4).max(160),
  slug: z.string().trim().max(80).optional(),
  excerpt: z.string().trim().min(12).max(400),
  body: z.string().trim().min(20).max(20000),
  category: z.string().trim().min(2).max(80),
  coverImageUrl: z.string().trim().max(400).nullable(),
  status: z.enum(ARTICLE_STATUSES),
  externalUrl: z.string().trim().url().optional().or(z.literal("")),
});

export const siteFormSchema = z.object({
  portraitUrl: z.string().trim().min(1).max(400),
  portraitAlt: z.string().trim().min(4).max(160),
  available: z.boolean(),
  phoneDisplay: z.string().trim().min(8).max(40),
  phoneE164: z.string().regex(/^\d{8,15}$/),
  email: z.string().trim().email(),
  address: z.string().trim().min(12).max(400),
});

export const mediaAltSchema = z.object({
  alt: z.string().trim().min(4).max(160),
});

export type ArticleFormInput = z.infer<typeof articleFormSchema>;
export type SiteFormInput = z.infer<typeof siteFormSchema>;
