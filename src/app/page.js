"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Hero from "../components/hero/hero";
import AboutUs from "../components/About/About";
import Companies from "../components/companies/companies";
import Map from "../components/map/map";
import HashLoader from "react-spinners/HashLoader";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);
  return (
    <>
      {loading ? (
        <main className="flex w-[100vw] h-[100vh] items-center justify-center">
          <HashLoader color="#0093C9" loading={loading} size={150} />
        </main>
      ) : (
        <>
          <Hero />
          <div className="bg-black w-[100vw] h-[20rem] flex items-center justify-center">
            <h1 style={{ fontSize: "4rem" }} className="font-serif">
              Best Startup
            </h1>
          </div>
          <AboutUs />
          <Companies/>
          <Testimonials />
          <Map />
        </>
      )}
    </>
  );
}
