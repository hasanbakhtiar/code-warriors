import React, { useState } from 'react'
const data  ={
    email:"test@a.com",
    pass:"test123"
}

const Login = () => {
    const [value,setValue] = useState();
    const handleClick = (e)=>{
        e.preventDefault();
        if (!value) {
            alert('fill input')
        }else{
            setValue('')
        }
    }
  return (
    <form onSubmit={handleClick} className='container mt-5'>
        <p>{value}</p>
        <input value={value} type="text" onChange={(e)=>{setValue(e.target.value)}} name="" id="" />
        <button>submit</button>
    </form>
  )
}

export default Login