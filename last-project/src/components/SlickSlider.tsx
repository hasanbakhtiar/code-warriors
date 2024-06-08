import Slider from "react-slick";
import SingleCard from "./SingleCard";

 const SlickSlider:React.FC<any> =({alldata})=> {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
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
  return (
    <Slider {...settings}>
        {alldata.map((item:any)=>(
        <SingleCard title={item.title} img={item.img} key={item.id} responsiveclass="col-11" />
        ))}
    </Slider>
  );
}

export default SlickSlider;