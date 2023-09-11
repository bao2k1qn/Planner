import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['var(--font-inter)'],
                secondary: ['var(--font-nunito)'],
            },
            colors: {
                primary: {
                    50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
                    100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
                    200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
                    300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
                    600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
                    700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
                    800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
                    900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
                    950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
                },
                dark: '#222222',
            },
        },
    },
    plugins: [],
};
export default config;
