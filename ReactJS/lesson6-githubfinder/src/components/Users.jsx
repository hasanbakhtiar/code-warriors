import React from 'react'
import SingleUser from './SingleUser'

const Users = ({switchdata}) => {
  return (
    <div className='container mt-3'>
        <div className="row g-5">
            {switchdata.map(item=><SingleUser 
            alldata={item}
             />)}
            
        </div>
    </div>
  )
}

export default Users