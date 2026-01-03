import { defaultLocale, locales, type Locale } from '@/i18n';

// 🔥 CHANGE THIS URL WHEN DEPLOYING TO PRODUCTION
// For localhost: 'http://localhost:3000'
// For production: 'https://yourdomain.com'
const FALLBACK_SITE_URL = 'http://localhost:3000';

export function getSiteUrl(): string {
  const envValue = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || FALLBACK_SITE_URL;
  const trimmed = envValue.trim();
  return trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
}

function normalizePath(path?: string): string {
  if (!path || path === '/' || path === './') {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
}

function buildLocaleUrl(locale: Locale, normalizedPath: string, siteUrl: string): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return normalizedPath ? `${siteUrl}${prefix}${normalizedPath}` : `${siteUrl}${prefix}`;
}

export function buildLocalizedAlternates(locale: Locale, path?: string) {
  const normalizedPath = normalizePath(path);
  const siteUrl = getSiteUrl();
  const canonical = buildLocaleUrl(locale, normalizedPath, siteUrl);

  const languages = locales.reduce<Record<string, string>>((acc, current) => {
    acc[current] = buildLocaleUrl(current, normalizedPath, siteUrl);
    return acc;
  }, {});

  languages['x-default'] = buildLocaleUrl(defaultLocale, normalizedPath, siteUrl);

  return { canonical, languages };
}

export function getLocaleUrl(locale: Locale, path?: string) {
  const normalizedPath = normalizePath(path);
  return buildLocaleUrl(locale, normalizedPath, getSiteUrl());
}
