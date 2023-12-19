import React from "react";
const ytvid = "https://www.youtube.com/embed/e1lyC_ipKfQ?si=eKFh_vWLLhENDdQs";

export default function AboutUs() {
    return (
      <div className="text-black md:py-7 bg-white">
      <h2 className="text-4xl md:hidden block font-bold py-5 px-10">About Us</h2>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 px-4 md:px-10">
          <iframe
            alt="Team working"
            className="object-cover w-full h-full rounded-md"
            height="500"
            src={ytvid}
            style={{
              aspectRatio: "900/500",
              objectFit: "cover",
            }}
            width="913"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h2 className="text-5xl hidden md:block font-bold mb-6">About Us</h2>
          <p className="text-base md:text-lg">
            We, a team of alumni and faculties from NIT Rourkela, formed a company named Coratia Technologies Pvt. Ltd.
            with an aim to provide end to end solution in the field of AUV and ROV by reducing the costs linked to
            underwater operations and inspection. At present we are incubated at IHFC, IIT Delhi and FTBI, NIT Rourkela.
          </p>
        </div>
      </div>
      </div>
    )
  }