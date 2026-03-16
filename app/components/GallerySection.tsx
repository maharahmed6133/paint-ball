"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  const totalPages = images.length / 2;

  // start at 1 because of clone
  const [page, setPage] = useState(1);
  const [animate, setAnimate] = useState(true);

  const slides = [
    totalPages - 1, // clone last
    ...Array.from({ length: totalPages }, (_, i) => i),
    0 // clone first
  ];

  const paginate = (dir: number) => {
    setPage((prev) => prev + dir);
    setAnimate(true);
  };

  useEffect(() => {
    if (page === 0) {
      setTimeout(() => {
        setAnimate(false);
        setPage(totalPages);
      }, 500);
    }

    if (page === totalPages + 1) {
      setTimeout(() => {
        setAnimate(false);
        setPage(1);
      }, 500);
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  return (
    <div className="bg-white py-16 min-h-screen">

      {/* Gallery Title */}
      <motion.div
  className="relative w-full bg-no-repeat bg-center mb-20 flex items-center justify-center"
  style={{
    backgroundImage: "url('/images/Gallery.svg')",
    backgroundSize: "contain",
    height: "200px"
  }}
  initial={{ scale: 0.6, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 10
  }}
>
        <div className="flex items-center gap-6 -mt-6 absolute inset-0 justify-center">

          <button
            onClick={() => paginate(-1)}
            className="bg-black text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          <span className="font-semibold text-black text-lg">
            {((page - 1 + totalPages) % totalPages) + 1}/{totalPages}
          </span>

          <button
            onClick={() => paginate(1)}
            className="bg-black text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          >
            <ChevronRight />
          </button>

        </div>
      </motion.div>

      {/* Gallery Images */}
      <div className="-mt-38 overflow-hidden">

        <motion.div
          animate={{ x: `-${page * 100}%` }}
          transition={animate ? { duration: 0.5, ease: "easeInOut" } : { duration: 0 }}
          className="flex"
        >

          {slides.map((slideIndex, i) => (
            <div key={i} className="flex justify-center gap-8 min-w-full">

              {/* Image 1 */}
              <div className="relative border-2 border-black overflow-hidden
w-[92vw]
sm:w-[46vw]
md:w-[720px]
lg:w-[820px]
xl:w-[900px]">

                <Image
                  src={images[slideIndex * 2]}
                  alt="Gallery Image"
                  width={900}
                  height={700}
                  className="object-cover w-full h-full"
                />

              </div>

              {/* Image 2 */}
              <div className="hidden sm:block relative border-2 border-black overflow-hidden
w-[46vw]
md:w-[720px]
lg:w-[820px]
xl:w-[900px]">

                <Image
                  src={images[slideIndex * 2 + 1]}
                  alt="Gallery Image"
                  width={900}
                  height={700}
                  className="object-cover w-full h-full"
                />

              </div>

            </div>
          ))}

        </motion.div>

      </div>

    </div>
  );
}