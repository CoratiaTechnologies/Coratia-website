import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/hero";
import React from "react";
import Image from "next/image";
import '../components/hero/herogif.gif';

export default function Home() {
  return(
    <>
    <Navbar />
    <Hero />
    </>
  );
};
