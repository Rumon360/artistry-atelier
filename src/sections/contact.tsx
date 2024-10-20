import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="py-20 wp">
      <div className="lg:px-10 xl:px-24 mx-auto">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl md:text-4xl lg:text-6xl leading-none uppercase font-bold"
        >
          {[
            "At Artistry Atelier, we",
            "believe art can transform spaces",
            "evoke emotions, and enrich lives",
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
        </motion.h1>
      </div>
      <div className="pt-10 lg:px-6 xl:px-10 flex flex-col gap-6 md:flex-row w-full justify-between">
        <div className="flex flex-col md:flex-row gap-2 lg:gap-6 items-end">
          {["one", "two"].map((item, index) => (
            <motion.div
              className={`${
                item === "one"
                  ? "h-[300px] lg:h-[600px]"
                  : "h-[200px] lg:h-[400px]"
              }  w-full lg:w-auto relative overflow-hidden`}
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
            >
              <img
                className="object-cover  h-full w-full"
                src={`/contact/${item}.webp`}
                alt="contact"
              />
            </motion.div>
          ))}
        </div>
        <div>
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-sm text-base lg:text-xl"
          >
            Discover the difference with Artistry Atelier. Your art journey is
            about to begin! Looking for expert guidance on curating your art
            collection? Interested in a specific artwork, sculpture, or have any
            other questions?
          </motion.p>
          <motion.button
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative group mt-10 px-6 py-3 transition ease-in-out uppercase text-sm hover:text-white border-[1.5px] border-black font-semibold rounded-full overflow-hidden"
          >
            <span className="block relative z-10">Get in touch</span>
            <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-black w-full h-full transition-all duration-300 ease-out"></span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
