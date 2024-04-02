import { SparklesIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';

export default function Divider({ className, ...rest }: React.ComponentPropsWithRef<'div'>) {
    return (
        <div className={cn('mx-auto box-content h-5 w-1/2 max-w-2xl', className)} {...rest}>
            <div className="relative h-full">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-[1px] border-primary-300"></div>
                </div>
                <div className="absolute flex w-full justify-center">
                    <SparklesIcon className="box-content h-5 w-5 bg-white px-2 text-primary-400" />
                </div>
            </div>
        </div>
    );
}
