import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
  
const Car = ({images}) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: -1,
    //lazyLoad: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    //rtl: false,
  };
  return (
    <>
        <div className="imgslider">
          <Slider {...settings}>
            {/*console.log("Car:", images["assets"])*/}
            {images["assets"].map((item) => (
              <div key={item.id}>
                <a href = {item.permalink} target="_blank" rel="noreferrer">
                  <img src={item.image_preview_url} alt={item.name} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
    </>
  )
}
export default Car;