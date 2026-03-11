"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gallery 1.webp",
  "/images/gallery 2.webp",
  "/images/gallery 3.webp",
  "/images/gallery 4.webp",
  "/images/gallery 5.webp",
  "/images/gallery 6.webp",
  "/images/gallery 7.webp",
  "/images/gallery 8.webp"
];

export default function GallerySection() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([
      (page + newDirection + images.length / 2) % (images.length / 2),
      newDirection,
    ]);
  };

  return (
    <div className="bg-white py-16 min-h-screen">

      {/* Gallery Title Background */}
      <div
        className="relative w-full bg-no-repeat bg-center mb-20 flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/Gallery.svg')",
          backgroundSize: "contain",
          height: "200px"
        }}
      >

        {/* Navigation on top of image */}
        <div className="flex items-center gap-6 absolute  top-0 bottom-1">
          
          <button
            onClick={() => paginate(-1)}
            className="bg-black text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          <span className="font-semibold text-black text-lg">
            {page + 1}/{images.length / 2}
          </span>

          <button
            onClick={() => paginate(1)}
            className="bg-black text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          >
            <ChevronRight />
          </button>

        </div>
      </div>

      {/* Gallery Images */}
      <div className="max-w-7xl mx-auto -mt-26  px-6 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">

          <motion.div
            key={page}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-8"
          >

            {/* Image 1 */}
            <div className="relative border-2 border-black overflow-hidden
            w-[92vw]
            sm:w-[46vw]
            md:w-[480px]
            lg:w-[520px]
            xl:w-[560px]">

              <Image
                src={images[page * 2]}
                alt="Gallery Image"
                width={900}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Image 2 */}
            <div className="hidden sm:block relative border-2 border-black overflow-hidden
            w-[46vw]
            md:w-[480px]
            lg:w-[520px]
            xl:w-[560px]">

              <Image
                src={images[page * 2 + 1]}
                alt="Gallery Image"
                width={900}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>

          </motion.div>

        </AnimatePresence>
      </div>

    </div>
  );
}