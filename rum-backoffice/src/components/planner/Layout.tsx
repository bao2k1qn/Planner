"use client";
import React from "react";
import CornerBox from "./CornerBox";
import { cn } from "@/lib/utils";

interface ItemWithID {
  id: string;
}

interface LayoutProps<T extends ItemWithID> {
  sidebarItems: T[];
}

interface LayoutContextProps {
  widthPerHour: number;
  startHour: number;
  endHour: number;
  displayedHours: number;
  cornerBoxWidth: number;
  cornerBoxHeight: number;
  sidebarItemHeight: number;
  numberOfSidebarItems: number;
  orderOfSidebarIds: string[];
}

const LayoutContext = React.createContext<LayoutContextProps | null>(null);

const LayoutInner = <T extends ItemWithID>(
  {
    sidebarItems,
    children,
    className,
    ...rest
  }: React.HTMLAttributes<HTMLDivElement> & LayoutProps<T>,
  _ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <LayoutContext.Provider
      value={{
        widthPerHour: 45 * 4 + 4,
        startHour: 4,
        endHour: 23,
        displayedHours: 23 + 1 - 4,
        cornerBoxWidth: 180,
        cornerBoxHeight: 50,
        sidebarItemHeight: 65,
        numberOfSidebarItems: sidebarItems.length,
        orderOfSidebarIds: sidebarItems.map((item) => item.id),
      }}
    >
      <div
        ref={_ref}
        className={cn("relative w-full h-full", className)}
        {...rest}
      >
        <CornerBox />
        <div className="relative overflow-auto w-full h-full rum-scroll-bar scroll-smooth">
          {children}
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

const Layout = React.forwardRef(LayoutInner) as <T extends ItemWithID>(
  props: React.HTMLAttributes<HTMLDivElement> &
    LayoutProps<T> & { _ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof LayoutInner>;

export default Layout;
export { LayoutContext, type LayoutContextProps };
