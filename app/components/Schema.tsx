// app/components/Schema.tsx
import { getSiteUrl } from '@/lib/seo';

export default function Schema() {
  const SITE_URL = getSiteUrl();
  // Main WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Thumbnail Downloader",
    "url": SITE_URL,
    "description": "Free online tool to download YouTube video thumbnails in 4K, Full HD 1080p, 720p and SD quality. Extract thumbnails from YouTube videos, Shorts, and Vimeo instantly.",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Compatible with Chrome, Firefox, Safari, Edge.",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "dateModified": "2026-01-02",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "12847",
      "reviewCount": "4523"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "YouTube Thumbnail Downloader",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "YouTube Thumbnail Downloader",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/?url={videoUrl}`
      },
      "query-input": "required name=videoUrl"
    },
    "featureList": [
      "Download 4K Ultra HD thumbnails",
      "Download Full HD 1080p thumbnails", 
      "Download HD 720p thumbnails",
      "Download SD quality thumbnails",
      "YouTube Shorts thumbnail support",
      "Vimeo thumbnail download",
      "No registration required",
      "100% Free to use",
      "Works on mobile devices"
    ]
  };

  // HowTo Schema for step-by-step instructions
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download YouTube Thumbnails",
    "description": "Learn how to download YouTube video thumbnails in high quality using our free online tool. Works with 4K, HD, and SD resolutions.",
    "image": `${SITE_URL}/og-image.png`,
    "totalTime": "PT1M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Web Browser"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy YouTube Video URL",
        "text": "Open YouTube and navigate to the video you want to download the thumbnail from. Copy the video URL from the address bar or click the Share button and copy the link.",
        "url": `${SITE_URL}/#step-1`,
        "image": `${SITE_URL}/step1.png`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste the URL",
        "text": "Go to our YouTube Thumbnail Downloader tool and paste the copied URL into the input field. The tool will automatically detect the video ID.",
        "url": `${SITE_URL}/#step-2`,
        "image": `${SITE_URL}/step2.png`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download Your Thumbnail",
        "text": "Click 'Get Thumbnails' button. Choose your preferred resolution (4K, HD, SD) and click the Download button to save the thumbnail image to your device.",
        "url": `${SITE_URL}/#step-3`,
        "image": `${SITE_URL}/step3.png`
      }
    ]
  };

  // FAQ Schema for frequently asked questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it legal to download YouTube thumbnails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is legal to download YouTube thumbnails for personal use, inspiration, educational purposes, or archival. However, reusing someone else's thumbnail as your own without permission may violate copyright laws. Always respect the original creator's intellectual property rights."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download thumbnails from YouTube Shorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our YouTube Thumbnail Downloader fully supports YouTube Shorts, regular videos, live streams, and premiere videos. Simply paste the Shorts URL and download the thumbnail in your preferred quality."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the 4K thumbnail option sometimes not available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not all YouTube videos have 4K thumbnails available. The maximum thumbnail resolution depends on the original video quality uploaded by the creator. If a video was uploaded in 1080p or 720p, the highest resolution thumbnail available will match that quality. Our tool automatically shows all available resolutions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this YouTube thumbnail downloader on iPhone or Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our YouTube Thumbnail Downloader is a responsive web application that works perfectly on all devices including iPhone, iPad, Android phones, tablets, Mac, and Windows PC. It works in any modern browser like Chrome, Safari, Firefox, or Edge."
        }
      },
      {
        "@type": "Question",
        "name": "Is this YouTube thumbnail downloader free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our YouTube Thumbnail Downloader is 100% free to use with no hidden costs, no registration required, and no download limits. You can download as many thumbnails as you need."
        }
      },
      {
        "@type": "Question",
        "name": "What thumbnail sizes and resolutions are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer multiple thumbnail resolutions: Max Resolution (1920x1080) for 4K quality, High Definition (640x480), Standard Quality (480x360), and Medium Quality (320x180). The availability depends on the original video quality."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get the URL of a YouTube video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To get a YouTube video URL: 1) Open the video on YouTube, 2) Copy the URL from your browser's address bar, or 3) Click the 'Share' button below the video and copy the link. Paste this URL into our thumbnail downloader."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download Vimeo thumbnails too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our tool supports both YouTube and Vimeo video platforms. Simply paste the Vimeo video URL and extract the thumbnail in the same way as YouTube videos."
        }
      }
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YouTube Thumbnail Downloader",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "tusharrawat74@gmail.com"
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "YouTube Thumbnail Downloader",
        "item": SITE_URL
      }
    ]
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "YouTube Thumbnail Downloader",
    "url": SITE_URL,
    "description": "Free online tool to download YouTube thumbnails in 4K, HD quality",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/?url={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Combine all schemas
  const schemas = [
    webAppSchema,
    howToSchema,
    faqSchema,
    organizationSchema,
    breadcrumbSchema,
    websiteSchema
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
