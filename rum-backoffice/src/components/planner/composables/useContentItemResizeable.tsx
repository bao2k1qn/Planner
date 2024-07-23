import React, { useEffect, useMemo, useRef, useState } from "react";
import useResizeable from "./useResizeable";
import moment from "moment";
import useLayout from "./useLayout";

interface PositionType {
  top: number;
  left: number;
  width: number;
  height: number;
}

type DirectionType = "LEFT" | "RIGHT";

interface RequiredFields {
  id: string;
  startDate: string;
  endDate: string;
  referenceId: string;
}

const useContentItemResizeable = (
  positionInit: PositionType,
  item: RequiredFields
) => {
  const [position, setPosition] = useState(positionInit);
  const [time, setTime] = useState(item);
  const { size, handler } = useResizeable();
  const { widthPerHour } = useLayout();

  const directionRef = useRef<DirectionType>("RIGHT");
  const startPositionRef = useRef<PositionType>(positionInit);
  const startTimeRef = useRef(item);

  const widthPerMunite = useMemo(() => widthPerHour / 60, [widthPerHour]);

  useEffect(() => {
    if (!size.x) return;

    if (directionRef.current === "LEFT") {
      setPosition((pre) => ({
        ...pre,
        width: startPositionRef.current.width - size.x,
        left: startPositionRef.current.left + size.x,
      }));
      setTime((pre) => ({
        ...pre,
        startDate: moment(startTimeRef.current.startDate)
          .add(size.x / widthPerMunite, "minutes")
          .toISOString(),
      }));
    }

    if (directionRef.current === "RIGHT") {
      setPosition((pre) => ({
        ...pre,
        width: startPositionRef.current.width + size.x,
      }));
      setTime((pre) => ({
        ...pre,
        endDate: moment(startTimeRef.current.endDate)
          .add(size.x / widthPerMunite, "minutes")
          .toISOString(),
      }));
    }
  }, [size.x]);

  const handlerWithDirection = (
    mouseDownEvent: React.MouseEvent<unknown, MouseEvent>,
    direction: DirectionType
  ) => {
    directionRef.current = direction;
    startPositionRef.current = position;
    startTimeRef.current = time;
    handler(mouseDownEvent);
  };

  return { position, time, handlerWithDirection };
};

export default useContentItemResizeable;
