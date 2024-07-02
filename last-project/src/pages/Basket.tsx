import { useEffect, useState } from "react"
import supabase from "../config/connect";
import { useCookies } from "react-cookie";

const Basket = () => {
    const [basket,setBasket] = useState<any[]>([]);
    const [cookie] = useCookies();
    useEffect(()=>{
        const fetchData = async()=>{
            const {data,error} = await supabase.from('basket').select();
            if (error) {
                console.log(error);
                
            }else{
                setBasket(data);
                
            }
        }
        fetchData();
    },[])
    const findbasket = basket.find((p:any)=>(p.user_token === cookie['cookie-car']))
    // console.log(findbasket.products);
    
  return (
    <div>
        {findbasket === undefined ? <p>Loading...</p>:findbasket.products.map((item:any)=>(
            <li key={item.id}>{item.model}</li>
        ))}
    </div>
  )
}

export default Basket