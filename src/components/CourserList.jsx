import {useState} from 'react'

const CourserList = () => {
  const CourserList =()=>[
    {
      id: 0,
      title: "Data Science With Generative AI Course",
      des: "Become a Certified Data Scientist with PW Skills and utilise the Power of Generative AI with machine learning, NLP, etc.",
      price: "$49",
      img: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/about/a36ff36c-26e8-4f15-8fd6-9fc890bcbfda.jpeg"
    }
    ]
    const [course, setCourse]=useState(CourserList)
    
  return (
       <>
    <div className="w-full">
    <div className="w-full md:w-[80%] mx-auto px-4 md:px-0 flex flex-col justify-center items-center text-slate-900">
    
    {/* COURSE */}
    {course && course.map((v, i)=>{
      return(
    <div className="w-full md:w-[60%] grid grid-cols-1 mx-auto border px-4 shadow py-5 rounded-lg mb-6">
    <img src={v.img} className="w-full rounded-lg" />
    <h3 className="text-2xl md:text-3xl text-slate-900 mt-2">{v.title}</h3>
    <p className="text-slate-500 mt-2">{v.des}</p>
    
        {/* COURSE DETAILS price */}
    <div className="coursePrice flex justify-start items-center w-full gap-4 mt-2">
    <span className="text-2xl font-semibold">$49</span>
    <span className="line-through text-lg">$449</span>
    <span className="text-green-600">10% Discount</span>
    </div>
    
    <button className="py-2 px-4 w-full md:w-auto rounded md:rounded-lg bg-[#E87862] capitalize flex justify-center items-center gap-2 md:gap-4 text-white mt-4">
   <a href="/course">enroll now</a>
 </button>
    </div>
        )
    })
    }
    
    </div>
    </div>
    </>
  )
}

export default CourserList