import { animate, motion, useSpring, useMotionValue } from "framer-motion";
import React, { useRef } from "react";

const services = [
  { title: "Selling Modern Artworks", image: "/services/one.jpeg" },
  { title: "Art Consultation", image: "/services/two.jpeg" },
  { title: "Custom Framing", image: "/services/three.jpeg" },
  { title: "Art Restoration", image: "/services/four.jpeg" },
  { title: "Exhibition Curation", image: "/services/five.jpeg" },
  { title: "Art Appraisal", image: "/services/six.jpeg" },
];

function Services() {
  const box = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 50, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 50, mass: 0.1 });

  const handleMouseMove = async (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (box.current) {
      const { left, top } = box.current.getBoundingClientRect();
      const newX = clientX - left + 175;
      const newY = clientY - top - 80;
      x.set(newX);
      y.set(newY);
    }
  };

  const handleMouseEnter = (index: number) => {
    const image = document.getElementById(`service-image-${index}`);
    if (image) {
      animate(image, {
        scale: 1,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const image = document.getElementById(`service-image-${index}`);
    if (image) {
      animate(image, {
        scale: 0,
        opacity: 0,
      });
    }
  };

  return (
    <section
      aria-label="services"
      className="wp relative py-20 lg:pt-10 lg:pb-32"
    >
      <div>
        <motion.h1
          className="text-[11vw] md:text-[7vw] leading-[0.9] uppercase text-center font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {["Artistry", "Atelier", "Bespoke", "Services"].map((text, index) => (
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
        </motion.h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 pt-20 justify-center relative">
        <div className="h-[500px] lg:h-[600px] w-full md:w-auto md:aspect-square relative">
          <motion.img
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            whileInView={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "0px 0px -200px" }}
            src="/balloon.webp"
            alt="balloon"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full md:w-auto flex-col" ref={box}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className=" font-semibold text-2xl lg:text-3xl xl:text-4xl border-b border-neutral-500 uppercase py-2 md:py-5 lg:py-6 w-full"
            >
              <h3
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="cursor-pointer"
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <motion.div
          style={{ x: mouseXSpring, y: mouseYSpring }}
          transition={{
            stiffness: 200,
            damping: 50,
            mass: 0.1,
          }}
          className="hidden md:block absolute w-64 h-72 -z-10 pointer-events-none overflow-hidden"
        >
          <div className="relative h-full w-full">
            {services.map((service, index) => (
              <motion.img
                key={service.title}
                src={service.image}
                alt={service.title}
                id={`service-image-${index}`}
                initial={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 object-cover w-full h-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
