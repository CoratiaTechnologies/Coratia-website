"use client";
import React from "react";
import ImageSlider from "./ImageSlider";
import { productcontent } from "../../../../config/content/Product";
import "./product.css";

const data = productcontent;

function productPage({ params }) {
  const productId = params.productId;
  var product = data.find((item) => item.id.toString() === productId);

  return (
    <>
      <div className="h-[581px] md:h-[424px]">
        <div className="md:flex fixed -z-20 items-center justify-center pt-24 pb-24 md:pb-12 px-5 md:px-10 bg-white text-black">
          <img
            src={product.image}
            alt=""
            width={500}
            height={300}
            className="w-[500px] h-[300px] mx-auto md:mx-0 rounded-lg object-cover"
          />
          <h2 className="text-center sm:text-4xl text-3xl font-normal mt-3 md:mt-0 md:ml-10 md:w-[30%]">
            {product.motto} <br />{" "}
            <span className="font-semibold heading">ROV {product.name}</span>
          </h2>
        </div>
      </div>
      <div className="pb-14 text-center bg-[#38809a]">
        <h1
          className="text-white text-5xl pb-5 mt-4 pt-8 font-bold"
          style={{
            fontFamily: "Samarkan Normal",
            fontWeight: "normal",
            fontSize: "4rem",
          }}
        >
          {product.name}
        </h1>
        <div className="text-white pt-3 px-4 md:px-28 sm:px-14 md:text-lg text-base text-justify font-semibold pb-24">
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
