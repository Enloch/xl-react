import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import icono_b from "../../../assets/icons/botones/boton_b.png";
import icono from "../../../assets/icons/botones/boton.png";
import icono_retroceso from "../../../assets/icons/botones/undo-svgrepo-com.svg";
import descarga from "../../../assets/icons/descarga.svg";
import {
  CementoMicrocemento,
  ColorUniforme,
  Madera,
  Marmol,
  Metal,
  Piedra,
  MiniMueble,
} from "./miniaturas";
import generatePDF from "../../../components/PDF/pdfConfig";
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
  Icono2,
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
  const [Arena, setArena] = useState(false);
  const [Blanco, setBlanco] = useState(true);
  const [Bromo, setBromo] = useState(false);
  const [Fume, setFume] = useState(false);
  const [Gris, setGris] = useState(false);
  const [Nature, setNature] = useState(false);
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
  const [imagenMueble, setImagenMueble] = useState(ImagenMueble[1].textura);
  const [imagenFrente, setImagenFrente] = useState(ImagenFrente[0].textura);
  const [miniMueble, setMiniMueble] = useState(MiniMueble[1]);
  const [miniEncimera, setMiniEncimera] = useState(ColorUniforme[4]);
  const [miniFrente, setMiniFrente] = useState(ColorUniforme[4]);

  const handleGeneratePDF = () => {
    console.log("he entrado");
    // Aquí puedes agregar tu lógica para generar el PDF
    const encimera = materialEncimera; // Replace this with the selected type of encimera
    const mueble = imagenMueble; // Replace this with the selected type of mueble
    const frenteActivo = frenteVisible; // Replace this with the selected type of frente activa
    const frente = imagenFrente; // Replace this with the selected type of frente
    const copete = copeteVisible;
    const frenteMini = miniFrente;
    const muebleMini = miniMueble;
    const encimeraMini = miniEncimera;

    generatePDF({
      encimera,
      mueble,
      frenteActivo,
      frente,
      copete,
      frenteMini,
      muebleMini,
      encimeraMini,
    });
  };
  const handleMaterialEncimera = (material, textura) => {
    let cambio = null;
    let cambio2 = null;
    cambio = Encimera.find((item) => item.id === material)?.textura || null;
    cambio2 =
      Encimera.find((item) => item.id === material)?.TexturaCopete || null;
    setMiniEncimera(textura);
    setMiniFrente(textura);
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
    setFume(false);
    setGris(false);
    setNature(false);
    setArena(false);
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
      <Tooltip anchorId={"descarga"} content={"descarga"} />
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
      <Icono2
        id='descarga'
        onClick={() => handleGeneratePDF()}
        src={descarga}
        alt='descarga'
        style={{
          top: "84%",
          left: "94.3%",
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
                  setArena(true);
                  setBlanco(false);
                  setBromo(false);
                  setFume(false);
                  setGris(false);
                  setNature(false);
                  setRobledo(false);
                  setImagenMueble(ImagenMueble[0].textura);
                  setMiniMueble(MiniMueble[0]);
                }}
              >
                <IconoMaterial src={MiniMueble[0].textura} />
                <TextoMaterial>Arena</TextoMaterial>
              </ContIconText2>
              <ContIconText
                onClick={() => {
                  setArena(false);
                  setBlanco(true);
                  setBromo(false);
                  setFume(false);
                  setGris(false);
                  setNature(false);
                  setRobledo(false);
                  setImagenMueble(ImagenMueble[1].textura);
                  setMiniMueble(MiniMueble[1]);
                }}
              >
                <IconoMaterial src={MiniMueble[1].textura} />
                <TextoMaterial>Blanco</TextoMaterial>
              </ContIconText>
              <ContIconText2
                onClick={() => {
                  setArena(false);
                  setBlanco(false);
                  setBromo(true);
                  setFume(false);
                  setGris(false);
                  setNature(false);
                  setRobledo(false);
                  setImagenMueble(ImagenMueble[2].textura);
                  setMiniMueble(MiniMueble[2]);
                }}
              >
                <IconoMaterial src={MiniMueble[2].textura} />
                <TextoMaterial>Bromo</TextoMaterial>
              </ContIconText2>
              <ContIconText2
                onClick={() => {
                  setArena(false);
                  setBlanco(false);
                  setBromo(false);
                  setFume(true);
                  setGris(false);
                  setNature(false);
                  setRobledo(false);
                  setImagenMueble(ImagenMueble[3].textura);
                  setMiniMueble(MiniMueble[3]);
                }}
              >
                <IconoMaterial src={MiniMueble[3].textura} />
                <TextoMaterial>Fume</TextoMaterial>
              </ContIconText2>
              <ContIconText2
                onClick={() => {
                  setArena(false);
                  setBlanco(false);
                  setBromo(false);
                  setFume(false);
                  setGris(true);
                  setNature(false);
                  setRobledo(false);
                  setImagenMueble(ImagenMueble[4].textura);
                  setMiniMueble(MiniMueble[4]);
                }}
              >
                <IconoMaterial src={MiniMueble[4].textura} />
                <TextoMaterial>Gris</TextoMaterial>
              </ContIconText2>
              <ContIconText2
                onClick={() => {
                  setArena(false);
                  setBlanco(false);
                  setBromo(false);
                  setFume(false);
                  setGris(false);
                  setNature(true);
                  setRobledo(false);
                  setImagenMueble(ImagenMueble[5].textura);
                  setMiniMueble(MiniMueble[5]);
                }}
              >
                <IconoMaterial src={MiniMueble[5].textura} />
                <TextoMaterial>Nature</TextoMaterial>
              </ContIconText2>
              <ContIconText2
                onClick={() => {
                  setArena(false);
                  setBlanco(false);
                  setBromo(false);
                  setFume(false);
                  setGris(false);
                  setNature(false);
                  setRobledo(true);
                  setImagenMueble(ImagenMueble[6].textura);
                  setMiniMueble(MiniMueble[6]);
                }}
              >
                <IconoMaterial src={MiniMueble[6].textura} />
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
                  onClick={() => handleMaterialEncimera(item.id, item)}
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
                  onClick={() => handleMaterialEncimera(item.id, item)}
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
                  onClick={() => handleMaterialEncimera(item.id, item)}
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
            height: "auto",
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
                  onClick={() => handleMaterialEncimera(item.id, item)}
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
                  onClick={() => handleMaterialEncimera(item.id, item)}
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
            height: "auto",
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
                  onClick={() => handleMaterialEncimera(item.id, item)}
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
      {Arena && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[0].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      {Blanco && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[1].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      {Bromo && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[2].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      {Fume && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[3].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      {Gris && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[4].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      {Nature && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[5].textura} alt='mueble' />
        </ContenedorImagen>
      )}
      {Robledo && (
        <ContenedorImagen>
          <Imagen src={ImagenMueble[6].textura} alt='mueble' />
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
