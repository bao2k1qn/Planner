import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    size?: 'normal' | 'meidum' | 'small';
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    color?: 'primary' | 'secondary';
    style?: React.ComponentProps<'button'>['className'];
}
const Button = (props: ButtonProps) => {
    return (
        <button
            className={`px-5 py-2 leading-5 bg-primary-500 text-sm font-semibold text-white rounded-full hover:bg-primary-400 ${props.style}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
