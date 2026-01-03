import Script from 'next/script';

/**
 * Google AdSense Script Component
 * Add this to your root layout once
 * 
 * Make sure to set NEXT_PUBLIC_GOOGLE_ADSENSE_ID in your .env.local:
 * NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
 */
export default function GoogleAdScript() {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;

  if (!adsenseId) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
