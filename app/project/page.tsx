"use client";
import React, { useRef } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const Project = () => {
  return (
    <>
      <h1>hello</h1>
      {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.6 }}
        >
          <Navbar activeSection={activeSection} />
        </motion.div> */}
    </>
  );
};

export default Project;
