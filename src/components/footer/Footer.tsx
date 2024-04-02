import Image from 'next/image';
import Link from 'next/link';

import { navs } from '@/constants/data';

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-slate-900/10 bg-white p-8 shadow-inner md:p-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <Link href="#" className="flex items-center justify-center text-2xl font-semibold text-slate-900">
                    <Image src="/images/rum-192x192.png" width="40" height="40" alt="rum beauty icon" />
                    Rum Beauty & Spa
                </Link>
                <p className="my-6 text-slate-500 dark:text-slate-400">
                    Nơi tạo nên những giây phút thăng hoa, thư giãn theo cách sang trọng, thú vị nhất.
                </p>
                <ul className="mb-6 flex flex-wrap items-center justify-center text-slate-900">
                    {navs.map((nav) => (
                        <li key={nav.name}>
                            <Link href={nav.href} className="mr-4 hover:underline md:mr-6 ">
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <span className="text-sm text-slate-500 dark:text-slate-400 sm:text-center">
                    © 2021-2022{' '}
                    <Link href="#" className="hover:underline">
                        Rum Beauty & Spa™
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
