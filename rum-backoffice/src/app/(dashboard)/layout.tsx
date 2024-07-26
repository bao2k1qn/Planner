import { MainNav } from "@/components/dashboard/main-nav";
import { Search } from "@/components/dashboard/search";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import { UserNav } from "@/components/dashboard/user-nav";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-col flex">
      <div className="sticky top-0 bg-slate-50 z-50 border-b border-slate-900/10 bg-white/80 backdrop-blur transition-colors duration-500">
        <div className="flex h-16 items-center p-8">
          <div className="flex items-center gap-1">
            <Image
              src="/images/rum-192x192.png"
              width="40"
              height="40"
              alt="rum beauty icon"
            />
            <p className="text-xl font-extrabold text-primary">Rum Admin</p>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <MainNav className="mx-6" />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6 h-dvh min-h-dvh">
        {children}
      </div>
    </div>
  );
}
