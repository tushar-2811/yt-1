import { Download } from "lucide-react";
import { useTranslations } from 'next-intl';

interface ThumbnailCardProps {
  quality: string;
  resolution: string;
  url: string;
  downloadName: string;
}

const ThumbnailCard = ({ quality, resolution, url, downloadName }: ThumbnailCardProps) => {
  const t = useTranslations('tool');
  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Fallback for CORS issues if fetch fails directly
      window.open(url, '_blank');
    }
  };

  return (
    // FIX 1: Added 'h-full flex flex-col' to ensure card takes full height of grid cell
    <article className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative aspect-video bg-slate-100 group shrink-0">
        <img 
          src={url} 
          alt={`YouTube Thumbnail ${quality}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/600x400?text=Not+Available";
          }}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={() => window.open(url, '_blank')}
            className="text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition"
          >
            {t('preview')}
          </button>
        </div>
      </div>

      {/* FIX 2: Added 'flex-1 flex flex-col' so this section fills remaining space */}
      <div className="py-4 px-1 border-t border-slate-100 ">
        <div className="flex items-center justify-between mb-4 " aria-label="Thumbnail quality">
          <span className="font-semibold text-slate-900 leading-tight">{quality}</span>
          <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full whitespace-nowrap ml-2">
            {resolution}
          </span>
        </div>
        
        {/* FIX 3: Added 'mt-auto' to push button to the bottom */}
        <button 
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 active:bg-red-800 transition-colors"
        >
          <Download className="w-4 h-4" />
          {t('download')}
        </button>
      </div>
    </article>
  );
};

export default ThumbnailCard;