import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n } from '../i18n-config';

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;

    // exclude all files in public folder
    if (
        [
            '/manifest.json',
            '/favicon.ico',
            '/next.svg',
            '/vercel.svg',
            '/thirteen.svg',
            '/sitemap.xml',
            '/sitemap-0.xml',
            '/sitemap-*.xml',
            '/images/*.jpg',
            '/*.jpg',
            '/*.svg',
            '/*.png',
            '/og.jpg',
        ].includes(pathname)
    )
        return;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const newUrl = new URL(`/${i18n.defaultLocale}${pathname}`, request.url);
        newUrl.search = searchParams.toString();

        return NextResponse.redirect(newUrl);
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
