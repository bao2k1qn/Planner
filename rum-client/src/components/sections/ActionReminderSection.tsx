import Link from 'next/link';

import Button from '../_primitives/Button';

export default function ActionReminderSection() {
    return (
        <section>
            <div className="mx-auto max-w-3xl text-center text-lg">
                <p className="font-semibold leading-7 text-primary-500">Một lần nữa</p>
                <h2 className="mt-2 text-4xl">Đặt lịch ngay</h2>
                <p className="mt-6">
                    Liên hệ với chúng tôi để đặt lịch hoặc tư vấn về dịch vụ ngay bây giờ để tận hưởng các dịch vụ của
                    chúng tôi.
                </p>
                <Link href={process.env.NEXT_PUBLIC_ZALO_BOOKING_URL} target="_blank">
                    <Button size="lg" className="mt-6">
                        Đặt lịch
                    </Button>
                </Link>
            </div>
        </section>
    );
}
