"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../Model";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </>
  );
};

export const Demo = () => {
  <Canvas>
    <OrbitControls />
    <Scene></Scene>
  </Canvas>;
};

export default Demo;
