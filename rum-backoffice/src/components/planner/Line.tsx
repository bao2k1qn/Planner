"use client";
import React from "react";
import useLine from "./composables/useLine";
import useLineFocus from "./composables/useLineFocus";

const Line = () => {
  const { position, size } = useLine();
  const { lineRef } = useLineFocus();

  return (
    <div
      ref={lineRef}
      className="absolute z-10 bg-blue-400"
      style={{
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
      }}
    />
  );
};

export default Line;
