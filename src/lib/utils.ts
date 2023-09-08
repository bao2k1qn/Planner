import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class
 * @param inputs
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
