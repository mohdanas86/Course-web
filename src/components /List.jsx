import {useState} from 'react'

const List = () => {
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
    <div className="w-full">
    <div className="w-full md:w-[80%] mx-auto py-4 mb-6 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 ">
    
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
    </>
  )
}

export default List