import React from "react";
import { socials } from "../../../config/content/Socials";
import { mapcontent } from "../../../config/content/Map";
import Link from "next/link";
import Image from "next/image";

const companySection = [
  {
    id: "Contact",
    link: "/#contact",
  },
  {
    id: "Products",
    link: "/product/2",
  },
  {
    id: "Gallery",
    link: "/gallery",
  },
  {
    id: "Career",
    link: "/#contact",
  },
];

const socialSection = [
  {
    id: "Twitter",
    link: socials.twitter,
    logo: "https://res.cloudinary.com/dgjzygzgx/image/upload/v1705342346/x-social-media_y68x4g.webp",
  },
  {
    id: "Instagram",
    link: socials.instagram,
    logo: "https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/z4rfmtietyr4nloohdf7",
  },
  {
    id: "YouTube",
    link: socials.youtube,
    logo: "https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/vg7th3moh4iyemciitkh",
  },
  {
    id: "LinkedIn",
    link: socials.linkedin,
    logo: "https://res.cloudinary.com/dq9gdlbls/image/upload/f_auto,q_auto/elnncesqx6o7f2ev2hoe",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(28,27,27)] text-white w-full">
      <div className="pb-3 pt-1 px-4 sm:px-6 lg:px-8">
        <div className="mt-2 md:mt-6 mx-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 ">
          <div className="hidden md:flex flex-col items-center md:items-start">
            <Image
              alt="Company Logo"
              className="h-10 object-cover"
              height={200}
              src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702608372/logo_q5m0jp.png"
              width={280}
            />
            <div className="flex flex-wrap">
              <Image
                alt="Make In India"
                className=" mt-5 ml-5 object-fill"
                height={45}
                src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1705693133/make_in_india-removebg-preview_ulqcak.png"
                width={100}
              />
              <Image
                alt="Startup India"
                className=" mt-5 ml-5 object-fill"
                height={45}
                src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1713589723/Startup_India_gwl7m6.png"
                width={140}
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-medium text-[rgb(0,157,201)]">
              VISIT
            </h3>
            <p className="mt-2 text-sm leading-7 px-1 md:px-0 text-center md:text-left">
              {mapcontent.address.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div>
              Email:&nbsp;
              <a
                href="mailto:contact@coratia.com"
                className="underline hover:text-gray-400"
              >
                {mapcontent.email}
              </a>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg sm:text-xl font-medium text-[rgb(0,157,201)]">
                COMPANY
              </h3>
              <ul className="mt-1 grid grid-cols-4 md:block md:space-y-1 text-center md:text-left text-white">
                {companySection.map((item, index) => (
                  <li key={index} className="mx-3 md:mx-0">
                    <Link
                      className="text-sm hover:text-gray-400 transition"
                      href={item.link}
                    >
                      {item.id}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex md:flex-col items-center md:items-start">
              <h3 className="text-lg sm:text-xl mr-2 font-medium text-[rgb(0,157,201)]">
                SOCIAL
              </h3>
              <ul className="mt-2 space-y-0.5 md:space-y-2 text-white">
                {socialSection.map((item, index) => (
                  <li key={index}>
                    <a
                      className="flex items-center text-sm hover:opacity-70 transition"
                      target={"_blank"}
                      href={item.link}
                    >
                      <Image
                        width={32}
                        height={32}
                        alt={item.id}
                        src={item.logo}
                        loading="eager"
                        className="mr-2.5 h-5 w-5"
                      ></Image>
                      {item.id}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-4 w-full flex-col text-center">
          <h3 className="text-lg sm:text-xl font-medium text-[rgb(0,157,201)]">
            SOCIALS
          </h3>
          <div className="flex justify-center">
            {socialSection.map((item, index) => (
              <a key={index} href={item.link} target={"_blank"}>
                <Image
                  width={32}
                  height={32}
                  alt={item.id}
                  src={item.logo}
                  loading="eager"
                  className="m-2 h-7 w-7"
                ></Image>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-3 md:mt-4 border-t border-gray-200 pt-3 md:pt-4 md:flex md:items-center justify-between">
          <p className="text-sm text-center px-4">
            © 2024 Coratia Technologies
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:mr-10 md:space-x-6">
            <a
              className="text-sm hover:text-gray-400 transition px-4"
              href="/terms-of-use"
              target={"_blank"}
            >
              Terms of Use
            </a>
            <a
              className="text-sm hover:text-gray-400 transition px-4"
              href="/terms-of-use"
              target={"_blank"}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
