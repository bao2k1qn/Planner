import { LinkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type SocialProofType = {
    avatarUrl: string;
    name: string;
    feature: string;
    message: string;
};

export default function SocialProof({ avatarUrl, name, feature, message }: SocialProofType) {
    return (
        <div className="block rounded-2xl px-6 pb-5 pt-4 shadow-md">
            <div className="flex justify-between">
                <div className="flex content-center items-center gap-2">
                    <Image
                        width="48"
                        height="48"
                        src={avatarUrl}
                        alt="Rum user"
                        className="inline-block h-12 w-12 rounded-full"
                    />
                    <div>
                        <div className="text-heading font-semibold">{name}</div>
                        <div>
                            Đã <span className="font-semibold text-primary-500">{feature}</span> tại đây
                        </div>
                    </div>
                </div>
                <LinkIcon className="h-4 w-4 text-primary-500" />
            </div>
            <p className="text-heading mt-2 text-base">“{message}”</p>
        </div>
    );
}
