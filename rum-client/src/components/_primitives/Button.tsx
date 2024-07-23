import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-centers justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-primary-500 text-white shadow hover:bg-primary-500/90',
                destructive: 'bg-red-500 text-white shadow-sm hover:bg-red-500/90',
                outline: 'border border-primary-500 bg-transparent text-primary-500 shadow-sm hover:bg-primary-100',
                ghost: 'text-primary-500 hover:bg-primary-500 hover:text-white',
                link: 'text-primary-500 underline-offset-4 hover:underline',
            },
            size: {
                default: 'px-4 py-2',
                sm: 'px-3 py-2 rounded-md text-xs',
                lg: 'px-9 py-2 rounded-md text-base',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    // New props is here
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { buttonVariants };
export default Button;
