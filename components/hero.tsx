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
  return (
    <div className="hero-section">
      <div className="flex flex-col justify-evenly ">
        <div className="p-2">
          {/* <p className="first-text-hero font-bold leading-tight">Hello,</p> */}
          <p className="second-text-hero text-6xl md:text-8xl font-bold leading-tight">
            Hello, I&apos;m Supaporn.
          </p>
          <p className="text-5xl md:text-7xl font-bold leading-tight">
            A Software Engineer
          </p>
          <br />
          <p className="text-base md:text-xl leading-tight font-light">
            Bringing ideas to life as tangible products is my passion.
          </p>
          <p className="text-base md:text-xl  leading-tight font-light">
            skilled in web development and design,I deliver high-quality
            projects that combine functionality with aesthetics.
          </p>
        </div>
        <div className="flex justify-center">
          <motion.button className="button-home py-2 px-9" whileHover={{scale:1.1}}>My resume</motion.button>
        </div>
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
