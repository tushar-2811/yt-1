import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Define all supported locales
export const locales = ['en', 'de', 'nl', 'fr', 'ja', 'es', 'pt', 'hi', 'id', 'ko', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Locale labels for language selector
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
  fr: 'Français',
  ja: '日本語',
  es: 'Español',
  pt: 'Português',
  hi: 'हिन्दी',
  id: 'Bahasa Indonesia',
  ko: '한국어',
  ar: 'العربية',
};

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically comes from the [locale] segment
  let locale = await requestLocale;

  // Ensure that the incoming `locale` is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
