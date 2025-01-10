"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer, OrbitControls } from "@react-three/drei";
import { Mesh, TextureLoader } from "three";

function Dodecahedron() {
  const sphereRef = useRef<Mesh>(null);

  // Use useFrame to rotate the sphere every frame
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.002;
      sphereRef.current.rotation.y += 0.002;
      sphereRef.current.rotation.z += 0.002;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <dodecahedronGeometry />
      <meshStandardMaterial roughness={0.75} emissive="#404057" />
    </mesh>
  );
}

export default function Home() {
  return (
    <main className="relative flex h-full w-full flex-shrink-0 flex-col gap-6 pb-12">
      {/* About me */}
      <Canvas className="h-30 w-full" camera={{ position: [0, 0, 5], zoom: 6 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 4.6, 3.7]} intensity={25} />

        <Dodecahedron />

        <AsciiRenderer fgColor="white" bgColor="black" />

        {/* Camera controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
      <section className="flex w-full flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="font-sans text-5xl font-medium text-white md:text-7xl">
            Building next generation web experiences for humans
          </h1>
          <h2 className="font-serif text-2xl text-neutral-50">
            👋 Hi, Im Kyle. I&apos;m a design engineer who specializes in
            creating accessible, extensible and reusable design systems and
            experiences.
          </h2>
        </div>
        <div>
          <a
            href="mailto:conradwebdev@gmail.com"
            className="duration-400 flex w-full justify-center rounded-md bg-white px-12 py-4 font-sans text-xl font-bold text-neutral-950 shadow-xl transition-all ease-in-out md:w-fit"
          >
            Send me a message
          </a>
        </div>
      </section>
    </main>
  );
}
