import Image from "next/image";
import { motion } from "framer-motion";
import image3 from "@/public/IMG_3248.jpg";

const About = () => {
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
          ease: "easeIn",
        },
      };
    },
  };
  const fadeInAnimationsHorizontalRightVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          ease: "easeOut",
        },
      };
    },
  };
  const fadeInAnimationsHorizontalleftVariants = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
        },
      };
    },
  };
  return (
    <>
      <div className="about-section">
        <motion.div
          className="mt-4 mb-8 text-5xl md:text-7xl font-bold leading-tight"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.div>
        <div className="flex flex-col md:flex-row p-10 md:p-24 items-center">
          <motion.div className="flex-1 flex justify-center">
            <div className="container-about">
              <div className="square"></div>
              <Image
                src={image3}
                className="image-about profile-image border-2 border-gray-200 "
                alt="image"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex-col items-center"
            variants={fadeInAnimationsHorizontalRightVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h1 className="font-bold text-xl">Hello.</h1>
            <h1 className="font-bold text-xl">My name is Supaporn.</h1>
            <br />
            <p className="font-light item-right-detail">
              I&apos;m a software engineer from Bangkok, Thailand.
            </p>
            <p className="font-light item-right-detail">
              I&apos;m hold a Master&apos;s degree in Computer Science from the
              National Taiwan Unversity of Science and Technology.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default About;
