import SideBar from '@/components/servicesSideBar/SideBar';
import SideBarDrawer from '@/components/servicesSideBar/SideBarDrawer';
import TableOfContent from '@/components/TableOfContent';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex md:block content-wrapper h-full ct-max-w-screen font-primary text-[0.9375rem] mx-auto px-10 md:px-4">
            <SideBarDrawer>
                <SideBar />
            </SideBarDrawer>
            {children}
            <div className="fixed top-16 right-[max(0px,calc(50%-48rem))] md:hidden w-64 px-5">
                <TableOfContent />
            </div>
        </div>
    );
}
