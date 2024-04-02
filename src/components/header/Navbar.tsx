import Link from 'next/link';

import { navs } from '@/constants/data';

export default function NavBar() {
    return (
        <ul className="flex h-full text-sm font-semibold leading-6 text-slate-700 md:hidden">
            {navs.map((nav) => {
                return (
                    <li key={nav.href} className="flex h-full items-center px-4">
                        <Link href={nav.href}>{nav.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
}
