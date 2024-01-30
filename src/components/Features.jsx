import React from "react";
import { Heading } from "./Typography";
import Image from "next/image";

const featureImage =
  "https://res.cloudinary.com/dgjzygzgx/image/upload/c_pad,b_gen_fill,w_1920,h_1080/v1705707451/https___res.cloudinary_nry4ee.jpg";

export default function Features() {
  return (
    <>
      <div className="text-center md:pt-32 pt-16 pb-10 bg-white">
        <Heading>Product Features</Heading>
      </div>
      <div className="w-full bg-white">
        <div className="">
          <Image
            src={featureImage}
            alt=""
            height={1080}
            width={1920}
            className="shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
