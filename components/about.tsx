import Image from "next/image";
import { motion } from "framer-motion";
import image3 from "@/public/pexels-vkiller-22080094.jpg";

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
          className="mt-24 text-5xl md:text-7xl font-bold leading-tight"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.div>
        <div className="detail-about">
          <div className="w-full grid-cols-1 md:grid items-center sub-detail">
            <div className="justify-self-end">
              <h1 className="font-bold text-xl">Hello.</h1>
              <h1 className="font-bold text-xl">My name is Supaporn.</h1>
              <br/>
              <p className="font-light item-right-detail">
                I’m a software engineer from Bangkok, Thailand.
              </p>
              <p className="font-light item-right-detail">
                I’m hold a Bachelor degree in Computer Engineering from the
                Mahidol University in Thailand.
              </p>
            </div>
            <div className="justify-self-center">
              <Image
                src={image3}
                className="image-about"
                alt="iamge"
                width={316}
                height={348}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
