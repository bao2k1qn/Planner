"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Tổng quan",
    href: "/overview",
  },
  {
    label: "Timeline",
    href: "/timeline",
  },
  {
    label: "Dịch vụ",
    href: "/services",
  },
  {
    label: "Nhân viên",
    href: "/employee",
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navItems.map((navItem) => (
        <Link
          key={navItem.href}
          href={navItem.href}
          className={cn(
            "text-sm font-medium text-muted-foreground transition-colors hover:text-slate-900",
            { "text-primary hover:text-primary": pathname === navItem.href }
          )}
        >
          {navItem.label}
        </Link>
      ))}
    </nav>
  );
}
