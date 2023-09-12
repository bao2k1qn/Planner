import { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import Header from '@/components/header/Header';

import { siteConfig } from '@/constant/config';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    robots: { index: true, follow: true },
    icons: {
        icon: '/images/logo_RUM.png',
        shortcut: '/images/logo_RUM.png',
        apple: '/images/logo_RUM.png',
    },
    manifest: `/images/logo_RUM.png`,
    openGraph: {
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
        images: [`${siteConfig.url}/images/logo_RUM.png`],
        type: 'website',
        locale: 'vi_VN',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        images: [`${siteConfig.url}/images/logo_RUM.png`],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className={`${inter.variable} ${nunito.variable}`}>
            <body>
                <div
                    id="root"
                    className="antialiased text-slate-900 dark:text-white bg-white dark:bg-slate-900 overflow-x-hidden"
                >
                    <Header />
                    <div className="content-wrapper max-w-screen-2xl font-primary text-base mx-auto px-8">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
