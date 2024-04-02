import { features } from '@/constants/data';

import Feature from './Feature';

export default function FeaturesSection() {
    return (
        <section>
            <div className="mx-auto max-w-3xl text-center text-lg">
                <p className="font-semibold leading-7 text-primary-500">Dịch vụ</p>
                <h2 className="mt-2 text-4xl">Rum Beauty & Spa cung cấp các dịch vụ</h2>
            </div>
            <dl className="mt-20 grid grid-cols-3 gap-10 md:mt-12 md:grid-cols-1">
                {features.map((feature) => (
                    <Feature key={feature.title} {...feature} />
                ))}
            </dl>
        </section>
    );
}
