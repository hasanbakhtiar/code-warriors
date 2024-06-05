import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import SlickSlider from "../components/SlickSlider";
import { sliderprop } from "../types/allprop";
import ThreeModel from "./ThreeModel";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState<sliderprop[]>([]);
  const cardata = useSelector((p:any)=>p);
  console.log(cardata);
  
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
  return (
    <div className="container">
      {data.length === 0 ? (
        <Preloader />
      ) : (
        <>
          <h1>Home page</h1>
          
            <SlickSlider alldata={data}  />
        </>
      )}
      
    </div>
  );
};

export default Home;
