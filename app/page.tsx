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
  const list = {
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      x: "-900vh", // Initial position
    },
  };
  return (
    <motion.div
      className="h-screen"
      initial="hidden"
      animate="visible"
      variants={list}
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
      <section id="Contact">
        <Contact />
      </section>
    </motion.div>
  );
}
