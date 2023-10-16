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
