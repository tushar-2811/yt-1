'use client';

import { Download } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function ScrollToTopButton() {
  const t = useTranslations('home');
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
    >
      <Download className="w-5 h-5" />
      {t('cta.tryNow')}
    </button>
  );
}
