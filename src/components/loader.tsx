import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    initial: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
    exit: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
  };

  const lineVariants = {
    initial: { scaleX: 0 },
    animate: { scaleX: progress / 100 },
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-[var(--foreground)] text-[var(--background)]"
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          <div className="h-full w-full relative">
            <div className="absolute z-10 h-full w-full flex flex-col items-center justify-center">
              <motion.h1
                className="text-6xl flex uppercase font-semibold mb-8"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {"Loading".split("").map((letter, index) => (
                  <span key={index} className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "150%", rotate: 2 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="block"
                    >
                      {letter}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
              <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  variants={lineVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
              <motion.p
                className="text-white text-xl mt-4"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                {Math.round(progress)}%
              </motion.p>
            </div>
            <motion.div
              className="absolute opacity-10 h-full w-full leading-none overflow-hidden"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              {[...Array(10)].map((_, index) => (
                <motion.div
                  key={index}
                  className="flex whitespace-nowrap leading-none"
                  initial={{
                    x: index % 2 === 0 ? "0%" : "-50%",
                  }}
                  animate={{
                    x: index % 2 === 0 ? ["0%", "-150%"] : ["-50%", "100%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {[...Array(10)].map((_, index) => (
                    <h1
                      key={index}
                      className="text-[15vw] lg:text-[10vw] uppercase font-bold pr-10"
                    >
                      LOADING
                    </h1>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
