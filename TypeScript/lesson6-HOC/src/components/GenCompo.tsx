
import  { useState } from 'react'

const GenCompo = (OriginalCompo:any) => {
    const newCompo = (props:any)=>{
        const [counter,setCount] =  useState<number>(0);

        return <OriginalCompo {...props} count = {counter} incCount={()=>{setCount((count)=>count+1)}} />
    }
    return newCompo;
}

export default GenCompo