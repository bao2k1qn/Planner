'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const pathname = usePathname();

    return (
        <ul className="h-full flex text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
            <li className="h-full flex items-center px-4 text-primary-500 border-b-2 border-primary-500 ">
                <Link href="/">Điều trị</Link>
            </li>
            <li className="h-full flex items-center px-4">
                <Link href="/">Sản phẩm</Link>
            </li>
            <li className="h-full flex items-center px-4">
                <Link href="/">Bài viết</Link>
            </li>
            <li className="h-full flex items-center px-4">
                <Link href="/">Về chúng tôi</Link>
            </li>
        </ul>
    );
};

export default NavBar;
