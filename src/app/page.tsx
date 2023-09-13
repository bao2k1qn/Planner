/* eslint-disable @next/next/no-img-element */

import Button from '@/components/Button';

export default function HomePage() {
    return (
        <main>
            <section className="w-full h-[500px] ct-bg-custom">
                <div className="content-wrapper h-full ct-max-w-screen font-primary text-base mx-auto px-10 md:px-4">
                    <div className="h-full bg-[url('/svgs/bg_landing_page.svg')] bg-no-repeat bg-right-bottom">
                        <div className="w-3/6 md:w-full p-6">
                            <h4 className="text-primary-500 pl-6 border-l-4 border-primary-500 mt-10 font-semibold">
                                Wellcome to Rum & Beauty Spa
                            </h4>
                            <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
                                Chúng tôi cam kết về sự hài lòng của bạn tại <span>Rum & Beauty Spa</span>
                            </h1>
                            <p className="mt-6 text-slate-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nostrum nam illum
                                saepe praesentium provident et sit ab sapiente atque quae tempore quam minus labore
                                eius, cupiditate officia incidunt accusamus.
                            </p>
                            <Button style="mt-4">Xem dịch vụ</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
