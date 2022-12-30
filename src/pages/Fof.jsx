import React from 'react'
import lost from '../assets/lost.svg'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Fof = () => {
  return (
    <motion.div className='flex flex-col'
    initial={{ y:'50%', opacity: 0 }}
    animate={{ opacity: 1,y:"0" }}
transition={{ ease:'easeIn', duration:'0.5',type:'spring' }}
exit={{x:'-100%'}}>
        <div className='text-white text-3xl md:text-5xl font-bold'>
          <h1>You look A little Lost</h1>
          <Link to='/'>
          <button className='bg-white my-3 rounded-lg py-2 px-5 text-black font-semibold font-sans text-lg hover:bg-white/70 ease-in-out duration-150'> Home</button>
          </Link>
        </div>
        <div className='md:w-[40vw] w-[90vw]'>
          <img src={lost} alt="404 PAGE NOT FOUND" />
        </div>
    </motion.div>
  )
}

export default Fof