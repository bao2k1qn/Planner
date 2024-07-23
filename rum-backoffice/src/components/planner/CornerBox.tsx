import React from "react";
import useLayout from "./composables/useLayout";

interface CornerBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const CornerBox = React.forwardRef<HTMLDivElement, CornerBoxProps>(() => {
  const { cornerBoxWidth, cornerBoxHeight } = useLayout();
  return (
    <div
      className="absolute top-0 left-0 z-40 bg-white shadow-md"
      style={{ width: cornerBoxWidth, height: cornerBoxHeight }}
    />
  );
});

export default React.memo(CornerBox);
