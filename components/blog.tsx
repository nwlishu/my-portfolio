import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Onairplan from "@/public/ontheair.png";
import ID_2 from "@/public/id_2_1.png";
import arrowRight from "@/public/ep--d-arrow-right.svg";
import ID_3 from "@/public/13.png";
import Link from "next/link";
const Blog = () => {
  const cards_j = [
    {
      id: "03",
      title: `Yong He Soy Milk King (永和豆漿大王) First Time.`,
      image: ID_3,
      description: `Review of Yong He Soy Milk King (永和豆漿大王) in Taiwan.`,
    },
    {
      id: "02",
      title: `A classic Taiwanese breakfast`,
      image: ID_2,
      description: `One software engineer, two suitcases, and absolutely no idea how to speak Chinese.`,
    },
    {
      id: "01",
      title: `From Hello to Ni Hao(您好)`,
      image: Onairplan,
      description: `One software engineer, two suitcases, and absolutely no idea how to speak Chinese.`,
    },
  ];
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
          ease: "easeOut",
        },
      };
    },
  };
  return (
    <>
      <div className="project-section p-10 ">
        <div className="">
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
          >
            <p className="text-5xl md:text-7xl font-bold md:leading-none mb-5 ">
              Blog
            </p>
          </motion.div>
          <div className="mx-auto md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards_j.map((card) => (
                <div
                  key={card.id}
                  className="bg-[#F5F5F7] rounded-2xl p-4 flex flex-col h-full"
                >
                  <Image
                    src={card.image}
                    alt=""
                    className="max-w-full max-h-90 object-cover rounded"
                  />
                  <h3 className="text-base font-bold mt-4">{card.title}</h3>
                  <p className="text-gray-600 text-base flex-grow">
                    {card.description}
                  </p>
                  <div className="flex justify-end">
                    <Link href={`/blog/${card.id}`}>
                      <button>
                        <div className="flex">
                          <p className="font-bold">More</p>
                          <Image
                            src={arrowRight}
                            width={15}
                            height={15}
                            className="font-bold"
                            alt=""
                          />
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end ">
            <Link href={`/blog`}>
              <button className=" border rounded p-2 mt-4">More Fun</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
