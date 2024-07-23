"use client";
import { useCallback, useEffect, useRef } from "react";

const useLineFocus = () => {
  const lineRef = useRef<HTMLDivElement>(null!);

  const focusLine = useCallback(() => {
    const layoutElement = lineRef.current.parentNode as HTMLDivElement;
    layoutElement.scrollLeft =
      lineRef.current.offsetLeft - layoutElement.clientWidth / 2;
  }, [lineRef]);

  useEffect(() => {
    focusLine();
  }, []);

  return { lineRef, focusLine };
};

export default useLineFocus;
