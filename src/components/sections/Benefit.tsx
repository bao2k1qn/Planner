import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

import { cn } from '@/lib/utils';

type BenefitType = {
    topic: string;
    title: string;
    description: string;
    benefits: string[];
    imagePath: string;
} & React.ComponentPropsWithRef<'div'>;

export default function Benefit({ topic, title, benefits, description, imagePath, className, ...rest }: BenefitType) {
    return (
        <div
            className={cn('flex items-center even:flex-row-reverse md:flex-col md:even:flex-col', className)}
            {...rest}
        >
            <div className="w-5/12 md:w-full">
                <dt className="text-lg">
                    {topic ? <p className="font-semibold leading-7 text-primary-500">{topic}</p> : null}
                    <h2 className="mt-2 text-3xl">{title}</h2>
                </dt>
                <dd className="mt-5 text-base text-slate-600">
                    <p>{description}</p>
                    <ul className="mt-5 leading-8">
                        {benefits.map((benefit) => (
                            <li key={benefit}>
                                <CheckCircleIcon className="mr-2 inline-block h-5 w-5 text-primary-400" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </dd>
            </div>
            <div className="flex-1">
                <Image width="500" height="500" src={imagePath} className="mx-auto h-[400px] object-contain" alt="" />
            </div>
        </div>
    );
}
