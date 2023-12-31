"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import Hamburger from "hamburger-react";

const navComponents = [
  { title: "HOME", id: 1, scroll: "/" },
  { title: "PRODUCTS", id: 2, scroll: "/product/1" },
  { title: "GALLERY", id: 3, scroll: "/gallery" },
  { title: "CONTACT US", id: 4, scroll: "/#contact" },
];

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <>
      <nav className="md:flex justify-between items-center z-30 fixed w-full h-[60px] bg-black top-0">
        <div className="flex justify-between items-center">
          <a href="/">
            <Image
              src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702608372/logo_q5m0jp.png"
              alt="coratia"
              height={"200"}
              width={"200"}
              className="cursor-pointer ml-4 sm:ml-12"
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
            navbar ? "absolute" : "hidden"
          } h-[100vh] w-full top-[60px] bg-black md:h-auto md:w-auto md:flex md:items-center`}
        >
          {navComponents.map((navComponent, index) =>
            index === 1 ? (
              <li key={navComponent.id}>
                <div className="w-full my-14 md:my-0 text-center">
                  <button
                    onClick={() => {
                      setDropdownVisible((prevVisible) => !prevVisible);
                    }}
                    className="text-white text-sm font-normal md:py-6 md:px-5 font-nidus hover:text-cyan-600 focus:outline-none"
                  >
                    {navComponent.title}
                  </button>

                  {dropdownVisible && (
                    <div className="md:absolute sm:block mt-2 bg-black p-2 shadow-md">
                      <Link
                        href="/product/1"
                        className="block px-4 py-2 text-white hover:text-cyan-600"
                      >
                        Product 1
                      </Link>
                      <Link
                        href="/product/2"
                        className="block px-4 py-2 text-white hover:text-cyan-600"
                      >
                        Product 2
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            ) : index === navComponents.length - 1 ? (
              <li key={navComponent.id}>
                <div className="w-full my-14 md:my-0 text-center">
                  <Link
                    onClick={() => {
                      if (navbar) setNavbar((navbar) => !navbar);
                    }}
                    href={navComponent.scroll}
                    className="text-white bg-[#408E91] text-sm font-normal md:py-6   md:px-5 font-nidus hover:text-black"
                  >
                    CONTACT US
                  </Link>
                </div>
              </li>
            ) : (
              <li key={navComponent.id}>
                <div className="w-full my-14 md:my-0 text-center">
                  <Link
                    onClick={() => {
                      if (navbar) setNavbar((navbar) => !navbar);
                    }}
                    href={navComponent.scroll}
                    className="text-white text-sm font-normal md:py-6 md:px-5 font-nidus hover:text-cyan-600"
                  >
                    {navComponent.title}
                  </Link>
                </div>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
