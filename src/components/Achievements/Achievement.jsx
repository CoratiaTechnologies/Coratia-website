import React from "react";
import { Heading } from "../Typography";
import { achievementcontent } from "../../../config/content/Achievements";

export default function Achievements() {
  return (
    <>
      <style>{`
      .card:hover .hover-text{
        display: flex;
        cursor: pointer;
      }
    `}</style>

      <div className="bg-white flex items-center justify-center">
        <Heading className="py-10">Achievements</Heading>
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
                hidden hover-text relative h-[240px] md:h-[340px] z-30 w-full"
                >
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
