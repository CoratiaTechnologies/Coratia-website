import React from "react";
import "./globals.css";
import Hero from "../components/hero/hero";
import AboutUs from "../components/About/About";
import Map from "../components/map/map";
import Testimonials from "../components/Testimonials/Testimonials";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Testimonials />
      <Map />
    </>
  );
}
