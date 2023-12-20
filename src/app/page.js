"use client";
import React from "react";
import "./globals.css";
import Hero from "../components/hero/hero";
import AboutUs from "../components/About/About";
import Companies from "../components/companies/companies";
import Map from "../components/map/map";

export default function Home() {
  return(
    <>
    <Hero />
    <AboutUs />
    <Companies/>
    <Map />
    </>
  )
}
