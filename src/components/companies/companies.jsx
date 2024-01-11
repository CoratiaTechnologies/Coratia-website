import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "../Typography";
import Image from "next/image";

const mage =
  "https://res.cloudinary.com/dgjzygzgx/image/upload/v1704292661/tata_wedojq.svg";

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
    <>
    <div className="bg-white pt-10 pb-5">
      <Heading className="text-center">Our Clients</Heading>
    </div>
    <div className="bg-slate-100 w-full overflow-hidden pt-5 px-5 md:px-10">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="container flex">
            <Image src={logo} alt="logo" width={150} height={80} className="h-12 sm:h-20 m-auto" />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};
export default Companies;
