'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, localeLabels, type Locale } from '@/i18n';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLocale = (params?.locale as Locale) || 'en';
  
  // Get the path without the locale
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
        <span className="hidden sm:inline">{localeLabels[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 z-20 max-h-96 overflow-y-auto">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}${pathWithoutLocale}`}
                className={`block px-4 py-3 hover:bg-slate-50 transition-colors ${
                  locale === currentLocale ? 'bg-slate-100 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {localeLabels[locale]}
                {locale === currentLocale && (
                  <span className="ml-2 text-red-600">✓</span>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
