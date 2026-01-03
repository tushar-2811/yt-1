import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { locales, defaultLocale, type Locale } from '@/i18n';
import { buildLocalizedAlternates } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const activeLocale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;
  const { canonical, languages } = buildLocalizedAlternates(activeLocale, '/disclaimer');
  const t = await getTranslations({ locale: activeLocale, namespace: 'disclaimer.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
      type: "website",
    },
  };
}

export default async function Disclaimer({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'disclaimer' });

  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Navbar />
      
      <main className="w-full">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-neutral-500">
              {t('lastUpdated')}
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            {/* Important Notice Banner */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-10">
              <h2 className="text-xl font-bold text-yellow-800 mb-2">{t('notice.title')}</h2>
              <p className="text-yellow-700" dangerouslySetInnerHTML={{ __html: t.raw('notice.content').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.fairUse.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('sections.fairUse.p1').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.fairUse.p2')}</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>{t('sections.fairUse.list.l1')}</li>
                <li>{t('sections.fairUse.list.l2')}</li>
                <li>{t('sections.fairUse.list.l3')}</li>
                <li>{t('sections.fairUse.list.l4')}</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.liability.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.liability.p1')}</p>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.liability.p2')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.externalLinks.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.externalLinks.content')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.changes.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.changes.content')}</p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
