import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { mapcontent } from "../../../config/content/Map";
import styled from "styled-components";

const HeadingMap = styled.div`
  font-family: Poppins;
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, #749cac 0%, rgba(0, 0, 0, 0) 100%);
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
    <div
      id="contact"
      className="bg-white text-black px-5 md:px-10 py-5 pt-28 pb-28"
    >
      <div className="w-[100%] flex flex-wrap">
        <HeadingMap className="text-center w-full md:hidden block pb-4">
          Get in Touch
        </HeadingMap>
        <iframe
          src={mapcontent.gmap_link}
          height="400"
          allowFullScreen={true}
          loading="lazy"
          className="md:w-[50%] w-[100%] m-auto rounded-md"
        />

        <div className="mt-2 md:mt-auto mx-auto md:pl-20 md:w-[40%] m-auto">
          <HeadingMap className="text-5xl hidden md:block font-bold pt-7">
            Get in Touch
          </HeadingMap>
          <p className="md:mt-5 mt-2 text-base md:text-lg md:w-[80%]">
            {mapcontent.address}
          </p>
          <PopupButton
            id="jqHwoipO"
            style={{
              fontSize: 20,
              padding: "5px 25px",
              backgroundColor: "#1ca9c9",
              color: "white",
              borderRadius: 10,
              cursor: "pointer",
            }}
            className="my-button mt-3"
          >
            Contact Us!
          </PopupButton>
        </div>
      </div>
    </div>
  );
}
