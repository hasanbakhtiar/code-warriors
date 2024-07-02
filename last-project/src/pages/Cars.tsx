
import { useState } from "react";
import SingleCard from "../components/SingleCard";
import { useAppSelector } from "../tools/store";

const Cars = () => {
  const [filterdata,setFilterData] = useState([]);

  const brand = useAppSelector((p:any)=>p.brand);
  const cars = useAppSelector((p:any)=>p.car);
  const filterCar =(brand:string)=>{
    const result = cars.filter((p:any)=>p.brand === brand);
    setFilterData(result);

  }
  return (
    <div className="container">
      <h1 className="text-center my-5">Select Cars</h1>
        

      <div className="row g-2">
      {brand.map((item:any)=>(
        <div key={item.id} className="col-12 col-sm-6 col-md-2"><button className=" btn btn-dark" onClick={()=>{filterCar(item.title)}}>{item.title}</button></div>
        ))}
      </div>
        <hr />
      <div className="row g-5">
      {filterdata.length===0?cars.map((item:any)=>(
          <SingleCard alldata={item} key={item.id} title={item.model} brand={item.brand} price={item.price} img={item.photo} responsiveclass="col-12 col-sm-6 col-md-4" />
        )):filterdata.map((item:any)=>(
          <SingleCard alldata={item} key={item.id} title={item.model} brand={item.brand} price={item.price} img={item.photo} responsiveclass="col-12 col-sm-6 col-md-4" />
        ))}
      </div>

      
    </div>
  );
};

export default Cars;
