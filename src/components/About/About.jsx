import React from "react";
import { aboutcontent } from "../../../config/content/AboutUs";
import { Heading } from "../Typography";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function AboutUs() {
  return (
    <div className="text-black md:py-24 bg-white">
      <Heading className="text-center block md:hidden py-7">About Us</Heading>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 px-4 md:px-10">
          {/* <iframe
            alt="Team working"
            className="object-cover w-full h-full rounded-md"
            height="500"
            src={aboutcontent.video}
            loading="lazy"
            style={{
              aspectRatio: "900/500",
              objectFit: "cover",
            }}
            width="913"
          /> */}
          <div className="rounded-xl overflow-hidden">
            <LiteYouTubeEmbed
              id="5R2wsk9Y10w"
              title="Why do you need us ?"
              poster="maxresdefault"
              thumbnail="thumbnail.gif"
              webp
              wrapperClass="yt-lite rounded"
              style={{
                aspectRatio: "900/500",
                objectFit: "cover",
                height: "500",
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12 md:pt-6">
          <Heading className="text-xl hidden md:block mb-6">About Us</Heading>
          <p className="text-base md:text-lg text-justify">
            {aboutcontent.content}
          </p>
        </div>
      </div>
    </div>
  );
}
