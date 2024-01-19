"use client";
import React from "react";
import Carousel from "../../../components/Gallery/Carousel";
import { gallerycontent } from "../../../../config/content/Gallery";
import { Heading } from "../../../components/Typography";
import "./gallery.css";

export default function Gallery({ params }) {
  return (
    <div className="bg-white pt-24 pb-64">
      <div className="bg-white pt-7 md:pt-7">
        <Heading className="text-center font-semibold pb-3 font-poppins">
          {gallerycontent[params.albumID].title}
        </Heading>
        <Carousel carouselImages={gallerycontent[params.albumID].images} />
      </div>
    </div>
  );
}
