"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
const Contact = () => {
  return (
    <>
      <motion.div
        className="lg:h-screen bg-expertise flex flex-col justify-start px-36"
        initial={{ x: "-900vh" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <h1 className="mt-14 text-center space-mono-bold text-2xl md:text-5xl lg:text-6xl expert">
          Contact with me
        </h1>
        <hr className="mt-4 hr-style" />
        <div className="mt-12 px-4 flex justify-center">
          <div className="itemContainer">
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <h1 className="text-xl font-bold">Email</h1>
                <p>Supapornnguanprasert@gmail.com</p>
              </div>
              <div>
                <h1 className="mt-6 text-xl font-bold">Social</h1>
                <p>Supapornnguanprasert@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="itemContainer">
            <div className="px-36">
              <form>
                <div className="flex flex-col">
                  <label className="contact-text text-xl space-mono-bold">
                    Name
                  </label>
                  <input
                    className="mt-2 input-style"
                    type="text"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="mt-6 flex flex-col">
                  <label className=" text-xl contact-text space-mono-bold">
                    Email
                  </label>
                  <input
                    className=" mt-2  input-style"
                    type="email"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="mt-6 flex flex-col">
                  <label className=" text-xl	contact-text space-mono-bold">
                    message
                  </label>
                  <textarea
                    className="input-style mt-2 "
                    rows={8}
                    placeholder="Message"
                  />
                </div>
                <button className="text-xl button-hero rounded-lg ring-1 ring-black  mt-8 form-button ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="md:max-xl:flex sm:flex flex-col justify-center relative z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <div className="flex flex-wrap my-14 justify-center items-center sm:flex-col">
                <div className="contact">
                  <div className="textContainer">
                    <div className="flex flex-col ">
                      <div className="item">
                        <h2 className="space-mono-bold contact-text">E-Mail</h2>
                        <span className="contact-text">
                          supapornnguanprasert@gmail.com
                        </span>
                      </div>
                      <div className="item">
                        <h2 className="space-mono-bold contact-text">
                          Social Media
                        </h2>
                        <span className="contact-text">
                          supapornnguanprasert@gmail.com
                        </span>
                      </div>
                    </div>
                    <p className="text-xl space-mono-bold contact-text ">
                      We appreciate your messages and will respond to every
                      email we receive.
                    </p>
                  </div>
                  <div className="formContainer">
                    <form>
                      <div className="flex flex-col">
                        <label className="my-4	contact-text space-mono-bold">
                          Name
                        </label>
                        <input type="text" required placeholder="Name" />
                      </div>
                      <div className="flex flex-col">
                        <label className="my-4 contact-text space-mono-bold">
                          Email
                        </label>
                        <input type="email" required placeholder="Email" />
                      </div>
                      <div className="flex flex-col">
                        <label className="my-4	contact-text space-mono-bold">
                          message
                        </label>
                        <textarea rows={8} placeholder="Message" />
                      </div>
                      <button className="contact-text button-hero rounded-lg ring-1 ring-black  mt-8">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
    </>
  );
};

export default Contact;
