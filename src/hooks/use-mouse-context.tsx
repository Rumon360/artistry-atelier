import { useContext } from "react";
import { MousePositionContext } from "../context/mouse-provider-context";

export const useMousePositionContext = () => {
  const context = useContext(MousePositionContext);
  if (!context) {
    throw new Error(
      "useMousePositionContext must be used within a MousePositionProvider"
    );
  }
  return context;
};
