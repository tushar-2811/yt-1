import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { locales, defaultLocale, type Locale } from '@/i18n';
import { buildLocalizedAlternates } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const activeLocale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;
  const { canonical, languages } = buildLocalizedAlternates(activeLocale, '/privacy-policy');
  const t = await getTranslations({ locale: activeLocale, namespace: 'privacyPolicy.metadata' });

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

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacyPolicy' });

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
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.intro.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('sections.intro.p1').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
              <p className="text-slate-600 leading-relaxed">{t('sections.intro.p2')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.collection.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.collection.p1')}</p>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('sections.collection.subtitle1')}</h3>
              <p className="text-slate-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('sections.collection.p2').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />

              <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('sections.collection.subtitle2')}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.collection.p3')}</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>{t('sections.collection.list.l1')}</li>
                <li>{t('sections.collection.list.l2')}</li>
                <li>{t('sections.collection.list.l3')}</li>
                <li>{t('sections.collection.list.l4')}</li>
                <li>{t('sections.collection.list.l5')}</li>
                <li>{t('sections.collection.list.l6')}</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.use.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.use.p1')}</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>{t('sections.use.list.l1')}</li>
                <li>{t('sections.use.list.l2')}</li>
                <li>{t('sections.use.list.l3')}</li>
                <li>{t('sections.use.list.l4')}</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.cookies.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.cookies.p1')}</p>
              <p className="text-slate-600 leading-relaxed">{t('sections.cookies.p2')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.security.title')}</h2>
              <p className="text-slate-600 leading-relaxed">{t('sections.security.content')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.ads.title')}</h2>
              <p className="text-slate-600 leading-relaxed">{t('sections.ads.content')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.children.title')}</h2>
              <p className="text-slate-600 leading-relaxed">{t('sections.children.content')}</p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
