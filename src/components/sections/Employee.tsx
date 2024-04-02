import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type EmployeeType = {
    name: string;
    role: string;
    responsibility: string;
} & React.ComponentPropsWithRef<'div'>;

export default function Employee({ name, responsibility, className, ...rest }: EmployeeType) {
    return (
        <div className={cn('flex', className)} {...rest}>
            <Image
                width="144"
                height="144"
                src="/images/default-employee.png"
                className="mr-6 h-36 w-36 rounded-full"
                alt=""
            />
            <div className="text-base">
                <h3>{name}</h3>
                <div className="mb-3 mt-2 text-primary-500">
                    <p className="line-clamp-2">Dịch vụ: {responsibility}</p>
                </div>
                <i className="text-sm">* Trên Zalo, bạn cần cung cấp mã nhân viên trên để book nhân viên này</i>
                <div className="flex gap-1 text-slate-400">
                    <Link
                        href={process.env.NEXT_PUBLIC_ZALO_BOOKING_URL}
                        target="_blank"
                        className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary-500"
                    >
                        Đặt nhân viên này
                        <ArrowRightIcon className="w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
