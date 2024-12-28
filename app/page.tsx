"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Suspense, useCallback } from "react";
import { motion } from "framer-motion";
// import Project from "@/components/project1";
// import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Link from "next/link";
import Loading from "@/components/loading";
import Hero from "@/components/hero";
import Expertise from "@/components/expertise";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import About from "@/components/about";
// import Lenis from "@studio-freight/lenis";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  const [activeSection, setActiveSection] = useState("");
  const sections = ["Home", "About", "Expertise", "Projects", "Contact"];
  console.log(activeSection);

  // Smooth scroll to active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When a section is intersecting, set its ID as the active section
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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
    // <div className="snap-none md:snap-y snap-mandatory overflow-y-scroll h-screen initial-back">

    <div className=" h-screen initial-back">
      <motion.div
        className="h-screen second-back snap-y snap-mandatory"
        // initial="hidden"
        // animate="visible"
        // variants={list}
        initial={{ height: "-20vh" }}
        animate={{ height: "100vh" }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.6 }}
        >
          <Navbar activeSection={activeSection} />
        </motion.div>
        <section id="Home" className={`md:h-screen snap-always`}>
          <Hero />
        </section>

        <motion.div>
          <section id="About" className="second-back h-screen snap-always ">
            <About />
          </section>
        </motion.div>

        {/* <motion.div>
          <section id="Expertise" className="second-back h-screen ">
            <Expertise />
          </section>
        </motion.div> */}
   
        <motion.div>
          <section id="Projects" className="second-back snap-always ">
            <Project />
          </section>
        </motion.div>
 
        <motion.div>
          <section id="Contact" className="second-back h-screen snap-always ">
            <Contact activeSection={activeSection} />
          </section>
        </motion.div>
      </motion.div>
    </div>
  );
}
