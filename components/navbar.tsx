import React from "react";
import Image from "next/image";
import Sidebar from "./sidebar";
import { animate, motion, MotionProps } from "framer-motion";

const Navbar = (activeSection: any) => {
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
    console.log(location);
    history.replaceState(
      null,
      "",
      location + "#" + activeSection.activeSection
    );
  }

  return (
    <>
      <div className="navbar">
        {/* sidebar */}
        <Sidebar />
        <div className="hidden md:block">
          {/* <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Supaporn
          </motion.span> */}
          <div>
            <ul className="ul-nav">
              <li className="li-nav">
                <a
                  className={`${
                    activeSection.activeSection === "Home" ? "underline" : ""
                  }`}
                  style={{
                    color:
                      activeSection.activeSection === "Home"
                        ? "#272727"
                        : "#999999",
                  }}
                  href="#Home"
                >
                  Home
                </a>
              </li>
              <li className="li-nav">
                <a
                  className={`${
                    activeSection.activeSection === "About" ? "underline" : ""
                  }`}
                  style={{
                    color:
                      activeSection.activeSection === "About"
                        ? "#272727"
                        : "#999999",
                  }}
                  href="#About"
                >
                  About
                </a>
              </li>
              {/* <li className="li-nav">
                <a
                  className={`${
                    activeSection.activeSection === "Expertise"
                      ? "underline"
                      : ""
                  }`}
                  style={{
                    color:
                      activeSection.activeSection === "Expertise"
                        ? "#272727"
                        : "#999999",
                  }}
                  href="#Expertise"
                >
                  {" "}
                  Expertise
                </a>
              </li> */}
              <li className="li-nav">
                <a
                  className={`${
                    activeSection.activeSection === "Projects"
                      ? "underline"
                      : ""
                  }`}
                  style={{
                    color:
                      activeSection.activeSection === "Projects"
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
                    activeSection.activeSection === "Contact" ? "underline" : ""
                  }`}
                  style={{
                    color:
                      activeSection.activeSection === "Contact"
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
      </div>
      <motion.div className="social hidden md:block ">
        <motion.div className="social-sub" variants={animateSocialVariants}>
          <a href="#">
            <Image
              src="/devicon--github.png"
              className="social-item"
              width={20}
              height={20}
              alt="instagram"
            />
          </a>
          <a href="#">
            <Image
              src="/mdi--linkedin.png"
              className="social-item"
              width={20}
              height={20}
              alt="instagram"
            />
          </a>
          <a href="#">
            <Image
              src="/mdi--gmail.png"
              className="social-item"
              width={20}
              height={20}
              alt="instagram"
            />
          </a>
          <a href="#">
            <Image
              src="/mdi--youtube.png"
              className="social-item"
              width={20}
              height={20}
              alt="instagram"
            />
          </a>
        </motion.div>
      </motion.div>
      <div
        className={`bottom-section ${
          activeSection.activeSection === "Contact" ? "" : "line-scroll"
        }`}
      >
        <motion.span
          {...arrowAnimation}
          className={`${
            activeSection.activeSection === "Contact"
              ? // "About" ||
                // "Project" ||
                // "Expertise"
                "hidden"
              : "block"
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
