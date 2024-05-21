import  {useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [data,setData] = useState("Hello");
    useLayoutEffect(()=>{
        setData('Bye')
    },[])
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default AppUseLayoutEffect