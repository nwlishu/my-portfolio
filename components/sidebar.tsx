import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";
import Links from "./Links";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at  95vw 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 95vw 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.div
        className="sidebar block md:hidden"
        animate={open ? "open" : "closed"}
      >
        <motion.div className="bg-sidebar" variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};
export default Sidebar;
