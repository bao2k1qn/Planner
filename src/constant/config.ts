export interface NavType {
    name: string;
    href: string;
}

export const siteConfig = {
    title: 'Rum Beauty & Spa',
    description:
        'A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
    url: 'https://example.com',
};

export const navs: NavType[] = [
    {
        name: 'Giới thiệu',
        href: '/',
    },
    {
        name: 'Dịch vụ',
        href: '/services',
    },
    {
        name: 'Sản phẩm',
        href: '/products',
    },
    {
        name: 'Bài viết',
        href: '/blogs',
    },
];
