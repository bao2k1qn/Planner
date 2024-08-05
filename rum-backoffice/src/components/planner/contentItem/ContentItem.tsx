import { useRef, useState } from "react";
import useContentItem from "../composables/useContentItem";
import { cn } from "@/lib/utils";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import useResizeable from "../composables/useResizeable";
import useContentItemResizeable from "../composables/useContentItemResizeable";
import moment from "moment";

interface RequiredFields {
  id: string;
  startDate: string;
  endDate: string;
  referenceId: string;
}

interface ContentItemProps<T extends RequiredFields>
  extends React.HTMLAttributes<HTMLDivElement> {
  item: T;
  renderContentItem: (item: T) => React.ReactNode;
}

const ContentItem = <T extends RequiredFields>({
  item,
  renderContentItem,
  className,
  style,
  ...rest
}: ContentItemProps<T>) => {
  const data = useContentItem(item);
  if (!data) return null;

  const { isActive, ...positionInit } = data;

  const { position, time, handlerWithDirection } = useContentItemResizeable(
    positionInit,
    item
  );

  return (
    <div
      className={cn("absolute p-[3px] flex", className)}
      style={{
        ...position,
        ...style,
      }}
      {...rest}
    >
      <div
        className={cn(
          "bg-green-100/50 p-1 border-[2px] border-green-200 rounded-md w-full h-full hover:bg-green-200/50 cursor-pointer font-semibold text-green-600 text-sm flex justify-between items-center group relative",
          {
            "bg-green-300/50 border-green-400 hover:bg-green-400/50": isActive,
          }
        )}
      >
        <DotsVerticalIcon
          className="-ml-2 invisible group-hover:visible hover:cursor-e-resize"
          onMouseDown={(e) => handlerWithDirection(e, "LEFT")}
        />
        <div className="flex-1 text-center">{renderContentItem(item)}</div>
        <div className="absolute bottom-0 right-1 h-full flex items-end text-xs">
          {moment(time.startDate).format("H:mm")} -{" "}
          {moment(time.endDate).format("H:mm")}
        </div>
        <DotsVerticalIcon
          className="-mr-2 invisible group-hover:visible hover:cursor-e-resize"
          onMouseDown={(e) => handlerWithDirection(e, "RIGHT")}
        />
      </div>
    </div>
  );
};

export default ContentItem;
export type { RequiredFields };
