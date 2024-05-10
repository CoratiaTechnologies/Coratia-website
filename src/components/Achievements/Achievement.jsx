import React from "react";
import { Heading } from "../Typography";
import Image from "next/image";
import { achievementcontent } from "../../../config/content/Achievements";

export default function Achievements() {
  return (
    <>
      <div className="pt-14 bg-gradient-to-b from-[#d6d6d6] to-white"></div>
      <div className="pb-14 bg-white">
        <style>{`
      .hover-text{
        opacity: 0;
        height: 0px;
        transition: opacity 1s ease, height 1s ease;
      }
      .card:hover .hover-text{
        opacity: 1;
        height: 220px;
      }
      @media (min-width: 1024px) {
        .card:hover .hover-text{
          height: 280px;
        }
      }
      
      `}</style>

        <div className="flex items-center justify-center pt-6">
          <Heading className="py-5 md:py-10">Achievements</Heading>
        </div>
        <div className="w-full px-5 bg-white">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 w-max mx-auto md:gap-x-8 lg:gap-x-16 gap-y-10 md:gap-y-10">
            {achievementcontent.map((item) => (
              <div
                key={item.id}
                className="card rounded-xl border-2 shadow-xl lg:w-[400px] lg:h-[300px] w-[300px] h-[220px] overflow-hidden"
              >
                <div>
                  {/* <div
                  className="text-center text-sm lg:text-base text-black items-center
                  flex hover-text relative z-30 w-full"
                  >
                  {item.desc}
                </div> */}
                  <Image
                    src={item.picture}
                    alt=""
                    width={540}
                    height={280}
                    className="lg:h-[230px] h-[170px] w-full object-cover"
                  />
                </div>
                <div className="w-full h-[50px] lg:h-[70px] flex items-center justify-center">
                  <p className="text-center text-sm lg:text-base text-black">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
