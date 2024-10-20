import { motion } from "framer-motion";
import { useMousePositionContext } from "../hooks/use-mouse-context";

function Cursor() {
  const { smoothMouse, cursorHeight, cursorWidth } = useMousePositionContext();

  return (
    <motion.div
      id="cursor"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        width: cursorWidth,
        height: cursorHeight,
      }}
      className="hidden md:block fixed z-[999] transition-[width,height] ease-in-out duration-300 pointer-events-none rounded-full bg-purple-200 mix-blend-difference"
    ></motion.div>
  );
}

export default Cursor;
