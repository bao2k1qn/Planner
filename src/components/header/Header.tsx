import Image from 'next/image';
import React from 'react';

import DarkModeControll from './DarkModeControll';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className="sticky top-0 w-full backdrop-blur transition-colors duration-500 z-10 border-b border-slate-900/10 dark:border-slate-50/[0.06]">
            <div className="max-w-screen-2xl mx-auto px-14 h-14 bg-white/80 backdrop-blur dark:bg-slate-900/80 flex justify-between">
                <div className="flex items-center">
                    <Image src="/images/logo_RUM.png" className="h-min" width={40} height={40} alt="logo description" />
                    <div className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-pink-500 ml-4">
                        Rum Beauty & Spa
                    </div>
                    <div className="ml-4 text-xs font-medium text-primary-600 bg-primary-400/10 rounded-full px-4 py-2 hover:bg-primary-400/20">
                        <span className="font-semibold">Slogan: </span> Looking to take your team away on a retreat
                    </div>
                </div>
                <div className="flex">
                    <NavBar />
                    <DarkModeControll />
                </div>
            </div>
        </div>
    );
};

export default Header;
