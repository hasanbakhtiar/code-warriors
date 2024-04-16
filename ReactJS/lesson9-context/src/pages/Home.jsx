import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { ProductContext } from '../context/ProductContext';

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [product] = useContext(ProductContext);
  return (
<>
<div className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold text-body-emphasis">Welcome to TechTopia!</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">At TechTopia, we're more than just a store. We're a community of individuals passionate about Xiaomi 14 ultra. From our humble beginnings to where we are now, our journey has been fueled by our dedication to providing exceptional products and outstanding service to our customers.</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to="/products" className="btn btn-dark btn-lg px-4">Shop now</Link>
    </div>
  </div>
</div>

<div className="container">
<div className="slider-container">
      <Slider {...settings}>
      {product.map(item=>(
          <div key={item.id}>
            <img src={item.images[0]} style={{"width":"100%","height":"300px","objectFit":"contain"}} alt="" />
        </div>
      ))}
      
      
      
      </Slider>
    </div>
</div>

</>

  )
}

export default Home