'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { Youtube, Shield, FileText } from "lucide-react";
import { useTranslations } from 'next-intl';

const Footer = () => {
  const params = useParams();
  const locale = params?.locale || 'en';
  const t = useTranslations('footer');
  
  return (
    <footer className="bg-black text-slate-300 py-16 mt-20" aria-label="Footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <Youtube className="w-8 h-8 text-red-500" />
              <span className="font-bold text-xl text-white">{t('brandName')}</span>
            </Link>
          <p className="text-sm leading-relaxed max-w-md mb-6">
            {t('description')}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">{t('free')}</span>
            <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">{t('noRegistration')}</span>
            <span className="text-xs bg-slate-800 px-3 py-1 rounded-full">{t('instant')}</span>
          </div>
        </div>
        
        {/* Quick Links */}
        {/* <nav aria-label="Footer Navigation">
          <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Info className="w-4 h-4" />
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-red-400 transition-colors flex items-center gap-2">
                → YouTube Thumbnail Downloader
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-400 transition-colors flex items-center gap-2">
                → About Us
              </Link>
            </li>
            <li>
              <Link href="/#how-to" className="hover:text-red-400 transition-colors flex items-center gap-2">
                → How to Download Thumbnails
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-red-400 transition-colors flex items-center gap-2">
                → FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-400 transition-colors flex items-center gap-2">
                → Contact Us
              </Link>
            </li>
          </ul>
        </nav> */}
        
        {/* Legal Links */}
        <nav aria-label="Legal Navigation">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2 text-base">
            <Shield className="w-4 h-4" />
            {t('legal')}
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href={`/${locale}/privacy-policy`} className="hover:text-red-400 transition-colors flex items-center gap-2">
                <FileText className="w-3 h-3" /> {t('privacyPolicy')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/terms-of-service`} className="hover:text-red-400 transition-colors flex items-center gap-2">
                <FileText className="w-3 h-3" /> {t('termsOfService')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/disclaimer`} className="hover:text-red-400 transition-colors flex items-center gap-2">
                <FileText className="w-3 h-3" /> {t('disclaimer')}
              </Link>
            </li>
            {/* <li>
              <Link href="/contact" className="hover:text-red-400 transition-colors flex items-center gap-2">
                <Phone className="w-3 h-3" /> Contact
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      
      {/* SEO Keywords Section */}
      <div className="border-t border-slate-800 pt-8 mb-8">
        <p className="text-xs text-slate-500 text-center max-w-4xl mx-auto leading-relaxed">
          <strong>Popular Searches:</strong> YouTube thumbnail downloader, download YouTube thumbnail, YouTube thumbnail grabber, 
          YouTube thumbnail saver, YouTube video thumbnail download, YouTube thumbnail extractor, get YouTube thumbnail, 
          YouTube thumbnail download HD, YouTube thumbnail 4K download, YouTube thumbnail 1080p, YouTube Shorts thumbnail download, 
          free YouTube thumbnail downloader, YT thumbnail downloader, download YT thumbnail, YouTube thumbnail viewer, 
          best YouTube thumbnail downloader 2026, high quality YouTube thumbnail download
        </p>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-800 pt-8 text-center">
        <p className="text-sm text-slate-400 mb-2">
          &copy; {new Date().getFullYear()} YouTube Thumbnail Downloader. All rights reserved.
        </p>
        <p className="text-xs text-slate-500">
          This website is not affiliated with, endorsed by, or sponsored by YouTube, Google, or Alphabet Inc. 
          YouTube™ is a registered trademark of Google LLC. All thumbnails remain the property of their respective owners.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;