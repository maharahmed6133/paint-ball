"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence,  Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/DSCF8521-1.webp",
  "/images/DSCF8521-2.webp",
  "/images/DSCF8521-3.webp",
  "/images/DSCF8521-4.webp",
  "/images/DSCF8521-5.webp",
  "/images/DSCF8521-6.webp",
  "/images/DSCF8521-7.webp",
  "/images/DSCF8521-8.webp",
];

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

/* Scroll animation */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ImageBox() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex([
      (index + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
  /* Keyboard support */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  return (
    <div className="w-full mt-8 md:mt-20">

      {/* Title */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl text-black font-bold mb-10"
      >
        Outdoor field
      </motion.h1>

      {/* Row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
      >
        {/* SLIDER */}
        <div className="relative w-full md:w-1/2 md:h-96 h-96 border-2 border-black overflow-hidden bg-black">

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.9}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt="Gallery image"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 bottom-6 bg-white/30 p-2 rounded-full"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 bottom-6 bg-white/30 p-2 rounded-full"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex([i, i > index ? 1 : -1])}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="w-full md:w-1/2 md:-ml-7 relative">

          <p className="text-black text-sm md:text-base leading-relaxed">
            The largest fully equipped open-air field in Tbilisi, perfect for
            both small and <br /> large groups of all ages. We offer a variety of
            exciting game modes to suit<br />  everyone. Well-lit and ideal for
            evening games.
          </p>

          {/* Decorative Arrow */}
          <Image
            src="/images/Arrow.svg"
            alt="Arrow"
            width={180}
            height={120}
            className="absolute sm:right-5 md:right-20 md:h-110 sm:h-96 w-52"
          />

          {/* Info Items */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <Image src="/images/3287369.png" alt="Area" width={20} height={20} />
              <h1 className="text-black font-medium">Area:</h1>
              <h1 className="text-black font-bold md:ml-80 ml-auto">3000 m2</h1>
            </div>

            <div className="flex items-center gap-3">
              <Image src="/images/33308.png" alt="Players" width={20} height={20} />
              <h1 className="text-black font-medium">Number of players:</h1>
              <h1 className="text-black font-bold md:ml-48 ml-auto">From 2 to 10</h1>
            </div>

            <div className="flex items-start gap-3">
              <Image src="/images/7729322.png" alt="Game modes" width={20} height={20} />
              <h1 className="text-black font-medium">Game modes:</h1>
              <h1 className="text-black font-bold md:ml-32 ml-auto text-right">
                Classical combat, Capture <br /> the flag, Base defense
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Image src="/images/3179068.png" alt="Location" width={20} height={20} />
              <h1 className="text-black font-medium">The site on the match.</h1>
            </div>

          </div>

          {/* Button */}
          <button className="h-16 w-full md:w-72 md:mt-13 sm:mt-20 md:h-14 font-bold mt-11 hover:bg-black hover:text-[#c3f000] transition duration-200 bg-[#c3f000] text-black">
            Sign up for the game.
          </button>

        </div>
      </motion.div>
    </div>
  );
}