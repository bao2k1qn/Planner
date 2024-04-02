import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/colors.css';
import '@/styles/globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: {
        default: 'Rum Beauty & Spa',
        template: '%s - Rum Beauty & Spa',
    },
    description: 'Đến và trải nghiệm các dịch vụ tại Rum Beauty & Spa',
    twitter: {
        card: 'summary_large_image',
    },
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
