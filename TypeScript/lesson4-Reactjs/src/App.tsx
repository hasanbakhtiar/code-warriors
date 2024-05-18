import { useState } from "react"
import { product } from "./data/product";

const App:React.FC = () => {
    const [count,setCount] = useState<number | string>(0);
  return (
    <div>
        {count}
        <button onClick={()=>setCount("hello")}>set</button>
        <ul>
        {product.map((item:any,c:number)=>(
            <li key={c}>{item.title}</li>
        ))}
        </ul>
    
    </div>
  )
}

export default App