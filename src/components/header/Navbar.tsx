import Link from 'next/link';

import { navs } from '@/constants/data';

export default function NavBar() {
    return (
        <ul className="flex h-full text-sm font-semibold leading-6 text-slate-700 md:hidden">
            {navs.map((nav) => {
                return (
                    <li key={nav.href} className="flex h-full items-center">
                        <Link href={nav.href} className="block h-full w-full px-4 py-3">
                            {nav.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
