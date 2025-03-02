"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface ContentProps {
  id: string;
  title: string;
  subtitle: string;
  titleContent: string;
  content: string;
  image: string[];
}
const Content: React.FC<ContentProps> = ({
  id,
  title,
  subtitle,
  titleContent,
  content,
  image,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + image.length) % image.length
    );
  };
  const isVideo = (mediaSrc: string) => {
    return mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".webm");
  };
  return (
    <div>
      <div className="h-auto md:h-[90vh] bg-[#F5F5F7] rounded-xl p-4 flex flex-col md:flex-row ">
        {/* Carousel */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden rounded-xl">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center h-full"
          >
            {isVideo(image[currentIndex]) ? (
              <video width="500" controls>
                <source src={image[currentIndex]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={image[currentIndex]}
                alt="carousel media"
                width={500}
                height={500}
                className="h-full object-scale-down rounded-xl"
              />
            )}
          </motion.div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            ▶
          </button>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center p-8">
          <h2 className="text-2xl font-bold mb-4">
            {/* 10 Days, 30 Meals – My Quarantine Food Adventure in Taiwan! */}
            {/* <div dangerouslySetInnerHTML={{ __html: titleContent }} /> */}
            {titleContent}
          </h2>
          {/* Scrollable Content */}
          <div className="h-[300px] md:h-[400px] overflow-y-auto pr-2">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
