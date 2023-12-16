import React from "react";
const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.612310425271!2d84.90100261503333!3d22.25478378534724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201dd5fad8f227%3A0x933f1d1680089272!2sTechnology%20Innovation%20and%20Industry%20Relation%20Center%2C%20Northern%20Ave%2C%20National%20Institute%20of%20Technology%2C%20Sector%201%2C%20Rourkela%2C%20Odisha%20769008!5e0!3m2!1sen!2sin!4v1624822367801!5m2!1sen!2sin"
const logo = "https://lh3.googleusercontent.com/V0Lu6YzAVaCVcjSJ_4Qb0mR_idw-GApETGbkodvDKTH-rpDvHuD6J84jshR_FvXdl5mJxqbIHVdebYCCbQMJNxIxRaIHYFSq6z7laA";

export default function Map(){
    return(
        <div className="bg-white text-black my-5">
            <h1 className="text-4xl md:text-6xl font-semibold pt-5 ml-10">Get in Touch</h1>

            <div className="h-[540px] w-[100%] flex items-center justify-center">
            <iframe
            src={map}
            width="92%"
            height="500"
            allowfullscreen="true"
            loading="lazy"
            className="m-auto rounded-md"
            />
            </div>

            <div className="w-[95%] mx-auto">
            <div className="flex md:w-[95%] flex-wrap items-center">
                <img
                src={logo}
                height={75}
                width={75}
                />
                <h1 className="text-3xl md:text-4xl font-bold">GOOGLE MAPS</h1>
                <p className="px-5 mt-5 md:mt-0 sm:w-[60%] md:w-[40%]">
                  Coratia Technologies Pvt. Ltd.
                  Foundation for Technology & Business
                  Incubation, NIT Rourkela, Odisha
                </p>
            </div>
            </div>
        </div>
    )
}