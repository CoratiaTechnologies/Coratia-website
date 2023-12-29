import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mage = "https://lh3.googleusercontent.com/0cDOOJjp8pUGDDFLqHFITEi35uMGZ5wHpZ9KTKridxk71kpR9MfeydpQqG5n8Mvetvkg5iVuZGeL2xMvxgBY_UL-T9p0x_Eo4EAh";

const Companies = () => {
    const [settings] = useState({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 491,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });

    const logos = [
        mage,
        mage,
        mage,
        mage,
        mage,
        mage,
        mage,
        // Add more logos here
      ];

    return (
      <div className='bg-slate-100 w-full overflow-hidden px-5 md:px-10'>
        <h2 className='text-black text-center text-4xl md:text-5xl font-bold pb-5'>
          Our Clients
        </h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
          <div key={index} className="container flex">
            <img src={logo} alt='logo' className='h-16 sm:h-20 m-auto' />
          </div>
        ))}
        </Slider>
      </div>
    );
  };
  export default Companies;
