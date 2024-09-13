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

  const list1 = {
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
        staggerChildren: 4, // Optional: Delay between child animations
        duration: 1.6, // Duration for the parent animation
      },
    },
    hidden: {
      opacity: 0,
      y: "100vh", // Initial position for the parent
    },
  };

  const list2 = {
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
        staggerChildren: 4, // Optional: Delay between child animations
        duration: 1.7, // Duration for the parent animation
      },
    },
    hidden: {
      opacity: 0,
      y: "100vh", // Initial position for the parent
    },
  };

  const list3 = {
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
        staggerChildren: 4, // Optional: Delay between child animations
        duration: 1.8, // Duration for the parent animation
      },
    },
    hidden: {
      opacity: 0,
      y: "100vh", // Initial position for the parent
    },
  };
  return (
    <div className="hero-section">
      <div className="flex flex-col justify-evenly p-28 ">
        <div className="p-2">
          {/* <p className="first-text-hero font-bold leading-tight">Hello,</p> */}
          <motion.p
            className="second-text-hero text-7xl md:text-8xl font-bold leading-tight"
            initial="hidden"
            animate="visible"
            variants={list}
            // whileInView="animate"
            // viewport={{ once: true }}
          >
            Hello, I&apos;m Supaporn.
          </motion.p>
          <motion.p
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial="hidden"
            animate="visible"
            variants={list1}
          >
            A Software Engineer
          </motion.p>
          <br />
          <motion.p
            className="text-base md:text-xl leading-tight font-light"
            initial="hidden"
            animate="visible"
            variants={list2}
          >
            Bringing ideas to life as tangible products is my passion.
          </motion.p>
          <motion.p
            className="text-base md:text-xl  leading-tight font-light"
            initial="hidden"
            animate="visible"
            variants={list2}
          >
            skilled in web development and design,I deliver high-quality
            projects that combine functionality with aesthetics.
          </motion.p>
        </div>
        <motion.div
          className="flex justify-start mt-12 p-2"
          initial="hidden"
          animate="visible"
          variants={list3}
        >
          <motion.button
            className="button-home py-2 px-9"
            whileHover={{ scale: 1.1 }}
          >
            {/* <a href="/books/a-great-book.pdf" target="_blank">
 */}
            <a>
               Get My Resume
            </a>
           
          </motion.button>
        </motion.div>
      </div>
    </div>
    // <div className="pd-20 pt-36 min-h-screen">
    //   <div className="flex justify-center relative my-20 z-10">
    //     <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ y: -5, opacity: 1 }}
    //         transition={{ duration: 1.3 }}
    //       >
    //         <div>
    //           <h1 className="space-mono-bold text-[40px] md:text-5xl lg:text-6xl my-14  ">
    //             <span className="hero">Hi!, Im Supaporn.</span> <br />
    //             {/* <span>A Software Engineer.</span> */}
    //             <span className="hero">A Full Stack Developer.</span>
    //           </h1>
    //         </div>
    //       </motion.div>

    //       {/* <h1 className="text-center space-mono-bold text-[40px] md:text-5xl lg:text-6xl my-14">
    //         A Software Engineer.
    //       </h1> */}
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ y: -5, opacity: 1 }}
    //         transition={{ duration: 1.3 }}
    //       >
    //         <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl hero">
    //           skilled in web development and design, I deliver high-quality
    //           projects that combine functionality with aesthetics.
    //         </p>
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default hero;
