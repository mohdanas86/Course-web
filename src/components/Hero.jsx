import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="w-full">
    <div className="w-full md:w-[80%] mx-auto mt-4 md:mt-12 px-4 md:px-0 flex flex-col justify-center items-center text-sky-900">
    {/* hero image */}
    <div className="heroImg w-[80%] h-[300px] md:h-[400px] mx-auto  flex justify-center items-center">
    <img src={"./hero.png"} />
    </div>
    
    {/* hero details */}
    <div className="w-full flex flex-col justify-start md:justify-center items-start md:items-center py-4  py-8 gap-2 md:mt-12">
    <h2 className="text-2xl md:text-3xl text-black font-semibold capitalize">Stay ahead of the curve</h2>
    <h2 className="text-2xl md:text-3xl text-black font-semibold capitalize">with our cources</h2>
    
    <p className="text-slate-600 md:text-center md:w-[80%]">
    PW Skills is your one-stop-shop for upscaling. Get maximum value for time and resources you invest, with job-ready courses & high-technology, available at the lowest cost.
    </p>
    
    <button className="mt-2 py-2 w-full md:w-[30%] bg-[#E87862] rounded md:rounded-lg text-white capitalize">
    explore cources
    </button>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Hero