"use client";
import React from "react";
import Carousel2 from "../../components/Gallery/Carousel2";
import { gallerycontent } from "../../../config/content/Gallery";
import { Heading } from "../../components/Typography";

export default function Gallery() {
  return (
    <div className="pt-14">
      {gallerycontent.map((gallery, index) => (
        <div key={index} className="bg-white pt-7 md:pt-7">
          <Heading className="text-center font-semibold pb-3 font-poppins">
            {gallery.title}
          </Heading>
          <Carousel2 carouselImages={gallery.images} />
        </div>
      ))}
    </div>
  );
}
