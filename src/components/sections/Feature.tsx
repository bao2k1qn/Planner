import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type FeatureType = {
    title: string;
    description: string;
    href: string;
    Icon: HeroIcon;
} & React.ComponentPropsWithRef<'div'>;

export default function Feature({ title, description, href, Icon, className, ...rest }: FeatureType) {
    return (
        <div className={cn('flex flex-col', className)} {...rest}>
            <dt className="flex gap-2 text-base font-semibold leading-7">
                <Icon className="h-6 w-6 text-primary-400" />
                {title}
            </dt>
            <dd className="mt-4 flex flex-1 flex-col">
                <p className="line-clamp-4 flex-1 text-base leading-7 text-slate-600">{description}</p>
                <p>
                    <Link
                        href={href}
                        target="_blank"
                        className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-500"
                    >
                        Đặt ngay
                        <ArrowRightIcon className="w-4" />
                    </Link>
                </p>
            </dd>
        </div>
    );
}
