import React from "react";
import ContactUsForm from "../../components/ContactUs/form";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full px-12 bg-white mt-[68px] pt-24 pb-32 text-black flex justify-around">
      <ContactUsForm />
      <div className="">
        <h1 className="text-[#012C3C] py-5 text-4xl text-center font-bold px-4 hidden md:block">
          FEEL FREE TO CONNECT WITH US!
        </h1>
        <Image
          src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1711757833/Frame_72_dba1vm.png"
          alt=""
          width={150}
          height={150}
          loading="eager"
          className="mx-auto w-[40vw] h-[50vh] hidden md:block"
        />
      </div>
    </div>
  );
}
