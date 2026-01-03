'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { Youtube } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const params = useParams();
  const locale = params?.locale || 'en';
  const t = useTranslations('navbar');
  
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group" title={`${t('title')} ${t('downloader')}`}>
          <Youtube className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
            <span className="hidden sm:inline">{t('title')} </span>
            <span className="sm:hidden">{t('shortTitle')} </span>
            <span className="text-red-600">{t('downloader')}</span>
          </span>
        </Link>
        
        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Navbar;