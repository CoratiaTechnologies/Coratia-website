import React from "react";
import ContactUsForm from "../../components/ContactUs/form";

export default function page() {
  return (
    <div className="w-full px-12 bg-white mt-[68px] pt-24 pb-32 text-black flex justify-around">
      <ContactUsForm />
      <h1 className="text-[#012C3C] py-5 text-4xl text-center font-bold px-4 hidden md:block">
        FEEL FREE TO CONNECT WITH US!
      </h1>
    </div>
  );
}
