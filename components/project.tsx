"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import Image from "next/image";
import ImageSlider from "@/components/slidebar";
import { StaticImageData } from "next/image";
import image3 from "@/public/pexels-stephen-leonardi-587681991-28133538.jpg";
import useMeasure from "react-use-measure";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  src: StaticImageData;
  title: string;
  desc: string;
}

// Image data array
const images: ImageData[] = [
  {
    src: image3,
    title: "Personal Finance",
    desc: "Developed and managed a personal finance system to effectively track income, expenses, budgeting, and investments. Implemented financial planning strategies to optimize savings and ensure long-term financial stability.",
  },
  {
    src: image3,
    title: "AI security",
    desc: "Developed an adversarial method to protect copyright images from generative models by introducing subtle perturbations that prevent AI misuse while preserving visual quality.",
  },
  {
    src: image3,
    title: "Factory website",
    desc: "descript personal finenace2",
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
        delay: 0.05,
      },
    };
  },
};
const fadeInAnimationsVariants1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    };
  },
};

interface ImageData {
  src: StaticImageData;
  title: string;
  desc: string;
}

const Project = () => {
  const [open, setOpen] = useState(false);

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="contact-section">
        <motion.div
          className="mt-24 text-5xl md:text-7xl font-bold leading-tight mb-4	"
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My Project
        </motion.div>
        <div className="detail-project relative">
          <button
            className="absolute cursor-pointer z-10 left-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2  text-white p-2 group"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-400 group-hover:text-white" />
          </button>
          <motion.button
            className="absolute cursor-pointer z-10 right-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2  text-white p-2 group"
            onClick={nextSlide}
            // whileHover={{ scale: 1.1 }}
          >
            <ChevronRight className="text-gray-400 group-hover:text-white" />
          </motion.button>
          <div className="w-full grid-cols-1 md:grid items-center sub-detail-project relative">
            <div className="justify-self-end">
              <Image
                className="object-cover	"
                src={images[currentIndex].src}
                alt={`Slider Image ${currentIndex + 1}`}
                width={500}
                height={500}
              />
            </div>
            <div className="justify-self-start">
              <h1 className="text-4xl font-bold mb-6 ">
                {images[currentIndex].title}
              </h1>
              <h1 className="font-extralight text-base item-right-detail">
                {images[currentIndex].desc}
              </h1>
              <motion.div className="flex justify-center mt-4">
                <motion.button
                  className="button-home px-5"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setOpen(true)}
                >
                  Detail
                </motion.button>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-10 mx-1 ${
                  index === currentIndex
                    ? "bg-[#FFB531] rounded-xl"
                    : "bg-gray-300 rounded-xl"
                } transition-all duration-500 ease-in-out`}
              ></div>
            ))}
          </div>
        </div>
        {/* <div className="relative flex w-full mx-auto">
          <div>
            <Image
              className="object-cover	"
              src={images[currentIndex].src}
              alt={`Slider Image ${currentIndex + 1}`}
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">
              {images[currentIndex].title}
            </h1>
            <h1 className="font-extralight text-base">
              {images[currentIndex].desc}
            </h1>
          </div>
        </div> */}

        {/* <motion.div
          className="flex justify-evenly w-full mt-16 px-20 md:px-40"
          variants={fadeInAnimationsVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <ImageSlider />
        </motion.div> */}
      </div>
      <div>
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <h2 className="text-4xl font-bold text-neutral-200">
              Drag the handle at the top of this modal downwards 100px to close
              it
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
              nulla aliquid iure optio quaerat deserunt, molestias quasi facere
              aut quidem reprehenderit maiores.
            </p>
            <p>
              Laudantium corrupti neque rerum labore tempore sapiente. Quos,
              nobis dolores. Esse fuga, cupiditate rerum soluta magni numquam
              nemo aliquid voluptate similique deserunt!
            </p>
            <p>
              Rerum inventore provident laboriosam quo facilis nisi voluptatem
              quam maxime pariatur. Velit reiciendis quasi sit magni numquam
              quos itaque ratione, fugit adipisci atque est, tenetur officiis
              explicabo id molestiae aperiam? Expedita quidem inventore magni?
              Doloremque architecto mollitia, dicta, fugit minima velit
              explicabo sapiente beatae fugiat accusamus voluptatum, error
              voluptatem ab asperiores quo modi possimus.
            </p>
            <p>
              Sit laborum molestias ex quisquam molestiae cum fugiat
              praesentium! Consequatur excepturi quod nemo harum laudantium
              accusantium nisi odio?
            </p>
            <p>
              Deleniti, animi maiores officiis quos eaque neque voluptas omnis
              quia error a dolores, pariatur ad obcaecati, vitae nisi
              perspiciatis fugiat sapiente accusantium. Magnam, a nihil soluta
              eos vero illo ab sequi, dolores culpa, quia hic?
            </p>
            <p>
              Eos in saepe dignissimos tempore. Laudantium cumque eius, et
              distinctio illum magnam molestiae doloribus. Fugiat voluptatum
              necessitatibus vero eligendi quae, similique non debitis qui
              veniam praesentium rerum labore libero architecto tempore nesciunt
              est atque animi voluptatibus. Aliquam repellendus provident
              tempora sequi officia sint voluptates eaque minima suscipit, cum
              maiores quos possimus. Vero ex porro asperiores voluptas
              voluptatibus?
            </p>
            <p>
              Debitis eos aut ullam odit fuga. Numquam deleniti libero quas
              sunt? Exercitationem earum odio aliquam necessitatibus est
              accusamus consequuntur nisi natus dolore libero voluptatibus odit
              doloribus laudantium iure, dicta placeat molestias porro quasi
              amet? Sint, reiciendis tenetur distinctio eaque delectus, maiores,
              nihil voluptas dolorem necessitatibus consequatur aliquid?
            </p>
            <p>
              Sunt ex, cum culpa vel odio dicta expedita omnis amet debitis
              inventore necessitatibus quaerat est molestias delectus. Dolorem,
              eius? Quae, itaque ipsa incidunt nobis repellendus, sunt dolorum
              aliquam ad culpa repudiandae impedit omnis, expedita illum
              voluptas delectus similique ducimus saepe pariatur. Molestias
              similique quam dolore provident doloremque maiores autem ab
              blanditiis voluptatum dignissimos culpa sed nesciunt laboriosam,
              in dicta consectetur.
            </p>
            <p>
              Voluptates ea, aspernatur possimus, iusto temporibus non
              laudantium neque molestias rem tempore eligendi earum nisi dolorum
              asperiores at rerum!
            </p>
            <p>
              Eaque totam error quia, ut eius perspiciatis unde velit temporibus
              mollitia. Aperiam ad tempora aliquam est molestias commodi
              cupiditate quos impedit nostrum accusantium quo fugit eveniet
              temporibus quam cumque autem porro, id ut debitis itaque et nemo
              exercitationem voluptatibus? Aspernatur corrupti quas iusto
              dolores nemo pariatur debitis quae dolorem! Nemo, eius? Dolorem
              quam nemo magnam ratione deserunt aperiam. Voluptatum ipsa,
              molestias aspernatur quas distinctio numquam qui laboriosam id ab
              totam commodi laborum tempora error natus vitae eligendi
              reiciendis maiores ex illo? Tempore at animi earum vitae enim
              sunt, dignissimos, mollitia corrupti officia obcaecati error iure
              vero repudiandae nihil magni molestias quibusdam dolorem aperiam
              modi. Harum, fugit.
            </p>
          </div>
        </DragCloseDrawer>
      </div>
    </>
  );
};
export default Project;

interface DragCloseDrawerProps {
  open: boolean; // 'open' should be a boolean
  setOpen: (open: boolean) => void; // 'setOpen' is a function that accepts a boolean
  children: React.ReactNode; // 'children' can be any valid React node
}

const DragCloseDrawer: React.FC<DragCloseDrawerProps> = ({
  open,
  setOpen,
  children,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };
  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70 cursor-pointer"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[90vh] w-full overflow-hidden rounded-t-3xl bg-white"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
