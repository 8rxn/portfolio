import React from "react";
import { techStack } from "../constants";
import skillsimg from "../assets/skills.svg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const TechCard = ({ item }) => (
  <div className="md:p-10 p-5 bg-neutral-800 grid place-items-center aspect-square rounded-md m-2 hover: hover:fill-[#ef4444] hover:text-[#ef4444] ease-in duration-150">
    {item.className ? (
      <i
        className={`fa-brands ${item.className || ""} md:text-5xl text-3xl `}
      ></i>
    ) : (
      ""
    )}
    {item.path ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`${item.viewBox}`}
        width={"3rem"}
      >
        <path d={item.path} />
      </svg>
    ) : (
      ""
    )}
    {item.src ? (
      <img
        className="w-[3rem] brightness-0 hover:brightness-100 ease-in duration-150"
        src={item.src}
        alt=""
      />
    ) : (
      ""
    )}
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>My Tech Skills - Raj Aryan</title>
        <meta
          name="description"
          content="Discover the wide range of technical skills that Raj Aryan possesses. From web development to various tools and technologies, Raj's skill set encompasses an array of technologies to bring innovative solutions to life."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="My Tech Skills - Raj Aryan" />
        <meta
          property="og:description"
          content="Discover the wide range of technical skills that Raj Aryan possesses. From web development to various tools and technologies, Raj's skill set encompasses an array of technologies to bring innovative solutions to life."
        />
        <meta property="og:image" content="https://rajaryan.work/banner.png" />
        <meta property="og:url" content="https://rajaryan.work/skills" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Tech Skills - Raj Aryan" />
        <meta
          name="twitter:description"
          content="Discover the wide range of technical skills that Raj Aryan possesses. From web development to various tools and technologies, Raj's skill set encompasses an array of technologies to bring innovative solutions to life."
        />
        <meta name="twitter:image" content="https://rajaryan.work/banner.png" />
      </Helmet>
      
      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[90vh] sm:p-10 p-5">
        <h1 className="text-center text-white md:text-5xl text-3xl font-bold md:mb-5 mb-10">
          Tech That I'm Familiar With
        </h1>

        <div className="flex flex-col-reverse justify-center items-center ">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6  w-full justify-evenly m-auto ">
            {techStack.map((item, i) => (
              <TechCard key={i} item={item} />
            ))}
          </div>
          <div className="grid place-items-center md:my-5 my-10 py-20">
            <img className="w-[70vw] lg:w-[25vw]" src={skillsimg} alt="My Tech Skills" />
          </div>
        </div>
        <div className="w-full h-20"></div>
      </div>
    </motion.div>
  );
};

export default Skills;
