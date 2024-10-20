import { motion } from "framer-motion";

const commonMotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function About() {
  return (
    <section className="py-20 wp">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          {...commonMotionProps}
          initial={{ ...commonMotionProps.initial, y: 10 }}
          whileInView={{ ...commonMotionProps.whileInView, y: 0 }}
          viewport={{ ...commonMotionProps.viewport, margin: "0px 0px -200px" }}
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2]"
        >
          Whether you're seeking expert advice on building your art collection,
          finding the perfect piece to complement your space, or discovering
          emerging artists, we're here to provide personalized recommendations
          and unparalleled service.
        </motion.h1>
        <motion.button
          {...commonMotionProps}
          transition={{ ...commonMotionProps.transition, delay: 0.5 }}
          className="relative group mt-10 px-6 py-3 transition ease-in-out uppercase text-sm hover:text-white border-[1.5px] border-black font-semibold rounded-full overflow-hidden"
        >
          <span className="block relative z-10">More about us</span>
          <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-black w-full h-full transition-all duration-300 ease-out"></span>
        </motion.button>
      </div>
    </section>
  );
}

export default About;
