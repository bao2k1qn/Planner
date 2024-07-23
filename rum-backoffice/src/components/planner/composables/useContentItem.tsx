import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { isInTimeRange, isToday } from "@/lib/utils";
import useLayout from "./useLayout";

interface RequiredFields {
  id: string;
  startDate: string;
  endDate: string;
  referenceId: string;
}

const useContentItem = <T extends RequiredFields>(item: T) => {
  const { id, startDate, endDate, referenceId } = item;
  const {
    orderOfSidebarIds,
    cornerBoxHeight,
    sidebarItemHeight,
    cornerBoxWidth,
    widthPerHour,
    startHour,
  } = useLayout();
  const [isActive, setIsActive] = useState(() =>
    isInTimeRange(startDate, endDate, moment().toISOString())
  );

  const positionAndSizeItem = useMemo(() => {
    // Find sidebar to calculate the height of item.
    const sidebarIndex = orderOfSidebarIds.findIndex(
      (sidebarId) => sidebarId === referenceId
    );

    // Handle exception
    if (sidebarIndex === -1) return null; // TODO: HANDLE ERROR
    if (moment(endDate).hour() < startHour || !isToday(startDate)) return null; // TODO: HANDLE ERROR

    // Calculate the position and size of item.
    const startDateMoment = moment(startDate);
    const endDateMoment = moment(endDate);
    const widthPerMinute = widthPerHour / 60;

    const top = cornerBoxHeight + sidebarIndex * sidebarItemHeight;
    const left =
      cornerBoxWidth +
      widthPerHour * (startDateMoment.hour() - startHour) +
      startDateMoment.minute() * widthPerMinute;
    const width =
      widthPerHour * (endDateMoment.hour() - startDateMoment.hour()) +
      widthPerMinute * (endDateMoment.minute() - startDateMoment.minute());
    const height = sidebarItemHeight;
    return { top, left, width, height };
  }, [
    orderOfSidebarIds,
    referenceId,
    startHour,
    startDate,
    endDate,
    cornerBoxWidth,
    cornerBoxHeight,
    sidebarItemHeight,
  ]);

  // Check if the current time is within this item's time range
  useEffect(() => {
    const intervalId = setInterval(() => {
      const isBetween = isInTimeRange(
        startDate,
        endDate,
        moment().toISOString()
      );
      if (isBetween) setIsActive(true);
      else setIsActive(false);
    }, 2 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [startDate, endDate, setIsActive]);

  return positionAndSizeItem ? { ...positionAndSizeItem, isActive } : null;
};

export default useContentItem;
