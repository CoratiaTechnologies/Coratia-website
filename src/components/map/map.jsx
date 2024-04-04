import React from "react";
import Link from "next/link";
import { mapcontent } from "../../../config/content/Map";
import styled from "styled-components";
import ContactUsForm from "../ContactUs/form";
import { Heading } from "../Typography";

const HeadingMap = styled.div`
  font-family: Poppins;
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, #007596 0%, rgba(0, 0, 0, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 968px) {
    font-size: 3.5rem;
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  @media (max-width: 491px) {
    font-size: 2.6rem;
  }
`;

export default function Map() {
  return (
    <div id="contact" className=" text-black px-5 md:px-10 py-12">
      <Heading className="text-5xl hidden md:block font-bold pt-7 text-center mb-10">
        Get in Touch
      </Heading>
      <div className="w-[100%] flex flex-wrap">
        <HeadingMap className="text-center w-full md:hidden block pb-7 md:order-1">
          Get in Touch
        </HeadingMap>
        <iframe
          src={mapcontent.gmap_link}
          height="450"
          allowFullScreen={true}
          loading="lazy"
          className="md:w-[50%] w-[100%] m-auto rounded-md md:order-2 order-3"
        />

        <div className="mt-2 md:mt-0 mx-auto md:pl-10 w-full md:w-[40%] order-2 md:order-3">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
