"use client";
import { motion } from "framer-motion";

interface ContactProps {
  activeSection: string;
}

const Contact = ({ activeSection }: ContactProps) => {
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

  const fadeInAnimationsHorizontalRightVariants = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.5,
          ease: "easeOut",
        },
      };
    },
  };

  return (
    <>
      <div className="contact-section">
        <motion.div
          className="mt-24 text-5xl md:text-7xl font-bold leading-tight"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Contact Me
        </motion.div>
        <div className="flex flex-col md:flex-row justify-evenly w-full mt-4 md:mt-16 px-10 md:px-40">
          <motion.div
            className="text-left-contact flex flex-col flex-1 basis-2/5	"
            variants={fadeInAnimationsHorizontalRightVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div>
              <p className="font-bold">Email</p>
              <p className="font-light mt-1.5 md:mt-3.5">
                Supapornnguanprasert@gmail.com
              </p>
            </div>
            <div>
              <p className="font-bold mt-5 md:mt-14">Current Location</p>
              <p className="font-light mt-1.5 md:mt-3.5">Bangkok, Thailand</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={`${
          activeSection === "Contact" ? "block" : "hidden"
        } copyRight`}
      >
        <motion.p>© 2024, Supaporn Nguanprasert</motion.p>
      </motion.div>
    </>
  );
};
export default Contact;
