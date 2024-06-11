
import SingleCard from "../components/SingleCard";
import { useAppSelector } from "../tools/store";

const Brands = () => {


  const brand = useAppSelector((p:any)=>p.brand);
  return (
    <div className="container">
      <h1 className="text-center my-5">Select Brands</h1>
        

      <div className="row g-5">
      {brand.map((item:any)=>(
          <SingleCard key={item.id} title={item.title} img={item.logo} responsiveclass="col-12 col-sm-6 col-md-4" />
        ))}
      </div>

      
    </div>
  );
};

export default Brands;
