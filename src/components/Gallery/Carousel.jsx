/* eslint-disable max-len */
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./carouselstyles.css";

function CustomPrevArrow({ onClick }) {
  return (
    <div
      className="arrow custom-prev-arrow"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <span className="material-symbols-outlined">&#8249;</span>
    </div>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <div
      className="arrow custom-next-arrow"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <span className="material-symbols-outlined">&#8250;</span>
    </div>
  );
}

function Carousel({ carouselImages }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 1200,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="carouselContainer">
      <div className="slider">
        <Slider
          centerMode={settings.centerMode}
          centerPadding={settings.centerPadding}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
          beforeChange={settings.beforeChange}
          prevArrow={settings.prevArrow}
          nextArrow={settings.nextArrow}
          responsive={settings.responsive}
        >
          {carouselImages.map((imgUrl, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={imgUrl}
            >
              <Image
                className="carousel-img object-cover"
                src={imgUrl}
                loading="lazy"
                width={580}
                height={435}
                alt={`Alt ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
