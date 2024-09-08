"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import ImageSlider from "@/components/slidebar";
const items = [
  {
    id: 1,
    title: "Personal finance",
    img: "https://images.pexels.com/photos/14040245/pexels-photo-14040245.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem fjdksajkfdsjkjldjfkldjljkl",
  },
  {
    id: 2,
    title: "AI",
    img: "https://images.pexels.com/photos/9743361/pexels-photo-9743361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem fjdksajkfdsjkjldjfkldjljkl",
  },
];
interface Item {
  id: number;
  title: string;
  img: string;
  desc: string;
}

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
      },
    };
  },
};
const fadeInAnimationsVariants1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    };
  },
};

const Project = () => {
  const ref = useRef();
  return (
    <>
      <div className="contact-section">
        <motion.div
          className="mt-12 text-5xl md:text-7xl font-bold leading-tight"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My Archives
        </motion.div>
        <motion.div
          className="flex justify-evenly w-full mt-16 px-20 md:px-40"
          variants={fadeInAnimationsVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <ImageSlider />
        </motion.div>
      </div>
    </>
  );
};
export default Project;
