'use client';
// import { usePathname } from 'next/navigation';
import React from 'react';

const SideBarDrawer = ({ children }: { children: React.ReactNode }) => {
    // const pathname = usePathname();
    const handleToggleDrawer = () => {
        const drawer = document.getElementById('services_sidebar_drawer');
        if (!drawer) return;

        drawer.classList.toggle('!translate-x-0');
    };
    return (
        <div
            id="services_sidebar_drawer"
            className="fixed top-14 left-[max(0px,calc(50%-48rem))] z-40 md:z-50 h-screen overflow-y-auto transition-transform duration-500 md:-translate-x-full md:bg-white md:dark:bg-gray-800"
        >
            <button
                onClick={() => handleToggleDrawer()}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-1 right-1 items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white hidden md:inline-flex"
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
            <div className="md:mt-3 md:ml-3">{children}</div>
        </div>
    );
};

export default SideBarDrawer;
