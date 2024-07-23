import { useState } from "react";

type CallbackFunction = ((...args: any[]) => void) | null;

function useResizeable<T>(cb: CallbackFunction = null) {
  const [size, setSize] = useState({ x: 0, y: 0 });

  const handler = (mouseDownEvent: React.MouseEvent<T, MouseEvent>) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent: MouseEvent) {
      setSize((currentSize) => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY,
      }));
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      if (cb) cb(size);
      setSize({ x: 0, y: 0 });
    }

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

  return { size, handler };
}

export default useResizeable;
