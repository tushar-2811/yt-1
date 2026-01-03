import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { locales, defaultLocale, type Locale } from '@/i18n';
import { buildLocalizedAlternates } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const activeLocale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;
  const { canonical, languages } = buildLocalizedAlternates(activeLocale, '/terms-of-service');
  const t = await getTranslations({ locale: activeLocale, namespace: 'termsOfService.metadata' });

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

export default async function TermsOfService({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'termsOfService' });

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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.agreement.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('sections.agreement.p1').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
              <p className="text-slate-600 leading-relaxed">{t('sections.agreement.p2')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.use.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.use.p1')}</p>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.use.p2')}</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>{t('sections.use.list.l1')}</li>
                <li>{t('sections.use.list.l2')}</li>
                <li>{t('sections.use.list.l3')}</li>
                <li>{t('sections.use.list.l4')}</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.ip.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{t('sections.ip.p1')}</p>
              <p className="text-slate-600 leading-relaxed">{t('sections.ip.p2')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.termination.title')}</h2>
              <p className="text-slate-600 leading-relaxed">{t('sections.termination.content')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.changes.title')}</h2>
              <p className="text-slate-600 leading-relaxed">{t('sections.changes.content')}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('sections.contact.title')}</h2>
              <p className="text-slate-600 leading-relaxed">{t('sections.contact.content')}</p>
              <div className="bg-slate-50 p-6 rounded-xl mt-4 border border-slate-200">
                <p className="text-slate-700">
                  <strong>Email:</strong> <a href="mailto:tusharrawat74@gmail.com" className="text-red-600 hover:underline">tusharrawat74@gmail.com</a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
