import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type OverlayMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const links = ["Home", "About", "Services", "Contact"];
const socialLinks = [
  {
    id: 1,
    heading: "Follow Us",
    links: ["Instagram", "TikTok"],
  },
  {
    id: 2,
    heading: "Email",
    links: ["hmk.rumon@gmail.com"],
  },
];

const artists = [
  "Annalù",
  "Emmanuelle",
  "Martin Berger",
  "Kiko Lopez",
  "Julian Arnaud",
  "Paul Bik",
  "Jane Puylagarde",
  "Nayla Kai Saroufim",
  "Nadege Mouyssinat",
  "Sylvestre Gauvrit",
];

const images = [
  "/artists/one.jpg",
  "/artists/two.jpeg",
  "/artists/three.webp",
  "/artists/four.jpeg",
];

const animationProps = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 },
  transition: { duration: 0.5 },
};

function OverlayMenu({ open, setOpen }: OverlayMenuProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] overflow-y-auto h-full w-full bg-[var(--foreground)] text-[var(--background)]"
        >
          <div className="w-full wp h-full relative">
            <header className="w-full h-16 flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold uppercase">
                  <a href="/" aria-label="Artistry Atelier Home">
                    Artistry Atelier
                  </a>
                </h1>
              </div>
              <nav>
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center"
                  aria-expanded="true"
                  aria-controls="main-menu"
                  aria-label="Close main menu"
                >
                  <X className="size-8" aria-hidden="true" />
                </button>
              </nav>
            </header>
            <motion.div
              {...animationProps}
              className="pt-6 lg:pt-10 flex flex-col lg:flex-row w-full justify-between px-4 gap-8"
            >
              <div className="flex flex-row w-full gap-10 xl:gap-20">
                <div>
                  <div className="space-y-4 lg:space-y-6">
                    {links.map((link, index) => (
                      <motion.a
                        {...animationProps}
                        transition={{
                          delay: index * 0.1,
                          ...animationProps.transition,
                        }}
                        href="#"
                        key={link}
                        className="text-xl md:text-2xl block underline-hover"
                      >
                        {link}
                      </motion.a>
                    ))}
                  </div>
                  <div className="space-y-6 pt-10">
                    {socialLinks.map((link, index) => (
                      <motion.div
                        {...animationProps}
                        transition={{
                          delay: (links.length + index) * 0.1,
                          ...animationProps.transition,
                        }}
                        key={link.id}
                      >
                        <p className="font-medium text-base md:text-xl text-stone-400 cursor-pointer underline-hover">
                          {link.heading}
                        </p>
                        <ul className="mt-4 space-y-4 text-sm md:text-lg">
                          {link.links.map((item) => (
                            <li key={item}>
                              <a
                                href="#"
                                className="transition hover:opacity-75"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  {...animationProps}
                  transition={{
                    delay: (links.length + socialLinks.length) * 0.1,
                    ...animationProps.transition,
                  }}
                >
                  <p className="text-xl md:text-2xl block underline-hover text-stone-400">
                    Artists
                  </p>
                  <ul className="mt-4 space-y-4 text-sm md:text-lg">
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      {artists.map((artist, index) => (
                        <motion.li
                          {...animationProps}
                          transition={{
                            delay:
                              (links.length + socialLinks.length + 1 + index) *
                              0.05,
                            ...animationProps.transition,
                          }}
                          key={artist}
                        >
                          {artist}
                        </motion.li>
                      ))}
                    </div>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                {...animationProps}
                transition={{
                  delay:
                    (links.length + socialLinks.length + artists.length) * 0.05,
                  ...animationProps.transition,
                }}
                className="h-[400px] xl:h-[600px] relative aspect-[1.2/1] overflow-hidden"
              >
                {images.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentImage ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    alt=""
                    className="absolute object-cover h-full w-full inset-0"
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default OverlayMenu;
