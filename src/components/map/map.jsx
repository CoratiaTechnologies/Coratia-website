import React from "react";
const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.612310425271!2d84.90100261503333!3d22.25478378534724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201dd5fad8f227%3A0x933f1d1680089272!2sTechnology%20Innovation%20and%20Industry%20Relation%20Center%2C%20Northern%20Ave%2C%20National%20Institute%20of%20Technology%2C%20Sector%201%2C%20Rourkela%2C%20Odisha%20769008!5e0!3m2!1sen!2sin!4v1624822367801!5m2!1sen!2sin"
//const logo = "https://lh3.googleusercontent.com/V0Lu6YzAVaCVcjSJ_4Qb0mR_idw-GApETGbkodvDKTH-rpDvHuD6J84jshR_FvXdl5mJxqbIHVdebYCCbQMJNxIxRaIHYFSq6z7laA";

export default function Map(){
    return(
        <div className="bg-white text-black px-5 md:px-10 py-5">
            <div className="w-[100%] flex flex-wrap">
                <h1 className="text-4xl md:hidden block font-bold pb-4">Get in Touch</h1>
                <iframe
                src={map}
                height="400"
                allowfullscreen="true"
                loading="lazy"
                className="md:w-[60%] w-[100%] m-auto rounded-md"
                />
                
                <div className="mt-2 md:mt-0 mx-auto md:pl-20 md:w-[40%]">
                <h1 className="text-5xl hidden md:block font-bold pt-7">Get in Touch</h1>
                <p className="md:mt-5 mt-2 text-base md:text-lg md:w-[80%]">
                  Coratia Technologies Pvt. Ltd.
                  Foundation for Technology & Business
                  Incubation, NIT Rourkela, Odisha
                </p>
                </div>
            </div>
        </div>
    )
}