import React from 'react';

const SideBar = () => {
    return (
        <div className="inset-0 w-64 px-5 pb-10 overflow-y-auto">
            <nav id="nav" className="text-sm leading-6 relative">
                <ul>
                    <li className="mt-6">
                        <h5 className="mb-4 font-semibold text-slate-900 dark:text-slate-200">Getting Started</h5>
                        <ul className="space-y-2 md:space-y-1 border-l border-slate-100 dark:border-slate-800">
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px text-primary-500 border-current font-semibold dark:text-primary-400"
                                    href="/docs/installation"
                                >
                                    Installation
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/editor-setup"
                                >
                                    Editor Setup
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/using-with-preprocessors"
                                >
                                    Using with Preprocessors Using with Preprocessors Using with Preprocessors
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/optimizing-for-production"
                                >
                                    Optimizing for Production
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/browser-support"
                                >
                                    Browser Support
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/upgrade-guide"
                                >
                                    Upgrade Guide
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-6">
                        <h5 className="mb-4 font-semibold text-slate-900 dark:text-slate-200">Getting Started</h5>
                        <ul className="space-y-2 md:space-y-1 border-l border-slate-100 dark:border-slate-800">
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/installation"
                                >
                                    Installation
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/editor-setup"
                                >
                                    Editor Setup
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/using-with-preprocessors"
                                >
                                    Using with Preprocessors
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/optimizing-for-production"
                                >
                                    Optimizing for Production
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/browser-support"
                                >
                                    Browser Support
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/upgrade-guide"
                                >
                                    Upgrade Guide
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
