import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Menu } from "./menu";
import { Scene } from "./scene";
import * as THREE from "three";

const RotadorWebGl = () => {
  // const allure = "./texturas_rotador/Allure Anthracite_1.png";

  // const beren = "./texturas_rotador/Beren Light Grey_1.png";

  // const borghini = "./texturas_rotador/Blanc Borghini_1.png";

  // /** State */
  // const [currentTexture, setCurrentTexture] = useState(allure);

  // /**
  //  * @param {MouseEvent} event
  //  * @param {string} texture - The texture to load for the submarine
  //  */
  // const handleTextureChange = (event, texture) => {
  //   event.preventDefault();
  //   if (texture === "Allure") {
  //     setCurrentTexture(allure);
  //   } else if (texture === "Beren") {
  //     setCurrentTexture(beren);
  //   } else if (texture === "Borghini") {
  //     setCurrentTexture(borghini);
  //   }
  // };

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      {/* <Menu handleTextureChange={handleTextureChange} /> */}
      <Canvas>
        <color attach='background' args={["#838282"]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} enablePan={true} />
      </Canvas>
    </div>
  );
};

export default RotadorWebGl;
{
  /* // <OrbitControls
            //   target={[0, 0.05, 0]}
            //   maxPolarAngle={1.45}
            //   minDistance={1}
            //   maxDistance={2}
            // />
            // <PerspectiveCamera makeDefault fov={50} position={[0, 0, 1]} /> */
}
