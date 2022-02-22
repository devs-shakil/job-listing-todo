import React from "react";
import "../index.css";

const JobBoardComponent = ({
    
    job:{
       
        company,
        isNew,
        featured,
        position,
        role,
        logo,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    },


}) =>{
    const tags = [role, level];
    if(languages){
        tags.push(...tools)
    }

    if(languages){
        tags.push(...languages)
    }
  



   return(
       <div className="flex bg-white shadow-md m-4 p-8 card">
          <div>
              <img src={logo} alt={company} />
          </div>
          <div className="ml-2 flex-col ml-4 justify-between ">
                <h3 className="font-bold text-teal-500"> {company}
                     {isNew && (<span className="font-bold text-teal-100 bg-teal-500 m-2 px-2 py-1 rounded-full text-sm">New </span>)}  {featured && (<span className="font-bold text-teal-100 bg-gray-800 m-2 px-2 py-1 rounded-full text-sm">Featured </span>)}
                
                </h3>


                <h2 className="font-bold text-xl py-2">{position}</h2>
                <p className="text-gray-700">{postedAt} . {contract} . {location}</p>
          </div>
          <div className="flex  items-center justify-end ml-auto">
             {
                 tags ? tags.map((tags) => 
                    <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">{tags}</span>
                 ): ''
             }
             
          </div>
       </div>
   )
}

export default JobBoardComponent;