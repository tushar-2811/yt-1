import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n';

// This is cached at build time for better performance
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate once per day

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Pages with their priorities and change frequencies
const pages = [
  { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: '/terms-of-service', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: '/disclaimer', changeFrequency: 'yearly' as const, priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Generate sitemap entries for each locale and page
  for (const locale of locales) {
    for (const page of pages) {
      const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
      const url = `${SITE_URL}${localePrefix}${page.path}`;
      
      // Generate alternates for hreflang
      const alternates: { languages: Record<string, string> } = {
        languages: {}
      };
      
      for (const altLocale of locales) {
        const altPrefix = altLocale === defaultLocale ? '' : `/${altLocale}`;
        alternates.languages[altLocale] = `${SITE_URL}${altPrefix}${page.path}`;
      }
      // Add x-default pointing to default locale
      alternates.languages['x-default'] = `${SITE_URL}${page.path}`;
      
      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates,
      });
    }
  }
  
  return sitemapEntries;
}
