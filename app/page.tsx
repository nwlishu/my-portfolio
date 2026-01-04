"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import About from "@/components/about";
import Blog from "@/components/blog";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const sections = [
    "Home",
    "About",
    "Expertise",
    "Projects",
    "Blog",
    "Contact",
  ];

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

  return (
    <div className=" h-screen initial-back">
      <motion.div
        className="h-screen second-back snap-y snap-mandatory"
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
          <section id="Blog" className="second-back snap-always ">
            <Blog />
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
