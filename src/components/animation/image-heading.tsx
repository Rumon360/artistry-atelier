import { useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/art-one.jpeg",
  "/art-two.jpeg",
  "/art-three.jpeg",
  "/art-four.jpeg",
  "/art-five.jpeg",
  "/art-six.webp",
];

function ImageHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const distance = Math.sqrt(
      Math.pow(clientX - lastPosition.x, 2) +
        Math.pow(clientY - lastPosition.y, 2)
    );

    if (distance < 200) return;

    setLastPosition({ x: clientX, y: clientY });

    const rect = ref.current.getBoundingClientRect();
    const left = clientX - rect.left - 100;
    const top = clientY - rect.top - 100;

    const wrapperDiv = document.createElement("div");
    wrapperDiv.id = "image-heading-wrapper";
    Object.assign(wrapperDiv.style, {
      position: "absolute",
      left: `${left}px`,
      top: `${top}px`,
      width: "200px",
      height: "200px",
      aspectRatio: "1 / 1",
      overflow: "hidden",
    });

    const div = document.createElement("div");
    Object.assign(div.style, {
      height: "100%",
      width: "100%",
      transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.35, 1)",
      transform: "translateY(100%)",
      backgroundImage: `url(${
        images[Math.floor(Math.random() * images.length)]
      })`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    });

    wrapperDiv.appendChild(div);
    ref.current.appendChild(wrapperDiv);

    const centerX = rect.width / 2;
    const maxRotation = 10;
    const rotationX = ((clientX - rect.left - centerX) / centerX) * maxRotation;

    setTimeout(() => {
      div.style.transform = `translateY(0%)`;
      wrapperDiv.style.rotate = `${rotationX}deg`;
    }, 20);

    setTimeout(() => {
      div.style.transform = "translateY(100%)";
    }, 1500);

    setTimeout(() => {
      wrapperDiv.style.opacity = "0";
      wrapperDiv.remove();
    }, 1700);
  };

  return (
    <div
      style={{}}
      ref={ref}
      onMouseMove={handleMouseMove}
      className="select-none relative pointer-events-none xl:pointer-events-auto"
    >
      <h1 className="text-3xl text-[7.5vw] sm:text-[6vw] uppercase leading-[0.9] max-w-[100rem] mx-auto text-center font-bold">
        {[
          "Welcome to",
          "The Artistry Atelier",
          "where art becomes",
          "an experience",
        ].map((text, index) => (
          <span key={index} className="block overflow-hidden">
            <motion.span
              initial={{ y: "150%", rotate: 2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="block"
            >
              {text}
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  );
}

export default ImageHeading;
