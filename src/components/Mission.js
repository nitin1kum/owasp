import React from 'react'

const Mission = () => {
  return (
    <div className='w-full h-[calc(100vh-160.8px)] pt-20 pb-5 bg-gradient-to-tl from-blue-950 to-sky-600'>
      <div className="mission h-[95%] w-[95%] m-auto glass-morph py-4 px-4 lg:p-10">
        <div className='lg:my-10 my-5 w-full flex flex-col items-center'>
          <h1 className='text-black text-center text-[30px] italic query-text'>Our Vission</h1>
          <p className='lg:text-[50px] text-[35px] text-sky-300 text-center w-full lg:w-3/4'>No more insecure software.</p>
        </div>
        <div className='lg:my-10 my-5 flex flex-col items-center'>
          <h1 className='text-black text-[30px] text-center italic query-text'>Our Mission</h1>
          <p className='lg:text-[50px] text-[35px] text-sky-300 text-center lg:w-3/4 w-full'>To be the global open community that power secure software through education, tools and collaboration.</p>
        </div>
      </div>
    </div>
  )
}

export default Mission