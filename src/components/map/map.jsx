import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { mapcontent } from "../../../config/content/Map";

export default function Map() {
  return (
    <div
      id="contact"
      className="bg-white text-black px-5 md:px-10 py-5 pt-28 pb-28"
    >
      <div className="w-[100%] flex flex-wrap">
        <h1 className="text-4xl md:hidden block font-bold pb-4">
          Get in Touch
        </h1>
        <iframe
          src={mapcontent.gmap_link}
          height="400"
          allowFullScreen={true}
          loading="lazy"
          className="md:w-[50%] w-[100%] m-auto rounded-md"
        />

        <div className="mt-2 md:mt-0 mx-auto md:pl-20 md:w-[40%]">
          <h1 className="text-5xl hidden md:block font-bold pt-7">
            Get in Touch
          </h1>
          <p className="md:mt-5 mt-2 text-base md:text-lg md:w-[80%]">
            {mapcontent.address}
          </p>
          <PopupButton
            id="jqHwoipO"
            style={{
              fontSize: 20,
              padding: "5px 25px",
              backgroundColor: "#408E91",
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
