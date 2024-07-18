import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


const OneJobs = ({company,duration,duties,title}) => {
  return (
    <article>
        <p className='text-2xl'>{title}</p>
        <span className='my-1 px-1 rounded-md bg-slate-300'>{company}</span>
        <p className='text-slate-400'>{duration}</p>
        <div className="space-y-4 mt-4">
        {duties.map((duty,index)=>{
            return (
                <div className='text-sm space-x-4  justify-between flex items-center'>
                    <FontAwesomeIcon className="text-lime-500" icon={faArrowRight} />
                    <p>{duty}</p>
                </div>
            )
        })}
        </div>
    </article>
  )
}

export default OneJobs