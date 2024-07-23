import { LINE_WIDTH } from "@/components/planner/constants";
import { type ClassValue, clsx } from "clsx";
import moment from "moment";
import React from "react";
import { twMerge } from "tailwind-merge";
import { z, ZodTypeAny } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const typedMemo: <T>(c: T) => T = React.memo;

/**
 * Check if a date is today.
 * @param data Any date (ISOString)
 */
export const isToday = (data: string) => {
  return moment(data).isSame(moment(), "day");
};

/**
 *  Generate odd numbers between range m and n
 * @param start Start value
 * @param stop End value
 * @param step jump steps
 * @returns Array has range from m to n
 */
export const createRange = (start: number, stop: number, step = 1) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

/**
 * Check of a time is between two given times
 * @param beforeTime The first time in range.
 * @param afterTime The last time in range
 * @param time The time to check
 * @returns Boolean
 */
export const isInTimeRange = (
  beforeTime: string,
  afterTime: string,
  time: string
) => {
  const timeMoment = moment(time);
  const beforeTimeMoment = moment(beforeTime);
  const afterTimeMoment = moment(afterTime);

  return timeMoment.isBetween(beforeTimeMoment, afterTimeMoment) ? true : false;
};

/**
 * Get position x of the line of current time.
 * @param param0 startHour is a first displayed hour
 * @param param1 endHour is a last displayed hour
 */
export const getPositionX = ({
  startHour,
  endHour,
  widthPerHour,
}: {
  startHour: number;
  endHour: number;
  widthPerHour: number;
}) => {
  const currentTime = moment();
  const currentHour = currentTime.hour();
  const currentMinute = currentTime.minute();

  // Check whether the current time is within the display range
  if (currentHour < startHour || currentHour > endHour) return -LINE_WIDTH;

  // Calculate x position
  const widthPerMinute = widthPerHour / 60;
  const positionX =
    (currentHour - startHour) * widthPerHour + currentMinute * widthPerMinute;

  return positionX;
};
