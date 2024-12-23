import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypewriterEffect } from "./ui/TypeWriterEffect";
import { motion, AnimatePresence } from "framer-motion";

const hero = () => {
  // skilled in web development and design, I deliver high-quality projects that combine functionality with aesthetics.
  const words = [
    {
      text: "Hi!",
      className: "text-center text-[40px] md:text-5xl lg:text-6xl",
    },
    {
      text: "I'm",
      className: "text-center text-[40px] md:text-5xl lg:text-6xl",
    },
    {
      text: "Supaporn, ",
      className: "text-center text-[40px] md:text-5xl lg:text-6xl",
    },
    {
      text: "A",
      className: "text-center text-[40px] md:text-5xl lg:text-6xl",
    },
    {
      text: "Software",
      className: "text-center text-[40px] md:text-5xl lg:text-6xl",
    },
    {
      text: "Engineer",
      className: "text-center text-[40px] md:text-5xl lg:text-6xl",
    },
  ];
  const list = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
      };
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        when: "afterChildren", // Wait for parent animation to complete first
        staggerChildren: 3, // Optional: Delay between child animations
        duration: 1.5, // Duration for the parent animation
      },
    },
    hidden: {
      opacity: 0,
      y: "100vh", // Initial position for the parent
    },
  };

  return (
    <div className="hero-section">
      <div className="flex flex-col justify-evenly ">
        <div className="p-2">
          {/* <p className="first-text-hero font-bold leading-tight">Hello,</p> */}
          <motion.p
            className="second-text-hero text-6xl md:text-8xl font-bold leading-5"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 1.2 }}
          >
            Hello,
            I&apos;m Supaporn.
          </motion.p>
          <motion.p
            className="second-text-hero text-5xl md:text-6xl font-bold leading-5"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.2 }}
          >
            A Software Engineer
            <br />
          </motion.p>
          <motion.p
            className="text-base md:text-xl leading-tight font-light"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
          >
            Bringing ideas to life as tangible products is my passion.
          </motion.p>
          <motion.p
            className="text-base md:text-xl  leading-tight font-light"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          >
            skilled in web development, I deliver high-quality projects that
            combine functionality with aesthetics.
          </motion.p>
        </div>
        <motion.div
          className="flex justify-start mt-12 p-2"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
        >
          <motion.button
            className="button-home py-2 px-7 mb:py-2 md:px-9"
            whileHover={{ scale: 1.1 }}
          >
            {/* <a href="/books/a-great-book.pdf" target="_blank">
             */}
            <a className="text-sm md:text-base">My Resume</a>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default hero;
