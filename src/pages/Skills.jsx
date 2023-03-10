import React from 'react'
import { techStack } from '../constants'
import skillsimg from '../assets/skills.svg'
import { motion } from 'framer-motion'

const TechCard = ({ item }) => (
    <div className='md:p-10 p-5 bg-white grid place-items-center aspect-square rounded-md m-10 hover: hover:fill-[#ef4444] hover:text-[#ef4444] ease-in duration-150'>
        {item.className ?
            <i className={`fa-brands ${item.className || ''} md:text-5xl text-3xl `}></i>
            :
            ''
        }
        {
            item.path ? <svg xmlns="http://www.w3.org/2000/svg" viewBox={`${item.viewBox}`} width={'3rem'}>
                <path d={item.path} />
            </svg> : ''
        }
        {item.src ?
            <img className='w-[3rem] brightness-0 hover:brightness-100 ease-in duration-150' src={item.src} alt="" /> :""
}
    </div>
)

const Skills = () => {
    return (
        <motion.div
        initial={{ y:'50%', opacity: 0 }}
        animate={{ opacity: 1,y:"0" }}
transition={{ ease:'easeIn', duration:'0.5',type:'spring' }}
exit={{x:'-100%'}}>
            <div className='md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-10' >
                <h1 className='text-center text-white md:text-5xl text-3xl font-bold md:mb-5 mb-10'>
                    Tech That I'm Familiar With
                </h1>

                <div className='flex flex-col-reverse md:flex-row '>
                    <div className='flex flex-row md:w-[40vw] w-[100vw] flex-wrap'>
                        {techStack.map((item, i) => (
                            <TechCard key={i} item={item} />
                        ))}
                    </div>
                    <div className='grid place-items-center md:my-5 my-10'>
                        <img className='w-[70vw] lg:w-96' src={skillsimg} alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills