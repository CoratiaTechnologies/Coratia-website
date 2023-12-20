'use client';
import React from "react";
import Carousel from "../../components/Gallery/Carousel";

const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
    "https://i.ibb.co/ncrXc2V/5.png",
];

export default function Gallery() {
    return(
        <div className="w-full h-[700px] bg-white flex items-center justify-center py-5 overflow-hidden">
            <div className="max-w-[700px] h-[1000px] px-5 md:px-10 flex items-center object-cover ">
            <Carousel
             autoSlide={true}
             autoSlideInterval={3000}
            >
                {slides.map((s) => (
                    <img src={s} className="object-cover" />
                ))}
            </Carousel>
            </div>
        </div>
    )
}