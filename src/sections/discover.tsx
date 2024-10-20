import { motion } from "framer-motion";

function Discover() {
  const artists = [
    {
      name: "John Doe",
      category: "Abstract Painting",
      image: "/artists/one.jpg",
    },
    {
      name: "Jane Smith",
      category: "Sculpture",
      image: "/artists/two.jpeg",
    },
    {
      name: "Alex Johnson",
      category: "Photography",
      image: "/artists/three.webp",
    },
    {
      name: "Emily Brown",
      category: "Digital Art",
      image: "/artists/four.jpeg",
    },
    {
      name: "Michael Lee",
      category: "Impressionism",
      image: "/artists/five.jpeg",
    },
    {
      name: "Sarah Wilson",
      category: "Street Art",
      image: "/artists/six.jpeg",
    },
    {
      name: "David Taylor",
      category: "Conceptual Art",
      image: "/artists/seven.jpeg",
    },
    {
      name: "Olivia Martinez",
      category: "Pop Art",
      image: "/artists/eight.jpeg",
    },
  ];

  return (
    <section className="wp relative">
      <header className="sticky top-0 z-20 flex gap-6 justify-between mix-blend-difference py-6 tracking-tighter items-center w-full text-[5.5vw] text-nowrap font-bold">
        <div className="text-white">DISCOVER</div>
        <div className="h-[1.5px] w-full flex-1 bg-white block" />
        <div className="text-white">OUR ARTISTS</div>
      </header>
      <div className="py-10">
        {artists.map((artist, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={artist.name}
            className={`flex w-fit flex-col gap-1 ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-[500px] h-[400px] object-cover brightness-75 hover:brightness-100 transition-all ease-in-out duration-300"
            />
            <div>
              <div className="text-xl uppercase font-bold">{artist.name}</div>
              <div className="text-base uppercase">{artist.category}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Discover;
