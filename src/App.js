import React, { useEffect, useState } from "react";

//build import end

import FirstComponent from "./Components/JobBoardComponent";
import data from './assets/data.json'
import JobBoardComponent from "./Components/JobBoardComponent";

const App = () =>{
  const [jobs, setJobs] = useState([]);
  useEffect(() =>setJobs(data), []);
  

  return(
    <div className="App">
      <header className="bg-teal-100 mb-12">
        <img className="w-full header-img" src="./images/bg-header-desktop.svg"/>
      </header>
      
      {jobs.length === 0 ? (
        <p>job are fethcing ..</p>
      ) :(
        jobs.map((job) => <JobBoardComponent job={job} key ={job.id}/>)
      )}
    </div>
  )
}




export default App;