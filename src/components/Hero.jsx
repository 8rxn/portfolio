import React from 'react'
import HeroImg from'../assets/heroimg.svg'
import {socialIcons} from '../constants'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Hero = () => {

  return (
    <motion.div className='flex md:flex-row flex-col-reverse justify-evenly items-center w-[100vw] gap-10'
    initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ ease:'easeIn', duration:'1',type:'spring' }}
exit={{x:'-100%'}}
    >
        <div className='welcome-text'>
            <h1 className=' md:text-5xl text-3xl text-center font-bold text-white '>
                Hi, This is <span className={`text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis`}> Raj Aryan</span>
            </h1>
            <div className='flex flex-row justify-evenly mt-10'>
           {socialIcons.map((item)=>(
             <a href={item.link} key={item.name} target='_blank'>

             <div  className=' grid place-items-center rounded-[50%] w-10 h-10 cursor-pointer hover:bg-[#ef4444] '>
             <i className={`${item.class} text-white`}></i>
             </div>
             </a>
           ))}

            </div>

            <div className='flex flex-row justify-around md:mt-10 mt-5 '>
              <Link to='/contact'>
            <button className='outline-2 text-white border-spacing-x-1  bg-[#1f1f1f] hover:bg-[#252525] rounded-lg px-3 py-2'>
                Lets Talk
            </button>
              </Link>
              <a href="https://drive.google.com/drive/folders/1cqlGH0fJjmC2ITGaTDQIC7420G9P5dDi" target='_blank'>
            <button className='outline-2 text-white bg-[#1f1f1f] rounded-lg hover:bg-[#252525] px-3 py-2'>

                Resume
            </button>
              </a>
            
            </div>
        </div>
        <div className='self-img'>
            <img className='w-[70vw] lg:w-96' src={HeroImg} alt="" />
        </div>
    </motion.div>
  )
}

export default Hero