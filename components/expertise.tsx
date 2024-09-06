"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Expertise = () => {
  const tools = [
    {
      name: "vscode",
      image: "/devicon--vscode.png",
    },
    {
      name: "Anaconda",
      image: "/devicon--anaconda.png",
    },
    {
      name: "Jupyter",
      image: "/devicon--jupyter-wordmark.png",
    },
    {
      name: "Blender",
      image: "/logos--blender.png",
    },
    {
      name: "Postman",
      image: "/devicon--postman.png",
    },
    {
      name: "Google Cloud",
      image: "/devicon--googlecloud.png",
    },
    {
      name: "Figma",
      image: "/devicon--figma.png",
    },

    {
      name: "ProgreSQL",
      image: "/devicon--postgresql-wordmark.png",
    },
    {
      name: "MySQL",
      image: "/devicon--mysql-wordmark.png",
    },
    {
      name: "DBeaver",
      image: "/devicon--dbeaver.png",
    },
    {
      name: "Github",
      image: "/devicon--github.png",
    },
  ];

  const skills = [
    {
      name: "PyTorch",
      image: "/devicon--pytorch.png",
    },
    {
      name: "Python",
      image: "/devicon--python.png",
    },
    {
      name: "HTML",
      image: "/devicon--html5-wordmark.png",
    },
    {
      name: "CSS",
      image: "/devicon--css3-wordmark.png",
    },
    {
      name: "SCSS",
      image: "/vscode-icons--file-type-scss.png",
    },
    {
      name: "JavaScript",
      image: "/devicon--javascript.png",
    },
    {
      name: "React",
      image: "/devicon--react.png",
    },
    {
      name: "TypeScript",
      image: "/devicon--typescript.png",
    },
    {
      name: "NextJS",
      image: "/devicon--nextjs.png",
    },
    {
      name: "tailwindCSS",
      image: "/devicon--tailwindcss.png",
    },
    {
      name: "NodeJS",
      image: "/devicon--nodejs-wordmark.png",
    },
    {
      name: "PHP",
      image: "/devicon--php.png",
    },
    {
      name: "Java",
      image: "/devicon--java.png",
    },
  ];

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
          delay: 0.05 * index,
        },
      };
    },
  };

  const [toggle, setToggle] = useState<boolean>(true);
  // console.log("Toggle: ", toggle);

  return (
    <>
      <div className="expertise-section">
        <div className="mt-14 text-5xl md:text-7xl font-bold leading-tight">
          Expertise
        </div>
        <div className="flex flex-col  justify-evenly w-full mt-16 px-20 md:px-40">
          <div className="text-left-contact flex flex-col flex-1 basis-2/5">
            <div className="flex justify-between items-center">
              {toggle ? (
                <>
                  <h1 className="mt-5 mb-5 text-4xl font-bold ">My Skills</h1>
                </>
              ) : (
                <>
                  <h1 className="mt-5 mb-5 text-4xl font-bold">My Tools</h1>
                  {/* <p>
                    I work with a wide range of development tools and
                    technologies. For front-end, I utilize frameworks like React
                    and Vue.js for crafting dynamic user interfaces. On the
                    back-end, I leverage Node.js, Python, and databases like
                    MongoDB and SQL to build robust APIs and server-side logic.
                    In AI development, I apply tools such as TensorFlow,
                    PyTorch, and various data science libraries to build
                    intelligent applications and models. These tools empower me
                    to deliver high-quality, innovative solutions.
                  </p> */}
                </>
              )}
              <div
                onClick={() => setToggle(!toggle)}
                className={`flex h-8 w-28 cursor-pointer rounded-full border border-black bg-white  ${
                  toggle ? "justify-start bg-white" : "justify-end bg-black"
                } p-[1px]  `}
              >
                <motion.div
                  className={`h-7 w-14 rounded-full z-1000 ${
                    toggle ? "toggle-button-style" : "toggle-button-style"
                  }`}
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                >
                  {toggle ? (
                    <>
                      <p className="toggle-text text-center toggle-text  font-bold">
                        skills
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="toggle-text text-center toggle-text font-bold">
                        Tools
                      </p>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
            {toggle ? (
              <>
                <p className="font-light">
                  I specialize in full-stack development, creating responsive
                  web applications with expertise in front-end and back-end
                  technologies. I also integrate AI solutions, including machine
                  learning and automation, for enhanced functionality.
                </p>
              </>
            ) : (
              <></>
            )}

            {/* <h1 className="text-xl font-light">
              &quot;Passionate to exploring diverse tech stacks.&quot;
            </h1> */}
          </div>
          <div className="form-right-contact flex-1 basis-3/5">
            <div className="scroll-container">
              <div className="flex items-center child">
                <div className="flex micro-card justify-center">
                  {toggle ? (
                    <>
                      {skills.map((item, index) => (
                        <>
                          <motion.div
                            className="flex flex-col items-center bg-white skill-card subcard"
                            key={item.name}
                            whileHover={{ scale: 1.1 }}
                            variants={fadeInAnimationsVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                          >
                            <Image
                              src={item.image}
                              className="icon-skill"
                              width={30}
                              height={30}
                              alt={item.name}
                            />
                            <span className="item-name-style font-light">
                              {item.name}
                            </span>
                          </motion.div>
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      {tools.map((item, index) => (
                        <>
                          <motion.div
                            className="flex flex-col items-center bg-white skill-card subcard"
                            key={item.name}
                            whileHover={{ scale: 1.1 }}
                            variants={fadeInAnimationsVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                          >
                            <Image
                              src={item.image}
                              className="icon-skill"
                              width={30}
                              height={30}
                              alt={item.name}
                            />
                            <span className="item-name-style font-light">
                              {item.name}
                            </span>
                          </motion.div>
                        </>
                      ))}
                    </>
                  )}
                </div>
              </div>
              {/* <form>
                <div className="flex flex-col">
                  <label className="font-bold">Name</label>
                  <input
                    type="text"
                    className="input-style font-light mt-3.5 file:border-2"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <label className="font-bold">Email</label>
                  <input
                    type="email"
                    className="input-style font-light mt-3.5 border-2 email-input"
                    required
                    placeholder="Email"
                  />
                  <p className="error-message">
                    Please enter a valid e-mail address
                  </p>
                </div>
                <div className="flex flex-col mt-8">
                  <label className="font-bold">message</label>
                  <textarea
                    className="input-style font-light mt-3.5 border-2"
                    rows={5}
                    placeholder="Message"
                  />
                </div>

                <button className="button-contact  mt-8 py-2 px-9">
                  Submit
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="expertise-section">
        <div className="mt-24 text-5xl md:text-7xl font-bold leading-tight">
          My Skills and Tools
        </div>
        <div>Toggle button</div>
        <div className="flex items-center child">
          <div className="flex micro-card justify-center">
            {tools.map((item) => (
              <>
                <div
                  className="flex flex-col items-center bg-white skill-card"
                  key={item.name}
                >
                  <Image
                    src={item.image}
                    className=""
                    width={40}
                    height={40}
                    alt={item.name}
                  />
                  <span className="item-name-style">{item.name}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-col expertise items-center p-36 bg-nav">
        <div className="text-left-style-expert child">
          <h1 className="text-7xl text-center font-extrabold ">My Expertise</h1>
        </div>
        <div className="flex items-center child mt-36">
          <div className="flex micro-card justify-center">
            {tools.map((item) => (
              <>
                <div
                  className="flex flex-col items-center bg-white skill-card"
                  key={item.name}
                >
                  <Image
                    src={item.image}
                    className=""
                    width={40}
                    height={40}
                    alt={item.name}
                  />
                  <span className="item-name-style">{item.name}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Expertise;