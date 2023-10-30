import React, { Suspense, us } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Car = ({ url }) => {
  const { scene } = useGLTF(url);

  return (
    <>
      <primitive object={scene} />
    </>
  );
};
const Carp = ({ url }) => {
  if (!url) {
    return null;
  }
  return (
    <Suspense>
      <hemisphereLight intensity={0.15} groundColor="#00ffff" />
      <pointLight intensity={1} />
      <OrbitControls />
      <Car url={url} />
      <Preload all />
    </Suspense>
  );
};
export const Carport = ({ url }) => {
  return (
    <Canvas>
      <Carp url={url} />
    </Canvas>
  );
};
