import { useEffect, useState } from "react";
import supabase from "../config/connect";
import { useCookies } from "react-cookie";

const Basket = () => {
    let a = 0
  const [basket, setBasket] = useState<any[]>([]);
  const [cookie] = useCookies();
  const [count,setCount] = useState<any>({
        prodid:null,
        count:1
  });
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("basket").select();
      if (error) {
        console.log(error);
      } else {
        setBasket(data);
      }
    };
    fetchData();
  }, []);
  const findbasket = basket.find(
    (p: any) => p.user_token === cookie["cookie-car"]
  );
  // console.log(findbasket.products);
  const deleteCart = (basketid: any, id: any) => {
    const updateBasket = async (dataarr: any) => {
      console.log(dataarr);

      const { error } = await supabase
        .from("basket")
        .update({ user_token: cookie["cookie-car"], products: dataarr })
        .eq("id", basketid);
      console.log(error);
    };

    const handleData = findbasket.products.filter((item: any) => {
      return item.id !== id;
    });
    updateBasket(handleData);
  };

  const decrement=()=>{
    count>1?setCount(count-1):setCount(count);
  }
  const increment = (prodid:any)=>{
        setCount({
            prodid:prodid,
            count:count.count+1
        })
    
  }
  return (
    <div>
        <h1 className="my-5 text-center">Baskte page</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {findbasket === undefined ? (
        <p>Loading...</p>
      ) : (
        findbasket.products.map((item: any,index:number) => (
            <tr key={item.id}>
            <th scope="row">{index+1}</th>
            <td><img src={item.photo} width={70} alt="" /></td>
            <td>{item.brand} | {item.model}</td>
            <td>${item.price}</td>
            <td><button className="btn btn-dark" onClick={decrement}>-</button><span className="mx-3">{count.prodid === item.id?count.count:0}</span><button className="btn btn-dark" onClick={()=>{increment(item.id,1)}}>+</button></td>
            <td><button 
            className="btn btn-danger"
              onClick={() => {
                deleteCart(findbasket.id, item.id);
                window.location.reload();
              }}
            >
              X
            </button></td>
          </tr>
          
        ))
      )}
         
        </tbody>
      </table>

     
    </div>
  );
};

export default Basket;
