"use client";
import React from "react";
import Image from "next/image";
import Sidebar from "./sidebar";
import { motion, MotionProps } from "framer-motion";

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const arrowAnimation: MotionProps = {
    style: { originX: "center", originY: 0 },
    whileInView: { y: [0, 24], scale: [1, 1.4] },
    transition: {
      // repeat: 5,
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1.5,
    },
  };

  const animateSocialVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      // transition: {
      //   delay: 1,
      // },
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        when: "afterChildren", // Wait for parent animation to complete first
        staggerChildren: 3, // Optional: Delay between child animations
        duration: 1.5, // Duration for the parent animation
      },
    },
  };

  if (typeof window !== "undefined") {
    const location = window.location.toString().split("#")[0];
    history.replaceState(
      null,
      "",
      location + "#" + activeSection
    );
  }

  return (
    <>
      <nav className="navbar p-4" role="navigation" aria-label="Main navigation">
        {/* sidebar */}
        <Sidebar />
        <div className="hidden md:block">
          <div>
            <ul className="ul-nav">
              <li className="li-nav">
                <a
                  className={`${
                    activeSection === "Home" ? "underline" : ""
                  }`}
                  style={{
                    color:
                      activeSection === "Home"
                        ? "#272727"
                        : "#999999",
                  }}
                  href="#Home"
                  aria-current={activeSection === "Home" ? "page" : undefined}
                >
                  Home
                </a>
              </li>
              <li className="li-nav">
                <a
                  className={`${
                    activeSection === "About" ? "underline" : ""
                  }`}
                  style={{
                    color:
                      activeSection === "About"
                        ? "#272727"
                        : "#999999",
                  }}
                  href="#About"
                >
                  About
                </a>
              </li>
              <li className="li-nav">
                <a
                  className={`${
                    activeSection === "Projects"
                      ? "underline"
                      : ""
                  }`}
                  style={{
                    color:
                      activeSection === "Projects"
                        ? "#272727"
                        : "#999999",
                  }}
                  href="#Projects"
                >
                  {" "}
                  Projects
                </a>
              </li>
              <li className="li-nav">
                <a
                  className={`${
                    activeSection === "Blog" ? "underline" : ""
                  }`}
                  style={{
                    color:
                      activeSection === "Blog"
                        ? "#272727"
                        : "#999999",
                  }}
                  href="#Blog"
                >
                  Blog
                </a>
              </li>
              <li className="li-nav">
                <a
                  className={`${
                    activeSection === "Contact" ? "underline" : ""
                  }`}
                  style={{
                    color:
                      activeSection === "Contact"
                        ? "#272727"
                        : "#999999",
                  }}
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <motion.div className="social hidden md:block " role="complementary" aria-label="Social media links">
        <motion.div className="social-sub" variants={animateSocialVariants}>
          <a href="https://github.com/nwlishu" target="_blank" aria-label="Visit my GitHub profile" rel="noopener noreferrer">
            <Image
              src="/devicon--github.png"
              className="social-item"
              width={20}
              height={20}
              alt="GitHub logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/supaporn-nguanprasert-6b216921b/"
            target="_blank"
            aria-label="Visit my LinkedIn profile"
            rel="noopener noreferrer"
          >
            <Image
              src="/mdi--linkedin.png"
              className="social-item"
              width={20}
              height={20}
              alt="LinkedIn logo"
            />
          </a>
          <a href="mailto:supapornnguanprasert@gmail.com" aria-label="Send me an email">
            <Image
              src="/mdi--gmail.png"
              className="social-item"
              width={20}
              height={20}
              alt="Gmail logo"
            />
          </a>
          <a href="https://www.youtube.com/@nwnguan" target="_blank" aria-label="Visit my YouTube channel" rel="noopener noreferrer">
            <Image
              src="/mdi--youtube.png"
              className="social-item"
              width={20}
              height={20}
              alt="YouTube logo"
            />
          </a>
        </motion.div>
      </motion.div>
      <div
        className={`bottom-section ${
          activeSection === "Contact" ? "" : "line-scroll"
        }`}
      >
        <motion.span
          {...arrowAnimation}
          className={`${
            activeSection === "Contact" ? "hidden" : "block"
          }`}
        >
          <Image
            src="/uiw--down-circle.png"
            className=""
            width={20}
            height={20}
            alt="down"
          />
        </motion.span>
      </div>
    </>
  );
};

export default Navbar;
