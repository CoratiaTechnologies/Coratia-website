import React from "react";
import Link from "next/link";
import { herocontent } from "../../../config/content/Hero";
import HashLoader from "react-spinners/HashLoader";
import "./Hero.css";

export function HeroText() {
  return (
    <h1
      style={{ fontSize: "13vw", mixBlendMode: "multiply" }}
      className="  bg-black text-white md:mt-10 w-[100%] text-center font-extrabold"
    >
      {herocontent.text}
    </h1>
  );
}

export function Loader({ loading }) {
  return (
    <main className="flex w-[100vw] h-[100vh] items-center justify-center">
      <HashLoader color="#0093C9" loading={loading} size={70} />
    </main>
  );
}

export default function Hero() {
  return (
    <>
      <div className="hero-section w-full max-w-full overflow-hidden">
        <img
          src={herocontent.video}
          alt=""
          className="hero-image fixed object-cover w-full max-w-full h-[550px] -z-20 overflow-hidden"
        />

        <div className="hero-child absolute w-full top-[220px] sm:top-[240px] z-0">
          <div className="hero-wrapper relative w-[700px] mx-auto">
            <p
              className="drop-1 hero-text mx-auto text-center p-3 
                font-bold text-white text-6xl"
            >
              Revolutionizing Underwater Inspection with Robots
            </p>

            <div className="drop-2">
              <Link
                href={herocontent.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-[225px] sm:w-[260px] h-[52px] p-3 mx-auto text-center
               text-white btn text-base sm:mt-7 rounded-full font-semibold bg-slate-900
                transition hover:bg-slate-800"
              >
                <img
                  src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702630222/play_kmg3ur.png"
                  alt=""
                  className="mr-2.5 w-[28px] h-[28px]"
                />
                Enhance Your Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
