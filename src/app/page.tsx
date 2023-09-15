/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

import Button from '@/components/Button';

export default function HomePage() {
    return (
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nostrum nam illum
                                saepe praesentium provident et sit ab sapiente atque quae tempore quam minus labore
                                eius, cupiditate officia incidunt accusamus.
                            </p>
                            <Button className="mt-4">Xem dịch vụ</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-[500px] py-5">
                <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4">
                    <div className="h-full w-full bg-[url('/svgs/topic_2_bg.svg')] bg-no-repeat bg-right bg-cover flex md:block">
                        <div className="w-1/2 relative md:w-full md:h-2/5">
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nostrum nam illum
                                saepe praesentium provident et sit ab sapiente atque quae tempore quam minus labore
                                eius, cupiditate officia incidunt accusamus.
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
                                        Chăm sóc da
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
                                        Chăm sóc da
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
                                        Chăm sóc da
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
                                        Chăm sóc da
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
                                        Chăm sóc da
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
                <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4">
                    <div className="h-full w-full bg-[url('/svgs/topic_3_bg.svg')] bg-no-repeat bg-left bg-cover p-1 py-12">
                        <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 font-semibold w-fit mx-auto">
                            Dịch vụ của chúng tôi
                        </h4>
                        <h2 className="mt-6 text-2xl font-extrabold w-fit mx-auto text-center">
                            Dịch vụ của chúng tôi luôn mang đến một trải nghiệm tuyệt vời
                        </h2>
                        <div className="flex flex-1 overflow-x-scroll py-10 ct-scrollbar">
                            <div className="flex justify-center gap-10">
                                <div className="w-80 rounded overflow-hidden shadow-lg bg-white">
                                    <div className="p-3">
                                        <Image
                                            className="w-80 h-52 rounded"
                                            src="/images/topic2_1.jpg"
                                            alt=""
                                            width={320}
                                            height={200}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="font-bold text-xl">The Coldest Sunset</div>
                                        <p className="text-slate-500 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                                            nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                        <a className="text-primary-400 block mt-4 text-sm font-semibold">Xem thêm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
