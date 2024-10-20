import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import ImageHeading from "../components/animation/image-heading";
import { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #f5f0ed 50%, ${color})`;

  return (
    <motion.section
      className="wp h-full w-full pt-24 pb-40 relative flex flex-col justify-center"
      aria-label="Hero section"
      style={{
        backgroundImage,
      }}
    >
      <ImageHeading />
    </motion.section>
  );
}

export default Hero;
