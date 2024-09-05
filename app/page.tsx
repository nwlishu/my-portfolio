"use client";
import Image from "next/image";
import { Suspense } from "react";
import { motion } from "framer-motion";
// import Project from "@/components/project1";
// import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Link from "next/link";
import Loading from "@/components/loading";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Expertise from "@/components/expertise";
import Navbar from "@/components/navbar";
import Project from "@/components/project";

export default function Home() {
  return (
    <motion.div
      className="h-screen"
      initial={{ x: "-900vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Expertise">
        <Expertise />
      </section>
      <section id="Projects">
        <Project />
      </section>
      {/* <Project /> */}
      {/* <section id="Projects">Projects</section> */}
      <section id="Contact">
        <Contact />
      </section>
   
      {/* <div className="h-[calc(100vh-6rem)] flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-home">
        <div className="h-3/4 flex flex-col gap-8 items-center justify-center">
          <div className="w-9/12 md:w-9/12 lg:w-9/12">
            <h1 className="space-mono-bold text-4xl md:text-6xl hero ">
              Hello!, I&apos;m Supaporn.
              <br />A Full Stack Developer.
            </h1>
            <hr className="mt-4 hr-hero-style" />
            <p className="text:xl md:text-2xl hero mt-4">
              <b>Bringing ideas to life as tangible products is my passion.</b>
              <br />
              skilled in web development and design,I deliver high-quality
              projects that combine functionality with aesthetics.
            </p>
            <div className="flex gap-8 mt-8 ">
              <button className="p-4 rounded-lg ring-1 ring-black button-hero text-white">
                My Archive
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black">
                My Resume
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Expertise /> */}
      {/* <Project /> */}
    </motion.div>
  );
}
