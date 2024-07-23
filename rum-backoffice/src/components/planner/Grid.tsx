import React from "react";
import { cn } from "@/lib/utils";
import useLayout from "./composables/useLayout";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, style, ...rest }, _ref) => {
    const {
      cornerBoxWidth,
      cornerBoxHeight,
      widthPerHour,
      displayedHours,
      sidebarItemHeight,
      numberOfSidebarItems,
    } = useLayout();
    return (
      <div
        className={cn("absolute bg-white", className)}
        style={{
          top: cornerBoxHeight,
          left: cornerBoxWidth,
          width: widthPerHour * displayedHours,
          height: sidebarItemHeight * numberOfSidebarItems,
          ...style,
        }}
        {...rest}
      >
        {[...Array(numberOfSidebarItems)].map((_, idxRow) => (
          <div key={`grid-row-${idxRow}`} className="flex">
            {[...Array(displayedHours)].map((_, idxCol) => (
              <div
                key={`grid-cell-${idxRow}${idxCol}`}
                className="border-r border-b border-slate-200"
                style={{ width: widthPerHour, height: sidebarItemHeight }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    );
  }
);

export default React.memo(Grid);
