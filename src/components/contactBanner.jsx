import React from 'react' 
import { FaPhoneAlt } from "react-icons/fa";

const contactBanner = () => {
  const img = "https://pwskills.com/images/homePage/homepage-degree.svg"
  return (
       <>
    <div className="w-full bg-slate-100">
    <div className="w-full md:w-[80%] mx-auto py-12 mb-6 px-4 md:px-0 grid flex justify-start items-center md:text-center text-start">
    
    {/* DEATILS */}
    <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 gap-4 md:text-center text-start">
    <h3 className="font-semibold text-md">Online Degree</h3>
    <h2 className="font-semibold text-2xl md:text-3xl text-black">Where <span className="text-[#E87862]">Learning</span> Meets The Expectation</h2>
    <p className="text-slate-600">At PW Skills, we are Revolutionising your journey of stepping your first foot into your Career through our college programs with partnering up with Top Tier Colleges</p>
    </div>
    
        {/* BTNS */}
    <div className="w-full md:w-[60%] mx-auto flex justify-center items-center gap-4 md:text-center text-start mt-4">
    <button className="py-2 px-4 w-full md:w-auto bg-[#E87862] rounded md:rounded-lg text-white capitalize"><a href="/payment">explore cources</a></button>
    <button className="py-2 px-4 w-full md:w-auto bg-transparent rounded md:rounded-lg text-[#E87862] capitalize flex justify-center items-center gap-2 md:gap-4" style={{border: "1px solid #E87862"}}>
    <FaPhoneAlt />
    to counseller 
 </button>
    </div>
    
    <div className="flex justify-center items-center w-full md:w-[50%] mx-auto mt-6 md:mt-8">
    <img src={img} />
    </div>
    
    </div>
    </div>
    </>
  )
}

export default contactBanner