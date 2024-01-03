import React from "react";
import { Heading } from "../Typography";
import { achievementcontent } from "../../../config/content/Achievements";

export default function Achievements() {
  return (
    <>
    <style>{`
      .hover-text{
        opacity: 0;
        height: 0px;
        transition: opacity 1s ease, height 1s ease;
      }
      .card:hover .hover-text{
        opacity: 1;
        height: 240px;
      }
      @media (min-width: 768px) {
        .card:hover .hover-text{
            height: 340px;
        }
    }
      
    `}</style>

      <div className="bg-white flex items-center justify-center md:pt-7">
        <Heading className="py-14">Achievements</Heading>
      </div>
      <div className="w-full px-5 md:px-10 bg-white">
        <div className="flex flex-wrap w-full gap-x-1 gap-y-5 md:gap-y-10">
          {achievementcontent.map((item) => (
            <div
              key={item.id}
              className="card border-2 mx-auto shadow-xl md:w-[540px] md:h-[340px] w-[300px] h-[240px] overflow-hidden"
            >
              <div>
              <div 
                className="text-center text-sm md:text-base text-black items-center
                flex hover-text relative md:h-[340px] z-30 w-full">
                {item.desc}
              </div>
              <img
                src={item.picture}
                className="md:h-[280px] h-[170px] w-full rounded-sm object-cover"
              />
              </div>
              <p className="text-center text-sm md:text-base text-black">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
