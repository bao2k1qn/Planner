import Link from 'next/link';
import React from 'react';

const AppliedFilters = () => {
    return (
        <div className="pb-4 pt-2 border-b border-gray-200 py-2 dark:border-slate-50/[0.06] text-slate-800 dark:text-slate-100">
            <div className="flex justify-between">
                <strong className="text-sm font-semibold ">Applied filters</strong>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4 mr-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
                <Link
                    href="/products?type=Vectors"
                    className="flex items-center gap-1 w-fit px-2 py-[0.5px] border-[1.5px] border-gray-300 rounded-md text-slate-100 shadow-md text-sm bg-primary-500"
                >
                    Vectors
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
                <Link
                    href="/products?type=Vectors"
                    className="flex items-center gap-1 w-fit px-2 py-[0.5px] border-[1.5px] border-gray-300 rounded-md text-slate-100 shadow-md text-sm bg-primary-500"
                >
                    Vectors
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
                <Link
                    href="/products?type=Vectors"
                    className="flex items-center gap-1 w-fit px-2 py-[0.5px] border-[1.5px] border-gray-300 rounded-md text-slate-100 shadow-md text-sm bg-primary-500"
                >
                    Vectors
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
                <Link
                    href="/products?type=Vectors"
                    className="flex items-center gap-1 w-fit px-2 py-[0.5px] border-[1.5px] border-gray-300 rounded-md text-slate-100 shadow-md text-sm bg-primary-500"
                >
                    Vectors
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default AppliedFilters;
