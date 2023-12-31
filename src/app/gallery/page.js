"use client";
import React from "react";
import Carousel2 from "../../components/Gallery/Carousel2";
const mainGallery = [
    'https://res.cloudinary.com/dhnkuonev/image/upload/v1702296582/pmtopml0tqukabudsrvp.jpg',
    'https://res.cloudinary.com/dhnkuonev/image/upload/v1702296581/q3xgywx6x0pdqjymuyld.jpg',
    'https://res.cloudinary.com/dhnkuonev/image/upload/v1702296579/ex0vix6wbrx7g5hlot2w.jpg',
    'https://res.cloudinary.com/dhnkuonev/image/upload/v1702296987/uveuklce3owmbgbymozg.jpg',
  ];

export default function Gallery(){
    return(
        <div className="bg-white pt-14">
            <h1 className="text-4xl md:text-5xl text-black text-center font-semibold pt-6">Heading 1</h1>
            <Carousel2 carouselImages={mainGallery} />
            <h1 className="text-4xl md:text-5xl text-black text-center font-semibold pt-6">Heading 2</h1>
            <Carousel2 carouselImages={mainGallery} />
            <h1 className="text-4xl md:text-5xl text-black text-center font-semibold pt-6">Heading 3</h1>
            <Carousel2 carouselImages={mainGallery} />
        </div>
    )
}