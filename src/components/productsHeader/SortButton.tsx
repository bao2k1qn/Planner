'use client';
import React from 'react';

import Button from '../Button';

const SortButton = () => {
    const handleOpenMenu = () => {
        const targetMenu = document.getElementById('products-sort-menu');
        if (!targetMenu) return;

        targetMenu.classList.toggle('hidden');
    };
    return (
        <div>
            <Button
                type="button"
                outline="rounded"
                variant="outline"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 ml-3 dark:text-slate-100 md:p-1"
                onClick={handleOpenMenu}
            >
                <div className="md:hidden group inline-flex justify-center">
                    Sort
                    <svg
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hidden md:block"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                </svg>
            </Button>
        </div>
    );
};

export default SortButton;
