import React from "react";
import { Heading } from "./Typography";
import Image from "next/image";

const featureImage =
  "https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/Coratia_Brochure-4_kidw6g";

export default function Features() {
  return (
    <>
      <div className="text-center pt-32 bg-white">
        <Heading>Product Features</Heading>
      </div>
      <div className="w-full p-5 bg-white">
        <div className="">
          <Image
            src={featureImage}
            alt=""
            height={1080}
            width={2140}
            className="w-auto mx-auto max-h-[72vh] shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
