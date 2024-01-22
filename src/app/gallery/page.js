"use client";
import React from "react";
import { gallerycontent } from "../../../config/content/Gallery";
import { Heading } from "../../components/Typography";
import "./[albumID]/gallery.css";
import Image from "next/image";
import Link from "next/link";
import { Provider, LikeButton } from "@lyket/react";

function page() {
  return (
    <div className="w-full px-5 bg-white mt-[68px] pt-12 pb-64">
      <Heading className="text-center pb-5">Gallery</Heading>
      <div className="flex flex-wrap w-full justify-evenly md:gap-x-8 lg:gap-x-16 gap-y-5 md:gap-y-10">
        {gallerycontent.map((item, index) => (
          <Link
            href={`/gallery/${index}`}
            key={index}
            className="rounded-xl overflow-hidden hover:scale-105 border-2 shadow-xl transition"
          >
            <div
              key={index}
              className="card w-[270px] cursor-pointer transition"
            >
              <div className="">
                <Image
                  src={item.images[0]}
                  alt=""
                  width={540}
                  height={280}
                  className="lg:h-[230px] h-[170px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full h-[45px] flex items-center justify-center">
                <p className="text-center text-sm lg:text-base text-black font-bold">
                  {item.title}
                </p>
              </div>
              <div className="w-full h-[152px] lg:h-[145px] flex justify-center">
                <p className="text-xs text-black text-justify px-4">
                  {item.desc}
                </p>
              </div>
              <div className="w-full h-[45px] flex items-center justify-center">
                <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                  <LikeButton
                    namespace="my-blog-post"
                    id="how-to-beat-me-at-chess"
                    component={LikeButton.templates.Twitter}
                  />
                </Provider>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
