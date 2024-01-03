import React from "react";
import { socials } from "../../../config/content/Socials";
import { mapcontent } from "../../../config/content/Map";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(28,27,27)] text-white w-full">
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 mx-4 grid grid-cols-1 md:grid-cols-3 gap-20 ">
          <div className="flex flex-col items-center md:items-start">
            <img
              alt="Company Logo"
              className="h-10 object-cover"
              height="200"
              src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702608372/logo_q5m0jp.png"
              width="280"
            />
            <p className="mt-4 md:pr-6 text-base text-center">
              We create possibilities for the connected world. Be Bold.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-medium text-[rgb(0,157,201)]">VISIT</h3>
            <p className="mt-2 text-base text-center">{mapcontent.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium text-[rgb(0,157,201)]">
                COMPANY
              </h3>
              <ul className="mt-2 space-y-2 text-white">
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
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium text-[rgb(0,157,201)]">
                SOCIAL
              </h3>
              <ul className="mt-2 space-y-2 text-white">
                <li>
                  <a
                    className="sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href={socials.twitter}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href={socials.facebook}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href={socials.youtube}
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    className="sm:text-base text-sm hover:text-gray-400 transition"
                    target={"_blank"}
                    href={socials.linkedin}
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center justify-between">
          <p className="text-sm px-4">© 2022 Coratia Technologies</p>
          <div className="mt-4 md:mt-0 md:flex md:mr-10 md:space-x-6">
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
