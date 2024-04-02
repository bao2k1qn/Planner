import Image from 'next/image';
import Link from 'next/link';

import NavBar from './Navbar';
import Button from '../_primitives/Button';

const Header = () => {
    return (
        <div className="sticky top-0 z-50 w-full border-b border-slate-900/10 bg-white/80 backdrop-blur transition-colors duration-500">
            <div className="ct-max-w-screen flex h-14 items-center justify-between">
                <div className="flex items-center gap-1">
                    <Image src="/images/rum-192x192.png" width="40" height="40" alt="rum beauty icon" />
                    <p className="text-xl font-extrabold text-primary-500">Rum Beauty & Spa</p>
                    <p className="ml-3 rounded-full bg-primary-400/10 px-4 py-2 text-xs font-medium text-primary-600 hover:bg-primary-400/20 md:hidden">
                        Nâng tầm vẻ đẹp Việt
                    </p>
                </div>
                <div className="flex gap-4">
                    <nav>
                        <NavBar />
                    </nav>
                    <Link href={process.env.NEXT_PUBLIC_ZALO_BOOKING_URL} target="_blank">
                        <Button>Đặt lịch</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
