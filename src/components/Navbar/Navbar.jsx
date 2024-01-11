"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import Hamburger from "hamburger-react";

const navComponents = [
  { title: "HOME", id: 1, scroll: "/" },
  {
    title: "SERVICES",
    id: 2,
    list: [
      { id: 1, title: "ROV Jaladuta" },
      { id: 2, title: "ROV Jalasimha" },
    ],
  },
  { title: "GALLERY", id: 3, scroll: "/gallery" },
  { title: "BOOK NOW", id: 4, scroll: "/#contact" },
];

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <>
      <style>{`
      @keyframes dropdown {
        from {
          opacity: 0;
          transform: translateY(-50px);
        }
        to {
          opacity: 1;
          transform: translateY(0px);
        }
      }
      .dropdown {
        animation: dropdown ease 300ms backwards;
      }
      
    `}</style>
      <nav className="md:flex justify-between items-center z-30 fixed w-full h-[68px] bg-black top-0">
        <div className="flex justify-between items-center">
          <a href="/">
            <Image
              src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702608372/logo_q5m0jp.png"
              alt="coratia"
              height={"200"}
              width={"230"}
              loading="eager"
              className="cursor-pointer ml-4 sm:ml-12 md:mt-0 mt-3"
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
                    onFocus={() => {
                      setDropdownVisible(true);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        setDropdownVisible(false);
                      }, 200);
                    }}
                    className="text-white text-sm font-normal md:py-6 md:px-5 font-nidus hover:text-cyan-600 focus:outline-none"
                  >
                    {navComponent.title}
                  </button>

                  {dropdownVisible && (
                    <div className="dropdown md:absolute sm:block mt-2 bg-black p-2 shadow-md">
                      {navComponent.list.map((product) => (
                        <Link
                          onClick={() => {
                            if (navbar) setNavbar((navbar) => !navbar);
                          }}
                          href={`/product/${product.id}`}
                          className="block px-4 py-2 text-white hover:text-cyan-600 transition"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ) : index === navComponents.length - 1 ? (
              <li key={navComponent.id}>
                <div className="w-full my-14 md:my-0 text-center">
                  <a
                    onClick={() => {
                      if (navbar) setNavbar((navbar) => !navbar);
                    }}
                    href={navComponent.scroll}
                    className="text-white bg-[#1ca9c9] text-sm font-normal md:py-6 py-2 px-5 font-nidus hover:text-black"
                  >
                    {navComponent.title}
                  </a>
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
