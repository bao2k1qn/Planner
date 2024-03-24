import React from 'react';

import ServiceCard from '@/components/serviceCard/ServiceCard';

const Services = () => {
    return (
        <div>
            <div>
                <div className="flex overflow-auto p-1">
                    <a
                        href="/components"
                        className="bg-primary-500 text-white mt-3 mr-3 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        All
                    </a>
                    <a
                        href="/components/blog"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Blog
                    </a>
                    <a
                        href="/components/business"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Business
                    </a>
                    <a
                        href="/components/dashboard"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Dashboard
                    </a>
                    <a
                        href="/components/ecommerce"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Ecommerce
                    </a>
                    <a
                        href="/components/elearning"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Elearning
                    </a>
                    <a
                        href="/components/generic"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Generic
                    </a>
                    <a
                        href="/components/landing"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Landing
                    </a>
                    <a
                        href="/components/listings"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Listings
                    </a>
                    <a
                        href="/components/marketing"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Marketing
                    </a>
                    <a
                        href="/components/realestate"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Realestate
                    </a>
                    <a
                        href="/components/saas"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Saas
                    </a>
                    <a
                        href="/components/social"
                        className="text-gray-500 hover:bg-primary-50 mt-3 mr-5 ring-2 ring-primary-500 px-2 py-1 text-sm rounded-md focus:bg-primary-100 active:scale-95 outline-none dark:text-slate-100"
                    >
                        Social
                    </a>
                </div>
            </div>
            <div>
                <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 mt-5 font-semibold md:mt-2">
                    Chăm sóc da
                </h4>
                <div className="mt-4 flex flex-wrap gap-4">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
            <div>
                <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 mt-5 font-semibold md:mt-2">
                    Chăm sóc da
                </h4>
                <div className="mt-4 flex flex-wrap gap-4">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    );
};

export default Services;
