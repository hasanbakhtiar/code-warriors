import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import SlickSlider from "../components/SlickSlider";
import { sliderprop } from "../types/allprop";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "../components/SingleCard";
import { add } from "../tools/slices/brandSlice";

const Home = () => {
  const [data, setData] = useState<sliderprop[]>([]);

  
  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          id: 1,
          title: "Slider one",
          img: "https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg",
        },
        {
          id: 2,
          title: "Slider two",
          img: "https://wallup.net/wp-content/uploads/2016/01/263693-nature-landscape-wildflowers-trees-calm-river-water-overcast-clouds.jpg",
        },
        {
          id: 3,
          title: "Slider three",
          img: "https://images3.alphacoders.com/705/705022.jpg",
        },
        {
            id: 1,
            title: "Slider one",
            img: "https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg",
          },
          {
            id: 2,
            title: "Slider two",
            img: "https://wallup.net/wp-content/uploads/2016/01/263693-nature-landscape-wildflowers-trees-calm-river-water-overcast-clouds.jpg",
          },
          {
            id: 3,
            title: "Slider three",
            img: "https://images3.alphacoders.com/705/705022.jpg",
          },
      ]);
    }, 1000);
  }, []);


  const brand = useSelector((p:any)=>p.brand);
  const cars = useSelector((p:any)=>p.car);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {data.length === 0 ? (
        <Preloader />
      ) : (
        <>
          <h1>Home page</h1>
          
            <SlickSlider alldata={data}  />
            <hr className="mt-5" />

        {brand.map((item:any)=>(
          <SingleCard key={item.id} title={item.title} img={item.logo} responsiveclass="col-12 col-sm-6 col-md-4" />
        ))}
        <hr />
        {cars.map((item:any)=>(
          <SingleCard key={item.id} title={item.model} img={item.photo} responsiveclass="col-12 col-sm-6 col-md-4" />
        ))}
<button onClick={()=>{
  dispatch(add([{title:"test",logo:"test",desc:"test"}]))
}}>add</button>
        </>
      )}
      
    </div>
  );
};

export default Home;
