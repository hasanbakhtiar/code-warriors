import { useMemo, useState } from "react"
import { product } from "../data/product";

const AppUseMemo = () => {
    const [count,setCount] = useState<number>(0);
    const [price,setPrice] = useState<string>("");
    const productRows = ()=>{
      console.log('productRows is running...');
      return (
        product.map((item:any,c:number)=><li onClick={()=>{setPrice(item.price)}} key={c}>{item.title}</li>)
      )
    }

    const productMemo = useMemo(()=>productRows(),[price])
    
  return (
    <div>
      {price}
        <ul>
          {productMemo}
        </ul>
        <h1>{count}</h1>
        <button onClick={()=>{
          console.log('counter');
          
          setCount(count+1)}}>inc</button>
        
    </div>
  )
}

export default AppUseMemo