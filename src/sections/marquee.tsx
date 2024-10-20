import { motion } from "framer-motion";

function Marquee() {
  const marqueeVariants = {
    animate: {
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="h-full w-full bg-[var(--foreground)] text-[var(--background)] py-20 lg:py-36 overflow-hidden">
      <div className="flex relative">
        <motion.div
          className="flex whitespace-nowrap text-[12vw] font-semibold leading-[1.2]"
          variants={marqueeVariants}
          animate="animate"
        >
          <h2 className="inline-block pr-8">
            <span className="text-pink-500">DHAKA</span> BANGLADESH
          </h2>
          <h2 className="inline-block pr-8">
            <span className="text-pink-500">DHAKA</span> BANGLADESH
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

export default Marquee;
