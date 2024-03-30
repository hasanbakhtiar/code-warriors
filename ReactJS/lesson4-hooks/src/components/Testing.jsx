import { useEffect, useState } from "react"
import Card from "./components/Card"

const Testing = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('Hello');
    useEffect(()=>{
        console.log('use effect is running');
    },[])
    const increment = ()=>{
        setCount(count+1)
    }
    
    
    return (
        <div className="container mt-5">
            
            <h1>{data}</h1>
            
            <button onClick={()=>{setData("Bye"); }} className="btn btn-primary">-</button>
            <span className="mx-3">{count}</span>
            <button className="btn btn-primary" onClick={increment} >+</button>
            <div className="row g-2 mt-4">




                <Card price={10} title="Samsung" />
                <Card price={30} title="LG" />
                <Card price={50} title="Asus" />

            </div>

        </div>
    )
}

export default Testing