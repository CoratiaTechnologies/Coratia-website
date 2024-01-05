"use client";
import React from "react";
import Carousel2 from "../../components/Gallery/Carousel2";
import { gallerycontent } from "../../../config/content/Gallery";

export default function Gallery() {
  return (
    <div className="pt-14">
      {gallerycontent.map((gallery, index) => (
        <div key={index} className="bg-white pt-7 md:pt-14">
          <h1 className="text-4xl md:text-5xl text-black text-center font-semibold pt-3">
            {gallery.title}
          </h1>
          <Carousel2 carouselImages={gallery.images} />
        </div>
      ))}
    </div>
  );
}
