import React from "react";
import { useState, useEffect } from "react";
import rajImg from "../assets/self.png";
import { motion } from "framer-motion";
import {AiOutlineInfoCircle} from "react-icons/ai"

const About = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-5 lg:p-10">
        <h1 className="text-center text-white md:text-5xl sm:text-3xl text-xl font-bold mb-5">
          About Me:
        </h1>
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="about-me-text lg:px-10 p-2 py-10 md:text-2xl sm:text-xl text-sm font-mono text-white/70">
            <p className=" ">
              I am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
                Raj Aryan
              </span>
              . A Sophomore Of Mechanical Engg. NIT Rourkela but I sure don't
              like the course I took myself into. <br /> I find Web Dev fun.
              Currently I'm playing around with Next JS.<br/>
              Also into Open Source - Open Source Developer at Meshery and Layer5 <br /> I
              write informative posts on my socials sometimes. <br />
            </p>
          <div className=" p-4 bg-gray-600/20 flex gap-4 justify-between items-center rounded-lg mt-12">
              <div className="text-xl sm:text-3xl h-full text-[#ef4444]/60">
              <AiOutlineInfoCircle></AiOutlineInfoCircle>
              </div>
              <p className="text-sm sm:text-lg font-medium tracking-wider   ">
                The performance of the site is not great. I'm in the process of
                migrating this website to Next.js for Server Side Rendering and
                better SEO.
              </p>
            </div>
          </div>

          <div className="sm:w-[500px] w-full m-auto">
            <img
              src={rajImg}
              className=" w-full ease-in aspect-square object-cover rounded-[50%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
