'use client';

import { LinkIcon, AlertCircle, ImageIcon } from "lucide-react";
import { Download } from "lucide-react";
import { useState } from "react";
import { extractVideoId } from "../utils";
import ThumbnailCard from "./ThumbnailCard";
import { useTranslations } from 'next-intl';

const ThumbnailTool = () => {
  const t = useTranslations('tool');
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setVideoId(null);
    setLoading(true);

    setTimeout(() => {
      const id = extractVideoId(url);
      if (id) {
        setVideoId(id);
      } else {
        setError(t('error'));
      }
      setLoading(false);
    }, 600);
  };

  const downloadImage = async (url: string, name: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Input Form */}
      <section aria-labelledby="thumbnail-tool-form" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-12">
        <form onSubmit={handleFetch} className="relative max-w-4xl mx-auto">
          <div className="relative flex items-center ">
            <LinkIcon className="absolute left-4 w-5 h-5 text-slate-400" />
            <label htmlFor="video-url" className="sr-only">YouTube Video URL</label>
            <input
              type="text"
              id="video-url"
              placeholder={t('placeholder')}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-red-600 focus:ring-0 text-lg transition-colors shadow-sm"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              aria-label="YouTube Video URL"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="mt-4 w-full sm:mt-0 sm:absolute sm:right-2 sm:top-2 sm:bottom-2 sm:w-auto bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-black/80 active:bg-black/90 transition-colors  disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? t('processing') : t('button')}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}
      </section>

      {/* Results Grid - Only shows when videoId exists */}
      {videoId && (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 mb-12" aria-labelledby="download-options">
          <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
            <ImageIcon className="w-6 h-6 text-red-600" />
            <p id="download-options" className="text-2xl font-bold text-slate-900">{t('availableSizes')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: t('maxHd'), res: '1920x1080', code: 'maxresdefault' },
              { label: t('highDef'), res: '640x480', code: 'sddefault' },
              { label: t('standard'), res: '480x360', code: 'hqdefault' },
              { label: t('medium'), res: '320x180', code: 'mqdefault' },
            ].map((opt) => (
              // <div key={opt.code} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              //     <div className="relative aspect-video bg-slate-100 group">
              //     <img 
              //       src={`https://img.youtube.com/vi/${videoId}/${opt.code}.jpg`}
              //       alt={`${opt.label} Thumbnail`}
              //       className="w-full h-full object-cover"
              //       onError={(e) => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "https://placehold.co/600x400?text=Not+Available"; }}
              //     />
              //     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              //       <button 
              //         onClick={() => window.open(`https://img.youtube.com/vi/${videoId}/${opt.code}.jpg`, '_blank')}
              //         className="text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition"
              //       >
              //         Preview
              //       </button>
              //     </div>
              //   </div>
              //   <div className="p-4">
              //     <div className="flex items-center justify-between mb-3">
              //       <span className="font-semibold text-slate-900">{opt.label}</span>
              //       <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full">{opt.res}</span>
              //     </div>
              //     <button 
              //       onClick={() => downloadImage(`https://img.youtube.com/vi/${videoId}/${opt.code}.jpg`, `thumb-${opt.code}.jpg`)}
              //       className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 active:bg-red-800 transition-colors"
              //     >
              //       <Download className="w-4 h-4" />
              //       Download
              //     </button>
              //   </div>
              // </div>
              <ThumbnailCard 
                key={opt.code}
                quality={opt.label}
                resolution={opt.res}
                url={`https://img.youtube.com/vi/${videoId}/${opt.code}.jpg`}
                downloadName={`thumb-${opt.code}.jpg`}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ThumbnailTool;

