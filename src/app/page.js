"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Hero from "../components/hero/hero";
import AboutUs from "../components/About/About";
import Map from "../components/map/map";
import HashLoader from "react-spinners/HashLoader";

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Home() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  });
  return (
    <>
      {loading ? (
        <main className="flex w-[100vw] h-[100vh] items-center justify-center">
          <HashLoader color="#0093C9" loading={loading} size={150} />
        </main>
      ) : (
        <>
          <Hero />
          <AboutUs />
          <Map />
        </>
      )}
    </>
  );
}
