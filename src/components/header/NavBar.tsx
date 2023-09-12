'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { navs, NavType } from '@/constant/config';

const NavBar = () => {
    const pathname = usePathname();

    return (
        <ul className="h-full flex text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 md:hidden">
            {navs.map((nav: NavType) => {
                const isActive = pathname === nav.href;
                return (
                    <li
                        key={nav.href}
                        className={`h-full flex items-center px-4 ${
                            isActive && 'text-primary-500 border-b-2 border-primary-500'
                        } `}
                    >
                        <Link href={nav.href}>{nav.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavBar;
