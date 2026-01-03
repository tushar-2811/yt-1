import { MetadataRoute } from 'next';

// This is cached at build time for better performance
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate once per day

export default function robots(): MetadataRoute.Robots {
  // Use environment variable or fallback for faster resolution
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
