"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import "./Testimonial.css";
import styled from "styled-components";

const carouselContent = [
  {
    id: 1,
    picture: "https://i.ibb.co/ncrXc2V/1.png",
    text: 'Testimonial text 1',
    speaker: 'Speaker 1',
  },
  {
    id: 2,
    picture: "https://i.ibb.co/B3s7v4h/2.png",
    text: 'Testimonial text 2',
    speaker: 'Speaker 2',
  },
  {
    id: 3,
    picture: "https://i.ibb.co/XXR8kzF/3.png",
    text: 'Testimonial text 3',
    speaker: 'Speaker 3',
  },
];

const Heading = styled.div`
  font-family: Poppins;
  font-size: 5.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, #749cac 0%, rgba(0, 0, 0, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

function CustomPrevArrow({ onClick }) {
  return (
    <div
      className="arrow custom-prev-arrow"
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
    >
      <span className='material-symbols-outlined'>&#8249;</span>
    </div>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <div
      className="arrow custom-next-arrow"
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
    >
      <span className='material-symbols-outlined'>&#8250;</span>
    </div>
  );
}

export default function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 1200,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
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
    <>
    <div className="bg-white flex items-center justify-center">
      <Heading>TESTIMONIALS</Heading>
    </div>

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
          {carouselContent.map((content, index) => (
            <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={content}>

              <div className='wrapper items-center justify-center px-5 md:px-20'>
                <img className='carousel-img rounded-full object-cover' src={content.picture} alt={`Alt ${index}`} />
                <div className='text-black text-xl text-center mt-5 md:mt-0 md:mx-10'>
                  <p>{content.text}</p>
                  <p className='text-sm'>-{content.speaker}</p>
                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
}
