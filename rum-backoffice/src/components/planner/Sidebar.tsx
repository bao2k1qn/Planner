import React from "react";
import { cn, typedMemo } from "@/lib/utils";
import useLayout from "./composables/useLayout";

/**
 * SidebarItem Component
 */
interface SidebarItemBoxProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  item: T;
  renderSidebarItem: (item: T) => React.ReactNode;
}

const SidebarItemBoxInner = <T extends {}>(
  {
    item,
    renderSidebarItem,
    className,
    style,
    ...rest
  }: SidebarItemBoxProps<T>,
  _ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { sidebarItemHeight, cornerBoxWidth } = useLayout();
  return (
    <div
      ref={_ref}
      className={cn("border-b border-r border-slate-200", className)}
      style={{
        height: sidebarItemHeight,
        width: cornerBoxWidth,
        ...style,
      }}
      {...rest}
    >
      <div className="flex justify-center items-center w-full h-full">
        {renderSidebarItem(item)}
      </div>
    </div>
  );
};

const SidebarItemBox = React.forwardRef(SidebarItemBoxInner) as <T>(
  props: SidebarItemBoxProps<T> & { _ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SidebarItemBoxInner>;

/**
 * Sidebar Component
 */
interface ItemWithID {
  id: string;
}

interface SidebarProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  renderSidebarItem: (item: T) => React.ReactNode;
}

const SidebarInner = <T extends ItemWithID>(
  { data, renderSidebarItem, className, style, ...rest }: SidebarProps<T>,
  _ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { cornerBoxWidth, sidebarItemHeight, numberOfSidebarItems } =
    useLayout();
  return (
    <div
      ref={_ref}
      className={cn("sticky top-0 left-0 bg-white z-20 shadow-r-md", className)}
      style={{
        width: cornerBoxWidth,
        height: sidebarItemHeight * numberOfSidebarItems,
        ...style,
      }}
      {...rest}
    >
      {data.map((item, idx) => {
        return (
          <SidebarItemBox
            key={item.id || `sidebar-item-${idx}`}
            item={item}
            renderSidebarItem={renderSidebarItem}
          />
        );
      })}
    </div>
  );
};

const Sidebar = React.forwardRef(SidebarInner) as <T>(
  props: SidebarProps<T> & { _ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SidebarInner>;

export default typedMemo(Sidebar);
