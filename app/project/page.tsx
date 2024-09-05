"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Personal Finance Management",
    img: "/pexels-photo-27077969.webp",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 2,
    title: "Warehouse Management System",
    img: "/pexels-photo-27077969.webp",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

const Project = () => {
  return (
    <>
      <motion.div
        className="lg:h-screen bg-expertise flex flex-col justify-start px-36"
        initial={{ x: "-900vh" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="my-14 bg-expertise">
          <h1 className="space-mono-bold text-2xl md:text-5xl lg:text-6xl expert ">
            My Archive
          </h1>
          <hr className="mt-4 hr-style" />
        </div>
      </motion.div>
    </>
  );
};

export default Project;
