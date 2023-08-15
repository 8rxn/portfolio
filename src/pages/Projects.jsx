import React from "react";
import { project } from "../constants";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ProjectCard = ({ item }) => (
  <>
    <div className="flex flex-col bg-slate-100/10 hover:bg-slate-100/20 transition rounded-xl gap-4 p-4 md:aspect-video aspect-auto group mx-4 sm:mx-0 col-span-1 max-w-[80vw]">
      <div className="aspect-video">
        <img
          src={item.img}
          className="object-cover w-full group-hover:animate-pulse"
          alt={"Project Screenshot of " + item.title}
        />
      </div>
      <div className="text-slate-100 ">
        <a href={item.link}>
          <h2 className="text-xl sm:text-3xl font-bold mb-4 underline-offset-8 underline  ">
            {item.title}
          </h2>
        </a>
        {item.subtitle.map((subtitleItem) => (
          <p key={subtitleItem} className="text-base font-light mb-4">{subtitleItem.value}</p>
        ))}
      </div>

      {item.gitlink == undefined ? (
        <div className="flex justify-between w-full text-slate-100 gap-2">
          <button className="text-xs border-2 rounded-lg p-2 text-end hover:bg-[#ef4444]/20 transition ease-in">
            {item.state}
          </button>

          <a target={"_blank"} href={item.link}>
            <button className="text-xs border-2 rounded-lg p-2 text-end hover:bg-[#ef4444]/20 transition ease-in">
              Visit <i className="fa-solid fa-up-right-from-square"></i>
            </button>
          </a>
        </div>
      ) : (
        <div className="flex justify-end w-full text-slate-100 gap-2">
          <a target={"_blank"} href={item.link}>
            <button className="text-xs border-2 rounded-lg p-2 text-end hover:bg-[#ef4444]/20 transition ease-in">
              Try Out <i className="fa-solid fa-up-right-from-square"></i>
            </button>
          </a>
          <a
            target={"_blank"}
            href={item.gitlink}
            className="text-sm underline underline-offset-8 py-2 px-1 rounded-sm text-end hover:bg-[#ef4444]/20 backdrop-blur-sm"
          >
            Fork on Github <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
      )}
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
       <Helmet>
        <title>My Projects - Raj Aryan</title>
        <meta
          name="description"
          content="Explore a collection of projects developed by Raj Aryan. From web development to open source contributions, discover the diverse projects that showcase Raj's skills and expertise."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="My Projects - Raj Aryan" />
        <meta
          property="og:description"
          content="Explore a collection of projects developed by Raj Aryan. From web development to Freelance projects, discover the diverse projects that showcase Raj's skills and expertise."
        />
        <meta property="og:image" content="https://rajaryan.work/banner.png" />
        <meta property="og:url" content="https://rajaryan.work/projects" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Projects - Raj Aryan" />
        <meta
          name="twitter:description"
          content="Explore a collection of projects developed by Raj Aryan. From web development to open source contributions, discover the diverse projects that showcase Raj's skills and expertise."
        />
        <meta name="twitter:image" content="https://rajaryan.work/banner.png" />
      </Helmet>
      <div className=" sm:max-w-[80vw] md:max-w-[70vw] max-w-[98vw] m-auto md:h-[80vh] h-[100vh] pt-10 pb-20">
        <h1 className="text-center text-white md:text-5xl text-3xl font-bold mb-5">
          Some Projects of mine:
        </h1>
        <div className="m-0 flex flex-col sm:grid sm:grid-cols-2  place-items-center gap-8">
          {project.map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>

        <div className="w-[300px] h-20"></div>
      </div>
    </motion.div>
  );
};

export default Projects;
