import Link from 'next/link';
import React from 'react';

import Button from '../Button';

export default function CardEcommerce() {
    return (
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[17rem] h-80 relative">
            <svg
                className="absolute bottom-0 left-0 mb-8 fill-slate-500 opacity-10"
                viewBox="0 0 375 283"
                fill="none"
                style={{ transform: 'scale(1.5)' }}
            >
                <rect x="170.52" y="195" width={152} height={152} rx={8} transform="rotate(-45 159.52 175)" />
                <rect x="30" y="125" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" />
            </svg>
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/id/493/800/600" alt="card image" className="h-[9rem] w-full relative" />
            </figure>
            <div className="px-3 py-2 flex flex-col h-[11rem] relative">
                <header>
                    <h3 className="text-[15px] font-medium text-slate-700 leading-5">
                        Thanh tẩy toàn thân bằng ngũ cốc tự nhiên
                    </h3>
                </header>
                <p className="text-sm leading-4 mt-1 text-[13px]">Dưỡng da mãi mà da vẫn sạm đen, không đều màu </p>
                <div className="flex gap-2 py-2">
                    <span className="w-fit bg-primary-500/90 rounded-full text-slate-50 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        230.000đ
                    </span>
                    <span className="w-fit bg-primary-500/90 rounded-full text-slate-50 text-xs font-bold px-3 py-2 leading-none flex items-center">
                        1h
                    </span>
                </div>
                <div className="flex justify-end gap-2 mt-auto">
                    <Link href="/services/abc" className="flex-1">
                        <Button variant="secondary" outline="none" className="rounded w-full">
                            <span className="order-2">Chi tiết</span>
                        </Button>
                    </Link>
                    <Link href="/services/abc" className="flex-1">
                        <Button outline="rounded" className="w-full">
                            <span className="order-2">Đặt lịch</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
