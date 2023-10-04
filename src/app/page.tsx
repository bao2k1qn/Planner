/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

import Button from '@/components/Button';
import Footer from '@/components/footer/Footer';
import Rating from '@/components/Rating';
import TextField from '@/components/TextField';

export default function HomePage() {
    return (
        <>
            <main>
                <section className="w-full h-[500px] ct-bg-custom">
                    <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4">
                        <div className="h-full bg-[url('/svgs/bg_landing_page.svg')] bg-no-repeat bg-right-bottom">
                            <div className="w-3/6 md:w-full p-6">
                                <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 mt-10 font-semibold md:mt-2">
                                    Wellcome to Rum & Beauty Spa
                                </h4>
                                <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
                                    Chúng tôi cam kết về sự hài lòng của bạn tại <span>Rum & Beauty Spa</span>
                                </h1>
                                <p className="mt-6 text-slate-500 lg:hidden">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nostrum nam
                                    illum saepe praesentium provident et sit ab sapiente atque quae tempore quam minus
                                    labore eius, cupiditate officia incidunt accusamus.
                                </p>
                                <Button className="mt-4">Xem dịch vụ</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full min-h-[500px] py-5">
                    <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4">
                        <div className="h-full w-full bg-[url('/svgs/topic_2_bg.svg')] bg-no-repeat bg-right bg-cover flex md:block">
                            <div className="w-1/2 relative md:w-full md:h-[250px]">
                                <Image
                                    className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-3/4 -translate-y-3/4 md:w-32 md:h-32"
                                    src="/images/topic2_1.jpg"
                                    alt="about RUM beauty & spa"
                                    width={256}
                                    height={256}
                                />
                                <Image
                                    className="absolute w-56 h-64 top-1/2 left-1/2 -translate-x-[5%] -translate-y-[25%] md:w-28 md:h-32"
                                    src="/images/topic2_2.jpg"
                                    alt="about RUM beauty & spa"
                                    width={224}
                                    height={256}
                                />
                            </div>
                            <div className="w-1/2 md:w-full">
                                <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 mt-10 font-semibold md:mt-2">
                                    About Us
                                </h4>
                                <h2 className="mt-6 text-2xl font-extrabold md:mt-2">
                                    <span>Rum & Beauty Spa</span> là một nơi tuyệt vời cho sắc đẹp của bạn
                                </h2>
                                <p className="mt-6 text-slate-500 lg:hidden">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nostrum nam
                                    illum saepe praesentium provident et sit ab sapiente atque quae tempore quam minus
                                    labore eius, cupiditate officia incidunt accusamus.
                                </p>
                                <div className="flex flex-wrap justify-start md:w-full">
                                    <div className="flex items-center mt-3 flex-[50%]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-6 h-6 text-primary-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <h3 className="ml-2 font-bold text-slate-700 dark:text-slate-300 md:text-base">
                                            Dịch vụ tốt
                                        </h3>
                                    </div>
                                    <div className="flex items-center mt-3 flex-[50%]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-6 h-6 text-primary-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <h3 className="ml-2 font-bold text-slate-700 dark:text-slate-300 md:text-base">
                                            Không gian thiết bị hiện đại
                                        </h3>
                                    </div>
                                    <div className="flex items-center mt-3 flex-[50%]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-6 h-6 text-primary-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <h3 className="ml-2 font-bold text-slate-700 dark:text-slate-300 md:text-base">
                                            Nhân viên trình độ cao
                                        </h3>
                                    </div>
                                    <div className="flex items-center mt-3 flex-[50%]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-6 h-6 text-primary-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <h3 className="ml-2 font-bold text-slate-700 dark:text-slate-300 md:text-base">
                                            Chăm sóc khách hàng tận tình
                                        </h3>
                                    </div>
                                    <div className="flex items-center mt-3 flex-[50%]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-6 h-6 text-primary-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <h3 className="ml-2 font-bold text-slate-700 dark:text-slate-300 md:text-base">
                                            Cam kết đảm bảo chất lượng
                                        </h3>
                                    </div>
                                </div>
                                <Button className="mt-10 md:mt-4" outline="rounded">
                                    Xem thêm
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-auto ct-bg-custom-reverse">
                    <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4 text-slate-900">
                        <div className="h-full w-full bg-[url('/svgs/topic_3_bg.svg')] bg-no-repeat bg-left bg-cover p-1 py-12">
                            <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 font-semibold w-fit mx-auto">
                                Dịch vụ của chúng tôi
                            </h4>
                            <h2 className="mt-6 text-2xl font-extrabold w-fit mx-auto text-center">
                                Dịch vụ của chúng tôi luôn mang đến một trải nghiệm tuyệt vời
                            </h2>
                            <div className="flex flex-1 overflow-x-scroll py-10 ct-scrollbar">
                                <div className="flex justify-center gap-10 md:gap-5">
                                    <div className="w-80 h-96 rounded shadow-lg bg-white md:w-60 md:h-72 group duration-300 hover:-translate-y-3 dark:bg-slate-800 dark:text-slate-100">
                                        <div className="p-3 relative">
                                            <Image
                                                className="w-80 h-48 rounded md:w-60 md:h-32"
                                                src="/images/topic2_1.jpg"
                                                alt=""
                                                width={320}
                                                height={200}
                                            />
                                            <div className="absolute right-8 -bottom-0 w-11 h-11 bg-pink-400 rounded flex items-center justify-center text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <div className="font-bold text-xl group-hover:text-primary-500">
                                                The Coldest Sunset
                                            </div>
                                            <p className="text-slate-500 text-sm line-clamp-4 md:line-clamp-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem
                                                atque nam quo quod. Quod modi tempora, omnis, vero neque tenetur
                                                exercitationem corporis perferendis odit nisi impedit! In, tempora
                                                voluptates.
                                            </p>
                                            <a className="text-primary-400 block mt-4 text-sm font-semibold">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-80 h-96 rounded shadow-lg bg-white md:w-60 md:h-72 group duration-300 hover:-translate-y-3 dark:bg-slate-800 dark:text-slate-100">
                                        <div className="p-3 relative">
                                            <Image
                                                className="w-80 h-48 rounded md:w-60 md:h-32"
                                                src="/images/topic2_1.jpg"
                                                alt=""
                                                width={320}
                                                height={200}
                                            />
                                            <div className="absolute right-8 -bottom-0 w-11 h-11 bg-green-400 rounded flex items-center justify-center text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <div className="font-bold text-xl group-hover:text-primary-500">
                                                The Coldest Sunset
                                            </div>
                                            <p className="text-slate-500 text-sm line-clamp-4 md:line-clamp-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem
                                                atque nam quo quod. Quod modi tempora, omnis, vero neque tenetur
                                                exercitationem corporis perferendis odit nisi impedit! In, tempora
                                                voluptates.
                                            </p>
                                            <a className="text-primary-400 block mt-4 text-sm font-semibold">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-80 h-96 rounded shadow-lg bg-white md:w-60 md:h-72 group duration-300 hover:-translate-y-3 dark:bg-slate-800 dark:text-slate-100">
                                        <div className="p-3 relative">
                                            <Image
                                                className="w-80 h-48 rounded md:w-60 md:h-32"
                                                src="/images/topic2_1.jpg"
                                                alt=""
                                                width={320}
                                                height={200}
                                            />
                                            <div className="absolute right-8 -bottom-0 w-11 h-11 bg-blue-400 rounded flex items-center justify-center text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <div className="font-bold text-xl group-hover:text-primary-500">
                                                The Coldest Sunset
                                            </div>
                                            <p className="text-slate-500 text-sm line-clamp-4 md:line-clamp-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem
                                                atque nam quo quod. Quod modi tempora, omnis, vero neque tenetur
                                                exercitationem corporis perferendis odit nisi impedit! In, tempora
                                                voluptates.
                                            </p>
                                            <a className="text-primary-400 block mt-4 text-sm font-semibold">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-80 h-96 rounded shadow-lg bg-white md:w-60 md:h-72 group duration-300 hover:-translate-y-3 dark:bg-slate-800 dark:text-slate-100">
                                        <div className="p-3 relative">
                                            <Image
                                                className="w-80 h-48 rounded md:w-60 md:h-32"
                                                src="/images/topic2_1.jpg"
                                                alt=""
                                                width={320}
                                                height={200}
                                            />
                                            <div className="absolute right-8 -bottom-0 w-11 h-11 bg-yellow-400 rounded flex items-center justify-center text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <div className="font-bold text-xl group-hover:text-primary-500">
                                                The Coldest Sunset
                                            </div>
                                            <p className="text-slate-500 text-sm line-clamp-4 md:line-clamp-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem
                                                atque nam quo quod. Quod modi tempora, omnis, vero neque tenetur
                                                exercitationem corporis perferendis odit nisi impedit! In, tempora
                                                voluptates.
                                            </p>
                                            <a className="text-primary-400 block mt-4 text-sm font-semibold">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-80 h-96 rounded shadow-lg bg-white md:w-60 md:h-72 group duration-300 hover:-translate-y-3 dark:bg-slate-800 dark:text-slate-100">
                                        <div className="p-3 relative">
                                            <Image
                                                className="w-80 h-48 rounded md:w-60 md:h-32"
                                                src="/images/topic2_1.jpg"
                                                alt=""
                                                width={320}
                                                height={200}
                                            />
                                            <div className="absolute right-8 -bottom-0 w-11 h-11 bg-pink-400 rounded flex items-center justify-center text-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <div className="font-bold text-xl group-hover:text-primary-500">
                                                The Coldest Sunset
                                            </div>
                                            <p className="text-slate-500 text-sm line-clamp-4 md:line-clamp-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem
                                                atque nam quo quod. Quod modi tempora, omnis, vero neque tenetur
                                                exercitationem corporis perferendis odit nisi impedit! In, tempora
                                                voluptates.
                                            </p>
                                            <a className="text-primary-400 block mt-4 text-sm font-semibold">
                                                Xem chi tiết
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-5">
                    <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4">
                        <div className="h-full w-full bg-[url('/svgs/topic_2_bg.svg')] bg-no-repeat bg-left bg-cover">
                            <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 font-semibold w-fit mx-auto">
                                Cách chúng tôi làm việc.
                            </h4>
                            <h2 className="mt-6 text-2xl font-extrabold w-fit mx-auto text-center">
                                Quá trình làm việc của chúng tôi.
                            </h2>
                            <div className="flex justify-center">
                                <div className="w-fit">
                                    <div className="flex flex-wrap justify-around mt-6 gap-6">
                                        <div className="w-60 h-48 md:w-40 md:h-48">
                                            <div className="w-full">
                                                <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-semibold">
                                                    1
                                                </div>
                                            </div>
                                            <h4 className="mt-2">Điền form</h4>
                                            <p className="mt-2 text-slate-500 text-sm line-clamp-5 md:line-clamp-4">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="w-60 h-48 md:w-40 md:h-48">
                                            <div className="w-full">
                                                <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-semibold">
                                                    2
                                                </div>
                                            </div>
                                            <h4 className="mt-2">Tạo một cuộc hẹn</h4>
                                            <p className="mt-2 text-slate-500 text-sm line-clamp-5 md:line-clamp-4">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="w-60 h-48 md:w-40 md:h-48">
                                            <div className="w-full">
                                                <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-semibold">
                                                    3
                                                </div>
                                            </div>
                                            <h4 className="mt-2">Tư vấn</h4>
                                            <p className="mt-2 text-slate-500 text-sm line-clamp-5 md:line-clamp-4">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="w-60 h-48 md:w-40 md:h-48">
                                            <div className="w-full">
                                                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-semibold">
                                                    4
                                                </div>
                                            </div>
                                            <h4 className="mt-2">Chăm sóc & điều trị</h4>
                                            <p className="mt-2 text-slate-500 text-sm line-clamp-5 md:line-clamp-4">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                    <h4>Hoặc</h4>
                                    <div className="flex flex-wrap justify-around mt-6 gap-6">
                                        <div className="w-60 h-48 md:w-40 md:h-48">
                                            <div className="w-full">
                                                <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-semibold">
                                                    1
                                                </div>
                                            </div>
                                            <h4 className="mt-2">Đến trực tiếp</h4>
                                            <p className="mt-2 text-slate-500 text-sm line-clamp-5 md:line-clamp-4">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="w-60 h-48 md:w-40 md:h-48">
                                            <div className="w-full">
                                                <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-semibold">
                                                    2
                                                </div>
                                            </div>
                                            <h4 className="mt-2">Tư vấn</h4>
                                            <p className="mt-2 text-slate-500 text-sm line-clamp-5 md:line-clamp-4">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="w-60 h-48 md:w-40 md:h-48">
                                            <div className="w-full">
                                                <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-semibold">
                                                    3
                                                </div>
                                            </div>
                                            <h4 className="mt-2">Chăm sóc & điều trị</h4>
                                            <p className="mt-2 text-slate-500 text-sm line-clamp-5 md:line-clamp-4">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-[500px] ct-bg-custom">
                    <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4">
                        <div className="flex justify-evenly items-center w-full h-full p-20 md:p-10 text-slate-800">
                            <div className="flex flex-col md:w-full">
                                <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 font-semibold w-fit">
                                    Liên hệ
                                </h4>
                                <h2 className="font-extrabold w-fit mt-2">
                                    Liên hệ với chúng tôi đặt lịch hoặc tư vấn miễn phí
                                </h2>
                                <TextField label="Họ và tên" type="text" placeholder="Nguyễn Văn A" className="mt-10" />
                                <TextField label="Số điện thoại" type="text" placeholder="0392xxx" className="mt-2" />
                                <TextField
                                    label="Email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="mt-2"
                                />
                                <Button className="w-full rounded mt-10">Gửi</Button>
                            </div>
                            <div className="w-96 h-full bg-[url('/svgs/topic_5_email.svg')] bg-no-repeat bg-contain bg-center md:hidden" />
                        </div>
                    </div>
                </section>
                <section className="w-full h-auto">
                    <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4">
                        <div className="h-full w-full bg-[url('/svgs/topic_3_bg.svg')] bg-no-repeat bg-left bg-cover p-1 py-12">
                            <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 font-semibold w-fit mx-auto">
                                Đánh giá
                            </h4>
                            <h2 className="mt-6 text-2xl font-extrabold w-fit mx-auto text-center">
                                Khách hàng của chúng tôi nói gì
                            </h2>
                            <div className="flex flex-1 overflow-x-scroll py-10 ct-scrollbar">
                                <div className="w-full flex justify-center gap-10 md:gap-5">
                                    <div className="w-72 h-fit rounded shadow-lg group duration-300 ct-bg-custom hover:-translate-y-3 dark:bg-slate-800">
                                        <div className="p-3 w-60">
                                            <Rating value={5} className="" />
                                            <q className="mt-2 text-slate-500 text-sm line-clamp-5">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </q>
                                            <div className="flex mt-4">
                                                <Image
                                                    className="w-10 h-10 rounded-full"
                                                    src="/images/topic2_2.jpg"
                                                    alt="about RUM beauty & spa"
                                                    width={256}
                                                    height={256}
                                                />
                                                <div className="ml-4">
                                                    <div className="text-sm font-semibold group-hover:text-primary-500">
                                                        Nguyễn Minh Bao
                                                    </div>
                                                    <div className="text-slate-500 text-xs">Khách hàng</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-72 h-fit rounded shadow-lg group duration-300 ct-bg-custom hover:-translate-y-3 dark:bg-slate-800">
                                        <div className="p-3 w-60">
                                            <Rating value={5} className="" />
                                            <q className="mt-2 text-slate-500 text-sm line-clamp-5">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </q>
                                            <div className="flex mt-4">
                                                <Image
                                                    className="w-10 h-10 rounded-full"
                                                    src="/images/topic2_2.jpg"
                                                    alt="about RUM beauty & spa"
                                                    width={256}
                                                    height={256}
                                                />
                                                <div className="ml-4">
                                                    <div className="text-sm font-semibold group-hover:text-primary-500">
                                                        Nguyễn Minh Bao
                                                    </div>
                                                    <div className="text-slate-500 text-xs">Khách hàng</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-72 h-fit rounded shadow-lg group duration-300 ct-bg-custom hover:-translate-y-3 dark:bg-slate-800">
                                        <div className="p-3 w-60">
                                            <Rating value={5} className="" />
                                            <q className="mt-2 text-slate-500 text-sm line-clamp-5">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet
                                                consectetur adipisicing elit.
                                            </q>
                                            <div className="flex mt-4">
                                                <Image
                                                    className="w-10 h-10 rounded-full"
                                                    src="/images/topic2_2.jpg"
                                                    alt="about RUM beauty & spa"
                                                    width={256}
                                                    height={256}
                                                />
                                                <div className="ml-4">
                                                    <div className="text-sm font-semibold group-hover:text-primary-500">
                                                        Nguyễn Minh Bao
                                                    </div>
                                                    <div className="text-slate-500 text-xs">Khách hàng</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
