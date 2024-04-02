import { contacts } from '@/constants/data';

import Contact from './Contact';

export default function ContactSection() {
    return (
        <section className="my-4 flex gap-10 md:flex-col">
            <div className="w-1/2 md:w-full">
                <div className=" max-w-3xl text-lg md:w-full">
                    <h2 className="mt-2 text-4xl">Liên hệ</h2>
                    <p className="mt-6">
                        Bạn có thể liên hệ với chúng tôi để đặt lịch hoặc tư vấn về dịch vụ. Chúng tôi sẽ luôn hỗ trợ
                        nhiệt tình và sẽ phản hồi trong vòng 48h.
                    </p>
                </div>
                <ul className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-1">
                    {contacts.map((contact) => (
                        <li key={contact.title}>
                            <Contact {...contact} />
                        </li>
                    ))}
                </ul>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.15692947307!2d106.64182347451755!3d10.799290258772649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175297f5b3092e5%3A0x98a401147e30e79b!2sRum%20beauty%20Spa!5e0!3m2!1svi!2s!4v1711881580463!5m2!1svi!2s"
                className="h-[500px] w-4/6 border-0 md:h-96 md:w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
}
