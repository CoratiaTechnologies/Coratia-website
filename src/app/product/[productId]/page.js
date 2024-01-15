"use client";
import React from "react";
import { usePathname } from "next/navigation";
import ImageSlider from "./ImageSlider";
import { productcontent } from "../../../../config/content/Product";

const data = productcontent;

function productPage() {
  const pathname = usePathname();
  const productId = pathname.substring(9);
  var product = data.find((item) => item.id.toString() === productId);

  return (
    <>
      <div className="md:flex items-center justify-center pt-24 pb-7 px-5 md:px-10 text-black">
        <img
          src={product.image}
          alt=""
          width={500}
          height={300}
          className="w-[500px] h-[300px] mx-auto md:mx-0 rounded-lg object-cover"
        />
        <h2 className="text-center sm:text-4xl text-3xl font-semibold mt-3 md:mt-0 md:ml-10 md:w-[30%]">
          BEING INSPIRED FROM NATURE WE CREATED {product.name}
        </h2>
      </div>
      <div className="pb-5 text-center bg-slate-800">
        <h1 className="text-white text-5xl py-5 font-bold">{product.name}</h1>
        <div className="text-white pt-3 px-4 md:px-28 sm:px-14 md:text-lg text-base">
          {product.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <ImageSlider gallery={product.gallery} />
      </div>
    </>
  );
}

export default productPage;
