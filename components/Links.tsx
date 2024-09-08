import { motion } from "framer-motion";
import React from "react";

const Link = () => {
  const items = ["Home", "About", "Expertise", "Projects", "Contact"];

  // Parent variants
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Child variants
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <motion.div
      className="link-sidebar"
      initial="closed"
      animate="open"
      variants={variants}
    >
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Link;
