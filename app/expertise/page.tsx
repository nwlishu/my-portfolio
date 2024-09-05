"use client";
import React, { useEffect, useState } from "react";
// import Expertise from "@/components/expertise1";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion/dom";

const Expertise1 = () => {
  // const [scope, animate] = useAnimate()\
  const expertise = [
    {
      title: "AI Development",
      image: "/ai.png",
      desc: "Experienced developer in protected the copyright image from generative models using Python and cloud platforms.",
      tools: {
        title: "Machine Learning Tools and AI Frameworks",
        tool: [
          {
            name: "PyTorch",
            image: "/pytorch.webp",
          },
          {
            name: "Python",
            image: "/python_icon.png",
          },
          {
            name: "Jupyter",
            image: "/jupyter.png",
          },
          {
            name: "Runpod.io",
            image: "/rupod.png",
          },
        ],
      },
    },
    {
      title: "Front end Development",
      image: "/react.png",
      desc: "Enthusiastic about UX/UI design, skilled in HTML, CSS, JavaScript, and experienced with React and Next.js frameworks.",
      tools: {
        title: "Front end Tools and Framworks",
        tool: [
          {
            name: "HTML",
            image: "/pytorch.webp",
          },
          {
            name: "CSS",
            image: "/pytorch.webp",
          },
          {
            name: "SCSS",
            image: "/pytorch.webp",
          },
          {
            name: "JavaScript",
            image: "/pytorch.webp",
          },
          {
            name: "React",
            image: "/pytorch.webp",
          },
          {
            name: "NextJS",
            image: "/pytorch.webp",
          },
          {
            name: "Figma",
            image: "/pytorch.webp",
          },
          {
            name: "tailwindCSS",
            image: "/pytorch.webp",
          },
        ],
      },
    },
    {
      title: "Back end Development",
      image: "/backend.png",
      desc: "Skilled in database development and design using PostgreSQL and MySQL, and skilled in backend development with Node.js",
      tools: {
        title: "Back end Tools and Framworks",
        tool: [
          {
            name: "NodeJS",
            image: "/pytorch.webp",
          },
          {
            name: "PostgreSQL",
            image: "/pytorch.webp",
          },
          {
            name: "MySLQ",
            image: "/pytorch.webp",
          },
        ],
        // ["NodeJS", "PostgreSQL", "MySLQ"],
      },
    },
    // "AI Development",
    // "Front end Development",
    // "Back end Development",
  ];

  return (
    <>
      <motion.div
        className="lg:h-screen bg-expertise flex flex-col justify-start px-36"
        initial={{ x: "900vh" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="my-14">
          <h1 className="space-mono-bold text-2xl md:text-5xl lg:text-6xl expert">
            My Expertise and Tooling
          </h1>
          <hr className="mt-4 hr-style" />
          <p className="mt-4 w-4/6	text-xl font-bold">
            Welcome to my Expertise and Tooling page, where I showcase the key
            areas of my technical proficiency.
            {/* In AI Development, I leverage
            cutting-edge tools to build intelligent systems. For Front-End
            Development, I craft responsive and user-friendly interfaces using
            modern frameworks. On the Back-End, I ensure robust and scalable
            architectures with the latest technologies. Discover the tools and
            techniques that power my work in each of these domains. */}
          </p>
          <div className="flex flex-col md:flex-row w-full justify-center">
            {expertise.map((item, index) => (
              <>
                <div className="flex-1 p-5 ">
                  <div className="border h-full p-5 box-shadow bg-card">
                    <h1 className="text-2xl">
                      <b className="">0{index + 1}</b>
                    </h1>
                    <div className="flex justify-center">
                      <Image
                        src={item.image}
                        className=""
                        width={70}
                        height={70}
                        alt="python"
                      />
                    </div>
                    <h1 className="text-center text-xl md:text-2xl">
                      <b>{item.title}</b>
                    </h1>
                    <p className="p-8">{item.desc}</p>
                    <p className="font-bold	text-center">{item.tools?.title}</p>
                    {/* <div className="flex justify-center">
                      <button className="bg-gray-50 p-2">Tools</button>
                    </div> */}
                    <div className="flex flex-wrap justify-start p-8 gap-3">
                      {item.tools.tool?.map((tool_item, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-1 rounded  flex items-center"
                        >
                          {typeof tool_item === "object" ? (
                            <>
                              <Image
                                src={tool_item.image}
                                className=""
                                width={30}
                                height={30}
                                alt={tool_item.name}
                              />
                              <span>{tool_item.name}</span>
                            </>
                          ) : (
                            <span>{tool_item}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </motion.div>
    </>
  );
};

export default Expertise1;
