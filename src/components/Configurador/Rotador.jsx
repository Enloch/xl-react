/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, Suspense, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import {
  OrbitControls,
  Environment,
  PerformanceMonitor,
  PerspectiveCamera,
  View,
  ContactShadows,
  RandomizedLight,
  AccumulativeShadows,
} from "@react-three/drei";
// import { SombrasAmbiente } from "./Modelos";
import Fondo from "../../assets/configurador/SinMesa.jpg";
import FondoDetalle from "../../assets/configurador/FondoDetalle.webp";
import useModeloStore from "./modeloStore";
import { SombrasAmbiente } from "./Modelos";
import FullScreenIcon from "../../assets/configurador/iconos/fscreen.svg";

export const Container = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 380px 50px 380px 20px;
  grid-template-areas: ${(props) => props.gridTemplate};

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "main main"
      "top middle";
  }
`;
export const PanelRotador = styled.div`
  position: relative;
  /* padding: 0px 15px; */
  margin-left: 20px;
`;
export const PanelTop = styled.div`
  position: relative;
  margin-left: 20px;
  background-image: url(${FondoDetalle});
  background-size: cover;
  /* padding: 20px; */
`;
export const PanelBottom = styled.div`
  position: relative;
  margin-left: 20px;
  background-image: url(${Fondo});
  background-size: cover;
  /* background-size: 690px 450px; */
  background-repeat: no-repeat;
  /* padding: 20px; */
`;

export const ImagenFondo = styled.img`
  width: 100%;
  height: 100%;
  /* background-image: url(${Fondo}); */
  background-size: contain;
  z-index: -1;
`;

export const PanelText = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
  font-family: "Neue Montreal", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.secondaryTextColor};
`;
const StyledButton = styled(({ isActive, ...rest }) => <a {...rest} />)`
  position: absolute;
  top: 0.4%;
  right: 0%;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ isActive }) =>
    isActive ? "rotate(180deg)" : "rotate(0deg)"};
`;

const StyledButtonTop = styled(({ isActive, ...rest }) => <a {...rest} />)`
  position: absolute;
  bottom: 3%;
  left: 2%;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ isActive }) =>
    isActive ? "rotate(180deg)" : "rotate(0deg)"};
`;

const StyledButtonBottom = styled(({ isActive, ...rest }) => <a {...rest} />)`
  position: absolute;
  top: 3%;
  left: 2%;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ isActive }) =>
    isActive ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const ConfiguracionElegida = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: #a6a9ab;
  font-family: "Neue Montreal", sans-serif;
`;

export const IconoPDF = styled.img`
  position: absolute;
  top: 0%;
  right: 2.5%;
  height: 30px;
  z-index: 10;
  cursor: pointer;
`;
export const Fscreen = styled.img`
  height: 20px;
  z-index: 10;
  cursor: pointer;
`;

export const TextoSubtitulos = styled.p`
  font-size: 12px;
  font-family: "Neue Montreal", sans-serif;
`;
const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>Loading...</div>
    </div>
  );
};
const Rotador = () => {
  const [activePanel, setActivePanel] = useState(null); // null, 'main', 'top', 'middle'
  const gridTemplate = useMemo(() => {
    switch (activePanel) {
      case "main":
        return `"main main main main"
                "main main main main"
                "main main main main"`;
      case "top":
        return `"top top top top"
                "top top top top"
                "top top top top"`;
      case "middle":
        return `"middle middle middle middle"
                "middle middle middle middle"
                "middle middle middle middle"`;
      default:
        return `"main top"
                "main bottom1"
                "main middle"
                "bottomRotador bottom2"`;
    }
  }, [activePanel]);
  const toggleActivePanel = (panelName) => {
    setActivePanel((prevActivePanel) =>
      prevActivePanel === panelName ? null : panelName
    );
  };
  const {
    modeloMostrado,
    modeloMostradoNombre,
    modeloSobre,
    materialSobreNombre,
    materialBiselNombre,
    materialBastidorNombre,
    materialPatasNombre,
  } = useModeloStore();
  const [dpr, setDpr] = useState(1.5);
  const view1 = useRef();
  const view2 = useRef();
  const view3 = useRef();

  return (
    <Container gridTemplate={gridTemplate}>
      <PanelRotador
        ref={view1}
        style={{
          gridArea: "main",
          display: activePanel === "main" || !activePanel ? "block" : "none",
        }}
      >
        <StyledButton
          onClick={() => toggleActivePanel("main")}
          isActive={activePanel === "main"}
        >
          <Fscreen src={FullScreenIcon} />
        </StyledButton>
        {/* <IconoPDF src={PDFIcon} /> */}
        <div style={{ position: "absolute", bottom: "0%", left: "0%" }}></div>
      </PanelRotador>
      <PanelTop
        ref={view2}
        style={{
          gridArea: "top",
          display: activePanel === "top" || !activePanel ? "block" : "none",
        }}
      >
        <StyledButtonTop
          onClick={() => toggleActivePanel("top")}
          isActive={activePanel === "top"}
        >
          <Fscreen
            src={FullScreenIcon}
            style={{ transform: "rotate(180deg)" }}
          />
        </StyledButtonTop>
      </PanelTop>
      <PanelText
        style={{
          gridArea: "bottom1",
          display: !activePanel ? "block" : "none",
        }}
      >
        <TextoSubtitulos>detalle canto / edge detail</TextoSubtitulos>
      </PanelText>
      <PanelBottom
        ref={view3}
        style={{
          gridArea: "middle",
          display: activePanel === "middle" || !activePanel ? "block" : "none",
        }}
      >
        <StyledButtonBottom
          onClick={() => toggleActivePanel("middle")}
          isActive={activePanel === "middle"}
        >
          <Fscreen
            src={FullScreenIcon}
            style={{ transform: "rotate(270deg)" }}
          />
        </StyledButtonBottom>
      </PanelBottom>
      <PanelText
        style={{
          gridArea: "bottom2",
          display: !activePanel ? "block" : "none",
        }}
      >
        simulación ambiente / photo simulation
      </PanelText>
      <PanelText
        style={{
          gridArea: "bottomRotador",
          display: !activePanel ? "block" : "none",
        }}
      >
        <TextoSubtitulos
          style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}
        >
          Configuración elegida:
        </TextoSubtitulos>
        <ConfiguracionElegida>
          <strong>Modelo:</strong> {modeloMostradoNombre} {modeloSobre}, sobre
          en {materialSobreNombre}
          {materialBiselNombre && <> bisel en {materialBiselNombre},</>}
          {materialBastidorNombre && (
            <> bastidor en {materialBastidorNombre} y </>
          )}
          {materialPatasNombre && <> patas en {materialPatasNombre}</>}
        </ConfiguracionElegida>
      </PanelText>
      <Canvas
        shadows
        eventSource={document.getElementById("root")}
        dpr={dpr}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Suspense fallback={<></>}>
          <PerformanceMonitor
            onIncline={() => setDpr(2)}
            onDecline={() => setDpr(1)}
          />
          <View index={1} track={view1}>
            <PerspectiveCamera
              name='Camara Rotador'
              makeDefault={true}
              far={1000}
              near={0.1}
              fov={34.339}
              position={[-7.103, 6.878, 5.663]}
              rotation={[-0.873, -0.728, -0.653]}
            />

            {/* <Environment>
            <Lightformer
              intensity={3}
              rotation-x={Math.PI / 2}
              position={[0, 5, 0]}
              scale={[10, 10, 1]}
            />
            <Lightformer
              intensity={3}
              rotation-x={Math.PI / 2}
              position={[0, 5, 0]}
              scale={[10, 10, 1]}
            />
          </Environment> */}
            {/* <ambientLight intensity={0.3} /> */}
            <pointLight
              castShadow
              shadow-bias={-0.0001}
              shadow-mapSize={1024}
              position={[2.91, 0.5, -7.5]}
              intensity={0.2}
            />
            <pointLight
              castShadow
              shadow-bias={-0.0001}
              shadow-mapSize={1024}
              position={[2.91, 0.5, 7.5]}
              intensity={0.2}
            />
            <pointLight
              castShadow
              shadow-bias={-0.0001}
              shadow-mapSize={1024}
              position={[-2.91, 0.5, -7.5]}
              intensity={0.2}
            />
            <pointLight
              castShadow
              shadow-mapSize={1024}
              shadow-bias={-0.0001}
              position={[-2.91, 0.5, 7.5]}
              intensity={0.2}
            />
            <pointLight
              shadow-bias={-0.0001}
              position={[0, 6.2, 2.3]}
              intensity={0.7}
            />
            {/* <Environment preset='warehouse' /> */}
            <Environment files={"/HDRI/warehouse.hdr"} />

            {/* <AccumulativeShadows
            position={[0, -0.92, 0]}
            frames={300}
            alphaTest={0.8}
            scale={10}
          >
            <RandomizedLight
              amount={8}
              radius={10}
              ambient={0.5}
              position={[1, 5, -1]}
            />
          </AccumulativeShadows> */}
            <Suspense fallback={null}>
              <ContactShadows
                opacity={0.1}
                scale={10}
                blur={1}
                far={10}
                frames={1}
                position={[0, -0.9, 0]}
                resolution={256}
                color='#000000'
              />
              <Escena modelo={modeloMostrado} />
            </Suspense>
            <OrbitControls
              enableRotater={false}
              enablePan={false}
              enableZoom={true}
              autoRotate={true}
              autoRotateSpeed={0.75}
              maxPolarAngle={Math.PI / 2.2}
              minPolarAngle={Math.PI / 6}
              maxDistance={12}
              minDistance={7}
            />
          </View>
          <View index={2} track={view2}>
            <PerspectiveCamera
              name='Camara Detalle'
              makeDefault={true}
              far={1000}
              near={0.1}
              fov={15.832}
              position={[-4.65, 2.197, -3.73]}
              rotation={[-2.35, -1.262, -2.358]}
            />
            <ambientLight intensity={0.1} />
            <Environment files={"/HDRI/ciudad2.hdr"} />
            <pointLight
              castShadow
              shadow-bias={-0.0001}
              position={[5.91, 0.6, -7.5]}
              intensity={0.1}
            />
            <pointLight
              castShadow
              shadow-bias={-0.0001}
              position={[5.91, 2.92, -1.5]}
              intensity={0.08}
            />
            <pointLight
              position={[-10, 2.4, 0]}
              shadow-bias={-0.0001}
              intensity={0.4}
              castShadow
            />
            <mesh
              receiveShadow
              position={[4, -2.5, -0.276]}
              rotation={[0, 0, 0]}
            >
              <planeGeometry attach='geometry' args={[10, 10]} />
              <shadowMaterial attach='material' transparent opacity={1} />
            </mesh>

            <Escena modelo={modeloMostrado} />
          </View>
          <View index={3} track={view3}>
            <PerspectiveCamera
              name='Camara Ambiente'
              makeDefault={true}
              far={1000}
              near={0.1}
              fov={34.339}
              position={[-6.65, 6.878, 5.663]}
              rotation={[-0.873, -0.728, -0.653]}
            />
            <ambientLight intensity={0.2} />
            <Environment files={"/HDRI/ciudad2.hdr"} />
            <directionalLight
              position={[-0.5, 5, -3]}
              castShadow
              intensity={0.01}
              shadow-bias={-0.0001}
              shadow-mapSize={512}
            >
              <orthographicCamera
                attach='shadow-camera'
                args={[-8.5, 8.5, 8.5, -8.5, 0.01, 100]}
              />
            </directionalLight>
            <SombrasAmbiente />

            {/* <AccumulativeShadows
            position={[0, -0.92, 0]}
            frames={600}
            alphaTest={0.8}
            scale={20}
          >
            <RandomizedLight
              amount={2}
              radius={10}
              ambient={0.5}
              position={[1, 5, -1]}
            />
          </AccumulativeShadows> */}
            <Escena modelo={modeloMostrado} />
          </View>
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default Rotador;
function Escena({ modelo: ModeloComponente }) {
  return (
    <>
      <ModeloComponente />
    </>
  );
}
