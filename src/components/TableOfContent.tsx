'use client';
import Link from 'next/link';
import { MouseEvent, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface IHeading {
    id: string;
    text: string;
    level: number;
}

const TableOfContent = () => {
    const [activeId, setActiveId] = useState('');
    const [headings, setHeadings] = useState<IHeading[]>([]);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll<HTMLElement>('h2, h3'));
        const headings = elements.map((elem: HTMLElement) => ({
            id: elem.id,
            text: elem.innerText,
            level: Number(elem.nodeName.charAt(1)),
        }));
        setHeadings(headings);
    }, []);

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };
        observer.current = new IntersectionObserver((entries) => handleObserver(entries), {
            rootMargin: '-0% 0% -70% 0px',
        });

        const elements = Array.from(document.querySelectorAll<HTMLElement>('h2, h3'));
        elements.forEach((elem) => observer.current?.observe(elem));

        return () => observer.current?.disconnect();
    }, []);

    const handleClick = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, heading: IHeading) => {
        e.preventDefault();
        const targetHeading = document.getElementById(heading.id);
        if (!targetHeading) return;

        targetHeading.classList.add('scroll-mt-16');
        targetHeading.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const getClassName = (level: number): string | undefined => {
        if (level === 2)
            return 'block py-1 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'; // h2
        if (level === 3)
            return 'flex items-start ml-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-sm'; //h3
        return undefined;
    };
    return (
        <div className="mt-5">
            <div className="flex">
                <p className="uppercase text-slate-800 font-semibold mr-2 dark:text-slate-400">Mục lục</p>
                <hr className="flex-grow self-end border-slate-400 mb-1" />
            </div>
            <nav className="mt-3">
                <ul>
                    {headings.map((heading) => (
                        <li key={heading.id} className={getClassName(heading.level)}>
                            {heading.level === 3 ? (
                                <svg
                                    width="3"
                                    height="24"
                                    viewBox="0 -9 3 24"
                                    className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                                >
                                    <path
                                        d="M0 0L3 3L0 6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            ) : null}
                            <Link
                                href={`#${heading.id}`}
                                onClick={(e) => handleClick(e, heading)}
                                className={cn('', activeId === heading.id ? 'text-primary-500' : '')}
                            >
                                {heading.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default TableOfContent;
