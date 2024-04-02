import { CTAs } from '@/constants/data';

import Benefit from './Benefit';

export default function CTASection() {
    return (
        <section className="mt-10 flex flex-col gap-10">
            {CTAs.map((cta) => (
                <Benefit key={cta.title} {...cta} className="first:mt-0" />
            ))}
        </section>
    );
}
