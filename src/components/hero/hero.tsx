import React from "react";
import Image from "next/image";

//const herogif = "https://static.videezy.com/system/resources/previews/000/043/295/original/01__2811_29.mp4";
import herogif from "./herogif.gif";

export default function Hero(){

    return(
        <>
        <div className="w-[100vw] max-h-[60vh] text-white  overflow-hidden">
        <Image src={herogif} alt="" className="w-full h-auto max-h-[66vh] object-fill -z-10" />
        

        <div className="relative bottom-[30vh] mx-auto max-w-[60vh] text-white">
          <h1 className="mx-auto max-w-[70vw] text-8xl text-center bold">CORATIA</h1>
          <button className="text-center mx-auto h-10 w-50 my-5
            border px-3 py-2 rounded-full max-w-[50vw] flex">
            Learn more &#x2192;
          </button>
        </div>
        </div>

        <h1 className="mx-auto max-w-[90vw] text-7xl text-center mt-5 text-blue-950">Revolutionizing Underwater Inspection</h1>

        </>
    );
};
//<video className="w-full h-auto max-h-[66vh] opacity-50 object-fill -z-10" autoPlay loop muted>
  //        <source src={sourc} type="video/mp4" />
    //      Your browser does not support videos
      //  </video>