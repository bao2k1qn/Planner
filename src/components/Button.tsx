import * as React from 'react';

import { cn } from '@/lib/utils';

const ButtonSize = ['sm', 'base'] as const;
const ButtonColor = ['primary', 'outline', 'light'] as const;
const ButtonBorder = ['none', 'roundedfull', 'rounded'];

type ButtonProps = {
    children: React.ReactNode;
    size?: (typeof ButtonSize)[number];
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    variant?: (typeof ButtonColor)[number];
    outline?: (typeof ButtonBorder)[number];
    isLoading?: boolean;
    disabled?: boolean;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            size = 'base',
            variant = 'primary',
            outline = 'roundedfull',
            // iconLeft,
            // iconRight,
            isLoading,
            disabled,
            ...rest
        },
        _ref,
    ) => {
        const isDisabled = disabled;
        return (
            <button
                ref={_ref}
                type="button"
                disabled={isDisabled}
                className={cn(
                    'font-semibold transition-colors duration-200',
                    //#region  //*=========== Size ===========
                    [size === 'sm' && 'px-3 py-1 text-xs', size === 'base' && 'px-5 py-2 text-sm md:text-xs'],
                    //#endregion  //*=========== Size ===========

                    //#region  //*=========== Variants ===========
                    [
                        variant === 'primary' &&
                            'bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-500 disabled:bg-gray-400',
                        variant === 'outline' &&
                            'text-primary-500 border-primary-500 border hover:bg-primary-400/20 active:bg-primary-400/50 disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-transparent',
                        variant === 'light' &&
                            'text-primary-500 bg-primary-400/20 rounded-full hover:bg-primary-400/40 active:bg-primary-400/50',
                    ],
                    //#endregion  //*=========== Variants ===========

                    //#region  //*=========== Outlines ===========
                    [
                        outline === 'none' && 'border-none',
                        outline === 'roundedfull' && 'border rounded-full',
                        outline === 'rounded' && 'border rounded-[4px]',
                    ],
                    //#endregion  //*=========== Outlines ===========

                    //#region  //*=========== Loading ===========
                    [isLoading && 'flex items-center'],
                    //#endregion  //*=========== Loading ===========
                    'disabled:cursor-not-allowed',

                    className,
                )}
                {...rest}
            >
                {isLoading ? (
                    <>
                        <svg
                            className={cn('motion-reduce:hidden animate-spin', [
                                size === 'sm' && 'mr-2 h-4 w-4',
                                size === 'base' && 'mr-3 h-5 w-5',
                            ])}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Đang xử lý...
                    </>
                ) : (
                    children
                )}
            </button>
        );
    },
);

export default Button;
