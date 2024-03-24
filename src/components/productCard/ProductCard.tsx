import React from 'react';

import Button from '../Button';

const ProductCard = () => {
    return (
        <div className="flex flex-wrap items-center justify-start gap-10 md:justify-center">
            <div className="flex-shrink-0 w-56 relative overflow-hidden bg-primary-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-5 px-14 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="relative w-28"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-4 pb-4 mt-2">
                    <span className="block opacity-75 -mb-1">America</span>
                    <span className="block font-semibold py-1">Kem chống nắng nâng Tone Ohui</span>

                    <span className="w-fit bg-white rounded-full text-primary-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        230.000đ
                    </span>
                    <div className="flex mt-2 gap-2">
                        <Button className="px-3 py-0 h-8 w-full bg-transparent" outline="rounded">
                            Xem chi tiết
                        </Button>
                        <Button
                            className="px-3 py-0 h-8 text-white border-white bg-transparent"
                            outline="rounded"
                            variant="outline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 w-56 relative overflow-hidden bg-primary-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-5 px-14 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="relative w-28"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-4 pb-4 mt-2">
                    <span className="block opacity-75 -mb-1">America</span>
                    <span className="block font-semibold py-1">Kem chống nắng nâng Tone Ohui</span>

                    <span className="w-fit bg-white rounded-full text-primary-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        230.000đ
                    </span>
                    <div className="flex mt-2 gap-2">
                        <Button className="px-3 py-0 h-8 w-full bg-transparent" outline="rounded">
                            Xem chi tiết
                        </Button>
                        <Button
                            className="px-3 py-0 h-8 text-white border-white bg-transparent"
                            outline="rounded"
                            variant="outline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 w-56 relative overflow-hidden bg-primary-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-5 px-14 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="relative w-28"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-4 pb-4 mt-2">
                    <span className="block opacity-75 -mb-1">America</span>
                    <span className="block font-semibold py-1">Kem chống nắng nâng Tone Ohui</span>

                    <span className="w-fit bg-white rounded-full text-primary-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        230.000đ
                    </span>
                    <div className="flex mt-2 gap-2">
                        <Button className="px-3 py-0 h-8 w-full bg-transparent" outline="rounded">
                            Xem chi tiết
                        </Button>
                        <Button
                            className="px-3 py-0 h-8 text-white border-white bg-transparent"
                            outline="rounded"
                            variant="outline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 w-56 relative overflow-hidden bg-primary-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-5 px-14 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="relative w-28"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-4 pb-4 mt-2">
                    <span className="block opacity-75 -mb-1">America</span>
                    <span className="block font-semibold py-1">Kem chống nắng nâng Tone Ohui</span>

                    <span className="w-fit bg-white rounded-full text-primary-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        230.000đ
                    </span>
                    <div className="flex mt-2 gap-2">
                        <Button className="px-3 py-0 h-8 w-full bg-transparent" outline="rounded">
                            Xem chi tiết
                        </Button>
                        <Button
                            className="px-3 py-0 h-8 text-white border-white bg-transparent"
                            outline="rounded"
                            variant="outline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 w-56 relative overflow-hidden bg-primary-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-5 px-14 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="relative w-28"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-4 pb-4 mt-2">
                    <span className="block opacity-75 -mb-1">America</span>
                    <span className="block font-semibold py-1">Kem chống nắng nâng Tone Ohui</span>

                    <span className="w-fit bg-white rounded-full text-primary-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        230.000đ
                    </span>
                    <div className="flex mt-2 gap-2">
                        <Button className="px-3 py-0 h-8 w-full bg-transparent" outline="rounded">
                            Xem chi tiết
                        </Button>
                        <Button
                            className="px-3 py-0 h-8 text-white border-white bg-transparent"
                            outline="rounded"
                            variant="outline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            {/* <div className="flex-shrink-0 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    <img
                        className="relative w-40"
                        src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Outdoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Monstera</span>
                        <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $45.00
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    <img
                        className="relative w-40"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Outdoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Oak Tree</span>
                        <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $68.50
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    <img
                        className="relative w-40"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Indoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Peace Lily</span>
                        <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $36.00
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    <img
                        className="relative w-40"
                        src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Outdoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Monstera</span>
                        <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $45.00
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                    <rect
                        x="159.52"
                        y={175}
                        width={152}
                        height={152}
                        rx={8}
                        transform="rotate(-45 159.52 175)"
                        fill="white"
                    />
                    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{
                            background: 'radial-gradient(black, transparent 60%)',
                            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                            opacity: '0.2',
                        }}
                    />
                    <img
                        className="relative w-40"
                        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        alt=""
                    />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Outdoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Oak Tree</span>
                        <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $68.50
                        </span>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProductCard;
