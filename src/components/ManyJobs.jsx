import OneJobs from "./OneJobs"
import jobs from '../data/data'
import CompanyJob from "./CompanyJob"
import { useState } from "react"


const ManyJobs = () => {
    const[job,setJob]=useState(jobs[0])

    const company = jobs.filter(item=>item.company)
    

    function getButton(getindex){
        const button = company[getindex]
        setJob(button)
    }
    console.log(job)
  return (
    <section className="mx-auto">
        <h1 className="text-center mt-12 text-3xl">History Jobs</h1>
        <div className="bg-lime-400 w-24 h-1 mx-auto rounded-md my-4"></div>
        <div className="flex  justify-center space-x-4">
        {company.map((item,index)=>{
            return <CompanyJob key={index} index={index} getButton={getButton} {...item} />
        })}
        </div>

        <div>
            <OneJobs  {...job} />
        </div>

    </section>
  )
}

export default ManyJobs