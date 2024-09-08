import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05,
        },
      };
    },
  };
  return (
    <>
      <div className="contact-section">
        <motion.div
          className="mt-12 text-5xl md:text-7xl font-bold leading-tight"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.div>
      </div>
    </>
  );
};
export default Contact;
