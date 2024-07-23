import { feedbacks } from '@/constants/data';

import SocialProof from './SocialProof';

export default function SocialProofSection() {
    return (
        <section>
            <div className="mx-auto max-w-3xl text-center text-lg">
                <h2 className="mt-2 text-4xl">Khách hàng nói gì về Rum Beauty & Spa</h2>
            </div>
            <ul className="mt-24 columns-3 gap-8 md:columns-1">
                {feedbacks.map((feedback) => (
                    <li key={feedback.name} className="mt-8 break-inside-avoid-column first:mt-0">
                        <SocialProof {...feedback} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
