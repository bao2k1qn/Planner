import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import { siteConfig } from '@/constants/data';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon/favicon.ico',
        shortcut: '/favicon/favicon-16x16.png',
        apple: '/favicon/apple-touch-icon.png',
    },
    manifest: `/favicon/site.webmanifest`,
    openGraph: {
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
        images: [`${siteConfig.url}/images/opengraph-image.png`],
        type: 'website',
        locale: 'vi_VN',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: [`${siteConfig.url}/images/opengraph-image.png`],
    },
};

export const viewport: Viewport = {
    themeColor: '#bbf7d0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className={`${inter.variable}`}>
            <body>
                <div id="root" className="bg-white text-slate-900 antialiased">
                    <Header />
                    <div className="ct-max-w-screen">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
