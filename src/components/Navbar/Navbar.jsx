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
        animation: dropdown ease 0.25s backwards;
      }
      
    `}</style>
    <nav className="md:flex justify-between items-center pl-[20px] md:pl-[40px] z-30 fixed w-full md:px-0 h-[60px] bg-black top-0">
        <div className="flex justify-between items-center h-full">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702608372/logo_q5m0jp.png"
              alt="coratia"
              height={"1000"}
              width={"1000"}
              loading="eager"
              className="cursor-pointer nav-logo w-[150px] md:w-[220px]"
              style={{ filter: "contrast(1.25)" }}
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

        {/* ~~~~~ Nav Link bar for large screens starts ~~~~~ */}
        <ul className={`hidden md:relative h-[100vh] w-full bg-black md:h-[60px] md:w-auto md:flex md:items-center`}>
          {navComponents.map((navComponent, index) =>
            index === 1 ? (
              <li
                key={navComponent.id}
                onMouseOver={() => { setDropdownVisible(true); }}
                onMouseOut={() => { setDropdownVisible(false); }}>
                <div className="w-full my-14 md:my-0 md:h-[60px] text-center md:text-left">
                  <button
                    className={`text-white nav-txt-design nav-hover font-normal md:h-full md:pt-[1px] md:px-5 md:flex md:items-center md:justify-center font-nidus transition focus:outline-none ${activeLink === navComponent.scroll ? "!text-[#10aedf]" : ""
                      }`}>
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
                          className="block nav-txt-design nav-hover px-4 py-2 text-white transition"
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

                {/* ~~~~~ Contact Button starts ~~~~~ */}
                <div className="w-full my-14 md:my-0 text-center">
                  <Link
                    onClick={() => {
                      if (navbar) setNavbar((navbar) => !navbar);
                    }}
                    href={navComponent.scroll}
                    className={`nav-contact-btn text-sm md:h-[60px] font-normal md:flex md:items-center md:justify-center py-2 px-5 font-nidus transition ${activeLink === navComponent.scroll ? "!text-white" : ""
                      }`}
                  >
                    <span className="opacity-0">
                      {navComponent.title}
                    </span>
                    <span className="nav-contact-inner">
                      {navComponent.title}
                    </span>
                  </Link>
                </div>
                {/* ~~~~~ Contact Button ends ~~~~~ */}
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
                    className={`text-white nav-txt-design nav-hover md:h-[60px] md:flex md:items-center md:justify-center md:px-5 font-nidus ${activeLink === navComponent.scroll ? "!text-[#10aedf]" : ""
                      }`}
                  >
                    {navComponent.title}
                  </Link>
                </div>
              </li>
            )
          )}
        </ul>
        {/* ~~~~~ Nav Link bar for large screens ends ~~~~~ */}
      </nav>

      {/* ~~~~~ Nav Link bar for small screens starts ~~~~~ */}
      <div className={`bg-black md:hidden fixed ${navbar ? 'nav-sm-show' : 'nav-sm-hide'} left-0 nav-sm-control flex items-center flex-col justify-center h-screen w-full z-20`}>
        {navComponents.map((navComp, ind) =>
          <>
            {
              navComp.list
                ? <>
                  <div
                    key={ind}
                    onMouseOver={() => { setDropdownVisible(true); }}
                    onMouseOut={() => { setDropdownVisible(false); }}>
                    <div className="w-full md:my-0 relative text-center md:text-left">
                      <button
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                        className={`text-white nav-txt-design nav-hover font-normal h-[60px] w-[180px] font-nidus transition focus:outline-none ${activeLink === navComp.scroll ? "!text-[#10aedf]" : ""
                          }`}>
                        {navComp.title}
                      </button>

                      {dropdownVisible && (
                        <div className="dropdown drop-bor absolute z-30 w-[180px] sm:block bg-black p-2 shadow-md">
                          {navComp.list.map((product, index) => (
                            <Link
                              key={index}
                              onClick={() => {
                                if (navbar) setNavbar((navbar) => !navbar);
                                handleLinkClick(navComp.scroll);
                              }}
                              href={`/product/${product.id}`}
                              className="block nav-txt-design nav-hover px-4 py-2 text-white transition"
                            >
                              {product.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </>
                : ind === navComponents.length - 1 ?
              (<div className="w-auto my-0 text-center" key={navComp.id}>
                  <Link
                    onClick={() => {
                      if (navbar) setNavbar((navbar) => !navbar);
                    }}
                    href={navComp.scroll}
                    className={`nav-contact-btn my-0 text-sm md:h-[60px] font-normal flex items-center justify-center h-[60px] w-[180px] font-nidus transition ${activeLink === navComp.scroll ? "!text-white" : ""
                      }`}
                  >
                    <span className="opacity-0">
                      {navComp.title}
                    </span>
                    <span className="nav-contact-inner left-0">
                      {navComp.title}
                    </span>
                  </Link>
                </div>) : (<Link
                  onClick={() => {
                      if (navbar) setNavbar((navbar) => !navbar);
                      handleLinkClick(navComp.scroll);
                    }}
                  className={`h-[60px] w-[180px] flex items-center justify-center nav-txt-design nav-hover ${activeLink === navComp.scroll ? "!text-[#10aedf]" : ""}`}
                  href={navComp.scroll}
                  key={ind}>
                  {navComp.title}
                </Link>)
            }
          </>
        )}
      </div>
      {/* ~~~~~ Nav Link bar for small screens ends ~~~~~ */}
    </>
  );
}

export default Navbar;
