'use client';
import Link from 'next/link';
import React from 'react';

const CategoryItem = () => {
    const handleExpand = (id: string) => {
        const target = document.getElementById(id);
        const targetIcon = document.getElementById(id + '-icon');
        if (!target || !targetIcon) return;

        target.classList.toggle('hidden');
        targetIcon.classList.toggle('rotate-180');
    };
    return (
        <div className="pb-4 pt-2 text-slate-600 dark:text-slate-100">
            <div className="flex justify-between" onClick={() => handleExpand('filter-size')}>
                <strong className="text-sm font-semibold text-slate-800 dark:text-slate-100">Size</strong>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4 mr-4"
                    id="filter-size-icon"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="flex flex-wrap gap-2 my-2" id="filter-size">
                <Link
                    href="/products?type=Vectors"
                    className="block w-fit px-4 py-[6px] border-[1.5px] border-gray-300 rounded-lg  shadow-md text-sm"
                >
                    Vectors
                </Link>
                <Link
                    href="/products?type=Vectors"
                    className="block w-fit px-4 py-[6px] border-[1.5px] border-gray-300 rounded-lg  shadow-md text-sm"
                >
                    Vectors
                </Link>
            </div>
        </div>
    );
};

export default CategoryItem;
