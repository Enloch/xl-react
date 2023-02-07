/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Regruesada40(props) {
  const { nodes, materials } = useGLTF(
    "/modelos_rotador/XL Bath Encimera Regruesada 40.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.XL_Bath_Encimera_regruesada_40.geometry}
        material={materials["Material 01"]}
      />
    </group>
  );
}

useGLTF.preload("/XL Bath Encimera Regruesada 40.gltf");
