import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mage = "https://lh3.googleusercontent.com/0cDOOJjp8pUGDDFLqHFITEi35uMGZ5wHpZ9KTKridxk71kpR9MfeydpQqG5n8Mvetvkg5iVuZGeL2xMvxgBY_UL-T9p0x_Eo4EAh";

const Companies = () => {
    const [settings] = useState({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    });
    // Component logic

    const logos = [
        mage,
        mage,
        mage,
        // Add more logos here
      ];

    return (
      <div className='bg-green-400'>
        <h2>Proudly Supported by</h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
          <div key={index} className="container flex">
            <img src={logo} alt='logo' className='w-20 m-auto' />
          </div>
        ))}
        </Slider>
      </div>
    );
  };
  export default Companies;
