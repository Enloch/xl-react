import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stats,
} from "@react-three/drei";
import Modelo from "./modelo";

const RotadorWebGl = () => {
  return (
    <div className='test' style={{ width: "100%", minHeight: "100vh" }}>
      <div style={{ width: "75%", height: "75%" }}>
        <Canvas shadows>
          <Suspense fallback={null}>
            <OrbitControls
              target={[0, 0.05, 0]}
              maxPolarAngle={1.45}
              minDistance={1}
              maxDistance={2}
            />
            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 1]} />
            <Modelo />
            <Environment preset='apartment' blur={100} background />
          </Suspense>
          <Stats />
        </Canvas>
      </div>
    </div>
  );
};

export default RotadorWebGl;
