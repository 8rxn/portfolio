import React from 'react'

const Shutter = () => {
  return (
    <div className='welcome-text   '>
      <h1 className=' md:text-5xl mb-6 text-3xl text-center font-bold text-white '>
        Something being<span className={`text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis`}> Built</span>
      </h1>
      <h2 className=' md:text-3xl text-xl text-center font-bold text-white/60 '>
        Until then, keep waiting
      </h2>
    </div>
  )
}

export default Shutter