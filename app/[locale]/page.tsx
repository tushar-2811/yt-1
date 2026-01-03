import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from '@/i18n';
import { buildLocalizedAlternates } from '@/lib/seo';
import HomeContent from "../components/HomeContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const activeLocale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;
  const { canonical, languages } = buildLocalizedAlternates(activeLocale);

  return {
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default function Home() {
  return <HomeContent />;
}
