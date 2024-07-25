import {useState} from 'react'
import { IoShareSocial } from "react-icons/io5";

const Course = () => {
  const img = "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/about/a36ff36c-26e8-4f15-8fd6-9fc890bcbfda.jpeg" 
  const barLists =()=>[
    {
      id: 0,
      title: "job assistence",
      des: "program",
      border: "border-r border-r-slate-900"
    },
    {
      id: 1,
      title: "24 july 2024",
      des: "Date",
      border: "border-0 md:border-r md:border-r-slate-900",
    },
    {
      id: 2,
      title: "2 hours",
      des: "class",
      border: "border-r border-r-slate-900"
    },
    {
      id: 3,
      title: "6 months",
      des: "duration",
      border: "border-0 md:border-r md:border-r-slate-900"
    }
    ]
    const [barList, setBarList]=useState(barLists)
    
    const ListData =()=>[
    {
      id : 0,
      img: "https://pwskills.com/images/homePage/statistics1.png",
      title: "55%",
      des: "avrage salery hike"
    },
    {
      id : 1,
      img: "https://pwskills.com/images/homePage/statistics2.png",
      title: "600",
      des: "diffrent courses"
    },
    {
      id : 2,
      img: "https://pwskills.com/images/homePage/statistics3.png",
      title: "12000+",
      des: "carrer transtions"
    },
    {
      id : 3,
      img: "https://pwskills.com/images/homePage/statistics4.png",
      title: "400+",
      des: "hiring partners"
    },
  ]
  
  const [list, setList]=useState(ListData)
  return (
       <>
    <div className="w-full ">
    <div className="w-full md:w-[80%] mx-auto py-12 px-4 md:px-0 flex flex-col justify-center items-center ">
    
    {/* COURSE HERO */}
    <div className="courseHero w-full  flex flex-col md:flex-row justify-between items-center ">
    {/* COURSE DETAILS */}
    <div className="courseDetails  flex flex-col justify-start items-center py-4 px-0 md:px-4 md:w-[60%] w-full gap-3 order-2">
    
    <h3 className="text-2xl md:text-3xl font-semibold text-black">Data Science With Generative AI Course</h3>
    <p className="text-slate-600">Become a Certified Data Scientist with PW Skills and utilise the Power of Generative AI with machine learning, NLP, etc. Learn top-in-demand skills from the best in the industry. Transform your career in a high-demand data analytics field.</p>
    
    {/* COURSE DETAILS price */}
    <div className="coursePrice flex justify-start items-center w-full gap-4">
    <span className="text-2xl font-semibold">$49</span>
    <span className="line-through text-lg">$449</span>
    <span className="text-green-600">10% Discount</span>
    </div>
    
    <p className="w-full text-start text-[#E87862]">Classes Starting Soon! Enroll Now!</p>
    
   <div className="w-full mx-auto flex justify-start items-center gap-4 md:text-center text-start mt-4">
    <button className="py-2 px-8 w-full md:w-auto bg-[#E87862] rounded md:rounded-lg text-white capitalize"><a href="/payment">buy now</a></button>
    <button className="py-2 px-8 w-full md:w-auto bg-transparent rounded md:rounded-lg text-[#E87862] capitalize flex justify-center items-center gap-2 md:gap-4" style={{border: "1px solid #E87862"}}>
    join <IoShareSocial />
 </button>
    </div>
    
    </div>
    
    {/* COURSE DETAILS */}
    <div className="courseImage  flex justify-center items-center py-4 md:w-[40%] w-full md:order-2">
    <img src={img} className="rounded-lg" />
    </div>
    </div>
    
    {/* COURSE titles boxes */}
    <div className="w-full grid grid-cols-2 md:grid-cols-4 py-5 md:mt-8 mt-5 gap-6 md:gap-0">
    {
    barList && barList.map((v, i)=>{
      return(
    <div className={`w-full flex flex-col justify-center items-center ${v.border}`} key={i}>
    <h4 className="font-semibold">{v.title}</h4>
    <p className="text-slate-600">{v.des}</p>
    </div>
     )
    })
    }
    </div>
    
    {/* ABOUT THE COURSE */}
    <div className="w-full mt-6 flex justify-center items-center flex-col">
    <h3 className="w-full pl-4 border-l-8 border-[#E87862] rounded py-3 mb-4 text-2xl md:text-3xl">About Data Science With Generative AI Course</h3>
    <p className="text-slate-600">Get a wide range of perks from our Generative AI Courses with updated learning materials and resources. Become a data expert after completing the course, and master data science tools and techniques after completing the course.</p>
    </div>
    
    
    <div className="w-full grid md:grid-cols-2 grid-cols-1 mt-8 gap-4">
    {list &&
      list.map((v, i)=>{
      return(
    <div className="w-full mx-auto flex justify-start items-center shadow py-4 px-4 rounded gap-4" key={v}>
    {/* Image */}
    <div className="ListImage flex justify-center items-center w-[60px] ">
    <img src={v.img} />
    </div>
    {/* description */}
    <div className="ListImage w-full flex flex-col justify-center items-start ">
    <h3 className="text-slate-900 font-semibold text-lg">{v.title}</h3>
    <p className="text-slate-600">{v.des}</p>
    </div>
    </div>
            )
    })
    }
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Course