import React from "react";
import HeroText from "../components/HeroText";
import ParallaxBackgraound from "../components/parallaxBackgraound";
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut";
import { useMediaQuery } from "react-responsive";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import Loader1 from "../components/Loader1";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex item-start justify-center md:item-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackgraound />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 0, 3] }}>
          <Suspense fallback={<Loader1 />}>
            <Astronaut
              scale={isMobile && 0.23}
              position={isMobile && [0, -1.5, 0]}
            />
            <Float />
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 2, -state.mouse.y / 2, 3],
      0.5,
      delta
    );
  });

  return null; // important: hooks components must return JSX (or null), not the hook result
}

export default Hero;
