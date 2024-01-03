"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import styled from "styled-components";
import { Heading } from "../Typography";

const testimonials = [
  {
    id: 1,
    picture: "https://i.ibb.co/ncrXc2V/1.png",
    text: `Coratia Technologies' vision in the area of Robotics,
    especially AUVs will herald a new beginning in Underwater
    Surveillance of the water reservoirs in Steel Industries.`,
    speaker: "Speaker 1",
  },
  {
    id: 2,
    picture: "https://i.ibb.co/B3s7v4h/2.png",
    text: `Coratia Technologies' vision in the area of Robotics,
    especially AUVs will herald a new beginning in Underwater
    Surveillance of the water reservoirs in Steel Industries.`,
    speaker: "Speaker 2",
  },
  {
    id: 3,
    picture: "https://i.ibb.co/XXR8kzF/3.png",
    text: `Coratia Technologies' vision in the area of Robotics,
    especially AUVs will herald a new beginning in Underwater
    Surveillance of the water reservoirs in Steel Industries.`,
    speaker: "Speaker 3",
  },
];

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
      <div className="bg-white flex items-center justify-center">
        <Heading className="mt-10 mb-10">TESTIMONIALS</Heading>
      </div>

      <div className="carouselContainer2">
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
            {testimonials.map((content, index) => (
              <div
                className={`${
                  index === slideIndex ? "slide2 slide-active2" : "slide2"
                } flex items-center justify-between`}
                key={content}
              >
                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 space-x-0 md:space-x-6">
                  <div className="flex flex-col items-center">
                    <img
                      alt="Mrs. Atashi Pramanik"
                      className="rounded-lg border-4"
                      height="200"
                      src={content.picture}
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                    <p className="mt-4 text-lg text-gray-700 font-semibold">
                      Mrs. Atashi Pramanik
                    </p>
                    <p className="text-sm px-1 text-gray-600">
                      Ex-CGM In-Charge (Automation, Instrumentation & IT)
                    </p>
                    <p className="text-sm px-1 text-gray-600">
                      Rourkela Steel Plant, SAIL
                    </p>
                  </div>
                  <div className="relative h-max w-full lg:max-w-lg">
                    <QuoteIcon className="absolute top-0 left-0 text-gray-400 w-12 h-12 transform rotate-180" />
                    <p className="text-base sm:text-lg italic px-10 sm:px-16 py-10 sm:py-12 text-black">
                      Coratia Technologies' vision in the area of Robotics,
                      especially AUVs will herald a new beginning in Underwater
                      Surveillance of the water reservoirs in Steel Industries.
                    </p>
                    <QuoteIcon className="absolute bottom-4 right-4 text-gray-400 w-12 h-12" />
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
