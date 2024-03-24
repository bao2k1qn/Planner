import CategoryFilter from '@/components/categoryFilter/CategoryFilter';
import ProductsHeader from '@/components/productsHeader/ProductsHeader';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex md:block content-wrapper h-full ct-max-w-screen font-primary text-[0.9375rem] mx-auto px-10 md:px-4">
            <div className="w-full">
                <div>
                    <main className="mx-auto w-full max-w-7xl">
                        <ProductsHeader />
                        <section aria-labelledby="products-heading" className="pb-24">
                            <div className="grid md:grid-cols-1 grid-cols-4">
                                <CategoryFilter />
                                <div className="col-span-3 p-5">{children}</div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
