import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Shutter = () => {
  return (
    <motion.div
      className="welcome-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: "1", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>Shutterbug - Photography Collection by Raj Aryan</title>
        <meta
          name="description"
          content="Explore a collection of photos taken by Raj Aryan in Shutterbug. Stay tuned for captivating visual moments."
        />
      </Helmet>

      <h1 className="md:text-5xl mb-6 text-3xl text-center font-bold text-white ">
        Shutter
        <span
          className={`text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis`}
        >
          bug
        </span>
      </h1>
      <h2 className="md:text-3xl text-xl text-center font-bold text-white/60 ">
        Explore a captivating collection of photos taken by Raj Aryan.
        <br /> Stay tuned for more visual moments.
      </h2>
      <h2 className="md:text-xl text-lg text-center font-bold text-white/30 ">
        Coming Soon..
      </h2>
    </motion.div>
  );
};

export default Shutter;
