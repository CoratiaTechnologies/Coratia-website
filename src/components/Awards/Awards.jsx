import React from "react";
import { awards } from "../../../config/content/Awards";
import Image from "next/image";
import { Heading } from "../Typography";

const awardImage =
  "https://res.cloudinary.com/dgjzygzgx/image/upload/v1705688676/image-removebg-preview_wedzkj.png";

export default function Awards() {
  return (
    <div className="pt-14 hidden md:block bg-gradient-to-br from-cyan-100 to-blue-100 pb-14">
      <Heading className="text-center mb-7">Awards & Recognition</Heading>
      <div className="flex flex-wrap gap-x-12 justify-evenly">
        {awards.map((item, index) => (
          <div key={index} className="w-[200px]">
            <Image
              height={100}
              width={100}
              src={awardImage}
              alt=""
              className="mx-auto w-[80px] h-[80px] object-cover my-5"
            />
            <p className="text-black text-sm text-center">{item.text}</p>
            <p className="text-black text-sm text-center">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
