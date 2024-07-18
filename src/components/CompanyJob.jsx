import React from 'react'

const CompanyJob = ({company,getButton,index}) => {
  return (
    <div className=' border-b-2 border-b-solid border-b-transparent  hover:border-b-lime-500 text-sm hover:text-lime-500'>
        <button onClick={()=> getButton(index)} >{company}</button>
    </div>
  )
}

export default CompanyJob