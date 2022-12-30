import React from 'react'
import pnrimg from '../assets/projectscreenshots/pnr-hero.png'
import { project } from '../constants';
import { motion } from 'framer-motion';

const ProjectCard=({item,reverse})=>(
  <>
  <div className={` m-auto md:w-auto  w-[80vw] flex  ${reverse?'md:flex-row-reverse' :'md:flex-row'}   flex-col justify-evenly py-10 rounded-xl sm:my-10 my-3`}>
    <div className='grid place-items-center aspect-square p-5 shadow-md bg-[#FEFCF3] md:w-[40%] w-[90%]'> 
    <img src={item.img} className='object-cover w-[100%] hover:scale-110 ease-in duration-150' alt="" />

      </div>
      <div className='text-white/90 font-bold text-3xl font-sans md:w-[40vw] w-[90%] md:p-32 p-10'>
      <h1>{item.title}</h1>
      <p className='text-lg  text-white/70 mt-5 overflow-x-clip text-start'>
      {item.subtitle}
      </p>
      <a target={"_blank"} href={item.link}>
      <button className='text-xs border-2 rounded-lg p-2 text-end mt-5 mx-2'>Try Out  <i className="fa-solid fa-up-right-from-square"></i></button></a>
      <a target={"_blank"} href={item.gitlink}>
      <button className='text-sm underline underline-offset-8 rounded-lg p-2 text-end mt-5 mx-2'> Fork on Github <i className="fa-brands fa-square-github"></i></button></a>
    </div>
  </div>
  </>
);

const Projects = () => {
  return (
    <motion.div
    initial={{ y:'50%', opacity: 0 }}
    animate={{ opacity: 1,y:"0" }}
transition={{ ease:'easeIn', duration:'0.5',type:'spring' }}
exit={{x:'-100%'}}>
  <div className='md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-10' >
     <h1 className='text-center text-white md:text-5xl text-3xl font-bold mb-5'>
        Some Projects of mine:
        </h1>   
       <div className='m-0 flex flex-col place-items-center'>
          {project.map((item,i)=>(
            <ProjectCard key={i} item={item} reverse={i%2 && true} />
          ))}
       </div>

        <div className='w-[300px]'>
           
        </div>

    </div>
    </motion.div>
  )
}

export default Projects