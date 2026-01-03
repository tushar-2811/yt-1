import { CheckCircle, Download, Zap, Shield, Globe, Smartphone, Monitor, Star, Clock, Lock, Image } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const SeoContent = () => {
  const t = useTranslations('seo');

  return (
    <article className="prose prose-slate max-w-none">
      {/* H2 for SEO Structure - How To Section */}
      <section id="how-to" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">1</span>
          {t('howTo.title')}
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          {t('howTo.description')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { 
              title: t('howTo.step1Title'), 
              desc: t('howTo.step1Desc'),
              icon: Link
            },
            { 
              title: t('howTo.step2Title'), 
              desc: t('howTo.step2Desc'),
              icon: Image
            },
            { 
              title: t('howTo.step3Title'), 
              desc: t('howTo.step3Desc'),
              icon: Download
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-linear-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-3 text-slate-900">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">2</span>
          {t('features.title')}
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          {t('features.description')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Zap, title: t('features.fastTitle'), desc: t('features.fastDesc') },
            { icon: Shield, title: t('features.secureTitle'), desc: t('features.secureDesc') },
            { icon: Globe, title: t('features.worldwideTitle'), desc: t('features.worldwideDesc') },
            { icon: Smartphone, title: t('features.mobileTitle'), desc: t('features.mobileDesc') },
            { icon: Monitor, title: t('features.browsersTitle'), desc: t('features.browsersDesc') },
            { icon: Star, title: t('features.resolutionsTitle'), desc: t('features.resolutionsDesc') },
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-red-200 transition-colors">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                <feat.icon className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{feat.title}</h3>
                <p className="text-slate-600 text-sm">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4">✅ {t('features.keyFeaturesTitle')}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              t('features.f1'), t('features.f2'), t('features.f3'), t('features.f4'),
              t('features.f5'), t('features.f6'), t('features.f7'), t('features.f8'),
              t('features.f9'), t('features.f10'), t('features.f11'), t('features.f12')
            ].map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-slate-700 text-sm">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Resolutions */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">3</span>
          {t('resolutions.title')}
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          {t('resolutions.description')}
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">{t('resolutions.quality')}</th>
                <th className="px-6 py-4 text-left font-semibold">{t('resolutions.resolution')}</th>
                <th className="px-6 py-4 text-left font-semibold">{t('resolutions.bestFor')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">{t('resolutions.maxHdQuality')}</td>
                <td className="px-6 py-4 text-slate-600">{t('resolutions.maxHdRes')}</td>
                <td className="px-6 py-4 text-slate-600">{t('resolutions.maxHdBest')}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">{t('resolutions.hdQuality')}</td>
                <td className="px-6 py-4 text-slate-600">{t('resolutions.hdRes')}</td>
                <td className="px-6 py-4 text-slate-600">{t('resolutions.hdBest')}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">{t('resolutions.standardQuality')}</td>
                <td className="px-6 py-4 text-slate-600">{t('resolutions.standardRes')}</td>
                <td className="px-6 py-4 text-slate-600">{t('resolutions.standardBest')}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">{t('resolutions.mediumQuality')}</td>
                <td className="px-6 py-4 text-slate-600">{t('resolutions.mediumRes')}</td>
                <td className="px-6 py-4 text-slate-600">{t('resolutions.mediumBest')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">4</span>
          {t('useCases.title')}
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          {t('useCases.description')}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: t('useCases.creatorsTitle'), desc: t('useCases.creatorsDesc') },
            { title: t('useCases.marketersTitle'), desc: t('useCases.marketersDesc') },
            { title: t('useCases.designersTitle'), desc: t('useCases.designersDesc') },
            { title: t('useCases.educatorsTitle'), desc: t('useCases.educatorsDesc') },
            { title: t('useCases.bloggersTitle'), desc: t('useCases.bloggersDesc') },
            { title: t('useCases.socialTitle'), desc: t('useCases.socialDesc') },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">5</span>
          {t('faq.title')}
        </h2>
        
        <div className="space-y-4">
          {[
            { q: t('faq.q1'), a: t('faq.a1') },
            { q: t('faq.q2'), a: t('faq.a2') },
            { q: t('faq.q3'), a: t('faq.a3') },
            { q: t('faq.q4'), a: t('faq.a4') },
            { q: t('faq.q5'), a: t('faq.a5') },
            { q: t('faq.q6'), a: t('faq.a6') },
            { q: t('faq.q7'), a: t('faq.a7') },
            { q: t('faq.q8'), a: t('faq.a8') },
            { q: t('faq.q9'), a: t('faq.a9') },
            { q: t('faq.q10'), a: t('faq.a10') },
          ].map((item, idx) => (
            <details key={idx} className="group bg-white border border-slate-200 rounded-xl open:shadow-md transition-shadow">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-900 list-none hover:bg-slate-50 rounded-xl">
                <span className="pr-4">{item.q}</span>
                <span className="transform group-open:rotate-180 transition-transform text-red-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Additional SEO Content */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          {t('guide.title')}
        </h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>{t('guide.p1')}</p>
          <p>{t('guide.p2')}</p>
          <p>{t('guide.p3')}</p>
          <p>{t('guide.p4')}</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-900 text-white p-8 rounded-2xl">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <Clock className="w-8 h-8 mx-auto mb-2 text-red-400" />
            <div className="text-2xl font-bold">500K+</div>
            <div className="text-slate-400 text-sm">{t('stats.monthlyUsers')}</div>
          </div>
          <div>
            <Download className="w-8 h-8 mx-auto mb-2 text-red-400" />
            <div className="text-2xl font-bold">10M+</div>
            <div className="text-slate-400 text-sm">{t('stats.thumbnailsDownloaded')}</div>
          </div>
          <div>
            <Star className="w-8 h-8 mx-auto mb-2 text-red-400" />
            <div className="text-2xl font-bold">4.9/5</div>
            <div className="text-slate-400 text-sm">{t('stats.userRating')}</div>
          </div>
          <div>
            <Lock className="w-8 h-8 mx-auto mb-2 text-red-400" />
            <div className="text-2xl font-bold">100%</div>
            <div className="text-slate-400 text-sm">{t('stats.securePrivate')}</div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SeoContent;
