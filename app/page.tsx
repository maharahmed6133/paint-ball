"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ImageBox from "./components/ImageBox";
import GallerySection from "./components/GallerySection";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Does it hurt to get hit with a paintball?",
    answer: "It can sting a little, but it’s all part of the game and doesn’t last long."
  },
  {
    question: "What protection is available?",
    answer: "We provide full protective gear including a mask, vest, and gloves to ensure safety."
  },
  {
    question: "Can we eat at your place and have company?",
    answer: "Yes, we offer food services and you are welcome to bring your friends along."
  },
  {
    question: "Who's keeping track of the game?",
    answer: "Each game is always supervised by an instructor who can suggest different game scenarios and additional stories – it all depends on your wishes."
  },
  {
    question: "At what age can paintball be played?",
    answer: "Paintball can be played by people 12 and above, with parental consent required for minors."
  },
  {
    question: "What are the payment options?",
    answer: "– bank cards\n– cash."
  },
  {
    question: "What kind of clothes should I wear for the game?",
    answer: "Come in comfortable clothes, preferably dark colors – the paint can be easily washed off, if anything. We provide protective uniforms, but you can play in your own."
  },
];


export default function Home() {


  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    // --------------------------first section-----------------
    <div className=" border bg-white border-white  w-full min-h-screen">
      {/* -------------------nav bar----------------------- */}
      <div className="mt-2 md:mt-5 flex items-center py-8 md:py-16 relative">

        {/* Border Container */}
        <div className="mx-auto border absolute justify-center ml-4 md:ml-24 -mt-16 md:-mt-20 border-black w-[calc(100%-2rem)] md:w-6xl bg-white shadow"></div>

        <div className="flex items-center mt-3 ml-3 md:ml-10 lg:ml-15 justify-between px-4 md:px-10 py-4 md:py-6 w-full">

          {/* Logo */}
          <Image
            src="/images/Group-9 (1).svg"
            alt="Logo"
            width={200}
            height={100}
            className="w-40 lg:w-48 h-auto shrink-0"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8 xl:space-x-14">

            <Link href="#" className="relative text-black font-medium text-lg group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="#" className="relative text-black font-medium text-lg group">
              Price
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="#" className="relative text-black font-medium text-lg group">
              Gift Certificate
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="#" className="relative text-black font-medium text-lg group">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="#" className="relative text-black font-medium text-lg group">
              Contacts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button className="h-12 w-32 mr-20 font-bold hover:bg-black hover:text-[#c3f000] transition duration-300 bg-[#c3f000] text-black">
              Book online
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden ml-auto"
          >
            <Image
              src="/images/menu-icon.svg"
              alt="Menu"
              width={40}
              height={40}
            />
          </button>

        </div>

        {/* Mobile Full Screen Menu */}
        {menuOpen && (

          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 lg:hidden">

            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-black text-xl hover:bg-black hover:text-white transition"
            >
              ✕
            </button>

            {/* Links */}
            <Link href="/" className="text-xl font-medium">Home</Link>
            <Link href="/about" className="text-xl font-medium">About Us</Link>
            <Link href="/price" className="text-xl font-medium">Price</Link>
            <Link href="/gift" className="text-xl font-medium">Gift Certificate</Link>
            <Link href="/faq" className="text-xl font-medium">FAQ</Link>
            <Link href="/contacts" className="text-xl font-medium">Contacts</Link>

            {/* Button */}
            <button className="mt-6 h-12 w-40 font-bold bg-[#c3f000] hover:bg-black hover:text-[#c3f000] transition">
              Book Online
            </button>

          </div>

        )}

      </div>
      {/* -----------------------under navbar-------------------- */}
      <div className="-mt-8 border border-white w-full min-h-screen bg-white flex items-center px-2">

        <div className="border-2 border-black w-full max-w-6xl sm:h-96 min-h-[96vh] md:h-[85vh] mx-auto px-0 md:px-0 overflow-hidden">

          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col justify-start"
            style={{ backgroundImage: "url('/images/Mask-group-3.webp')" }}
          >

            {/* Title Animation */}
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-bold ml-3 md:ml-15 pt-8 md:pt-10 text-4xl sm:text-5xl md:text-6xl text-white"
            >
              Aim, fire and have fun — <br />
              paintball in Tbilisi
            </motion.h1>

            {/* Subtitle Animation */}
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-medium ml-3 md:ml-15 pt-6 md:pt-4 md:mt-10 text-base sm:mt-26  sm:text-lg md:text-xl text-white"
            >
              Ideal for all ages and abilities. From small to large parties, we
              <br className="hidden sm:block" />
              have experience hosting events for up to 100 people.
            </motion.h2>

            {/* Button Animation */}
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.4 }}
              className="h-11 md:h-13 w-44 sm:w-52 md:w-48 text-base md:text-base font-bold ml-3 md:ml-15 mt-16 sm:mt-3 md:mt-44 hover:bg-white transition duration-300 bg-[#c3f000] text-black"
            >
              Book a game
            </motion.button>

          </div>

        </div>

      </div>
      {/* ----------------------------- text under first box and 4 boxes ---------------------- */}
      <div className="border bg-white border-white  w-full min-h-screen py-8 md:py-0">
        <h1 className="text-2xl md:text-4xl font-semibold ml-4 md:ml-28 text-black px-4 md:px-0">The battlefield is calling. Are you ready?</h1>
        {/* ---------------------------------------boxes under the text-------------- */}
        <div className="mt-6 md:mt-10 ml-4 md:ml-25 mr-4 md:mr-25 flex flex-col lg:flex-row gap-4 md:gap-8">
          {/* LEFT SECTION */}
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-3xl">
            {/* box 1 */}
            <div className="border-2 border-black sm:h-80 h-60 md:h-80  ">
              <div className="w-full h-full  bg-cover bg-center "
                style={{ backgroundImage: "url('/images/Mask-group-3.webp')" }}>
                {/* Logo */}
                <Image
                  src="/images/Fill-277.svg"
                  alt="Logo"
                  width={30}
                  height={40}
                  className="pt-5 pl-5 w-14 h-14"
                />
                <h1 className="text-2xl pt-3 pl-5 font-bold text-white ">Open-air field in Lisi Lake</h1>
                <h1 className=" pt-24 sm:pt-32 pl-5 font-medium text-white ">Just a few minutes from the city centre, you’ll discover a <br /> spacious, well-equipped playground surrounded by <br /> greenery and fresh air.</h1>

              </div>
            </div>
            {/* box 2 and box 3 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* box2 */}
              <div className="border-2 bg-[#c3f000] sm:h-80 border-black w-full md:w-72 min-h-48 md:min-h-64  ">

                {/* Logo */}
                <Image
                  src="/images/Fill-322.svg"
                  alt="Logo"
                  width={30}
                  height={40}
                  className="pt-3 md:pt-5 pl-3 md:pl-5 w-10 md:w-14 h-10 md:h-14"
                />
                <h1 className="text-2xl pt-3 pl-3 font-bold text-white ">Safety and hygiene</h1>
                <h1 className="pt-2 md:pt-3 pl-3 sm:mt-36 md:pl-5 md:mt-15 font-medium text-sm md:text-base text-black">
                  Protective clothing, disposable
                  <br className="hidden md:block" />
                  helmet liners and body armour
                  <br className="hidden md:block" />
                  to protect against paintballs —
                  <br className="hidden md:block" />
                  maximum cleanliness and
                  <br className="hidden md:block" />
                  protection during the game.
                </h1>
              </div>

              {/* box3 */}
              <div className="border-2 bg-white border-black sm:h-80 w-full md:w-2/3 min-h-48 md:min-h-64 relative overflow-hidden">

                {/* Logo */}
                <Image
                  src="/images/Vector-1.svg"
                  alt="Logo"
                  width={30}
                  height={40}
                  className="pt-3 md:pt-5 pl-3 md:pl-5 w-10 md:w-14 h-10 md:h-14"
                />

                {/* Logo 2 */}
                <Image
                  src="/images/Vector-11.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="absolute -right-10 top-10 w-52 md:w-52 h-auto"
                />

                <h1 className="text-lg md:text-2xl pt-2 md:pt-3 pl-3 md:pl-5 font-bold text-black">
                  Extra thrill
                </h1>

                <p className="pl-3 md:pl-5 sm:mt-4 pt-8 md:mt-22 md:pt-20 font-medium text-sm md:text-base text-black">
                  Try axe throwing and add an extra thrill to your day!
                </p>

              </div>
            </div>
          </div>


          {/* box4 */}
          <div className="border-2 border-black w-full sm:h-80 lg:w-96 h-60 md:h-[120%] lg:min-h-125 relative overflow-hidden">

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/Mask-group-7.webp')" }}
            />

            {/* Content */}
            <div className="relative flex flex-col justify-between h-full text-white">

              {/* Top */}
              <div>
                <Image
                  src="/images/Fill-291.svg"
                  alt="Logo"
                  width={30}
                  height={40}
                  className="pt-3 md:pt-5 pl-3 md:pl-5 w-10 md:w-14 h-10 md:h-14"
                />

                <h1 className="text-lg md:text-2xl pt-2 md:pt-3 pl-3 md:pl-5 font-bold">
                  Total comfort
                </h1>
              </div>

              {/* Bottom */}
              <p className="p-3 md:p-5 sm:mt-38 font-medium text-sm md:text-base">
                Locker rooms, restrooms, tents, tables, and a cozy BBQ area—everything you need to relax and recharge between rounds.
              </p>

            </div>
          </div>
        </div>

      </div>
      {/* --------------------------under 4 boxes------------------ */}
      <div className="border bg-white border-white  w-full min-h-screen">
        <main className="py-8 md:py-20">
          <ImageBox />
        </main>

      </div>
      {/* -----------------------buying plans-------------------- */}
      <div className="bg-white border border-white min-h-screen w-full py-8 md:py-0">
        <div
          className="pt-3 sm:-mt-5 md:pt-5 ml-4 md:ml-25 
  bg-no-repeat 
  bg-position-[center_120px] sm:bg-position-[center_150px] md:bg-position-[center_230px]
  px-4 md:px-0"
          style={{
            backgroundImage: "url('/images/Vector-12.svg')",
            backgroundSize: "600px"
          }}
        >
          <h1 className="text-2xl md:text-5xl sm:text-3xl font-bold text-black mt-8 sm:mt-4 sm:-ml-2 md:mt-20 ">
            Choose the plan that is
            <br /> right for you
          </h1>
          <h1 className="text-black pt-2 md:pt-3 sm:text-medium sm:-ml-2 text-sm md:text-base">
            The cost is per player. Average ammunition lasts for 20 minutes
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-16">
              {/* ----------------------box1----------------------- */}
              <div className=" sm:-mt-10 md:mt-0 md:w-96 sm:w-150 h-200">
                <div className="border-2 border-black sm:mt-34 md:mt-0 md:w-96 sm:w-150 h-160">
                  <h1 className=" text-black text-2xl font-bold pl-3 pt-5 ">Light</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-5 text-black">
                    <Image src="/images/15895006.png" alt="Game modes" width={20} height={20} />
                    Duration</h1>
                  <h1 className="flex items-center pl-3 md:pl-16 -mt-6 text-black text-lg md:text-xl sm:ml-115 md:ml-48 font-bold">45 minutes</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    <Image src="/images/16860896.png" alt="Game modes" width={20} height={20} />
                    Number of paintballs</h1>
                  <h1 className="flex items-center pl-3 md:pl-20 -mt-6 text-black text-lg sm:ml-122  md:text-xl md:ml-52 font-bold">100 pcs</h1>
                  <h1 className=" text-black pl-5 pt-3">Equipment</h1>
                  {/* images 1 row */}
                  <div className="flex items-center md:gap-3 sm:gap-20 pt-5 pl-2 pr-1">
                    {/* -----first image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-10
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Protective clothing
                      </div>
                      <div
                        className="w-20 h-23
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Костюм.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----2 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-1
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Water guns
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-23
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Оружие.png')" }}
                      >
                      </div>

                    </div>
                    {/* -----3 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-10 -left-12
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable helmet
                      </div>
                      {/* Small Box */}
                      <div
                        className="w-20 h-23
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Защитная-маска.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----4 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-12 -left-36
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Liners and body armour
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-23
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Бронежилет.png')" }}
                      >
                      </div>
                    </div>
                  </div>
                  {/* 2 row */}
                  <div className="flex items-center md:gap-3 sm:gap-20 pt-5 pl-2">
                    {/* -----first image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      <div
                        className="absolute -top-12 left-10
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable gloves
                      </div>
                      <div
                        className="w-20 h-23 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Перчатки.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----2 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-1
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable neck armor
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-23
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Защита-шеи.png')" }}
                      >
                      </div>

                    </div>
                    {/* -----3 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-10 -left-12
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable guard
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-23
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Защита-паха.png')" }}
                      >
                      </div>

                    </div>
                    {/* -----4 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-12 -left-36
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Photography none
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-23
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/GoPro-13.png')" }}
                      >
                        <Image
                          src="/images/Vector-11.svg"
                          alt="Logo"
                          width={40}
                          height={40}
                          className="-top-2 pl-0 w-24 h-23"
                        />
                      </div>
                    </div>
                  </div>
                  {/* --------------user--------- */}
                  <Image src="/images/33308.png" alt="Game modes" width={20} height={20} className="pt-3 mt-5 w-8 h-8 pl-3" />
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    2-5 players</h1>
                  <h1 className="flex items-center pl-3 sm:pl-127 md:pl-73 -mt-6 text-black text-lg md:text-xl font-bold">60 GEL</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    6-9 players</h1>
                  <h1 className="flex items-center pl-3 md:pl-73 sm:pl-127 -mt-6 text-black text-lg md:text-xl font-bold">55 GEL</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    10 or more players</h1>
                  <h1 className="flex items-center pl-3 md:pl-73 sm:pl-127 -mt-6 text-black text-lg md:text-xl font-bold">60 GEL</h1>
                  <button className="h-13 w-full sm:w-140 md:w-88 font-bold ml-3 mt-5 hover:bg-black hover:text-[#c3f000] transition duration-200 bg-[#c3f000] text-black  ">
                    Sign up for the game
                  </button>
                </div>
                {/* ---------------------black box 1 ------------light --------- */}
                <div className=" md:mt-4 ">
                  <div className="w-96 h-72 md:-mt-20 md:-ml-1 sm:ml-20 sm:-mt-15 bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/Group-12.svg')" }}>
                    <h1 className="text-[#c3f000] md:pl-10 md:pt-30 sm:pl-12 sm:pt-30  ">
                      The price is per player On average, the <br /> ammunition lasts for 20 minutes
                    </h1>
                  </div>
                  <h1>

                  </h1>
                </div>
              </div>
              {/* -------------2 box---------------- */}
              <div className="  sm:w-150 md:w-96 h-190 sm:mt-52 md:mt-0">
                <div className="border-2 border-black pb-4 w-full h-full bg-[#c3f000] bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('/images/Group-8-1.svg')",
                    backgroundPosition: "center 330px"
                  }}  >
                  <h1 className=" text-black text-2xl font-bold pl-3 pt-5 ">Premium</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-5 text-black">
                    <Image src="/images/15895006.png" alt="Game modes" width={20} height={20} />
                    Duration</h1>
                  <h1 className="flex items-center pl-3 md:pl-16 -mt-6 text-black text-lg md:text-xl md:ml-28 sm:ml-96  font-bold">2 hours 30 minutes</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    <Image src="/images/16860896.png" alt="Game modes" width={20} height={20} />
                    Number of paintballs</h1>
                  <h1 className="flex items-center pl-3 md:pl-20 -mt-6 text-black text-lg md:text-xl md:ml-50 sm:ml-120 font-bold">500 pcs</h1>
                  <h1 className=" text-black pl-5 pt-3">Equipment</h1>
                  {/* images 1 row */}
                  <div className="flex items-center md:gap-3 sm:gap-20 pt-5 pl-3">
                    {/* -----first image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-10
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Protective clothing
                      </div>
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/fogi.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----2 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-1
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Water guns
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/pistol.png')" }}
                      >
                      </div>

                    </div>
                    {/* -----3 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-10 -left-12
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable helmet
                      </div>
                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/helmet.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----4 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-12 -left-36
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Liners and body armour
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/jacket.png')" }}
                      >
                      </div>
                    </div>
                  </div>
                  {/* 2 row */}
                  <div className="flex items-center md:gap-3 sm:gap-20 pt-5 pl-3">
                    {/* -----first image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      <div
                        className="absolute -top-12 left-10
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable gloves
                      </div>
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/glves.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----2 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-1
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable neck armor
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/download')" }}
                      >
                      </div>

                    </div>
                    {/* -----3 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-10 -left-12
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable guard
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/underwear.png')" }}
                      >
                      </div>

                    </div>
                    {/* -----4 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-12 -left-36
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Photography yes
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/GoPro-13.png')" }}
                      >

                      </div>
                    </div>
                  </div>
                  {/* -------------text on white image --------- */}
                  <div className="flex items-center gap-3">
                    <Image src="/images/axe.png" alt="Game modes" width={20} height={20} className="w-9 h-9 mt-6 md:ml-5 sm:ml-28" />
                    <h1 className="text-xl text-black font-bold mt-6 ">
                      Knife Throwing for Free
                    </h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/images/7713930.png" alt="" width={20} height={20} className="w-9 h-9 mt-1 md:ml-5 sm:ml-28 " />
                    <h1 className="text-xl text-black font-bold mt-1">
                      GoPro filming as a gift
                    </h1>
                  </div>
                  {/* --------------user--------- */}
                  <Image src="/images/33308.png" alt="Game modes" width={20} height={20} className="pt-3 mt-5 w-8 h-8 pl-3" />
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    2-5 players</h1>
                  <h1 className="text-gray-500 line-through font-bold  opacity-60 text-xl md:pl-40 sm:pl-96 -mt-6 flex items-center gap-3 ">
                    130 GEL
                  </h1>
                  <h1 className="flex items-center pl-3 md:ml-68 sm:ml-120 pt-2 -mt-8 text-black text-lg md:text-xl font-bold">110 GEL</h1>
                  <h1 className="flex items-center gap-3 pl-3  text-black">
                    6-9 players</h1>
                  <h1 className="text-gray-500 line-through font-bold  opacity-60 text-xl md:pl-40 sm:pl-96 -mt-6 flex items-center gap-3 ">
                    125 GEL
                  </h1>
                  <h1 className="flex items-center pl-3 md:ml-68 sm:ml-120 -mt-7 text-black text-lg md:text-xl font-bold">105 GEL</h1>
                  <h1 className="flex items-center gap-3 pl-3  text-black">
                    10 or more players</h1>
                  <h1 className="text-gray-500 line-through font-bold  opacity-60 text-xl md:ml-42 sm:ml-96 -mt-6 flex items-center gap-3 ">
                    120 GEL
                  </h1>
                  <h1 className="flex items-center pl-3 md:ml-68 sm:ml-120 -mt-7 text-black text-lg md:text-xl font-bold">100 GEL</h1>
                  <button className="h-13 w-full sm:w-140 md:w-88 font-bold ml-3 mt-10 hover:bg-black hover:text-[#c3f000] transition duration-200 bg-white text-black  ">
                    Sign up for the game
                  </button>
                </div>
                {/* ---------------------black box 2 ------------premium --------- */}
                <div className="  md:ml-2  ">
                  <div className="w-96 h-72 md:-mt-20 md:-ml-1 sm:ml-20 sm:-mt-15 md:mb-5  bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/Group-12.svg')" }}>
                    <h1 className="text-[#c3f000] md:pl-10 md:pt-30 sm:pl-12 sm:pt-30  ">
                      The price is indicated for one player On <br /> average, ammunition lasts for 2 hours


                    </h1>
                  </div>
                  <h1>
                  </h1>
                </div>

              </div>
              {/*------------------------------- box3------------------------------- */}
              <div className=" md:w-96 sm:w-150 sm:mt-52 md:mt-0 h-200">
                <div className="border-2 border-black w-full h-160">
                  <h1 className=" text-black text-2xl font-bold pl-3 pt-5 ">Medium</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-5 text-black">
                    <Image src="/images/15895006.png" alt="Game modes" width={20} height={20} />
                    Duration</h1>
                  <h1 className="flex items-center pl-3 md:pl-16 -mt-6 text-black text-lg md:text-xl md:ml-32 sm:ml-96 font-bold">1 hour 30 minutes</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    <Image src="/images/16860896.png" alt="Game modes" width={20} height={20} />
                    Number of paintballs</h1>
                  <h1 className="flex items-center pl-3 md:pl-20 -mt-6 text-black text-lg md:text-xl md:ml-52 sm:ml-120 font-bold">300 pcs</h1>
                  <h1 className=" text-black pl-5 pt-3">Equipment</h1>
                  {/* images 1 row */}
                  <div className="flex items-center md:gap-3 sm:gap-20 pt-5 px-2">
                    {/* -----first image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-10
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Protective clothing
                      </div>
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Костюм.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----2 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-1
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Water guns
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Оружие.png')" }}
                      >
                      </div>

                    </div>
                    {/* -----3 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-10 -left-12
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable helmet
                      </div>
                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Защитная-маска.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----4 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-12 -left-36
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Liners and body armour
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Бронежилет.png')" }}
                      >
                      </div>
                    </div>
                  </div>
                  {/* 2 row */}
                  <div className="flex items-center md:gap-3 sm:gap-20 pt-5 pl-3">
                    {/* -----first image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      <div
                        className="absolute -top-12 left-10
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable gloves
                      </div>
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Перчатки.png')" }}
                      >
                      </div>
                    </div>
                    {/* -----2 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">
                      <div
                        className="absolute -top-12 left-1
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable neck armor
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Защита-шеи.png')" }}
                      >
                      </div>

                    </div>
                    {/* -----3 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-10 -left-12
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Disposable guard
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/Защита-паха.png')" }}
                      >
                      </div>

                    </div>
                    {/* -----4 image of 1 box------ */}
                    <div className="relative w-20 h-20 group">

                      {/* Hover Tooltip */}
                      <div
                        className="absolute -top-12 -left-36
               bg-[#c3f000] text-black font-semibold 
               px-12 py-5 border border-black
               opacity-0 group-hover:opacity-100
               transition duration-300 
               whitespace-nowrap z-10">
                        Photography none
                      </div>

                      {/* Small Box */}
                      <div
                        className="w-20 h-20 
               bg-center bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: "url('/images/GoPro-13.png')" }}
                      >
                        <Image
                          src="/images/Vector-11.svg"
                          alt="Logo"
                          width={40}
                          height={40}
                          className="-top-2 pl-0 w-24 h-23"
                        />
                      </div>
                    </div>
                  </div>
                  {/* --------------user--------- */}
                  <Image src="/images/33308.png" alt="Game modes" width={20} height={20} className="pt-3 mt-5 w-8 h-8 pl-3" />
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    2-5 players</h1>
                  <h1 className="text-gray-500 line-through font-bold  opacity-60 text-xl md:pl-40 sm:pl-96 -mt-6 flex items-center gap-3 ">
                    95 GEL
                  </h1>
                  <h1 className="flex items-center pl-3 md:pl-68 sm:pl-125 -mt-7 text-black text-lg md:text-xl font-bold">90 GEL</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    6-9 players</h1>
                  <h1 className="text-gray-500 line-through font-bold  opacity-60 text-xl md:pl-40 sm:pl-96 -mt-6 flex items-center gap-3 ">
                    90 GEL
                  </h1>
                  <h1 className="flex items-center pl-3 md:pl-68 sm:pl-125 -mt-7 text-black text-lg md:text-xl font-bold">85 GEL</h1>
                  <h1 className="flex items-center gap-3 pl-3 pt-3 text-black">
                    10 or more players</h1>
                  <h1 className="text-gray-500 line-through font-bold  opacity-60 text-xl  md:pl-40 sm:pl-96 -mt-6 flex items-center gap-3 ">
                    85 GEL
                  </h1>
                  <h1 className="flex items-center pl-3 md:pl-68 sm:pl-125 -mt-7 text-black text-lg md:text-xl font-bold">80 GEL</h1>
                  <button className="h-13 w-full md:w-88 sm:w-140 font-bold ml-3 mt-5 hover:bg-black hover:text-[#c3f000] transition duration-200 bg-[#c3f000] text-black  ">
                    Sign up for the game
                  </button>
                </div>
                {/* ---------------------black box 3 ------------medium --------- */}
                <div className=" mt-4 ">
                  <div className="w-96 h-72 -mt-20 md:-ml-1 sm:ml-20 sm:-mt-15 md:mb-5  bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/Group-12.svg')" }}>
                    <h1 className="text-[#c3f000] pl-10 pt-30 ">
                      The price is indicated for one player On <br />average, ammunition lasts for 1 hour
                    </h1>
                  </div>
                  <h1>

                  </h1>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/* under black bg images that are under the buying plans reviews */}
      <div className="border border-white bg-white min-h-screen w-full">

        {/* -------- Additional Balls -------- */}
        <div className="border-2 flex flex-col md:mt-28 md:flex-row items-start md:items-center gap-2 border-black 
  w-full md:w-6xl h-auto px-4 md:px-0 mx-auto md:ml-24">

          <h1 className="pl-3 md:pb-3 flex items-center gap-3 text-xl md:text-2xl font-bold pt-3 text-black">
            <Image src="/images/16860896.png" alt="Game modes" width={30} height={30} />
            Additional balls
          </h1>

          <h1 className="flex items-center md:pl-58 pt-2 md:pb-3 text-black text-lg md:text-xl font-semibold">
            200 pcs
          </h1>

          <h1 className="flex items-center md:pl-58 pt-2 md:pb-3 text-black text-lg md:text-xl font-semibold">
            Price
          </h1>

          <h1 className="flex items-center md:pl-58 pt-2 md:pb-3 text-black text-lg md:text-xl font-bold">
            35 GEL
          </h1>

        </div>

        {/* -------- Reviews Title -------- */}
        <h1 className="text-black font-bold text-3xl md:text-5xl px-4 md:px-0 md:ml-24 mt-10">
          Why choose us?
        </h1>

        {/* -------- Reviews -------- */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-3 px-4 md:px-0 md:ml-24 mt-10">

          {/* ----- box1 ----- */}
          <div className="border-2 border-black bg-black w-full md:w-94 h-60">
            <h1 className="text-white font-bold pl-3 pt-3 text-2xl">Sandro</h1>
            <h1 className="text-gray-500 flex items-center -mt-6 sm:ml-96 md:ml-42 font-bold">
              I’ve played a few times.
            </h1>

            <h1 className="text-white pl-3 md:pl-14 pt-2 font-bold">
              Nice field- awesome to play on!
            </h1>

            <Image
              src="/images/18522004.png"
              alt="Game modes"
              width={30}
              height={30}
              className="mt-16 md:mt-20 text-white ml-3"
            />

            <h1 className="text-white pl-12 md:pl-20 pt-2 md:pt-20 font-bold">
              @nickname
            </h1>
          </div>

          {/* ----- box2 ----- */}
          <div className="border-2 border-black bg-black w-full md:w-94 h-60">
            <h1 className="text-white font-bold pl-3 pt-3 text-2xl">Sandro</h1>

            <h1 className="text-gray-500 flex items-center -mt-6 sm:ml-96 md:ml-42 font-bold">
              I’ve played a few times.
            </h1>

            <h1 className="text-white pl-3 md:pl-14 pt-2 font-bold">
              Nice field- awesome to play on!
            </h1>

            <Image
              src="/images/18522004.png"
              alt="Game modes"
              width={30}
              height={30}
              className="mt-16 md:mt-20 text-white ml-3"
            />

            <h1 className="text-white pl-12 md:pl-20 pt-2 md:pt-20 font-bold">
              @nickname
            </h1>
          </div>

          {/* ----- box3 ----- */}
          <div className="border-2 border-black bg-black w-full md:w-94 h-60">
            <h1 className="text-white font-bold pl-3 pt-3 text-2xl">Sandro</h1>

            <h1 className="text-gray-500 flex items-center sm:ml-96 -mt-6 md:ml-42 font-bold">
              I’ve played a few times.
            </h1>

            <h1 className="text-white pl-3 md:pl-14 pt-2 font-bold">
              Nice field- awesome to play on!
            </h1>

            <Image
              src="/images/18522004.png"
              alt="Game modes"
              width={30}
              height={30}
              className="mt-16 md:mt-20 text-white ml-3"
            />

            <h1 className="text-white pl-12 md:pl-20 pt-2 md:pt-20 font-bold">
              @nickname
            </h1>
          </div>

        </div>

      </div>
      {/* -----------------last 3 dives ----------- */}
      {/* div1 */}
      <div className="bg-white w-full py-12">

        <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2">

            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Big company and <br /> no transportation?
            </h1>

            <p className="text-black pt-4 text-sm md:text-base">
              We provide transportation for your convenience! Simply inform
              the manager and we’ll take care of the rest.
            </p>

            <button className="h-12 w-full md:mt-52 md:w-72 font-bold mt-6 hover:bg-black hover:text-[#c3f000] transition duration-200 bg-[#c3f000] text-black">
              Sign up for the game
            </button>

          </div>


          {/* RIGHT IMAGE */}
          <div
            className="w-full md:w-1/2 h-72 md:h-105 border border-black bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/DSCF8521-7.webp')",
            }}
          ></div>

        </div>


        {/* Decorative Arrow */}
        <Image
          src="/images/Group-3-1.svg"
          alt="Arrow"
          width={230}
          height={200}
          className="hidden md:block absolute right-96 md:mr-42 -mt-56 w-68"
        />

      </div>
      {/* div2 */}
      <div className="bg-white w-full py-12">

        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">

          {/* LEFT SIDE — IMAGE */}
          <div
            className="w-full md:w-1/2 h-64 md:h-105 border border-black bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/Фото-3.webp')",
            }}
          ></div>


          {/* RIGHT SIDE — TEXT */}
          <div className="w-full md:w-1/2 relative">

            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Planning a corporate party?
            </h1>

            <p className="text-black pt-3 text-sm md:text-base leading-relaxed">
              Gather a team of 10 or more and enjoy an exclusive 6 extra hours on the field,
              complete with a barbecue grill. The entire venue is yours!
            </p>

            <button className="h-12 w-full md:w-72 md:mt-68 font-bold mt-6 hover:bg-black hover:text-[#c3f000] transition duration-200 bg-[#c3f000] text-black">
              Book a Transfer
            </button>


            {/* Decorative Image 1 */}
            <Image
              src="/images/Graffiti.png"
              alt="Decoration"
              width={430}
              height={400}
              className="hidden md:block absolute right-72 top-24 w-60"
            />

            {/* Decorative Image 2 */}
            <Image
              src="/images/Graffiti-1.png"
              alt="Decoration"
              width={400}
              height={100}
              className="hidden md:block absolute -left-48 -top-3 w-52"
            />

          </div>

        </div>

      </div>
      {/* div3 */}
      <div className="bg-white w-full py-12">

        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">

          {/* LEFT SIDE — TEXT */}
          <div className="w-full md:w-1/2">

            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Looking for an <br />unique gift?
            </h1>

            <p className="text-black pt-4 text-sm md:text-base leading-relaxed">
              A vibrant gift certificate with paintballs, plus free delivery in
              Tbilisi! Give the gift of unforgettable excitement—hassle-free!
            </p>

            <button className="h-12 w-full md:w-72 md:mt-32 font-bold mt-6 hover:bg-black hover:text-[#c3f000] transition duration-200 bg-[#c3f000] text-black">
              Order a gift certificate
            </button>

          </div>


          {/* RIGHT SIDE — IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">

            <Image
              src="/images/Фото-4.png"
              alt="Gift certificate"
              width={700}
              height={700}
              className="w-full max-w-105 md:max-w-125 h-auto"
            />

          </div>

        </div>

      </div>
      {/* -----------------------gallery section------------ */}
      <div className="md:mt-10">
        <GallerySection />
      </div>

      {/* ---------------------------questions ---------------------- */}
      <div className="home-section bg-white text-black gap-4 mt-20 md:mt-96 px-4 md:px-10 md:pl-18 w-full min-h-screen">

        <h2 className="text-3xl md:text-4xl mb-10 md:mb-15 font-bold md:-mt-80">
          Any questions left?
        </h2>

        <div className="space-y-4">

          {faqData.map((item: FAQItem, index: number) => (

            <div key={index} className="border-b-2 pb-6 md:pb-9">

              <div
                className="flex justify-between items-start md:items-center cursor-pointer gap-4"
                onClick={() => toggleAnswer(index)}
              >

                <h3 className="text-lg md:text-xl font-semibold w-full md:w-6xl">
                  {item.question}
                </h3>

                <div className="shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>

              </div>

              {openIndex === index && (
                <p className="mt-4 text-sm md:text-base w-full md:w-6xl">
                  {item.answer}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>
      {/* ----------------------last box----------------------- */}
      <div className="border border-white w-full min-h-screen bg-white">

        <div className="md:border md:border-black w-full md:w-6xl h-auto px-4 md:px-0 mt-8 md:mt-20 mx-auto md:ml-24 py-8 md:py-0">

          <h1 className="text-3xl md:text-4xl font-bold text-black mt-5 ml-0 md:ml-8">
            Not ready to sign up for a <br /> game right now?
          </h1>

          <h1
            className="bg-no-repeat h-auto md:h-96 ml-0 md:ml-8 mt-4 pl-14 md:pl-14 pt-3 text-sm text-[#c3f000]"
            style={{
              backgroundImage: "url('/images/Group-12.svg')",
              backgroundSize: "500px",
            }}
          >
            Follow us on our social networks! We regularly post <br />
            promotions and announcements for upcoming games, <br />
            where everyone is welcome, even if you don’t have a team <br />
            yet.
          </h1>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-6 ml-0 md:ml-9">

            <Image
              src="/images/18522004.png"
              alt=""
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14"
            />

            <Image
              src="/images/facebook.png"
              alt=""
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14"
            />

            <Image
              src="/images/mail.png"
              alt=""
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14"
            />

          </div>

          {/* Decorative image */}
          <div
            className="bg-no-repeat mt-10 md:ml-120 md:mt-72"
            style={{
              backgroundImage: "url('/images/Social.svg')",
              backgroundSize: "650px",
              backgroundPosition: "right 170px",
            }}
          >

            <Image
              src="/images/Subtract.png"
              alt=""
              width={700}
              height={700}
              className="w-full max-w-[450px] md:w-120 md:h-72 md:ml-52 md:-mt-180"
            />

          </div>

        </div>
      </div>


      {/* -----------------footer-------------------- */}
      <div className="border border-black bg-black w-full">

        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-0">

          <Image
            src="/images/Logo.svg"
            alt=""
            width={200}
            height={200}
            className="w-40 md:w-48 h-auto ml-4 md:ml-15 mt-4"
          />

          {/* Column 1 */}
          <div className="text-gray-500 text-xl pt-10 md:pt-16 md:pl-10 font-bold w-full md:w-62 px-4 md:px-0">
            About the company

            <h1 className="text-lg font-medium pt-6 hover:text-[#c3f000]">About us</h1>
            <h1 className="text-lg pt-2 font-medium hover:text-[#c3f000]">Gallery</h1>
            <h1 className="text-lg pt-2 font-medium hover:text-[#c3f000]">Polygon</h1>
            <h1 className="text-lg pt-2 font-medium hover:text-[#c3f000]">FAQ</h1>

          </div>

          {/* Column 2 */}
          <div className="text-gray-500 text-xl pt-10 md:pt-16 md:pl-10 font-bold w-full md:w-62 px-4 md:px-0">
            For clients

            <h1 className="text-lg font-medium pt-6 hover:text-[#c3f000]">Price</h1>
            <h1 className="text-lg pt-2 font-medium hover:text-[#c3f000]">Gift certificate</h1>
            <h1 className="text-lg pt-2 font-medium hover:text-[#c3f000]">Transmission</h1>
            <h1 className="text-lg pt-2 font-medium hover:text-[#c3f000]">Corporate party</h1>

          </div>

          {/* Column 3 */}
          <div className="text-gray-500 text-xl pt-10 md:pt-16 md:pl-16 font-bold w-full md:w-72 px-4 md:px-0">

            Contacts

            <h1 className="text-lg font-medium pt-6 hover:text-[#c3f000] flex items-center">
              <Image src="/images/phone-call.png" alt="" width={20} height={20} className="mr-2" />
              +995 557 290 085
            </h1>

            <h1 className="text-lg font-medium pt-2 hover:text-[#c3f000] flex items-center">
              <Image src="/images/email.png" alt="" width={20} height={20} className="mr-2" />
              info@paintball.ge
            </h1>

            <h1 className="text-lg font-medium pt-2 hover:text-[#c3f000] flex items-center">
              <Image src="/images/location-pin.png" alt="" width={20} height={20} className="mr-2" />
              Tbilisi, see on the map
            </h1>

            <h1 className="text-lg font-medium pt-2 hover:text-[#c3f000] flex items-center">
              <Image src="/images/location-pin.png" alt="" width={20} height={20} className="mr-2" />
              Batumi, see on the map
            </h1>

          </div>

          {/* Column 4 */}
          <div className="text-gray-500 text-xl pt-10 md:pt-16 md:pl-18 font-bold w-full md:w-68 px-4 md:px-0">

            Working hours

            <h1 className="text-lg pt-6 font-medium hover:text-[#c3f000]">
              Open every day by <br /> appointment
            </h1>

            <button className="h-12 w-32 font-bold text-lg mt-6 md:mt-36 md:ml-18 hover:bg-black hover:text-[#c3f000] transition duration-300 bg-[#c3f000] text-black">
              Book online
            </button>

          </div>

        </div>


        {/* Bottom bar */}
        <div className="border-t border-white mt-10 mx-4 md:mx-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 gap-4">

          <h1 className="text-sm text-gray-600">
            © 2025. All rights reserved.
          </h1>

          <h1 className="text-sm text-gray-600 hover:text-[#c3f000]">
            Privacy Policy
          </h1>

          <div className="flex gap-4">
            <div className="bg-[#c3f000] w-7 h-7 flex items-center justify-center">
              <Image src="/images/mail.png" alt="" width={18} height={18} />
            </div>

            <div className="bg-[#c3f000] w-7 h-7 flex items-center justify-center">
              <Image src="/images/733641.png" alt="" width={18} height={18} />
            </div>
          </div>

        </div>

      </div>

    </div >
  );
}
