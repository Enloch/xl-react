import { Environment, Stage, useTexture } from "@react-three/drei";
import { Regruesada40 } from "./modelo";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const Scene = ({ currentTexture }) => {
  // const [colorMap] = useTexture(currentTexture);

  return (
    <Stage intensity={1} contactShadow>
      <Environment preset='studio' blur={100} background={false} />
      <Regruesada40 />
    </Stage>
  );
};

export default Scene;
