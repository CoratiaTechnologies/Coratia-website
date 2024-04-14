"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import { Heading } from "../Typography";
import { testimonials } from "../../../config/content/Testimonial";

function QuoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function CustomPrevArrow({ onClick }) {
  return (
    <div
      className="arrow2 custom-prev-arrow2"
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
      className="arrow2 custom-next-arrow2"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <span className="material-symbols-outlined">&#8250;</span>
    </div>
  );
}

export default function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 1200,
    centerMode: true,
    centerPadding: "0px",
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
      <div className="flex items-center justify-center">
        <Heading className="mt-14 mb-10">Testimonials</Heading>
      </div>

      <div className="carouselContainer2 py-4 md:pl-10 md:pr-14">
        <div className="slider2">
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
            {testimonials.map((testimonial, index) => (
              <div
                className={`${
                  index === slideIndex ? "slide2 slide-active2" : "slide2"
                } flex items-center justify-between`}
                key={index}
              >
                <div className="">
                  <div className="relative w-full md:w-[90%] mx-auto">
                    <QuoteIcon className="absolute top-0 left-0 text-gray-400 w-10 h-10 transform rotate-180" />
                    <p
                      className="text-base text-center sm:text-lg italic px-10 sm:px-12 py-4 sm:py-6 text-black font-bold"
                      style={{ letterSpacing: "0.05rem" }}
                    >
                      {testimonial.text}
                    </p>
                    <QuoteIcon className="absolute bottom-1 right-1 text-gray-400 w-10 h-10" />
                  </div>
                  <div className="w-3/4 md:w-1/2 ml-auto mr-24 text-right">
                    <p className="mt-4 text-gray-700">-{testimonial.name}</p>
                    <p className="text-sm px-1 text-gray-600">
                      {testimonial.designation}
                      <br />
                      {testimonial.organisation}
                    </p>
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
