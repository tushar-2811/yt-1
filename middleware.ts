import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Use prefix only when needed so default locale stays at /
  localePrefix: 'as-needed',
});

export const config = {
  // Match only internationalized pathnames, exclude static files
  matcher: [
    '/((?!api|_next|_vercel|robots\\.txt|sitemap\\.xml|favicon\\.ico|manifest\\.json|.*\\..*).*)',
    '/',
    '/(de|nl|fr|ja|es|pt|hi|id|ko|ar|en)/:path*'
  ]
};
