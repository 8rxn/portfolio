import React from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import rajImg from "../assets/self.png";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>About Me - Raj Aryan</title>
        <meta
          name="description"
          content="Raj Aryan | Pre-Final Mechanical Engineering student at NIT Rourkela | Lead Organizer at HackOdisha 3.0 | Vice President at Webwiz | Explore my journey in web development, and my contributions as an Open Source Developer at Meshery and Layer5."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="About Me - Raj Aryan" />
        <meta
          property="og:description"
          content="Dive into the profile of Raj Aryan, A Pre- Final year Student at NIT Rourkela. Lead Organizer at HackOdisha 3.0, Vice President at Webwiz."
        />
        <meta property="og:image" content={rajImg} />
        <meta property="og:url" content="Your page URL here" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - Raj Aryan" />
        <meta
          name="twitter:description"
          content="Dive into the profile of Raj Aryan, A Pre- Final year Student at NIT Rourkela. Lead Organizer at HackOdisha 3.0, Vice President at Webwiz."
        />
        <meta name="twitter:image" content={rajImg} />
      </Helmet>
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
              . A Pre-Final Of Mechanical Engg. NIT Rourkela but I'm into
              multiple things, chasing interests. <br /> I find Web Dev fun.
              <br />
              BTW, Lead Organizer at{" "}
              <a
                href="https://www.hackodisha.tech"
                target="_blank"
                rel="noreferrer"
                className=" border-b-2 border-[#EF4444] border-opacity-25 transition ease-in hover:border-opacity-75 "
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
                  HackOdisha 3.0
                </span>
              </a>
              {" , "} Vice President{" "}
              <a
                href="https://teamwebwiz.dev"
                target="_blank"
                rel="noreferrer"
                className=" border-b-2 border-[#EF4444] border-opacity-25 transition ease-in hover:border-opacity-75 "
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
                  Webwiz
                </span>
              </a>
              . <br /> Also into Open Source - Open Source Developer at Meshery
              and Layer5 <br /> I write informative posts on my socials
              sometimes. <br />
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
              alt="Raj Aryan"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
