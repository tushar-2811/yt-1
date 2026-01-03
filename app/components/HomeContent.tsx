import Footer from "./Footer";
import Navbar from "./Navbar";
import SeoContent from "./SeoContent";
import ThumbnailTool from "./ThumbnailTool";
import ScrollToTopButton from "./ScrollToTopButton";
import { Download, Zap, Shield, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomeContent() {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Navbar />

      <main className="w-full">
        <section className="bg-linear-to-b from-slate-50 via-white to-white border-b border-slate-200 pt-12 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <Zap className="w-4 h-4" /> {t("badges.instantDownload")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                <Shield className="w-4 h-4" /> {t("badges.freeSecure")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                <Star className="w-4 h-4" /> {t("badges.rating")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              {t("hero.title")}
              <span className="block text-2xl md:text-3xl font-bold text-red-600 mt-2">
                {t("hero.subtitle")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>

            <p className="text-base text-slate-500 mb-10 max-w-2xl mx-auto">
              {t("hero.subDescription")}
            </p>

            <ThumbnailTool />

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Download, text: t("features.quality") },
                { icon: Zap, text: t("features.instant") },
                { icon: Shield, text: t("features.noSignup") },
                { icon: Star, text: t("features.free") },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-2 text-sm text-slate-600 bg-slate-50 py-3 px-4 rounded-xl">
                  <item.icon className="w-4 h-4 text-red-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-6 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base">
              <span className="opacity-70">{t("platforms.label")}:</span>{" "}
              <span className="font-semibold">{t("platforms.youtube")}</span> •
              <span className="font-semibold"> {t("platforms.shorts")}</span> •
              <span className="font-semibold"> {t("platforms.live")}</span> •
              <span className="font-semibold"> {t("platforms.vimeo")}</span> •
              <span className="font-semibold"> {t("platforms.more")}</span>
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <SeoContent />
        </section>

        <section className="bg-linear-to-r from-red-600 to-red-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("cta.tryNow")}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t("hero.subDescription")}
            </p>
            <ScrollToTopButton />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
