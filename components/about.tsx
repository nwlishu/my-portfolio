import Image from "next/image";
import { motion } from "framer-motion";
import image3 from "@/public/IMG_3248.jpg";

const About = () => {
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
          viewport={{ once: false }}
        >
          About Me
        </motion.div>
        <div className="flex flex-col md:flex-row p-10 md:p-36 items-center">
          <div className="flex-1 flex-col items-center">
            <h1 className="font-bold text-xl">Hello.</h1>
            <h1 className="font-bold text-xl">My name is Supaporn.</h1>
            <br />
            <p className="font-light item-right-detail">
              I’m a software engineer from Bangkok, Thailand.
            </p>
            <p className="font-light item-right-detail">
              I&apos;m hold a Bachelor degree in Computer Engineering from the
              Mahidol University in Thailand and Master&apos;s degree in
              Computer Science from the National Taiwan Unversity of Science and
              Technology.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-60">
              <Image src={image3} className="image-about" alt="iamge" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
