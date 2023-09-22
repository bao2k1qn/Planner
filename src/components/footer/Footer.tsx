import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className="w-full h-fit ct-bg-custom-reverse">
            <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4 text-slate-900">
                <div className="flex justify-evenly py-10">
                    <div>
                        <div className="flex items-center">
                            <Image
                                src="/images/logo_RUM.png"
                                className="w-auto h-auto"
                                width={40}
                                height={40}
                                alt="logo description"
                            />
                            <div className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-pink-500 ml-4">
                                Rum Beauty & Spa
                            </div>
                        </div>
                        <p className="mt-2 text-slate-500 text-sm line-clamp-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
                        </p>
                        <div className="mt-4">
                            <strong>Domain:</strong>
                            <span className="text-slate-500 text-sm ml-2">www.example.com</span>
                        </div>
                        <div className="flex mt-2">
                            <strong>Follow:</strong>
                            <Link href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="22px"
                                    height="22px"
                                    className="ml-2"
                                >
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
                                    <path
                                        fill="#fff"
                                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="text-slate-500">
                        <h3 className="text-slate-800">Company</h3>
                        <Link href="/" className="block text-sm mt-1">
                            Trang chủ
                        </Link>
                        <Link href="/" className="block text-sm mt-1">
                            Dịch vụ
                        </Link>
                        <Link href="/" className="block text-sm mt-1">
                            Sản phẩm
                        </Link>
                        <Link href="/" className="block text-sm mt-1">
                            Bài viết
                        </Link>
                        <Link href="/" className="block text-sm mt-1">
                            Về chúng tôi
                        </Link>
                    </div>
                    <div className="text-slate-500">
                        <h3 className="text-slate-800">Offical Info</h3>
                        <div className="flex mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                            <div className="text-sm ml-2">497 Hòa Hảo, P.7, Q.10, TPHCM</div>
                        </div>
                        <div className="flex mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                            <div className="text-sm ml-2">example@gmail.com</div>
                        </div>
                        <div className="flex mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                />
                            </svg>
                            <div className="text-sm ml-2">0392747999</div>
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-2 border-t border-slate-300 flex justify-between text-slate-500 dark:border-slate-200/5">
                    <div className=" flex">
                        <p className="text-slate-500 text-sm">Copyright © 2023 MBao Labs</p>
                        <p className="ml-4 pl-4 border-l border-slate-200 dark:border-slate-200/5">
                            <a className="text-slate-500 text-sm" href="/brand">
                                Trademark Policy
                            </a>
                        </p>
                    </div>
                    <a
                        className="text-slate-500 text-sm"
                        href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/word-break.mdx"
                    >
                        Edit this page on MB
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;
