import Image from "next/image";
import { motion } from "framer-motion";

const Contact = (activeSection: any) => {
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
          ease: 'easeOut'
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
          ease: 'easeOut'
        },
      };
    },
  };

  const fadeInAnimationsHorizontalLeftVariants = {
    initial: {
      opacity: 0,
      x: 70,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.5,
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
              {/* <p className="text-base font-light">
                Feel free to reach out if you have any questions, need further
                information, or would like to discuss potential collaborations.{" "}
              </p> */}
              <p className="font-bold">Email</p>
              <p className="font-light mt-1.5 md:mt-3.5">
                Supapornnguanprasert@gmail.com
              </p>
            </div>
            {/* <div>
              <p className="font-bold mt-5 md:mt-14">Social Media</p>
              <div className="flex mt-1.5 md:mt-3.5 gap-4">
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
                <a>
                  <Image
                    src="/skill-icons--gmail-light.png"
                    className=""
                    width={18}
                    height={18}
                    alt="gmail"
                  />
                </a>
              </div>
            </div> */}
            <div>
              <p className="font-bold mt-5 md:mt-14">Current Location</p>
              <p className="font-light mt-1.5 md:mt-3.5">Taipei, Taiwan</p>
            </div>
          </motion.div>
          {/* <motion.div className="form-right-contact flex-1 basis-3/5">
            <div className="mt-5 md:mt-0">
              <motion.form
                variants={fadeInAnimationsHorizontalLeftVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="flex flex-col">
                  <label className="font-bold">Name</label>
                  <input
                    type="text"
                    className="input-style font-light mt-1.5 md:mt-3.5 file:border-2"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col mt-4 md:mt-8">
                  <label className="font-bold">Email</label>
                  <input
                    type="email"
                    className="input-style font-light mt-1.5 md:mt-3.5 border-2 email-input"
                    required
                    placeholder="Email"
                  />
                  <p className="error-message">
                    Please enter a valid e-mail address
                  </p>
                </div>
                <div className="flex flex-col mt-4 md:mt-8">
                  <label className="font-bold">message</label>
                  <textarea
                    className="input-style font-light mt-1.5 md:mt-3.5 border-2"
                    rows={5}
                    placeholder="Message"
                  />
                </div>

                <button className="button-contact mt-4 md:mt-8 py-2 px-9">
                  Submit
                </button>
              </motion.form>
            </div>
          </motion.div> */}
        </div>
      </div>

      <motion.div
        className={`${
          activeSection.activeSection === "Contact" ? "block" : "hidden"
        } copyRight`}
      >
        <motion.p>© 2024, Supaporn Nguanprasert</motion.p>
        {/* <p>
          Design prototype is available on{" "}
          <a
            rel="noopener noreferrer"
            aria-label="Figma draft"
            href="https://www.figma.com/file/K5yX0EjvrIfGmVtOCFuy9U/Portfolio-Minimal?node-id=0%3A1"
            target="_blank"
          >
            Figma
          </a>
        </p> */}
      </motion.div>
    </>
  );
};
export default Contact;
