import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ImagesBoard() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="wp relative overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row justify-between items-end w-full h-full relative px-10">
        {["one", "two", "three"].map((item, index) => {
          return (
            <motion.div
              key={item}
              initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              }}
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index === 0 ? 0.08 : index * 0.3,
              }}
              viewport={{ once: true, margin: "0px 0px -200px" }}
              className={`relative overflow-hidden ${
                index === 1
                  ? "w-full lg:w-[400px] h-[550px]"
                  : "w-full lg:w-72 h-96"
              }`}
            >
              <motion.img
                style={{ y: yTransform }}
                className="w-full h-full object-cover"
                src={index === 1 ? "/board-two.webp" : `/board-${item}.jpeg`}
                alt={`board ${item} image`}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ImagesBoard;
