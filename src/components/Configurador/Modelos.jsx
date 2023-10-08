/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useTexture } from "@react-three/drei";
import useModeloStore from "./modeloStore";
export function SombrasAmbiente(props) {
  const { nodes } = useGLTF("/modelos/FondoSombras.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plano.geometry}>
        <shadowMaterial attach='material' transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export function ModeloKirNoExt(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  // const AcabadoSobre = useTexture(materialSobre.map);
  const { nodes } = useGLTF("/modelos/KIRFINAL.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Bisel'
        castShadow
        receiveShadow
        geometry={nodes.Bisel.geometry}
        material={nodes.Bisel.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        name='Patas'
        castShadow
        receiveShadow
        geometry={nodes.Patas.geometry}
        material={nodes.Patas.material}
      >
        <meshPhysicalMaterial
          map={AcabadoPatas}
          metalness={materialPatas.metalness}
          roughness={materialPatas.roughness}
          specularIntensity={materialPatas.specularIntensity}
          reflectivity={materialPatas.reflectivity}
        />
      </mesh>
      <mesh
        name='Sobre'
        castShadow
        receiveShadow
        geometry={nodes.Sobre.geometry}
        // material={nodes.Sobre.material}
      >
        <meshPhysicalMaterial
          map={AcabadoSobre}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh
        name='Bastidor'
        castShadow
        receiveShadow
        geometry={nodes.Soporte.geometry}
        material={nodes.Soporte.material}
      >
        <meshPhysicalMaterial
          map={AcabadoBastidor}
          metalness={materialBastidor.metalness}
          roughness={materialBastidor.roughness}
          specularIntensity={materialBastidor.specularIntensity}
          reflectivity={materialBastidor.reflectivity}
        />
      </mesh>
      <mesh
        name='Tacos'
        castShadow
        receiveShadow
        geometry={nodes.Tacos.geometry}
        material={nodes.Tacos.material}
      />
    </group>
  );
}

export function ModeloKirExt(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes, materials } = useGLTF("/modelos/KIRFINALEXT.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BISEL.geometry}
        material={nodes.BISEL.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BASTIDOR.geometry}
        material={nodes.BASTIDOR.material}
      >
        <meshPhysicalMaterial
          map={AcabadoBastidor}
          metalness={materialBastidor.metalness}
          roughness={materialBastidor.roughness}
          specularIntensity={materialBastidor.specularIntensity}
          reflectivity={materialBastidor.reflectivity}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PATAS.geometry}
        material={nodes.PATAS.material}
      >
        <meshPhysicalMaterial
          map={AcabadoPatas}
          metalness={materialPatas.metalness}
          roughness={materialPatas.roughness}
          specularIntensity={materialPatas.specularIntensity}
          reflectivity={materialPatas.reflectivity}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SOBRE_EXTENSIBLE.geometry}
        material={nodes.SOBRE_EXTENSIBLE.material}
      >
        <meshPhysicalMaterial
          map={AcabadoSobre}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PERFILERÍA.geometry}
        material={materials.Metal}
      >
        <meshPhysicalMaterial
          color={"#8a8a8a"}
          metalness={1}
          roughness={0.3}
          specularIntensity={1}
          reflectivity={0.5}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TACOS.geometry}
        material={nodes.TACOS.material}
      />
    </group>
  );
}

export function Connor(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/CONNOR.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONNOR_180X90_PATAS.geometry}
        material={nodes.CONNOR_180X90_PATAS.material}
      >
        <meshPhysicalMaterial
          map={AcabadoPatas}
          metalness={materialPatas.metalness}
          roughness={materialPatas.roughness}
          specularIntensity={materialPatas.specularIntensity}
          reflectivity={materialPatas.reflectivity}
        />
      </mesh>
      {encimeraBarril && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CONNOR_180X90_SOBRE_BARRIL.geometry}
            material={nodes.CONNOR_180X90_SOBRE_BARRIL.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CONNOR_180X90_BISEL_BARRIL.geometry}
            material={nodes.CONNOR_180X90_BISEL_BARRIL.material}
          >
            <meshPhysicalMaterial
              map={AcabadoPatas}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
        </>
      )}
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CONNOR_180X90_SOBRE_OVALADO.geometry}
            material={nodes.CONNOR_180X90_SOBRE_OVALADO.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CONNOR_180X90_BISEL_OVALADO.geometry}
            material={nodes.CONNOR_180X90_BISEL_OVALADO.material}
          >
            <meshPhysicalMaterial
              map={AcabadoPatas}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
        </>
      )}
      {encimeraRectangular && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CONNOR_180X90_BISEL_RECTANGULAR.geometry}
            material={nodes.CONNOR_180X90_BISEL_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoPatas}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CONNOR_180X90_SOBRE_RECTANGULAR.geometry}
            material={nodes.CONNOR_180X90_SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

export function Emma(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/EMMAFINAL.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PATAS_EMMA.geometry}
        material={nodes.PATAS_EMMA.material}
      >
        <meshPhysicalMaterial
          map={AcabadoPatas}
          metalness={materialPatas.metalness}
          roughness={materialPatas.roughness}
          specularIntensity={materialPatas.specularIntensity}
          reflectivity={materialPatas.reflectivity}
        />
      </mesh>

      {encimeraBarril && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_BARRIL.geometry}
            material={nodes.SOBRE_BARRIL.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BISEL_BARRIL.geometry}
            material={nodes.BISEL_BARRIL.material}
          >
            <meshPhysicalMaterial
              map={AcabadoPatas}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
        </>
      )}
      {encimeraRectangular && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial map={AcabadoSobre} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BISEL_RECTANGULAR.geometry}
            material={nodes.BISEL_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoPatas}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
        </>
      )}

      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
          >
            <meshPhysicalMaterial map={AcabadoSobre} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BISEL_OVALADO.geometry}
            material={nodes.BISEL_OVALADO.material}
          >
            <meshPhysicalMaterial
              map={AcabadoPatas}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              reflectivity={materialPatas.reflectivity}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
useGLTF.preload("/modelos/FondoSombras.gltf");
useGLTF.preload("/modelos/KIRFINAL.gltf");
