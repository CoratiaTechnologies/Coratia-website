import React from "react";
import { Heading } from "../Typography";

const achievements = [
  {
    id: 1,
    text: "Achievement 1",
    picture: "https://wallpaperaccess.com/full/2637581.jpg",
  },
  {
    id: 2,
    text: "Achievement 2",
    picture: "https://wallpaperaccess.com/full/2637581.jpg",
  },
  {
    id: 3,
    text: "Achievement 3",
    picture: "https://wallpaperaccess.com/full/2637581.jpg",
  },
  {
    id: 4,
    text: "Achievement 4",
    picture: "https://wallpaperaccess.com/full/2637581.jpg",
  },
  {
    id: 5,
    text: "Achievement 5",
    picture: "https://wallpaperaccess.com/full/2637581.jpg",
  },
  {
    id: 6,
    text: "Achievement 6",
    picture: "https://wallpaperaccess.com/full/2637581.jpg",
  },
  {
    id: 7,
    text: "Achievement 7",
    picture: "https://wallpaperaccess.com/full/2637581.jpg",
  },
];

export default function Achievements() {
  return (
    <>
      <div className="bg-white flex items-center justify-center">
        <Heading className="py-10">Achievements</Heading>
      </div>
      <div className="w-full px-5 md:px-10 bg-white">
        <div className="flex flex-wrap w-full gap-x-1 gap-y-5 md:gap-y-10 md:px-20 justify-between">
          {achievements.map((item) => (
            <div
              key={item.id}
              className=" border-2 shadow-xl md:w-[320px] md:h-[240px] w-[160px] h-[120px]"
            >
              <img
                src={item.picture}
                className="md:h-[180px] h-[90px] w-full rounded-sm object-cover"
              />
              <p className="text-center text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
