"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
const items = [
  {
    id: 1,
    title: "Personal finance",
    img: "https://images.pexels.com/photos/14040245/pexels-photo-14040245.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "Lorem fjdksajkfdsjkjldjfkldjljkl",
  },
  {
    id: 2,
    title: "AI",
    img: "https://images.pexels.com/photos/9743361/pexels-photo-9743361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem fjdksajkfdsjkjldjfkldjljkl",
  },
];
interface Item {
  id: number;
  title: string;
  img: string;
  desc: string;
}
// const Single = ({ item }: { item: Item }) => {
//   const ref = useRef<HTMLElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

//   return (
//     <section ref={ref}>
//       <div className="container">
//         <Image
//           src={item.img}
//           className=""
//           width={40}
//           height={40}
//           alt="img"
//           // alt={item.name}
//         />
//         <div className="textContainer">
//           <h2 >{item.title}</h2>
//           <p>{item.desc}</p>
//           <button>See detail</button>
//         </div>
//       </div>
//     </section>
//   );
// };
const Project = () => {
  const ref = useRef();
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["end end", "start start"],
  //   });
  //   const scaleX = useSpring(scrollYProgress, {
  //     stiffness: 100,
  //     damping: 30,
  //   });
  return (
    <>
      <div className="contact-section">
        <div className="mt-12 text-5xl md:text-7xl font-bold leading-tight">
          My Archives
        </div>
        <div className="flex justify-evenly w-full mt-16 px-40 border-2">
          {/* <div className="text-left-contact flex flex-col flex-1 basis-3/5 	">
            <Image
              src="https://images.pexels.com/photos/14040245/pexels-photo-14040245.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              className=""
              width={100}
              height={100}
              alt="img"
            />
          </div>
          <div className="form-right-contact flex-1 basis-2/5">
            <div>
              <form>
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
              </form>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="project-section">
        <div className="progress-section">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            My Archives
          </h1>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div> */}
    </>
  );
};
export default Project;
