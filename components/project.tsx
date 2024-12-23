"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
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

interface ImageData {
  src: StaticImageData;
  title: string;
  desc: string;
}

interface techStackDetail {
  name: Array<string>;
}
interface DetailItem {
  title: string;
  field: string;
  subtitle: string;
  techStack: { [key: string]: techStackDetail };
  detail: string;
  motivation: string;
  problem: string;
  goals: Array<string>;
  color: string;
  hero: StaticImageData;
  idea: string;
}

// Image data array
const images: ImageData[] = [
  {
    src: finance,
    title: "Personal Investment",
    desc: "Developed a personal finance system to track income, expenses, budgeting, and investments.",
  },
  //     desc: "Developed a personal finance system to track income, expenses, budgeting, and investments. Implemented financial planning strategies to optimize savings and ensure long-term financial stability.",

  {
    src: ai,
    title: "AI security",
    desc: "Developed an adversarial example method to protect copyright images from diffusion models.",
  },
  //     desc: "Developed an adversarial method to protect copyright images from generative models by introducing subtle perturbations that prevent AI misuse while preserving visual quality.",

  {
    src: inventory,
    title: "Inventory Management",
    desc: "Developed an adversarial method to protect copyright images from generative models.",
  },
  {
    src: inventory,
    title: "Inventory Management",
    desc: "Developed an adversarial method to protect copyright images from generative models.",
  },
];

const detail_item: DetailItem[] = [
  {
    title: "Personal Investment",
    field: "Web Development and Machine Learning",
    subtitle: "Web development",
    techStack: {
      frontend: { name: ["React.js", "Next.js"] },
      backend: { name: [""] },
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
    hero: hero_inventory,
    idea: "An Inventory Management System (IMS) is a software application or set of tools designed to help businesses manage and track their inventory levels, sales, orders, and deliveries. It provides a systematic approach to monitor and control stock, ensuring that businesses have the right products in the right quantity at the right time. Here's a detailed description and overview of the idea behind such a system:",
  },
  {
    title: "AI security",
    field: "AI security",
    subtitle:
      "Protecting the copyright image from diffusion model by using the adversarial example.",

    techStack: {
      frontend: { name: ["React.js", "Next.js"] },
      backend: { name: [""] },
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
    hero: hero_inventory,
    idea: "An Inventory Management System (IMS) is a software application or set of tools designed to help businesses manage and track their inventory levels, sales, orders, and deliveries. It provides a systematic approach to monitor and control stock, ensuring that businesses have the right products in the right quantity at the right time. Here's a detailed description and overview of the idea behind such a system:",
  },
  {
    title: "Inventory Management System",
    field: "Web Development",
    subtitle:
      "A web-based application for real-time inventory tracking and management, built to improve operational efficiency for businesses",
    techStack: {
      frontend: { name: ["React.js", "Next.js"] },
      backend: { name: [""] },
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
  const [open, setOpen] = useState(false);

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

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  // interface CardProps {
  //   title: string;
  //   subtitle: string;
  //   techStack: string[];
  //   detail: string;
  //   color: string;
  // }

  return (
    <>
      <div className="project-section">
        <div className="stickyTitle">
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className=" text-5xl md:text-7xl font-bold md:leading-none mb-5 ">
              My project
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeInAnimationsVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {detail_item.map((item, index) => {
            return (
              <>
                <div className="cardContainer">
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
                        // width={350}
                        // height={290}
                        // style={{
                        //   objectFit: "cover",
                        //   width: "20em",
                        //   height: "15em",
                        // }}
                      />
                      <div>
                        <p className="text-xl md:text-3xl font-bold pt-5">
                          {item.title}
                        </p>
                        <p className="font-extralight text-sm md:text-base item-right-detail">
                          {images[index].desc}
                        </p>
                        <p className="font-extralight text-sm md:text-base">
                          <u>Tech Stack:</u>
                        </p>
                        {/* <ul>
                        {item.techStack.map((techItem, index) => {
                          return (
                            <>
                              <li className="font-extralight text-sm md:text-base">
                                - {techItem}
                              </li>
                            </>
                          );
                        })}
                      </ul> */}
                        <motion.div className="flex justify-center button-project">
                          <motion.button
                            className="button-home px-5"
                            whileHover={{ scale: 1.1 }}
                            onClick={() => {
                              setOpen(true), setCurrentIndex(index);
                            }}
                          >
                            <div className="button-home text-sm md:text-base px-5">
                              See more
                            </div>
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </motion.div>

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
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-400 group-hover:text-white" />
          </button>
          <motion.button
            className="absolute cursor-pointer z-10 right-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2  text-white p-2 group"
            onClick={nextSlide}
            // whileHover={{ scale: 1.1 }}
          >
            <ChevronRight className="text-gray-400 group-hover:text-white" />
          </motion.button>
          <div className="w-full grid-cols-1 md:grid items-center sub-detail-project relative">
            <div className="justify-self-end">
              <Image
                className="	"
                src={images[currentIndex].src}
                alt={`Slider Image ${currentIndex + 1}`}
                width={500}
                height={500}
                style={{ objectFit: "cover", width: "500px", height: "350px" }}
              />
            </div>
            <div className="justify-self-start">
              <h1 className="text-4xl font-bold mb-6 ">
                {images[currentIndex].title}
              </h1>
              <h1 className="font-extralight text-base item-right-detail">
                {images[currentIndex].desc}
              </h1>
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
              {detail_item[currentIndex].title}
            </h2>
            <h3 className="text-base md:text-2xl font-semibold">
              {detail_item[currentIndex].subtitle}
            </h3>
            <Image
              className="w-auto rounded-2xl"
              src={detail_item[currentIndex].hero}
              alt={`Slider Image ${currentIndex + 1}`}
            />
            <p className="text-xl font-bold">The Problem</p>
            <p>{detail_item[currentIndex].problem}</p>
            {/* <p className="text-xl font-bold">The Idea</p>
            <p>{detail_item[currentIndex].idea}</p> */}
            <p className="text-xl font-bold">The Motivation</p>
            <p>{detail_item[currentIndex].motivation}</p>
            <p className="text-xl font-bold">The Goals</p>
            {detail_item[currentIndex].goals.map((goalitem, index) => {
              return (
                <>
                  <ul className="list-disc list-inside ml-4">
                    <li>{goalitem}</li>
                  </ul>
                </>
              );
            })}
            <p className="text-xl font-bold">Flow Diagram</p>

            <p className="text-xl font-bold">Tech Stack</p>
            {/* {detail_item[currentIndex].techStack.frontend.map((itemTech, index) => {
              return (
                <>
                  <ul className="list-disc list-inside ml-4">
                    <li>{itemTech}</li>
                  </ul>
                </>
              );
            })} */}
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
      document.body.style.overflow = "hidden";
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
            className="absolute bottom-0 h-[75vh] md:h-[90vh] w-full overflow-hidden rounded-t-3xl bg-white"
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
