import React, { createContext, ReactNode } from "react";

import { MotionValue } from "framer-motion";
import useMousePosition from "../hooks/use-mouse-position";

interface MousePositionContextType {
  smoothMouse: { x: MotionValue<number>; y: MotionValue<number> };
  cursorWidth: MotionValue<number>;
  cursorHeight: MotionValue<number>;
}

export const MousePositionContext = createContext<
  MousePositionContextType | undefined
>(undefined);

export const MousePositionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const mouseOptions = useMousePosition();

  return (
    <MousePositionContext.Provider value={mouseOptions}>
      {children}
    </MousePositionContext.Provider>
  );
};
