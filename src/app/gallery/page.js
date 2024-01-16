import React from "react";
import { gallerycontent } from "../../../config/content/Gallery";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="w-full px-5 bg-white mt-[68px] py-14">
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 w-max mx-auto md:gap-x-8 lg:gap-x-16 gap-y-5 md:gap-y-10">
        {gallerycontent.map((item, index) => (
          <Link href={`/gallery/${index}`} key={index}>
            <div
              key={index}
              className="card rounded-xl border-2 shadow-xl lg:w-[400px] lg:h-[280px] w-[300px] h-[220px] overflow-hidden cursor-pointer hover:scale-110 transition"
            >
              <div>
                <Image
                  src={item.images[0]}
                  alt=""
                  width={540}
                  height={280}
                  className="lg:h-[230px] h-[170px] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="w-full h-[45px] flex items-center justify-center">
                <p className="text-center text-sm lg:text-base text-black">
                  {item.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
