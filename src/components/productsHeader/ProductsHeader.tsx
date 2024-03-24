import React from 'react';

import FilterButton from './FilterButton';
import SortButton from './SortButton';
import SearchInput from '../SearchInput';

const ProductsHeader = () => {
    return (
        <div className="flex items-baseline justify-between border-b border-gray-200 py-2 dark:border-slate-50/[0.06]">
            <h1 className="text-base font-bold tracking-tight text-gray-900 dark:text-slate-100 md:hidden">
                <span className="text-primary-600">Rum Beauty & Spa</span> luôn mang đến những sản phẩm chất lượng nhất
            </h1>
            <div className="flex items-center justify-end md:w-full">
                <SearchInput />
                <div className="relative inline-block text-left">
                    <SortButton />
                    <div
                        className="hidden absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                        id="products-sort-menu"
                    >
                        <div className="py-1" role="none">
                            <a
                                href="#"
                                className="font-medium text-gray-900 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Most Popular
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Best Rating
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                            >
                                Newest
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                            >
                                Price: Low to High
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-4"
                            >
                                Price: High to Low
                            </a>
                        </div>
                    </div>
                </div>
                <FilterButton />
            </div>
        </div>
    );
};

export default ProductsHeader;
