"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import Hamburger from "hamburger-react";
const navComponents = [
  { title: "HOME", id: 1, scroll: "#" },
  { title: "PRODUCT", id: 2, scroll: "#" },
  { title: "GALLERY", id: 3, scroll: "#" },
  { title: "CONTACT US", id: 4, scroll: "#" },
];

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="md:flex justify-between items-center z-30 fixed w-full h-[7vh] bg-black top-0">
        <div className="flex justify-between items-center">
          <a href="/">
            <Image
              src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702608372/logo_q5m0jp.png"
              alt="vriddhi"
              height={"200"}
              width={"200"}
              className="cursor-pointer px-2"
            />
          </a>
          <span className="md:hidden relative px-4">
            <Hamburger
              toggled={navbar}
              toggle={() => setNavbar((navbar) => !navbar)}
              duration={0.5}
            />
          </span>
        </div>
        <ul
          className={`${
            navbar ? "block" : "hidden"
          } h-[100vh] w-full absolute top-[7vh] bg-black md:h-auto md:w-auto md:flex md:items-center`}
        >
          {navComponents.map((navComponent) => (
            <li key={navComponent.id}>
              <div className="w-full my-14 md:my-0 text-center">
                <Link
                  onClick={() => setNavbar((navbar) => !navbar)}
                  href={navComponent.scroll}
                  className="text-white text-sm font-normal md:py-6   md:px-5 font-nidus hover:text-cyan-600"
                >
                  {navComponent.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
