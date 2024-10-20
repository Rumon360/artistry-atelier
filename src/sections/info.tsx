import {
  useMotionTemplate,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function Info() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center center"],
  });

  const clipValue = useTransform(scrollYProgress, [0, 1], ["20%", "70.7%"]);
  const clipPath = useMotionTemplate`circle(${clipValue} at 50% 50%)`;

  return (
    <section
      ref={ref}
      aria-label="Info section"
      className="py-10 wp relative h-[160vh] sm:h-[180vh] md:h-[180vh] lg:h-[200vh]"
    >
      <div className="w-full h-full relative">
        <p className="text-lg sm:text-xl lg:text-2xl font-medium">
          {[
            "your top choice for customized art",
            "experiences and stunning contemporary",
            "art and sculptures.",
          ].map((text, index) => (
            <motion.span
              initial={{
                y: "100%",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="block"
            >
              {text}
            </motion.span>
          ))}
        </p>
        <div className="flex justify-center items-center">
          <motion.div style={{ clipPath }} className="size-[600px]">
            <motion.img
              src="/spring.jpeg"
              alt="spring"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <div className="relative -mt-14">
          <motion.h2
            className="text-[9vw] md:text-[7vw] text-white mix-blend-difference leading-[0.9] uppercase text-center font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              "THE Artistry",
              "Atelier",
              "Offering Unique",
              "Art Pieces",
              "Sculptures",
            ].map((text, index) => (
              <motion.span key={text} className="block overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "150%", rotate: 5 },
                    visible: {
                      y: 0,
                      rotate: 0,
                      transition: { duration: 0.5, delay: index * 0.2 },
                    },
                  }}
                  className="block"
                >
                  {text}
                </motion.span>
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <p className="text-lg py-16 font-normal max-w-sm sm:max-w-md">
          We are your reliable ally in the art world. Dive into the blend of
          contemporary art and design, where each piece narrates a story and
          turns spaces into unique experiences. Our committed team of art
          consultants is ready to assist you throughout your artistic journey.
        </p>
      </div>
    </section>
  );
}

export default Info;
