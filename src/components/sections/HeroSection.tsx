import Image from 'next/image';
import Link from 'next/link';

import Button from '../_primitives/Button';

export default function HeroSection() {
    return (
        <section className="grid grid-cols-12 gap-8 py-4 md:py-2">
            <div className="col-span-7 flex flex-col justify-center gap-8 md:col-span-12 md:gap-4">
                <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-4xl">
                    <span className="text-primary-500">Rum Beauty & Spa</span> - Nơi tạo nên những giây phút thăng hoa,
                    thư giãn theo cách sang trọng, thú vị nhất.
                </h1>
                <p className="text-lg font-normal text-slate-600 md:text-base">
                    “Hãy là chính mình và khẳng định theo chất riêng”
                </p>
                <div className="flex gap-4">
                    <Link href={process.env.NEXT_PUBLIC_ZALO_BOOKING_URL} target="_blank">
                        <Button size="lg">TƯ VẤN NGAY</Button>
                    </Link>
                </div>
            </div>
            <div className="col-span-5 md:col-span-12">
                <Image src="/svgs/hero.svg" width="500" height="500" alt="rum beauty icon" />
            </div>
        </section>
    );
}
