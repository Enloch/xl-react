/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, Suspense, useRef, useMemo, useEffect } from "react";
import {
  PanelRotador,
  PanelTop,
  PanelBottom,
  PanelText,
  StyledButton,
  StyledButtonTop,
  StyledButtonBottom,
  ConfiguracionElegida,
  IconoPDF,
  Fscreen,
  TextoSubtitulos,
  ImagenFondo,
  Container,
} from "./Styles";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
  Preload,
} from "@react-three/drei";

import useModeloStore from "./modeloStore";
import FullScreenIcon from "../../assets/configurador/iconos/fscreen.svg";
import { SombrasAmbiente } from "./Modelos";
import { captureAndGeneratePDF } from "../PDF";

function Escena({ modelo: ModeloComponente }) {
  return <ModeloComponente />;
}

const Rotador = ({ rotadorRef }) => {
  const [activePanel, setActivePanel] = useState(null); // null, 'main', 'top', 'middle'
  const gridTemplate = useMemo(() => {
    switch (activePanel) {
      case "main":
        return `"main main main main"
                "main main main main"
                "main main main main"
                "bottomRotador bottomRotador bottomRotador bottomRotador"`;
      case "top":
        return `"top top top top"
                "top top top top"
                "top top top top"
                "bottomRotador bottomRotador bottomRotador bottomRotador"`;
      case "middle":
        return `"middle middle middle middle"
                "middle middle middle middle"
                "middle middle middle middle"
                "bottomRotador bottomRotador bottomRotador bottomRotador"`;
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
    camara,
  } = useModeloStore();
  const [dpr, setDpr] = useState(1.5);
  const view1 = useRef();
  const view2 = useRef();
  const view3 = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [renderKey, setRenderKey] = useState(0);
  const handleButtonClick = () => {
    setTimeout(() => {
      setRenderKey((prevKey) => prevKey + 1); // Incrementa la clave para forzar la re-renderización
    }, 0);
  };
  return (
    <Container
      gridTemplate={gridTemplate}
      ref={rotadorRef}
      id='contenedor-rotador-canvas'
    >
      <PanelRotador
        ref={view1}
        style={{
          gridArea: "main",
          display: activePanel === "main" || !activePanel ? "block" : "none",
        }}
      >
        {windowWidth >= 1400 && (
          <StyledButton
            onClick={() => {
              handleButtonClick();
              toggleActivePanel("main");
            }}
            isActive={activePanel === "main"}
          >
            <Fscreen src={FullScreenIcon} />
          </StyledButton>
        )}
        {/* <IconoPDF src={PDFIcon} /> */}
        <div style={{ position: "absolute", bottom: "0%", left: "0%" }}></div>
      </PanelRotador>
      {windowWidth >= 1400 && (
        <PanelTop
          ref={view2}
          style={{
            gridArea: "top",
            display: activePanel === "top" || !activePanel ? "block" : "none",
          }}
        >
          <StyledButtonTop
            onClick={() => {
              handleButtonClick();
              toggleActivePanel("top");
            }}
            isActive={activePanel === "top"}
          >
            <Fscreen
              src={FullScreenIcon}
              style={{ transform: "rotate(180deg)" }}
            />
          </StyledButtonTop>
        </PanelTop>
      )}
      {windowWidth >= 1400 && (
        <PanelText
          style={{
            gridArea: "bottom1",
            display: !activePanel ? "block" : "none",
          }}
        >
          <TextoSubtitulos>detalle canto / edge detail</TextoSubtitulos>
        </PanelText>
      )}
      {windowWidth >= 1400 && (
        <PanelBottom
          ref={view3}
          style={{
            gridArea: "middle",
            display:
              activePanel === "middle" || !activePanel ? "block" : "none",
          }}
        >
          <StyledButtonBottom
            onClick={() => {
              handleButtonClick();
              toggleActivePanel("middle");
            }}
            isActive={activePanel === "middle"}
          >
            <Fscreen
              src={FullScreenIcon}
              style={{ transform: "rotate(270deg)" }}
            />
          </StyledButtonBottom>
        </PanelBottom>
      )}
      {windowWidth >= 1400 && (
        <PanelText
          style={{
            gridArea: "bottom2",
            display: !activePanel ? "block" : "none",
          }}
        >
          simulación ambiente / photo simulation
        </PanelText>
      )}

      <PanelText
        style={{
          gridArea: "bottomRotador",
          // display: !activePanel ? "block" : "none",
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
        key={renderKey} // Usa la clave para forzar la re-renderización
        id='Canvas'
        shadows
        gl={{ preserveDrawingBuffer: true, rendering: true }}
        eventSource={rotadorRef.current}
        dpr={dpr}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
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
          {/* <ambientLight intensity={0.5} /> */}
          {/* <pointLight
            castShadow
            shadow-bias={-0.0001}
            position={[2.91, 0.6, -7.5]}
            intensity={12}
          />

          <pointLight
            castShadow
            shadow-bias={-0.0001}
            position={[-2.91, 0.6, -7.5]}
            intensity={12}
          /> */}
          <pointLight position={[-0.5, 5, 0]} decay={0.8} intensity={12} />
          <pointLight position={[0.5, 5, 0]} decay={0.8} intensity={12} />
          <Environment files={"/HDRI/bueno.hdr"} />
          {/* <AccumulativeShadows
            position={[0, -0.92, 0]}
            frames={300}
            alphaTest={0.8}
            scale={10}
          >
            <RandomizedLight
              amount={8}
              radius={10}
              ambient={0.2}
              position={[1, 5, -1]}
            />
          </AccumulativeShadows> */}
          <AccumulativeShadows
            temporal
            frames={100}
            scale={10}
            position={[0, -0.92, 0]}
            color='#2f2f2f'
            opacity={0.25}
          >
            <RandomizedLight amount={8} position={[0, 5, 0]} radius={0.5}/>
          </AccumulativeShadows>
          {/* <ContactShadows
            opacity={0.2}
            scale={10}
            blur={1}
            far={10}
            frames={1}
            position={[0, -0.92, 0]}
            resolution={512}
            color='#000000'
          /> */}
          <Escena modelo={modeloMostrado} />

          <OrbitControls
            makeDefault
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
        {windowWidth >= 1400 && (
          <View index={2} track={view2}>
            {camara === false && (
              <PerspectiveCamera
                name='Camara Detalle'
                makeDefault={true}
                far={1000}
                near={0.1}
                fov={15.832}
                position={[-4.65, 2.197, -3.73]}
                rotation={[-2.35, -1.262, -2.358]}
              />
            )}
            {camara === true && (
              <PerspectiveCamera
                name='Camara Detalle'
                makeDefault={true}
                far={1000}
                near={0.1}
                fov={15.832}
                position={[-4.65, 2.4, -1.95]}
                rotation={[-2.35, -1.262, -2.358]}
              />
            )}
            <ambientLight intensity={0.3} />
            <Environment files={"/HDRI/Park4_5.hdr"} />
            <pointLight
              name='Luz Izquierda'
              castShadow
              shadow-bias={-0.0001}
              position={[5.91, 0.6, -7.5]}
              intensity={5}
            />
            <pointLight
              name='Luz Sobre'
              castShadow
              shadow-bias={-0.0001}
              position={[5.91, 2.92, -1.5]}
              intensity={8}
            />
            <pointLight
              name='Frontal'
              position={[-10, 2.4, 0]}
              shadow-bias={-0.0001}
              intensity={70}
              castShadow
            />
            <Escena modelo={modeloMostrado} />
          </View>
        )}
        {windowWidth >= 1400 && (
          <View index={3} track={view3}>
            <PerspectiveCamera
              name='Camara Ambiente'
              makeDefault={true}
              far={1000}
              near={0.1}
              fov={34.339}
              position={[-7.05, 6.878, 5.663]}
              rotation={[-0.873, -0.728, -0.653]}
            />
            <Environment files={"/HDRI/Park4_7.hdr"} />
            {/* <AccumulativeShadows
                position={[0, -0.92, 0]}
                frames={20}
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
            <directionalLight
              position={[-0.5, 5, -3]}
              castShadow
              intensity={0.01}
              shadow-bias={-0.0001}
              shadow-mapSize={8192}
            >
              <orthographicCamera
                attach='shadow-camera'
                args={[-8.5, 8.5, 8.5, -8.5, 0.01, 100]}
              />
            </directionalLight>
            <SombrasAmbiente />
            <Escena modelo={modeloMostrado} />
          </View>
        )}
        <Preload all />
      </Canvas>
    </Container>
  );
};

export default Rotador;
