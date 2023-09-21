import React from 'react';

import { cn } from '@/lib/utils';

type TextFieldProps = {
    label: string;
    error?: boolean;
    helperText?: string;
} & React.ComponentPropsWithRef<'input'>;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ label, error, helperText, className, ...rest }, _ref) => {
        return (
            <div className={cn(className)}>
                <label className="block mb-1 text-sm font-medium text-slate-700">{label}</label>
                <input
                    className={cn(
                        'peer px-3 py-2 text-sm bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md sm:text-sm',
                        //#region  //*=========== disabled ===========
                        ['disabled:shadow-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200'],
                        //#endregion  //*=========== disabled ===========

                        //#region  //*=========== focus ===========
                        ['focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1'],
                        //#endregion  //*=========== focus ===========

                        //#region  //*=========== error ===========
                        [error && 'border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500'],
                        //#endregion  //*=========== error ===========
                    )}
                    {...rest}
                />
                {helperText && <p className="mt-2 text-pink-600 text-sm">{helperText}</p>}
            </div>
        );
    },
);

export default TextField;
