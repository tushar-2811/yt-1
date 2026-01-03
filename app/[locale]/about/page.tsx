import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CheckCircle, Zap, Shield, Globe, Users, Heart } from "lucide-react";
import { locales, defaultLocale, type Locale } from '@/i18n';
import { buildLocalizedAlternates } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const activeLocale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;
  const { canonical, languages } = buildLocalizedAlternates(activeLocale, '/about');
  const t = await getTranslations({ locale: activeLocale, namespace: 'about.metadata' });

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

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  
  const stats = [
    { number: t('stats.downloads.number'), label: t('stats.downloads.label') },
    { number: t('stats.users.number'), label: t('stats.users.label') },
    { number: t('stats.rating.number'), label: t('stats.rating.label') },
    { number: t('stats.free.number'), label: t('stats.free.label') },
  ];

  const features = [
    {
      icon: Zap,
      title: t('features.fast.title'),
      description: t('features.fast.description')
    },
    {
      icon: Shield,
      title: t('features.secure.title'),
      description: t('features.secure.description')
    },
    {
      icon: Globe,
      title: t('features.works.title'),
      description: t('features.works.description')
    },
    {
      icon: Users,
      title: t('features.creators.title'),
      description: t('features.creators.description')
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Navbar />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="bg-linear-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('hero.description').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-red-500 mb-2">{stat.number}</div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('story.title')}</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t.raw('story.p1').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: t.raw('story.p2').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>{t('story.list.l1')}</li>
                <li>{t('story.list.l2')}</li>
                <li>{t('story.list.l3')}</li>
                <li>{t('story.list.l4')}</li>
                <li>{t('story.list.l5')}</li>
              </ul>
              <p dangerouslySetInnerHTML={{ __html: t.raw('story.p3').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{t('features.title')}</h2>
            <p className="text-lg text-neutral-500 text-center mb-12 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t.raw('features.subtitle').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('offer.title')}</h2>
            
            <div className="space-y-4">
              {[
                t('offer.items.i1'),
                t('offer.items.i2'),
                t('offer.items.i3'),
                t('offer.items.i4'),
                t('offer.items.i5'),
                t('offer.items.i6'),
                t('offer.items.i7'),
                t('offer.items.i8'),
                t('offer.items.i9'),
                t('offer.items.i10')
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">{t('mission.title')}</h2>
            <p className="text-xl leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: t.raw('mission.description').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('cta.title')}</h2>
            <p className="text-lg text-neutral-600 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('cta.description').replace(/<strong1>/g, '<strong>').replace(/<\/strong1>/g, '</strong>') }} />
            <Link 
              href={`/${locale}`}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-black/80 transition-colors"
            >
              {t('cta.button')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
