import React from "react";
import pnrimg from "../assets/projectscreenshots/pnr-hero.png";
import { project } from "../constants";
import { motion } from "framer-motion";

const ProjectCard = ({ item, reverse }) => (
  <>
    {/* <div className={` m-auto md:w-auto flex flex-col justify-evenly py-10 rounded-xl bg-gray-100/10 my-10 mx-2`}>
    <div className='grid place-items-center aspect-square p-5 rounded-sm w-fit  max-w-sm'> 
    <img src={item.img} className='object-cover hover:scale-105 ease-in duration-150 max-w-sm ' alt="" />

      <div className='text-white/90 font-bold text-3xl font-sans md:w-[40vw] pt-4 '>
      <h1>{item.title}</h1>
      {item.subtitle.map((subtitleItem)=>(
      <p className='text-lg  text-white/70 mt-5 overflow-x-clip text-start'>
        {subtitleItem.value}
      </p>

))}
      <a target={"_blank"} href={item.link}>
      <button className='text-xs border-2 rounded-lg p-2 text-end mt-5 mx-2'>Try Out  <i className="fa-solid fa-up-right-from-square"></i></button></a>
      <a target={"_blank"} href={item.gitlink}>
      <button className='text-sm underline underline-offset-8 rounded-lg p-2 text-end mt-5 mx-2'> Fork on Github <i className="fa-brands fa-square-github"></i></button></a>
</div>
    </div>
  </div> */}

    <div className="flex flex-col bg-slate-100/10 hover:bg-slate-100/20 transition rounded-xl group gap-4 p-4 aspect-video group mx-4 sm:mx-0">
      <div className="sm:w-96 w-80  aspect-video">
        <img
          src={item.img}
          className="object-cover w-full group-hover:animate-pulse"
          alt={"Project Screenshot of " + item.title}
        />
      </div>
      <div className="text-slate-100 sm:w-96 w-80">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 underline-offset-8 underline  ">
          {item.title}
        </h2>
        {item.subtitle.map((subtitleItem) => (
          <p className="text-base font-light">{subtitleItem.value}</p>
        ))}

      </div>
      <div className="flex justify-end w-full text-slate-100">
        <a target={"_blank"} href={item.link}>
          <button className="text-xs border-2 rounded-lg p-2 text-end mt-5 mx-2 hover:bg-[#ef4444]/20 transition ease-in">
            Try Out <i className="fa-solid fa-up-right-from-square"></i>
          </button>
        </a>
        <a target={"_blank"} href={item.gitlink}>
          <button className="text-sm underline underline-offset-8 rounded-lg p-2 text-end mt-5 mx-2 hover:bg-[#ef4444]/20 backdrop-blur-sm">
            {" "}
            Fork on Github <i className="fa-brands fa-square-github"></i>
          </button>
        </a>
      </div>
    </div>
  </>
);

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <div className="md:w-[70vw] max-w-[98vw] m-auto md:h-[80vh] h-[100vh] pt-10 pb-20">
        <h1 className="text-center text-white md:text-5xl text-3xl font-bold mb-5">
          Some Projects of mine:
        </h1>
        <div className="m-0 flex flex-col sm:grid sm:grid-cols-2  place-items-center gap-8">
          {project.map((item, i) => (
            <ProjectCard key={i} item={item} reverse={i % 2 && true} />
          ))}
        </div>

        <div className="w-[300px] h-20"></div>
      </div>
    </motion.div>
  );
};

export default Projects;
