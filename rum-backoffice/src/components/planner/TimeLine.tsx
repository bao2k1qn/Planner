import { cn, createRange } from "@/lib/utils";
import React from "react";
import useLayout from "./composables/useLayout";

/**
 * TimeLineBlock Component
 */
interface TimeLineBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  hour: number;
}

const TimeLineBlock = React.forwardRef<HTMLDivElement, TimeLineBlockProps>(
  ({ hour, className, ...rest }, _ref) => {
    return (
      <div
        ref={_ref}
        className={cn("group flex flex-col justify-end", className)}
        {...rest}
      >
        <HourView hour={hour} />
        <Dividers />
      </div>
    );
  }
);

/**
 * HourView Component
 */
interface HourViewProps extends React.HTMLAttributes<HTMLDivElement> {
  hour: number;
}

const HourView = React.forwardRef<HTMLDivElement, HourViewProps>(
  ({ hour, className, ...rest }, _ref) => {
    return (
      <div
        ref={_ref}
        className={cn(
          "group-first:ml-0",
          {
            "-ml-3": hour < 10, // Natural numbers have 1 digit
            "-ml-4": hour >= 10, // Natural numbers have 2 digit
          },
          className
        )}
        {...rest}
      >
        {hour + ":00"}
      </div>
    );
  }
);

/**
 * Dividers Component
 */
interface DividersProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dividers = React.forwardRef<HTMLDivElement, DividersProps>(
  ({ className, ...rest }, _ref) => {
    return (
      <div
        ref={_ref}
        className={cn("flex items-end mb-1", className)}
        {...rest}
      >
        <Divider className="h-[13px] bg-slate-700" />
        <Divider />
        <Divider />
        <Divider />
      </div>
    );
  }
);

/**
 * Divider Component
 */
interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, ...rest }, _ref) => {
    const { widthPerHour } = useLayout();
    return (
      <div
        ref={_ref}
        className={cn("w-[1px] h-[8px] bg-slate-400", className)}
        style={{ marginRight: (widthPerHour - 4) / 4 }}
        {...rest}
      ></div>
    );
  }
);

/**
 * TimeLine Component
 */
interface TimeLineProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimeLine = React.forwardRef<HTMLDivElement, TimeLineProps>(
  ({ className, style, ...rest }, _ref) => {
    const {
      widthPerHour,
      displayedHours,
      cornerBoxHeight,
      cornerBoxWidth,
      startHour,
      endHour,
    } = useLayout();
    return (
      <div
        ref={_ref}
        className={cn("flex sticky top-0 bg-white z-30 shadow-md", className)}
        style={{
          width: widthPerHour * displayedHours,
          height: cornerBoxHeight,
          marginLeft: cornerBoxWidth,
          ...style,
        }}
      >
        {/* Render timeline */}
        {createRange(startHour, endHour).map((hour) => {
          return <TimeLineBlock key={`timeline-col-${hour}`} hour={hour} />;
        })}
      </div>
    );
  }
);

export default React.memo(TimeLine);
export { Divider, Dividers, HourView, TimeLineBlock };
