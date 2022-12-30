import React from 'react'
import { useState,useEffect } from 'react'
import rajImg from '../assets/self.jpg'
import { motion } from 'framer-motion'

const About = () => {


    
  return (
    <motion.div
    initial={{ y:'50%', opacity: 0 }}
        animate={{ opacity: 1,y:"0" }}
transition={{ ease:'easeIn', duration:'0.5',type:'spring' }}
exit={{x:'-100%'}}>
    <div className='md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-10' >
     <h1 className='text-center text-white md:text-5xl text-3xl font-bold mb-5'>
        About Me:
        </h1>   
        <div className='flex flex-col-reverse md:flex-row '>

        <div className='about-me-text lg:px-10 p-2 py-10 text-xl font-mono text-white/70'>
       <p className=' '>
       I am <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis'>Raj Aryan</span>. A Sophomore Of Mechanical Engg. NIT Rourkela but I sure don't like the course I took myself into. <br/> I find Web Dev fun. Currently I'm playing around with React JS and Firebase. <br /> I also write informative posts on LinkedIn sometimes. 
       </p>
        </div>

        <div className='w-[300px] m-auto'>
           <img src={rajImg} className=' w-auto h-auto ease-in aspect-square object-cover rounded-[50%]' alt="" />
        </div>
        </div>
    </div>
    </motion.div>
  )
}

export default About