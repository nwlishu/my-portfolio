"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactProps {
  activeSection: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = ({ activeSection }: ContactProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message sent successfully!",
        });
        reset(); // Clear form
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
          ease: "easeOut",
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
              <p className="font-bold">Email</p>
              <p className="font-light mt-1.5 md:mt-3.5">
                Supapornnguanprasert@gmail.com
              </p>
            </div>
            <div>
              <p className="font-bold mt-5 md:mt-14">Current Location</p>
              <p className="font-light mt-1.5 md:mt-3.5">Bangkok, Thailand</p>
            </div>
          </motion.div>

          <motion.div
            className="form-right-contact flex-1 basis-3/5"
            variants={fadeInAnimationsHorizontalLeftVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="mt-5 md:mt-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="font-bold" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input-style font-light mt-2 md:mt-4 border rounded px-4 py-3 w-full"
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                      maxLength: {
                        value: 100,
                        message: "Name must be less than 100 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col mt-4 md:mt-8">
                  <label className="font-bold" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input-style font-light mt-2 md:mt-4 border rounded px-4 py-3 w-full"
                    placeholder="your.email@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col mt-4 md:mt-8">
                  <label className="font-bold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="input-style font-light mt-2 md:mt-4 border rounded px-4 py-3 w-full resize-y"
                    rows={5}
                    placeholder="Your message..."
                    {...register("message", {
                      required: "Message is required",
                      maxLength: {
                        value: 5000,
                        message: "Message must be less than 5000 characters",
                      },
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`button-contact mt-6 md:mt-8 py-3  font-medium transition-all duration-200 border rounded p-2 ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-90 hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div
                    className={`mt-4 p-4 rounded font-extralight ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={`${
          activeSection === "Contact" ? "block" : "hidden"
        } copyRight`}
      >
        <motion.p>© 2024, Supaporn Nguanprasert</motion.p>
      </motion.div>
    </>
  );
};
export default Contact;
