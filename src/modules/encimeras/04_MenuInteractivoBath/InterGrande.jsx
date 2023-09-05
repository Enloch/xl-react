import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import icono_b from "../../../assets/icons/botones/boton_b.png";
import icono from "../../../assets/icons/botones/boton.png";
import icono_retroceso from "../../../assets/icons/botones/undo-svgrepo-com.svg";
import {
  CementoMicrocemento,
  ColorUniforme,
  Madera,
  Marmol,
  Metal,
  Piedra,
  MiniMueble,
} from "./miniaturas";

import {
  ImagenBase,
  ImagenMueble,
  ImagenFrente,
  Encimera,
} from "./dataInterGrande";
import {
  ContenedorIntercambiador,
  ContenedorImagenBase,
  ContenedorImagen,
  Imagen,
  ContenedorMenu,
  MenuIntrucciones,
  BotonExpandir,
  BotonContinuar,
  TextoIntro,
  ContenedorIconos,
  Icono1,
  MenuMateriales,
  ContenedorMateriales,
  IconoMaterial,
  CajaMaterial,
  ContIconText,
  TextoMaterial,
  WrapperTexto,
  TxtSubimagen,
  ContenedorExpansor,
  TextoIntro2,
  ContIconText2,
  IconoEncimera,
  ContenedorEncimera,
  CajaMaterial2,
} from "./InterGrandeElementos";
export default function InterGrande() {
  const [inicio, setInicio] = useState(true);
  const [iconos, setIconos] = useState(false);
  const [Bromo, setBromo] = useState(false);
  const [Blanco, setBlanco] = useState(true);
  const [Robledo, setRobledo] = useState(false);
  const [muebleVisible, setMuebleVisible] = useState(false);
  const [materialEncimera, setMaterialEncimera] = useState(
    Encimera[13].textura
  );
  const [encimeraVisible, setEncimeraVisible] = useState(false);
  const [cementoVisible, setCementoVisible] = useState(false);
  const [colorVisible, setColorVisible] = useState(false);
  const [maderaVisible, setMaderaVisible] = useState(false);
  const [marmolVisible, setMarmolVisible] = useState(false);
  const [metalVisible, setMetalVisible] = useState(false);
  const [piedraVisible, setPiedraVisible] = useState(false);
  const [frenteVisible, setFrenteVisible] = useState(false);
  const [copeteVisible, setCopeteVisible] = useState(
    Encimera[13].TexturaCopete
  );
  const handleMaterialEncimera = (material) => {
    let cambio = null;
    let cambio2 = null;
    cambio = Encimera.find((item) => item.id === material)?.textura || null;
    cambio2 =
      Encimera.find((item) => item.id === material)?.TexturaCopete || null;
    setMaterialEncimera(cambio);
    setCopeteVisible(cambio2);
  };
  const handleAtras = () => {
    setEncimeraVisible(true);
    setCementoVisible(false);
    setColorVisible(false);
    setMaderaVisible(false);
    setMarmolVisible(false);
    setMetalVisible(false);
    setPiedraVisible(false);
  };
  const handleCerrar = () => {
    setMuebleVisible(false);
    setEncimeraVisible(false);
    setCementoVisible(false);
    setColorVisible(false);
    setMaderaVisible(false);
    setMarmolVisible(false);
    setMetalVisible(false);
    setPiedraVisible(false);
    setIconos(!iconos);
  };
  const handleReset = () => {
    setBromo(false);
    setBlanco(true);
    setRobledo(false);
    setMaterialEncimera(Encimera[13].textura);
    setFrenteVisible(false);
    setCopeteVisible(Encimera[13].TexturaCopete);
  };
  const iconosSeleccion = (
    <ContenedorIconos>
      <Tooltip anchorId={"encimera"} content={"encimera"} />
      <Tooltip anchorId={"frente"} content={"frente"} />
      <Tooltip anchorId={"mueble"} content={"mueble"} />
      <Tooltip anchorId={"reiniciar"} content={"reiniciar"} />
      {/*--------------botones--------------*/}
      <Icono1
        id='encimera'
        onClick={() => {
          setIconos(!iconos);
          setEncimeraVisible(!encimeraVisible);
        }}
        src={icono_b}
        alt='encimera'
        style={{
          top: "60%",
          left: "40%",
        }}
      />
      <Icono1
        id='frente'
        onClick={() => {
          setFrenteVisible(!frenteVisible);
        }}
        src={icono_b}
        alt='frente'
        style={{
          top: "40%",
          left: "23%",
        }}
      />
      <Icono1
        id='mueble'
        onClick={() => {
          setIconos(!iconos);
          setMuebleVisible(!muebleVisible);
        }}
        src={icono}
        alt='mueble'
        style={{
          top: "80%",
          left: "50%",
        }}
      />

      <Icono1
        id='reiniciar'
        onClick={handleReset}
        src={icono_retroceso}
        alt='reiniciar'
        style={{
          top: "92%",
          left: "95%",
        }}
      />
    </ContenedorIconos>
  );
  return (
    <ContenedorIntercambiador>
      {inicio && (
        <ContenedorExpansor
          id='expansor'
          initial={{
            height: "0%",
          }}
          whileInView={{
            transition: {
              duration: 0.3,
              ease: "easeIn",
            },
            height: "100%",
          }}
          onClick={() => {
            setInicio(false);
            setIconos(!iconos);

            // setIsVisible(!isVisible);
          }}
        >
          <TextoIntro2>Pulsa para acceder al configurador</TextoIntro2>
        </ContenedorExpansor>
      )}
      {iconos && iconosSeleccion}
      {muebleVisible && (
        <MenuMateriales
          id='menu inferior'
          initial={{
            height: "0%",
          }}
          animate={{
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
            height: "20%",
          }}
        >
          <ContenedorMateriales>
            <TextoIntro>
              <bold>elige el color del mueble {">"}</bold>
            </TextoIntro>
            <CajaMaterial>
              <ContIconText2
                onClick={() => {
                  setRobledo(false);
                  setBlanco(false);
                  setBromo(true);
                }}
              >
                <IconoMaterial src={MiniMueble[0].textura} />
                <TextoMaterial>Bromo</TextoMaterial>
              </ContIconText2>
              <ContIconText
                onClick={() => {
                  setRobledo(false);
                  setBlanco(true);
                  setBromo(false);
                }}
              >
                <IconoMaterial src={MiniMueble[1].textura} />
                <TextoMaterial>Blanco</TextoMaterial>
              </ContIconText>
              <ContIconText2
                onClick={() => {
                  setRobledo(true);
                  setBlanco(false);
                  setBromo(false);
                }}
              >
                <IconoMaterial src={MiniMueble[2].textura} />
                <TextoMaterial>Robledo</TextoMaterial>
              </ContIconText2>
            </CajaMaterial>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleCerrar}>
              <bold>cerrar {"X"}</bold>
            </TextoIntro>
          </ContenedorMateriales>
        </MenuMateriales>
      )}
      {encimeraVisible && (
        <MenuMateriales
          id='menu inferior'
          initial={{
            height: "0%",
          }}
          animate={{
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
            height: "20%",
          }}
        >
          <ContenedorMateriales>
            <TextoIntro>
              <bold>elige la tipología de la encimera {">"}</bold>
            </TextoIntro>
            <CajaMaterial>
              <ContIconText2
                onClick={() => {
                  setCementoVisible(true);
                  setEncimeraVisible(false);
                }}
              >
                <IconoMaterial src={CementoMicrocemento[0].textura} />
                <TextoMaterial>Cemento</TextoMaterial>
              </ContIconText2>
              <ContIconText
                onClick={() => {
                  setColorVisible(true);
                  setEncimeraVisible(false);
                }}
              >
                <IconoMaterial src={ColorUniforme[0].textura} />
                <TextoMaterial>Color Uniforme</TextoMaterial>
              </ContIconText>
              <ContIconText2
                onClick={() => {
                  setMaderaVisible(true);
                  setEncimeraVisible(false);
                }}
              >
                <IconoMaterial src={Madera[0].textura} />
                <TextoMaterial>Madera</TextoMaterial>
              </ContIconText2>
              <ContIconText2
                onClick={() => {
                  setMarmolVisible(true);
                  setEncimeraVisible(false);
                }}
              >
                <IconoMaterial src={Marmol[0].textura} />
                <TextoMaterial>Mármol</TextoMaterial>
              </ContIconText2>
              <ContIconText2
                onClick={() => {
                  setMetalVisible(true);
                  setEncimeraVisible(false);
                }}
              >
                <IconoMaterial src={Metal[0].textura} />
                <TextoMaterial>Metal</TextoMaterial>
              </ContIconText2>
              <ContIconText2
                onClick={() => {
                  setPiedraVisible(true);
                  setEncimeraVisible(false);
                }}
              >
                <IconoMaterial src={Piedra[0].textura} />
                <TextoMaterial>Piedra</TextoMaterial>
              </ContIconText2>
            </CajaMaterial>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleCerrar}>
              <bold>cerrar {""}</bold>
            </TextoIntro>
          </ContenedorMateriales>
        </MenuMateriales>
      )}
      {cementoVisible && (
        <MenuMateriales
          id='menu inferior'
          initial={{
            height: "0%",
          }}
          animate={{
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
            height: "20%",
          }}
        >
          <ContenedorMateriales>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleAtras}>
              <bold>{"< "}atras</bold>
            </TextoIntro>
            <CajaMaterial>
              {CementoMicrocemento.map((item, index) => (
                <ContIconText2
                  key={index}
                  onClick={() => handleMaterialEncimera(item.id)}
                >
                  <IconoMaterial src={item.textura} />
                  <TextoMaterial>{item.nombre}</TextoMaterial>
                </ContIconText2>
              ))}
            </CajaMaterial>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleCerrar}>
              <bold>cerrar {""}</bold>
            </TextoIntro>
          </ContenedorMateriales>
        </MenuMateriales>
      )}
      {colorVisible && (
        <MenuMateriales
          id='menu inferior'
          initial={{
            height: "0%",
          }}
          animate={{
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
            height: "20%",
          }}
        >
          <ContenedorMateriales>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleAtras}>
              <bold>{"< "}atras</bold>
            </TextoIntro>
            <CajaMaterial>
              {ColorUniforme.map((item, index) => (
                <ContIconText2
                  key={index}
                  onClick={() => handleMaterialEncimera(item.id)}
                >
                  <IconoMaterial src={item.textura} />
                  <TextoMaterial>{item.nombre}</TextoMaterial>
                </ContIconText2>
              ))}
            </CajaMaterial>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleCerrar}>
              <bold>cerrar {""}</bold>
            </TextoIntro>
          </ContenedorMateriales>
        </MenuMateriales>
      )}
      {maderaVisible && (
        <MenuMateriales
          id='menu inferior'
          initial={{
            height: "0%",
          }}
          animate={{
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
            height: "20%",
          }}
        >
          <ContenedorMateriales>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleAtras}>
              <bold>{"< "}atras</bold>
            </TextoIntro>
            <CajaMaterial>
              {Madera.map((item, index) => (
                <ContIconText2
                  key={index}
                  onClick={() => handleMaterialEncimera(item.id)}
                >
                  <IconoMaterial src={item.textura} />
                  <TextoMaterial>{item.nombre}</TextoMaterial>
                </ContIconText2>
              ))}
            </CajaMaterial>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleCerrar}>
              <bold>cerrar {""}</bold>
            </TextoIntro>
          </ContenedorMateriales>
        </MenuMateriales>
      )}
      {marmolVisible && (
        <MenuMateriales
          id='menu inferior'
          initial={{
            height: "0%",
          }}
          animate={{
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
            height: "20%",
          }}
        >
          <ContenedorMateriales>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleAtras}>
              <bold>{"< "}atras</bold>
            </TextoIntro>
            <CajaMaterial>
              {Marmol.map((item, index) => (
                <ContIconText2
                  key={index}
                  onClick={() => handleMaterialEncimera(item.id)}
                >
                  <IconoMaterial src={item.textura} />
                  <TextoMaterial>{item.nombre}</TextoMaterial>
                </ContIconText2>
              ))}
            </CajaMaterial>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleCerrar}>
              <bold>cerrar {""}</bold>
            </TextoIntro>
          </ContenedorMateriales>
        </MenuMateriales>
      )}
      {metalVisible && (
        <MenuMateriales
          id='menu inferior'
          initial={{
            height: "0%",
          }}
          animate={{
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
            height: "20%",
          }}
        >
          <ContenedorMateriales>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleAtras}>
              <bold>{"< "}atras</bold>
            </TextoIntro>
            <CajaMaterial>
              {Metal.map((item, index) => (
                <ContIconText2
                  key={index}
                  onClick={() => handleMaterialEncimera(item.id)}
                >
                  <IconoMaterial src={item.textura} />
                  <TextoMaterial>{item.nombre}</TextoMaterial>
                </ContIconText2>
              ))}
            </CajaMaterial>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleCerrar}>
              <bold>cerrar {""}</bold>
            </TextoIntro>
          </ContenedorMateriales>
        </MenuMateriales>
      )}
      {piedraVisible && (
        <MenuMateriales
          id='menu inferior'
          initial={{
            height: "0%",
          }}
          animate={{
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
            height: "20%",
          }}
        >
          <ContenedorMateriales>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleAtras}>
              <bold>{"< "}atras</bold>
            </TextoIntro>
            <CajaMaterial>
              {Piedra.map((item, index) => (
                <ContIconText2
                  key={index}
                  onClick={() => handleMaterialEncimera(item.id)}
                >
                  <IconoMaterial src={item.textura} />
                  <TextoMaterial>{item.nombre}</TextoMaterial>
                </ContIconText2>
              ))}
            </CajaMaterial>
            <TextoIntro style={{ cursor: "pointer" }} onClick={handleCerrar}>
              <bold>cerrar {""}</bold>
            </TextoIntro>
          </ContenedorMateriales>
        </MenuMateriales>
      )}
      <ContenedorImagenBase
        id='fondo'
        descripcion='Mueble de madera sin forrar'
      >
        <Imagen src={ImagenBase[0].textura} alt='fondo' />
      </ContenedorImagenBase>
      {Bromo && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[0].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      {Blanco && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[1].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      {Robledo && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[2].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      <ContenedorImagen>
        <Imagen src={materialEncimera} />
      </ContenedorImagen>
      {frenteVisible && (
        <>
          <ContenedorImagen>
            <Imagen src={ImagenFrente[0].textura} alt='frente' />
          </ContenedorImagen>
          <ContenedorImagen>
            <Imagen src={copeteVisible} alt='' />
          </ContenedorImagen>
        </>
      )}
    </ContenedorIntercambiador>
  );
}
