"use client";
import React from "react";
import "./Testimonial.css";
import styled from "styled-components";

const Heading = styled.div`
  font-family: Poppins;
  font-size: 5.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, #749cac 0%, rgba(0, 0, 0, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export default function Testimonials() {
  return (
    <div className="bg-white flex items-center justify-center">
      <Heading>TESTIMONIALS</Heading>
    </div>
  );
}
