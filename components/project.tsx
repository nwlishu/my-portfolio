"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import ImageSlider from "@/components/slidebar";
import Aidesc from "@/components/ai";
import { StaticImageData } from "next/image";
import image3 from "@/public/pexels-stephen-leonardi-587681991-28133538.jpg";
import ai from "@/public/ai_project_transparent.png";
import finance from "@/public/finance_transparent.png";
import useMeasure from "react-use-measure";
import inventory from "@/public/inventory_transparent.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sortedLastIndex } from "lodash";
import hero_inventory from "@/public/hero_inventory.png";
import hero_ai from "@/public/ai-security.png";
import hero_coming from "@/public/coming.png";
import previous from "@/public/previous.svg";
import next from "@/public/next_new.svg";
interface ImageData {
  src: StaticImageData;
  title: string;
  desc: string;
}

interface techStackDetail {
  name: Array<string>;
}
interface Technology {
  img: string; // URL of the technology image
  name: string; // Name of the technology
}
interface DetailItem {
  title: string;
  field: string;
  subtitle: string;
  techStack: {
    [key: string]: Array<Technology>; // Tech categories with an array of Technology objects
  };
  detail: string;
  motivation: string;
  problem: string;
  goals: Array<string>;
  color: string;
  hero: StaticImageData;
  idea: string;
  futureWork?: string;
}

// Image data array
const images: ImageData[] = [
  {
    src: inventory,
    title: "Inventory Management",
    desc: "Developed an adversarial method to protect copyright images from generative models.",
  },
  {
    src: ai,
    title: "AI security",
    desc: "Developed an adversarial example method to protect copyright images from diffusion models.",
  },
  //     desc: "Developed an adversarial method to protect copyright images from generative models by introducing subtle perturbations that prevent AI misuse while preserving visual quality.",
  {
    src: finance,
    title: "Personal Investment",
    desc: "Developed a personal finance system to track income, expenses, budgeting, and investments.",
  },
  //     desc: "Developed a personal finance system to track income, expenses, budgeting, and investments. Implemented financial planning strategies to optimize savings and ensure long-term financial stability.",
];

const detail_item: DetailItem[] = [
  {
    title: "Inventory Management System",
    field: "Web Development",
    subtitle:
      "A web-based application for real-time inventory tracking and management, built to improve operational efficiency for businesses",
    techStack: {
      "Front-end": [
        // { img: "/devicon--react.png", name: "React.js" },
        { img: "/devicon--nextjs.png", name: "Next.js" },
        { img: "/devicon--tailwindcss.png", name: "tailwindcss" },
      ],
      "Back-end": [
        { img: "/devicon--nodejs-wordmark.png", name: "Node.js" },
        // { img: "/devicon--nextjs.png", name: "Next.js" },
      ],
      Database: [
        { img: "/devicon--oracle.png", name: "Oracle" },
        // { img: "/devicon--nextjs.png", name: "Next.js" },
      ],
      Server: [
        { img: "/logos--vercel-icon.png", name: "Vercel" },
        // { img: "/devicon--nextjs.png", name: "Next.js" },
      ],
    },
    detail:
      "Developed an adversarial method to protect copyright images from generative models by introducing subtle perturbations that prevent AI misuse while preserving visual quality.",
    problem:
      "Small and medium-sized businesses often struggle with inefficient inventory management processes, leading to overstocking, stockouts, and revenue loss.",
    goals: [
      "Build a inventory tracking system with low-stock notifications.",
      "Implement user-friendly features for managing stock, suppliers, and orders.",
    ],
    motivation:
      "I wanted to leverage my skills in web development and system design to create a modern inventory management solution that simplifies operations, minimizes waste, and provides valuable insights.",
    color: "#F5F5F7",
    hero: hero_inventory,
    idea: "An Inventory Management System automates and optimizes the process of tracking inventory throughout its lifecycle — from procurement to storage, and ultimately to sales or distribution. It ensures efficiency, reduces manual errors, and provides real-time insights for better decision-making.",
    futureWork:
      "In the future, this project will incorporate machine learning to enhance inventory management capabilities. ML can be utilized for demand forecasting, anomaly detection, and automated stock replenishment. Additionally, it will enable dynamic pricing, supply chain optimization, and customer behavior analysis, ultimately improving decision-making, reducing costs, and increasing operational efficiency.",
  },
  {
    title: "AI security",
    field: "AI security",
    subtitle:
      "Protecting the copyright image from diffusion model by using the adversarial example.",

    techStack: {
      "Framework & Language": [
        { img: "/devicon--pytorch.png", name: "Pytorch" },
        { img: "/hf-logo.png", name: "HuggingFace" },
        { img: "/devicon--python.png", name: "Python" },
      ],
      "Cloud Platform": [
        { img: "/devicon--googlecloud.png", name: "Google Cloud" },
        { img: "/95939477.png", name: "Runpod.io" },
      ],
      Notebooks: [
        { img: "/logos--jupyter.png", name: "Jupyter" },
        { img: "/devicon--googlecolab.png", name: "Google Colab" },
      ],
      "Foundational Model and LLMs": [
        { img: "/Stability_Ai_—_wordmark.png", name: "Stabillity ai" },
        { img: "/30233788.png", name: "ComVis" },
      ],
    },
    detail:
      "Developed an adversarial method to protect copyright images from diffusion models by introducing subtle perturbations that prevent AI misuse while preserving visual quality.",
    problem:
      "Generative models, particularly Stable Diffusion models, have become incredibly powerful, capable of creating highly realistic images. However, this has raised significant concerns about copyright infringement. These models can be trained or fine-tuned using copyrighted images scraped from the internet without the original owners' consent. Once fine-tuned, they can potentially be misused to generate images that closely resemble the copyrighted materials they were trained on. ",
    goals: [
      "Prevent Unauthorized Training: Ensure that copyrighted images cannot be effectively used to train diffusion models by introducing imperceptible perturbations.",
    ],
    motivation:
      "Empower creators and businesses to safeguard their artistic and commercial works from being misused or exploited without their consent.",
    color: "#FFFF",
    hero: hero_ai,
    idea: "An Inventory Management System (IMS) is a software application or set of tools designed to help businesses manage and track their inventory levels, sales, orders, and deliveries. It provides a systematic approach to monitor and control stock, ensuring that businesses have the right products in the right quantity at the right time. Here's a detailed description and overview of the idea behind such a system:",
  },
  {
    title: "Personal Investment",
    field: "Web Development and Machine Learning",
    subtitle: "Web development",
    techStack: {
      "Front-end": [
        // { img: "/devicon--react.png", name: "React.js" },
        { img: "/devicon--nextjs.png", name: "Next.js" },
        { img: "/devicon--tailwindcss.png", name: "tailwindcss" },
      ],
      "Back-end": [
        { img: "/devicon--nodejs-wordmark.png", name: "Node.js" },
        // { img: "/devicon--nextjs.png", name: "Next.js" },
      ],
      Database: [
        { img: "/devicon--oracle.png", name: "Oracle" },
        // { img: "/devicon--nextjs.png", name: "Next.js" },
      ],
      Server: [
        { img: "/logos--vercel-icon.png", name: "Vercel" },
        // { img: "/devicon--nextjs.png", name: "Next.js" },
      ],
    },
    detail:
      "Developed and managed a personal finance system to effectively track income, expenses, budgeting, and investments. Implemented financial planning strategies to optimize savings and ensure long-term financial stability.",
    problem:
      "I often find it difficult to keep track of my personal finances and investments. It's easy for me to lose sight of where my money is going, which sometimes leads to missed opportunities for saving or investing.",
    goals: [
      "My goal is to create an easy-to-use dashboard that provides insightful analytics (e.g., ROI, risk, market trends) to aid in better decision-making. This will help me make smarter choices when buying, selling, or holding investments.",
      "I want to set specific savings goals (e.g., saving for a house, retirement, emergency fund) and use the system to track progress toward those goals. It will help me set realistic targets, automate saving, and ensure I stay on track.",
      "A key goal is to develop a long-term strategy that aligns with my financial goals. This includes retirement planning, wealth-building, and ensuring my investments grow in line with my life plans.",
    ],
    motivation:
      "My motivation to create a personal investment tool stems from a desire to achieve financial independence. I want to be more in control of my finances, reduce uncertainty, and ensure that I am making smart financial decisions. By building a tool that tracks my investments and helps me visualize my financial goals, I can make more informed decisions and optimize the returns on my investment.",
    color: "#F5F5F7",
    hero: hero_coming,
    idea: "An Inventory Management System (IMS) is a software application or set of tools designed to help businesses manage and track their inventory levels, sales, orders, and deliveries. It provides a systematic approach to monitor and control stock, ensuring that businesses have the right products in the right quantity at the right time. Here's a detailed description and overview of the idea behind such a system:",
  },
];

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    // y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        ease: "easeOut",
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
        ease: "easeOut",
      },
    };
  },
};

interface ImageData {
  src: StaticImageData;
  title: string;
  desc: string;
}

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [transitionDirection, setTransitionDirection] = useState("next");

  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) =>
      prevIndex === 2 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setTransitionDirection("previous");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [open, setOpen] = useState(false);

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  console.log(currentIndex);
  const targetScale = 1 - (detail_item.length - currentIndex) * 100;
  const scale = useTransform(
    scrollYProgress,
    [currentIndex * 0.33, 1],
    [1, targetScale]
  );

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

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  //defining text animation
  const textVarients = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const imageVarients = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const textContainerVarient = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <>
      <div className="project-section p-10 ">
        <div className="">
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          >
            <p className="text-5xl md:text-7xl font-bold md:leading-none mb-5 ">
              Projects
            </p>
          </motion.div>
        </div>
        <motion.p
          className="text-sm md:text-xl font-extralight md:w-1/2"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          Here are some of my most recent projects. You can click on the detail
          button to find out more.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-start items-center md:mt-24"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          key={activeIndex}
        >
          <motion.div
            className="flex-1 flex justify-center items-center"
            variants={imageVarients}
            initial="hidden"
            animate="visible"
          >
            <Image
              className="image-project w-64	md:w-96"
              src={images[activeIndex].src}
              alt={`Slider Image ${activeIndex + 1}`}
            />
          </motion.div>
          <div className="flex-1">
            <motion.h1
              className="text-xl md:text-4xl font-bold mb-6 "
              variants={textVarients}
              initial="hidden"
              animate="visible"
            >
              {detail_item[activeIndex].title}
            </motion.h1>
            <motion.p
              // className="text-4xl font-bold mb-6 "
              variants={textVarients}
              initial="hidden"
              animate="visible"
              className="w-full md:w-3/4 mb-6 text-sm md:text-base font-extralight"
            >
              {detail_item[activeIndex].detail}
            </motion.p>
            <motion.button
              className="button-home py-2 px-7 md:py-1 md:px-9  text-sm md:text-base "
              whileHover={{ scale: 1.1 }}
              onClick={() => setOpen(true)}
            >
              Detail
            </motion.button>
          </div>
        </motion.div>

        {/* <motion.div
          className="carouselContainer"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          <motion.div
            className="contentContainer"
            key={activeIndex}
            variants={textContainerVarient}
            initial="hidden"
            animate="visible"
          >
            <div className="titleContainer">
              <motion.h1
                className="text-4xl font-bold mb-6 "
                variants={textVarients}
                initial="hidden"
                animate="visible"
              >
                {detail_item[activeIndex].title}
              </motion.h1>
            </div>
            <div className="descriptionContainer">
              <motion.p
                variants={textVarients}
                initial="hidden"
                animate="visible"
              >
                {detail_item[activeIndex].detail}
              </motion.p>
            </div>
            <motion.div className="flex justify-center mt-4">
              <motion.button
                className="button-home py-2 px-7 md:py-1 md:px-9  text-sm md:text-base "
                whileHover={{ scale: 1.1 }}
                onClick={() => setOpen(true)}
              >
                Detail
              </motion.button>
            </motion.div>
          </motion.div>
          <div className="imageContainer">
            <div>
              <Image
                className="image-project w-56	md:w-full"
                src={images[activeIndex].src}
                alt={`Slider Image ${activeIndex + 1}`}
              />
            </div>
          </div>
        </motion.div> */}
        <motion.div
          className="parentControls"
          variants={textVarients}
          initial="hidden"
          animate="visible"
        >
          <div className="controls  ">
            <button
              className={activeIndex === 0 ? "disabled" : "previousContainer"}
              onClick={handlePrevious}
            >
              <div>
                <svg
                  width="15"
                  // height=""
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_227_24)">
                    <path
                      d="M5.32495 10.075L0.676951 5.49995L5.32495 0.924952"
                      stroke={activeIndex === 0 ? "#A9A9A9" : "black"}
                      stroke-width="1.1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_227_24">
                      <rect
                        width="6"
                        height="11"
                        fill="white"
                        transform="matrix(-1 0 0 -1 6 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
            <button
              className={activeIndex === 2 ? "disabled" : "nextContainer"}
              onClick={handleNext}
            >
              <div>
                <svg
                  width="15"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_227_24)">
                    <path
                      d="M0.675049 0.924952L5.32305 5.49995L0.675049 10.075"
                      stroke={activeIndex === 2 ? "#A9A9A9" : "black"}
                      stroke-width="1.1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_227_24">
                      <rect
                        width="6"
                        height="11"
                        fill="white"
                        transform="matrix(1 0 0 1 0 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </motion.div>

        {/* <motion.div
          variants={fadeInAnimationsVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          ref={container}
        >
          {detail_item.map((item, index) => {
            return (
              <>
                <motion.div className="cardContainer">
                  <div
                    style={{
                      backgroundColor: item.color,
                      border: `groove`,
                    }}
                    className="card"
                  >
                    <p className="flex justify-end p-2 md:p-3 font-extralight text-sm md:text-base">
                      {item.field}
                    </p>
                    <hr />
                    <div className="flex flex-col md:flex-row justify-evenly items-center p-5 md:p-10">
                      <Image
                        className="image-project w-56	md:w-96"
                        src={images[index].src}
                        alt={`Slider Image ${index + 1}`}
                      />
                      <div>
                        <p className="text-xl md:text-3xl font-bold pt-5">
                          {item.title}
                        </p>
                        <p className="font-extralight text-sm md:text-base item-right-detail">
                          {images[index].desc}
                        </p>
                        <p className="font-extralight text-sm md:text-base"></p>
                        <motion.div className="flex justify-center button-project">
                          <motion.button
                            className="button-home px-5"
                            whileHover={{ scale: 1.1 }}
                            onClick={() => {
                              setOpen(true), setCurrentIndex(index);
                            }}
                          >
                            <div className="button-home py-2 px-7 md:py-1 md:px-9  text-sm md:text-base ">
                              Detail
                            </div>
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </motion.div> */}

        {/* <motion.div className="container-card">
          <div className="card-wrapper">
            <ul className="card-list">
              {detail_item.map((item, index) => {
                return (
                  <>
                    <li className="card-item">
                      <div className="contrainer-card-parent">
                        <p className="text-sm flex justify-end p-1">
                          Ai security
                        </p>
                        <hr />
                        <div className="contrainer-card">
                          <Image
                            className="image-project	"
                            src={images[index].src}
                            alt={`Slider Image ${currentIndex + 1}`}
                            width={350}
                            height={290}
                            style={{
                              objectFit: "cover",
                              width: "300px",
                              height: "140px",
                            }}
                          />
                          <p className="text-xl font-bold pt-5">
                            {images[index].title}
                          </p>
                          <p className=" font-extralight text-sm item-right-detail">
                            {images[index].desc}
                          </p>
                          <motion.div className="flex justify-center button-project">
                            <motion.button
                              className="button-home px-5"
                              whileHover={{ scale: 1.1 }}
                              onClick={() => setOpen(true)}
                            >
                              Detail
                            </motion.button>
                          </motion.div>
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </motion.div> */}

        {/* <motion.div
          className="container-card"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
        >
          {detail_item.map((item, index) => {
            return (
              <>
                <div className="project-card flex flex-col md:flex-row ">
                  <Image
                    className="image-project	"
                    src={images[index].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    width={350}
                    height={290}
                    style={{
                      objectFit: "cover",
                      width: "350px",
                      height: "290px",
                    }}
                  />
                  <div className="desc-project">
                    <h1 className="text-4xl font-bold p-4">
                      {images[index].title}
                    </h1>
                    <h1 className="p-4 font-extralight text-base item-right-detail">
                      {images[index].desc}
                    </h1>
                    <motion.div className="flex justify-center button-project">
                      <motion.button
                        className="button-home px-5"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setOpen(true)}
                      >
                        Detail
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </>
            );
          })}
        </motion.div> */}

        {/* <div className="detail-project relative">
          <button
            className="absolute cursor-pointer z-10 left-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2  text-white p-2 group"
            onClick={handlePrevious}
          >
            <ChevronLeft className="text-gray-400 group-hover:text-white" />
          </button>
          <motion.button
            className="absolute cursor-pointer z-10 right-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2  text-white p-2 group"
            onClick={handleNext}
            // whileHover={{ scale: 1.1 }}
          >
            <ChevronRight className="text-gray-400 group-hover:text-white" />
          </motion.button>
          <div className="w-full grid-cols-1 md:grid items-center sub-detail-project relative">
            <div className="justify-self-end">
              <Image
                className="	"
                src={images[activeIndex].src}
                alt={`Slider Image ${activeIndex + 1}`}
                width={500}
                height={500}
                style={{ objectFit: "cover", width: "500px", height: "350px" }}
              />
            </div>
            <div className="justify-self-start" key={activeIndex}>
              <motion.h1
                className="text-4xl font-bold mb-6 "
                variants={textVarients}
                initial="hidden"
                animate="visible"
              >
                {images[activeIndex].title}
              </motion.h1>
              <motion.h1
                className="font-extralight text-base item-right-detail"
                variants={textVarients}
                initial="hidden"
                animate="visible"
              >
                {images[activeIndex].desc}
              </motion.h1>
              <motion.div className="flex justify-center mt-4">
                <motion.button
                  className="button-home px-5"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setOpen(true)}
                >
                  Detail
                </motion.button>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
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
        </div> */}
      </div>

      <div>
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="mx-auto max-w-4xl space-y-4 text-neutral-400">
            <h2 className="text-2xl md:text-7xl font-bold">
              {detail_item[activeIndex].title}
            </h2>
            <h3 className="text-base md:text-2xl font-semibold">
              {detail_item[activeIndex].subtitle}
            </h3>
            <Image
              className="w-auto rounded-2xl"
              src={detail_item[activeIndex].hero}
              alt={`Slider Image ${activeIndex + 1}`}
            />
            <p className="text-xl font-bold">The Problem</p>
            <p>{detail_item[activeIndex].problem}</p>
            {/* <p className="text-xl font-bold">The Idea</p>
            <p>{detail_item[currentIndex].idea}</p> */}
            <p className="text-xl font-bold">The Motivation</p>
            <p>{detail_item[activeIndex].motivation}</p>
            <p className="text-xl font-bold">The Goals</p>
            {detail_item[activeIndex].goals.map((goalitem, index) => {
              return (
                <>
                  <ul className="list-disc list-inside ml-4">
                    <li>{goalitem}</li>
                  </ul>
                </>
              );
            })}
            {/* <p className="text-xl font-bold">Flow Diagram</p> */}

            <p className="text-xl font-bold">Tech Stack</p>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full ">
                {Object.entries(detail_item[activeIndex].techStack).map(
                  ([category, technologies]) => (
                    <div
                      key={category}
                      className="bg-white shadow-md rounded-lg  text-center"
                    >
                      <p className="flex justify-center items-center p-4 md:min-h-[80px]">
                        {category}
                      </p>
                      <hr />
                      {technologies.map(({ img, name }) => (
                        <>
                          <div className="flex items-center p-4">
                            <Image
                              src={img} // Using img URL from the object
                              className="icon-skill"
                              width={30}
                              height={30}
                              alt={name}
                            />
                            <p className="mx-2 ">{name}</p>
                          </div>
                        </>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
            {detail_item[currentIndex].futureWork ? (
              <>
                <p className="text-xl font-bold">Future Work</p>
                <p>{detail_item[currentIndex].futureWork}</p>
              </>
            ) : (
              <></>
            )}

            {/* <ul className="list-disc list-inside ml-4">
              {detail_item[currentIndex].techStack.map((itemTech, index) => {
                return (
                  <>
                    <li>{itemTech}</li>
                  </>
                );
              })}
            </ul> */}
          </div>
        </DragCloseDrawer>
      </div>
    </>
  );
};
export default Project;

interface DragCloseDrawerProps {
  open: boolean; // 'open' should be a boolean
  setOpen: (open: boolean) => void; // 'setOpen' is a function that accepts a boolean
  children: React.ReactNode; // 'children' can be any valid React node
}

const DragCloseDrawer: React.FC<DragCloseDrawerProps> = ({
  open,
  setOpen,
  children,
}) => {
  useEffect(() => {
    if (open) {
      console.log("model is opening");
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };
  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70 cursor-pointer"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] md:h-[90vh] w-full rounded-t-3xl bg-white"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
