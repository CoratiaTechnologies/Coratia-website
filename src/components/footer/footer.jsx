import React from "react";
import { socials } from "../../../config/content/Socials";
import { mapcontent } from "../../../config/content/Map";
import Link from "next/link";
import Image from "next/image";

const logos = {
  twitter:
    "https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/kfe6h6qn9qnbzd0os3wq",
  insta:
    "https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/z4rfmtietyr4nloohdf7",
  youtube:
    "https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/vg7th3moh4iyemciitkh",
  linkedin:
    "https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/elnncesqx6o7f2ev2hoe",
};

export default function Footer() {
  return (
    <footer className="bg-[rgb(28,27,27)] text-white w-full">
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mt-2 md:mt-8 mx-4 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-20 ">
          <div className="flex flex-col items-center md:items-start">
            <img
              alt="Company Logo"
              className="h-10 object-cover"
              height="200"
              src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702608372/logo_q5m0jp.png"
              width="280"
            />
            <p className="mt-4 px-5 md:px-0 md:pr-6 text-sm md:text-base md:text-left text-center">
              We create possibilities for the connected world. Be Bold.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-medium text-[rgb(0,157,201)]">
              VISIT
            </h3>
            <p className="mt-2 text-sm px-5 md:px-0 md:text-base text-center md:text-left">
              {mapcontent.address}
            </p>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg sm:text-xl font-medium text-[rgb(0,157,201)]">
                COMPANY
              </h3>
              <ul className="mt-1 space-y-0.5 md:space-y-2 text-center md:text-left text-white">
                <li>
                  <Link
                    className="sm:text-base text-sm hover:text-gray-400 transition"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    className="sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    className="sm:text-base text-sm hover:text-gray-400 transition"
                    href="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <a
                    className="sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href="#"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex md:flex-col items-center md:items-start">
              <h3 className="text-lg sm:text-xl mr-2 font-medium text-[rgb(0,157,201)]">
                SOCIAL
              </h3>
              <ul className="mt-2 space-y-0.5 md:space-y-2 text-white">
                <li>
                  <a
                    className="flex items-center sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href={socials.twitter}
                  >
                    <Image
                      loading="eager"
                      width={32}
                      height={32}
                      alt="twitter"
                      src={logos.twitter}
                      className="mr-1 h-5 w-5"
                    ></Image>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href={socials.instagram}
                  >
                    <Image
                      loading="eager"
                      width={32}
                      height={32}
                      alt="insta"
                      src={logos.insta}
                      className="mr-1 h-5 w-5"
                    ></Image>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href={socials.youtube}
                  >
                    <Image
                      loading="eager"
                      width={32}
                      height={32}
                      alt="youtube"
                      src={logos.youtube}
                      className="mr-1 h-5 w-5"
                    ></Image>
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href={socials.linkedin}
                  >
                    <Image
                      loading="eager"
                      width={32}
                      height={32}
                      alt="linkedin"
                      src={logos.linkedin}
                      className="mr-1 h-5 w-5"
                    ></Image>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-4 w-full flex-col text-center">
          <h3 className="text-lg sm:text-xl font-medium text-[rgb(0,157,201)]">
            SOCIALS
          </h3>
          <div className="flex justify-center">
            <a href={socials.twitter} target={"_blank"}>
              <Image
                loading="eager"
                width={32}
                height={32}
                alt="twitter"
                src={logos.twitter}
                className="m-2 h-7 w-7"
              ></Image>
            </a>
            <a href={socials.instagram} target={"_blank"}>
              <Image
                loading="eager"
                width={32}
                height={32}
                alt="instagram"
                src={logos.insta}
                className="m-2 h-7 w-7"
              ></Image>
            </a>
            <a href={socials.youtube} target={"_blank"}>
              <Image
                loading="eager"
                width={32}
                height={32}
                alt="youtube"
                src={logos.youtube}
                className="m-2 h-7 w-7"
              ></Image>
            </a>
            <a href={socials.linkedin} target={"_blank"}>
              <Image
                loading="eager"
                width={32}
                height={32}
                alt="linkedin"
                src={logos.linkedin}
                className="m-2 h-7 w-7"
              ></Image>
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-8 border-t border-gray-200 pt-4 md:pt-8 md:flex md:items-center justify-between">
          <p className="text-sm text-center px-4">
            © 2022 Coratia Technologies
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:mr-10 md:space-x-6">
            <a className="text-sm hover:text-gray-400 transition px-4" href="#">
              Terms of Use
            </a>
            <a className="text-sm hover:text-gray-400 transition px-4" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
