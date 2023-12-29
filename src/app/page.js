"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Hero, { HeroText, Loader } from "../components/hero/hero";
import AboutUs from "../components/About/About";
import Companies from "../components/companies/companies";
import Map from "../components/map/map";
import Testimonials from "../components/Testimonials/Testimonials";
import Achievements from "../components/Achievements/Achievement";

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
        <Loader loading={loading} />
      ) : (
        <>
          <Hero />
          <HeroText />
          <AboutUs />
          <Companies />
          <Achievements />
          <Testimonials />
          <Map />
        </>
      )}
    </>
  );
}
