import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, defaultLocale, type Locale } from '@/i18n';
import { buildLocalizedAlternates, getSiteUrl } from '@/lib/seo';
import "../globals.css";
import Schema from "../components/Schema";
import { GoogleAnalytics } from "@next/third-parties/google";

const SITE_URL = getSiteUrl();
const SITE_NAME = "YouTube Thumbnail Downloader";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const activeLocale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;
  const t = await getTranslations({ locale: activeLocale, namespace: 'metadata' });
  const { canonical, languages } = buildLocalizedAlternates(activeLocale);
  const isDefaultLocale = activeLocale === defaultLocale;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: `%s | ${SITE_NAME}`
    },
    description: t('description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      locale: isDefaultLocale ? 'en_US' : activeLocale,
      url: canonical,
      siteName: SITE_NAME,
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["/og-image.png"],
      creator: "@youtubethumb",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "technology",
    verification: {
      google: "google-site-verification-code-here",
      // yandex: "yandex-verification-code",
      // bing: "bing-verification-code",
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: SITE_NAME,
    },
    other: {
      "mobile-web-app-capable": "yes",
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  // Build canonical and hreflang links
  const { canonical, languages } = buildLocalizedAlternates(locale as Locale);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <Schema />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Canonical link */}
        {/* <link rel="canonical" href={canonical} /> */}
        {/* Hreflang alternates */}
        {/* {Object.entries(languages).map(([lang, href]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={href} />
        ))} */}
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-5VWSZKK38L" />
    </html>
  );
}
