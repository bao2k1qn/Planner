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
          "bg-pink-100/50 p-1 border-[2px] border-pink-200 rounded-md w-full h-full hover:bg-pink-200/50 cursor-pointer font-semibold text-pink-600 text-sm flex justify-between items-center group",
          {
            "bg-pink-300/50 border-pink-400 hover:bg-pink-400/50": isActive,
          }
        )}
      >
        <DotsVerticalIcon
          className="-ml-2 invisible group-hover:visible hover:cursor-e-resize"
          onMouseDown={(e) => handlerWithDirection(e, "LEFT")}
        />
        <div className="flex-1 text-center">{renderContentItem(item)}</div>
        <div>
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
