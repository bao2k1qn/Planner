"use client";

import React, { useEffect } from "react";
import { getPositionX } from "@/lib/utils";
import useLayout from "./useLayout";
import { LINE_WIDTH } from "../constants";

const INTERVAL_TIME = 60; // unit: s

const useLine = () => {
  const {
    sidebarItemHeight,
    numberOfSidebarItems,
    cornerBoxHeight,
    cornerBoxWidth,
    startHour,
    endHour,
    widthPerHour,
    displayedHours,
  } = useLayout();
  const [positionX, setPositionX] = React.useState<number>(() =>
    getPositionX({ startHour, endHour, widthPerHour })
  );

  // Get initial position X
  useEffect(() => {
    const currentPositionX = getPositionX({ startHour, endHour, widthPerHour });
    setPositionX(currentPositionX);
  }, [startHour, endHour, widthPerHour]);

  // Move the Line every INTERVAL_TIME
  useEffect(() => {
    if (positionX === -LINE_WIDTH) return;

    const intervalId = setInterval(() => {
      if (positionX >= widthPerHour * displayedHours) {
        clearInterval(intervalId);
        return;
      }

      setPositionX((prePosition) => prePosition + widthPerHour / INTERVAL_TIME);
    }, INTERVAL_TIME * 1000);

    return () => clearInterval(intervalId);
  }, [widthPerHour, displayedHours]);

  const position = { left: cornerBoxWidth + positionX, top: 0 };
  const size = {
    width: 2,
    height: sidebarItemHeight * numberOfSidebarItems + cornerBoxHeight,
  };

  return { position, size };
};

export default useLine;
