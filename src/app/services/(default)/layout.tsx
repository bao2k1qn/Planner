import ProductsHeader from '@/components/productsHeader/ProductsHeader';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="content-wrapper h-full ct-max-w-screen font-primary mx-auto px-10 md:px-4">
            <ProductsHeader />
            {children}
        </div>
    );
}
