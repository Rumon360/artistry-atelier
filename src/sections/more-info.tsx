import { motion } from "framer-motion";

function MoreInfo() {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center  lg:py-20 wp"
      aria-label="More Info section"
    >
      <div className="text-white z-10 mix-blend-difference mb-20">
        <motion.h2
          className="text-[11vw] md:text-[7vw] leading-[0.9] uppercase text-center font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {["A", "unique", "experience", "OUR", "Gallery"].map(
            (text, index) => (
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
            )
          )}
        </motion.h2>
      </div>
      <div className="flex flex-col justify-center items-center -mt-[30vh]">
        <motion.div
          className="h-[60vh] sm:h-[80vh] lg:h-[600px] aspect-auto relative"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/glasses.webp"
            alt="glasses"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="pt-10">
          <p className="text-center text-xl lg:text-3xl max-w-full">
            Nestled in the heart of this cultural capital, our space invites you
            to explore, discover, and connect with the transformative power of
            art. Located in the vibrant city of Athens, Leoforos Kifisias 132
            ,Marousi, our gallery serves as a haven for art enthusiasts and
            collectors alike.
          </p>
        </div>
      </div>
      <motion.button
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative group mt-10 px-6 py-3 transition ease-in-out uppercase text-sm hover:text-white border-[1.5px] border-black font-semibold rounded-full overflow-hidden"
      >
        <span className="block relative z-10">View More</span>
        <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-black w-full h-full transition-all duration-300 ease-out"></span>
      </motion.button>
    </section>
  );
}

export default MoreInfo;
