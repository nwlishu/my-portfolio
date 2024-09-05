import React from "react";
import Image from "next/image";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* sidebar */}
        <Sidebar />
        <div className="wrapper">
          {/* <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Supaporn
          </motion.span> */}

          <div className="social">
            {/* skill-icons--instagram */}
            <a href="#">
              <Image
                src="/devicon--github.png"
                className=""
                width={18}
                height={18}
                alt="instagram"
              />
            </a>
            <a href="#">
              <Image
                src="/logos--linkedin-icon.png"
                className=""
                width={18}
                height={18}
                alt="instagram"
              />
            </a>
            <a href="#">
              <Image
                src="/skill-icons--instagram.png"
                className=""
                width={18}
                height={18}
                alt="instagram"
              />
            </a>
            <a href="#">
              <Image
                src="/logos--youtube-icon.png"
                className=""
                width={18}
                height={18}
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
