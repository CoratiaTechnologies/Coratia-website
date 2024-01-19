import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "../Typography";
import Image from "next/image";
import { logos } from "../../../config/content/Companies";

const Companies = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    swipeToSlide: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  return (
    <>
      <div className="bg-white pt-10 pb-5">
        <Heading className="text-center">Our Clients</Heading>
      </div>
      <div className="bg-slate-100 w-full overflow-hidden py-8 px-5 md:px-10">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="container flex">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={80}
                loading="eager"
                className="h-14 w-auto sm:h-24 m-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Companies;
