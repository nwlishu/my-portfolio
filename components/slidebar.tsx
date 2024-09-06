"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import image3 from "@/public/pexels-stephen-leonardi-587681991-28133538.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
  src: StaticImageData;
  title: string;
  desc: string;
}

// Image data array
const images: ImageData[] = [
  {
    src: image3,
    title: "Personal Finance",
    desc: "Developed and managed a personal finance system to effectively track income, expenses, budgeting, and investments. Implemented financial planning strategies to optimize savings and ensure long-term financial stability.",
  },
  {
    src: image3,
    title: "AI security",
    desc: "descript personal finenace1",
  },
  {
    src: image3,
    title: "Personal FInance2",
    desc: "descript personal finenace2",
  },
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  //   useEffect(() => {
  //     // Start interval for automatic slide change if not hovered
  //     if (!isHovered) {
  //       const interval = setInterval(() => {
  //         nextSlide();
  //       }, 3000);

  //       // Cleanup the interval on component unmount
  //       return () => {
  //         clearInterval(interval);
  //       };
  //     }
  //   }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      <motion.div className="flex flex-col md:flex-row justify-center items-center  h-[460px]  mx-12 group ">
        <div className="flex-1">
          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            // layout="fill"
            objectFit="cover"
            className="rounded-xl transition-all ease-in-out cursor-pointer"
            // onMouseOver={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col md:flex-row justify-center px-4 ">
            <div className="scroll-container-slide">
              <h1 className="text-4xl font-bold mb-6">
                {images[currentIndex].title}
              </h1>
              <h1 className="text-xl font-extralight">
                {images[currentIndex].desc}
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
      <button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#F9F9EC] mx-1 -mt-[10px] -translate-y-1/2  text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#F9F9EC] mx-1 -mt-[10px] -translate-y-1/2  text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#FFB531] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
