"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
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

import { useLocation } from "react-router-dom";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

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
    <div className="snap-none md:snap-y snap-mandatory overflow-y-scroll h-screen">
      <motion.div
        className="h-screen"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <section id="Home" className="snap-start h-screen">
          <Navbar activeSection={activeSection} />
          <Hero />
        </section>
        <section id="About" className="snap-start h-screen">
          <About />
        </section>
        <section id="Expertise" className="snap-start h-screen">
          <Expertise />
        </section>
        <section id="Projects" className="snap-start h-screen">
          <Project />
        </section>
        <section
          id="Contact"
          data-anchor="Contact"
          className="snap-start h-screen"
        >
          <Contact activeSection={activeSection} />
        </section>
      </motion.div>
    </div>
  );
}
