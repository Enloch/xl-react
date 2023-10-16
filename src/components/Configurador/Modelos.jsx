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

//-------------------------------------------COLLECTIONS----------------------------------------------
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
        geometry={nodes.CONNOR_PATAS.geometry}
        material={nodes.CONNOR_PATAS.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
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
              metalness={0.5}
              roughness={0.5}
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
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
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
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
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
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Gene(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();
  const AcabadoSobre = useTexture(materialSobre); // Assuming that materialSobre is a texture URL
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/GENE.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GENE_PATAS.geometry}
        material={nodes.GENE_PATAS.material}
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
            geometry={nodes.GENE_SOBRE_BARRIL.geometry}
            material={nodes.GENE_SOBRE_BARRIL.material}
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
            geometry={nodes.GENE_BISEL_BARRIL.geometry}
            material={nodes.GENE_BISEL_BARRIL.material}
          >
            <meshPhysicalMaterial
              map={AcabadoPatas}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              eflectivity={materialPatas.reflectivity}
            />
          </mesh>
        </>
      )}

      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GENE_SOBRE_OVALADO.geometry}
            material={nodes.GENE_SOBRE_OVALADO.material}
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
            geometry={nodes.GENE_BISEL_OVALADO.geometry}
            material={nodes.GENE_BISEL_OVALADO.material}
          >
            <meshPhysicalMaterial
              map={AcabadoPatas}
              metalness={materialPatas.metalness}
              roughness={materialPatas.roughness}
              specularIntensity={materialPatas.specularIntensity}
              eflectivity={materialPatas.reflectivity}
            />
          </mesh>
        </>
      )}

      {encimeraRectangular && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GENE_BISEL_RECTANGULAR.geometry}
            material={nodes.GENE_BISEL_RECTANGULAR.material}
          >
            <meshPhysicalMaterial map={AcabadoPatas} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GENE_SOBRE_RECTANGULAR.geometry}
            material={nodes.GENE_SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Grace(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/GRACE.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PATAS_GRACE.geometry}
        material={nodes.PATAS_GRACE.material}
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
            geometry={nodes.GRACE_SOBRE_BARRIL.geometry}
            material={nodes.GRACE_SOBRE_BARRIL.material}
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
            geometry={nodes.GRACE_BISEL_BARRIL.geometry}
            material={nodes.GRACE_BISEL_BARRIL.material}
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
            geometry={nodes.GRACE_SOBRE_OVALADO.geometry}
            material={nodes.GRACE_SOBRE_OVALADO.material}
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
            geometry={nodes.GRACE_BISEL_OVALADO.geometry}
            material={nodes.GRACE_BISEL_OVALADO.material}
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
            geometry={nodes.GRACE_BISEL_RECTANGULAR.geometry}
            material={nodes.GRACE_BISEL_RECTANGULAR.material}
          >
            <meshPhysicalMaterial map={AcabadoPatas} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GRACE_SOBRE_RECTANGULAR.geometry}
            material={nodes.GRACE_SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Harp(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/HARP.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HARP_PATAS.geometry}
        material={nodes.HARP_PATAS.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Hulk(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/HULK.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HULK_PATAS.geometry}
        material={nodes.HULK_PATAS.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

export function Ilia(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/ILIA.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ILIA__PATAS.geometry}
        material={nodes.ILIA__PATAS.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Kiff(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/KIFF.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KIFF_PATAS.geometry}
        material={nodes.KIFF_PATAS.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Lyre(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/LYRE.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LYRE_PATA.geometry}
        material={nodes.LYRE_PATA.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Mario(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/MARIO.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MARIO_PATAS.geometry}
        material={nodes.MARIO_PATAS.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Olympus(props) {
  const { materialSobre, materialPatas, encimeraCircular } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/OLYMPUS.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OLYMPUS_120_PATAS.geometry}
        material={nodes.OLYMPUS_120_PATAS.material}
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
        geometry={nodes.OLYMPUS_120_SOBRE.geometry}
        material={nodes.OLYMPUS_120_SOBRE.material}
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
        geometry={nodes.OLYMPUS_120_BISEL.geometry}
        material={nodes.OLYMPUS_120_BISEL.material}
      >
        <meshPhysicalMaterial
          map={AcabadoPatas}
          metalness={materialPatas.metalness}
          roughness={materialPatas.roughness}
          specularIntensity={materialPatas.specularIntensity}
          reflectivity={materialPatas.reflectivity}
        />
      </mesh>
    </group>
  );
}
export function Pisa(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/PISA.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PISA_PATAS.geometry}
        material={nodes.PISA_PATAS.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Progetto(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/PROGETTO.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PROGETTO_PATAS.geometry}
        material={nodes.PROGETTO_PATAS.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Solo(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/SOLO.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PATAS_SOLO.geometry}
        material={nodes.PATAS_SOLO.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Toyo(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/TOYO.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PATAS_TOYO.geometry}
        material={nodes.PATAS_TOYO.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
export function Victory(props) {
  const {
    materialSobre,
    materialPatas,
    encimeraRectangular,
    encimeraOvalada,
    encimeraBarril,
  } = useModeloStore();

  const AcabadoSobre = useTexture(materialSobre);
  const AcabadoPatas = useTexture(materialPatas.imagen);

  const { nodes } = useGLTF("/modelos/VICTORY.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PATAS_VICTORY.geometry}
        material={nodes.PATAS_VICTORY.material}
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
              metalness={0.5}
              roughness={0.5}
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
      {encimeraOvalada && (
        <>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_OVALADO.geometry}
            material={nodes.SOBRE_OVALADO.material}
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
      {encimeraRectangular && (
        <>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SOBRE_RECTANGULAR.geometry}
            material={nodes.SOBRE_RECTANGULAR.material}
          >
            <meshPhysicalMaterial
              map={AcabadoSobre}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        </>
      )}
    </group>
  );
}
//----------------------Life------------------------
export function Collins(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/COLLINS.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Bisel'
        castShadow
        receiveShadow
        geometry={nodes.COLLINS_BISEL_BARRIL.geometry}
        material={nodes.COLLINS_BISEL_BARRIL.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        name='Patas'
        castShadow
        receiveShadow
        geometry={nodes.COLLINS_PATAS.geometry}
        material={nodes.COLLINS_PATAS.material}
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
        geometry={nodes.COLLINS_SOBRE_BARRIL.geometry}
      >
        <meshPhysicalMaterial
          map={AcabadoSobre}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh
        name='Tacos'
        castShadow
        receiveShadow
        geometry={nodes.COLLINS_TACO.geometry}
        material={nodes.COLLINS_TACO.material}
      />
    </group>
  );
}

export function CollinsExt(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes, materials } = useGLTF("/modelos//COLLINSEXT.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["COLLINS_EXTENSIBLE_+70_BISEL_BARRIL"].geometry}
        material={nodes["COLLINS_EXTENSIBLE_+70_BISEL_BARRIL"].material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["COLLINS_EXTENSIBLE_+70_TACO"].geometry}
        material={nodes["COLLINS_EXTENSIBLE_+70_TACO"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["COLLINS_EXTENSIBLE_+70_PATAS"].geometry}
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
        geometry={nodes["COLLINS_EXTENSIBLE_+70_GUIAS"].geometry}
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
        geometry={nodes["COLLINS_EXTENSIBLE_+70_SOBRE_BARRIL"].geometry}
        material={nodes["COLLINS_EXTENSIBLE_+70_SOBRE_BARRIL"].material}
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
        geometry={nodes["COLLINS_EXTENSIBLE_+70_BISEL_EXTENSIBLE"].geometry}
        material={nodes["COLLINS_EXTENSIBLE_+70_BISEL_EXTENSIBLE"].material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["COLLINS_EXTENSIBLE_+70_SOBRE_EXTENSIBLE"].geometry}
        material={nodes["COLLINS_EXTENSIBLE_+70_SOBRE_EXTENSIBLE"].material}
      >
        <meshPhysicalMaterial
          map={AcabadoSobre}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
}
export function Flip(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/FLIP.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FLIP_BISEL_RECTANGULAR.geometry}
        material={nodes.FLIP_BISEL_RECTANGULAR.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FLIP_ESTRUCTURA.geometry}
        material={nodes.FLIP_ESTRUCTURA.material}
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
        geometry={nodes.FLIP_TACOS.geometry}
        material={nodes.FLIP_TACOS.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FLIP_PATAS.geometry}
        material={nodes.FLIP_PATAS.material}
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
        geometry={nodes.FLIP_SOBRE_RECTANGULAR.geometry}
        material={nodes.FLIP_SOBRE_RECTANGULAR.material}
      >
        <meshPhysicalMaterial
          map={AcabadoSobre}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
}
export function FlipExt(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/FLIPEXT.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FLIP_EXTENSIBLE_TACOS.geometry}
        material={nodes.FLIP_EXTENSIBLE_TACOS.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FLIP_EXTENSIBLE_PATAS.geometry}
        material={nodes.FLIP_EXTENSIBLE_PATAS.material}
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
        geometry={nodes.FLIP_EXTENSIBLE_SOBRE_RECTANGULAR.geometry}
        material={nodes.FLIP_EXTENSIBLE_SOBRE_RECTANGULAR.material}
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
        geometry={nodes.FLIP_EXTENSIBLE_ESTRUCTURA.geometry}
        material={nodes.FLIP_EXTENSIBLE_ESTRUCTURA.material}
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
        geometry={nodes.FLIP_EXTENSIBLE_SOBRE_RECTANGULAR_EXTRAIBLE.geometry}
        material={nodes.FLIP_EXTENSIBLE_SOBRE_RECTANGULAR_EXTRAIBLE.material}
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
        geometry={nodes.FLIP_EXTENSIBLE_BISEL_RECTANGULAR_EXTRAIBLE.geometry}
        material={nodes.FLIP_EXTENSIBLE_BISEL_RECTANGULAR_EXTRAIBLE.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FLIP_EXTENSIBLE_BISEL_RECTANGULAR.geometry}
        material={nodes.FLIP_EXTENSIBLE_BISEL_RECTANGULAR.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
    </group>
  );
}
export function Gibson(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/GIBSON.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GIBSON_BISEL_RECTANGULAR.geometry}
        material={nodes.GIBSON_BISEL_RECTANGULAR.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GIBSON_SOBRE_RECTANGULAR.geometry}
        material={nodes.GIBSON_SOBRE_RECTANGULAR.material}
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
        geometry={nodes.GIBSON_TACOS.geometry}
        material={nodes.GIBSON_TACOS.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GIBSON_PATAS.geometry}
        material={nodes.GIBSON_PATAS.material}
      >
        <meshPhysicalMaterial
          map={AcabadoPatas}
          metalness={materialPatas.metalness}
          roughness={materialPatas.roughness}
          specularIntensity={materialPatas.specularIntensity}
          reflectivity={materialPatas.reflectivity}
        />
      </mesh>
    </group>
  );
}
export function GibsonExt(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes } = useGLTF("/modelos/GIBSONEXT.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GIBSON_EXTENSIBLE_GUIAS.geometry}
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
        geometry={nodes.GIBSON_EXTENSIBLE_SOBRE_RECTANGULAR.geometry}
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
        geometry={nodes.GIBSON_EXTENSIBLE_SOBRE_RECTANGULAR_EXTENSIBLE.geometry}
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
        geometry={nodes.GIBSON_EXTENSIBLE_BISEL_RECTANGULAR_EXTENSIBLE.geometry}
        material={nodes.GIBSON_EXTENSIBLE_BISEL_RECTANGULAR_EXTENSIBLE.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GIBSON_EXTENSIBLE_BISEL_RECTANGULAR.geometry}
        material={nodes.GIBSON_EXTENSIBLE_BISEL_RECTANGULAR.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GIBSON_EXTENSIBLE_PATAS.geometry}
        material={nodes.GIBSON_EXTENSIBLE_PATAS.material}
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
        geometry={nodes.GIBSON_EXTENSIBLE_TACOS.geometry}
        material={nodes.GIBSON_EXTENSIBLE_TACOS.material}
      />
    </group>
  );
}
export function Hakone(props) {
  const { materialSobre, materialBisel, materialBastidor, materialPatas } =
    useModeloStore(); // Usa el hook para acceder al estado
  const AcabadoSobre = useTexture(materialSobre); // Suponiendo que materialSobre es una URL de textura
  const AcabadoBisel = useTexture(materialBisel);
  const AcabadoBastidor = useTexture(materialBastidor.imagen);
  const AcabadoPatas = useTexture(materialPatas.imagen);
  const { nodes, materials } = useGLTF("/modelos/HAKONE.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HAKONE_SOBRE_RECTANGULAR.geometry}
        material={nodes.HAKONE_SOBRE_RECTANGULAR.material}
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
        geometry={nodes.HAKONE_BISEL_RECTANGULAR.geometry}
        material={nodes.HAKONE_BISEL_RECTANGULAR.material}
      >
        <meshPhysicalMaterial map={AcabadoBisel} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HAKONE_PATAS.geometry}
        material={nodes.HAKONE_PATAS.material}
      >
        <meshPhysicalMaterial
          map={AcabadoPatas}
          metalness={materialPatas.metalness}
          roughness={materialPatas.roughness}
          specularIntensity={materialPatas.specularIntensity}
          reflectivity={materialPatas.reflectivity}
        />
      </mesh>
    </group>
  );
}
useGLTF.preload("/modelos/FondoSombras.gltf");
useGLTF.preload("/modelos/KIRFINAL.gltf");
