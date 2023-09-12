'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navs, NavType } from '@/constant/config';

const NavbarDrawer = () => {
    const pathname = usePathname();

    const handleToggleDrawer = () => {
        const drawer = document.getElementById('navbar_drawer');
        if (!drawer) return;

        drawer.classList.toggle('!translate-x-0');
    };
    return (
        <div className="hidden md:flex items-center ml-2">
            <button onClick={() => handleToggleDrawer()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>

            <div
                id="navbar_drawer"
                className="fixed top-0 right-0 h-screen overflow-y-auto transition-transform duration-500 translate-x-full bg-white w-80 dark:bg-gray-800"
            >
                <h5
                    id="drawer-label"
                    className="p-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400 border-b border-l border-slate-900/10 dark:border-slate-50/[0.06]"
                >
                    <svg
                        className="w-4 h-4 mr-2.5"
                        aria-hidden="false"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    Info
                </h5>
                <button
                    onClick={() => handleToggleDrawer()}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="false"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div>
                    {navs.map((nav: NavType) => {
                        const isActive = pathname === nav.href;
                        return (
                            <li
                                key={nav.href}
                                className={`h-full flex items-center px-5 py-2 border-b border-slate-900/10 dark:border-slate-50/[0.06] ${
                                    isActive && 'text-primary-500 !border-l-4 !border-l-primary-500 bg-primary-400/10'
                                } `}
                            >
                                <Link href={nav.href}>{nav.name}</Link>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavbarDrawer;
