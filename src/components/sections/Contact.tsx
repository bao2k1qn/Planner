import { CONTACT_TYPES } from '@/constants/data';

type Contact = {
    title: string;
    values: string[];
    type: string;
    href?: string;
};

export default function Contact({ type, title, values, href }: Contact) {
    return (
        <div className="flex h-full flex-col">
            <h3 className="border-l-2 border-primary-500 pl-6 text-base font-semibold">{title}</h3>
            <div className="flex-1 border-l-2 border-slate-300 pl-6 pt-2 text-base">
                {type === CONTACT_TYPES.LINK
                    ? values.map((value) => (
                          <a
                              key={value}
                              href={href}
                              target="_blank"
                              className="text-wrap text-primary-400 underline underline-offset-4"
                          >
                              {value}
                          </a>
                      ))
                    : null}
                {type === CONTACT_TYPES.TYPOGRAPHY ? values.map((value) => <p key={value}>{value}</p>) : null}
            </div>
        </div>
    );
}
