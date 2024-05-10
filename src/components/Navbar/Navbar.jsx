"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import Hamburger from "hamburger-react";

const navComponents = [
  { title: "HOME", id: 1, scroll: "/" },
  {
    title: "PRODUCTS",
    id: 2,
    list: [
      { id: 1, title: "ROV Jaladuta" },
      { id: 2, title: "ROV Jalasimha" },
    ],
  },
  { title: "SERVICES", id: 3, scroll: "/services" },
  { title: "GALLERY", id: 4, scroll: "/gallery" },
  { title: "CONTACT US", id: 5, scroll: "/#contact" },
];

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // State to track the active link

  const handleLinkClick = (scroll) => {
    setActiveLink(scroll);
    setNavbar(false);
  };
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
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702608372/logo_q5m0jp.png"
              alt="coratia"
              height={"300"}
              width={"300"}
              loading="eager"
              className="cursor-pointer h-12 sm:h-14 w-auto ml-4 sm:ml-12 md:mt-0 mt-3"
              style={{ filter: "contrast(1.5)" }}
            />
          </Link>
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
              <li
                key={navComponent.id}
                onMouseOver={() => {
                  setDropdownVisible(true);
                }}
                onMouseOut={() => {
                  setDropdownVisible(false);
                }}
              >
                <div className="w-full my-14 md:my-0 text-center md:text-left">
                  <button
                    className={`text-white text-sm font-normal md:py-6 md:px-5 font-nidus hover:text-cyan-600 transition focus:outline-none ${
                      activeLink === navComponent.scroll ? "!text-cyan-600" : ""
                    }`}
                  >
                    {navComponent.title}
                  </button>

                  {dropdownVisible && (
                    <div className="dropdown md:absolute sm:block bg-black p-2 shadow-md">
                      {navComponent.list.map((product, index) => (
                        <Link
                          key={index}
                          onClick={() => {
                            if (navbar) setNavbar((navbar) => !navbar);
                            handleLinkClick(navComponent.scroll);
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
                  <Link
                    onClick={() => {
                      if (navbar) setNavbar((navbar) => !navbar);
                    }}
                    href={navComponent.scroll}
                    className={`text-white bg-[#1ca9c9] text-sm font-normal md:py-6 py-2 px-5 font-nidus hover:text-black transition ${
                      activeLink === navComponent.scroll ? "!text-white" : ""
                    }`}
                  >
                    {navComponent.title}
                  </Link>
                </div>
              </li>
            ) : (
              <li key={navComponent.id}>
                <div className="w-full my-14 md:my-0 text-center">
                  <Link
                    onClick={() => {
                      if (navbar) setNavbar((navbar) => !navbar);
                      handleLinkClick(navComponent.scroll);
                    }}
                    href={navComponent.scroll}
                    className={`text-white text-sm font-normal md:py-6 md:px-5 font-nidus hover:text-cyan-600 ${
                      activeLink === navComponent.scroll ? "!text-cyan-600" : ""
                    }`}
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
