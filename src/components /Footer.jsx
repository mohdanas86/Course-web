import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="w-full bg-slate-900">
    <div className="w-full md:w-[80%] mx-auto mt-4 md:mt-12 px-4 md:px-0 flex flex-col justify-center items-center text-white py-8">
    {/* footer */}
   
   <ul className="w-full gap-4 flex justify-center items-center">
   <li className="list-none"><a href="/">Home</a></li>
   <li className="list-none">About</li>
   <li className="list-none"><a href="/course">Course</a></li>
   <li className="list-none">privacy & policy</li>
   </ul>
   
   <p className="text-slate-400 mt-4">all copyrights riserved by stomilar</p>
   </div>
   </div>
   </>
  )
}

export default Footer