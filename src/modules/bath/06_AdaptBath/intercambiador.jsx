/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";

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
} from "./intercambiadorStyles";
import icono_b from "../../../assets/icons/botones/boton_b.png";
import chevron from "../../../assets/icons/botones/arrow-up.png";
import {
  frontales,
  modulos,
  laterales,
  iconos,
  txtacabados,
  tops,
  acabadosMueble,
} from "./dataIntercambiador";
const Intercambiador = ({ base }) => {
  const [inicio, setInicio] = useState(true);
  const [inicio2, setInicio2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [muebleVisible, setMuebleVisible] = useState(false);
  const [materialesVisible, SetMateriales] = useState(false);
  const [allureVisible, SetAllure] = useState(false);
  const [berenVisible, SetBeren] = useState(false);
  const [blancborgVisible, SetBlancborg] = useState(false);
  const [blancinvVisible, SetBlancinv] = useState(false);
  const [brazilVisible, SetBrazil] = useState(false);
  const [calacattaVisible, SetCalacatta] = useState(false);
  const [emeVisible, SetEme] = useState(false);
  const [kendocVisible, SetKendoc] = useState(false);
  const [kendolVisible, SetKendol] = useState(false);
  const [momaVisible, SetMoma] = useState(false);
  const [negroVisible, SetNegro] = useState(false);
  const [noonGVisible, SetNoonG] = useState(false);
  const [noonsVisible, SetNoons] = useState(false);
  const [paladioVisible, SetPaladio] = useState(false);
  const [syracVisible, SetSyrac] = useState(false);
  const [frenteSelected, SetFrente] = useState(false);
  const [modulosSelected, SetModulos] = useState(false);
  const [lateralSelected, SetLateral] = useState(false);
  const [encimeraSelected, SetEncimera] = useState(false);
  //Acabados Mueble
  const [Natural, SetNatural] = useState(false);
  const [Anthracita, SetAnthracita] = useState(false);
  const [Blanco, SetBlanco] = useState(false);
  const [Nordik, SetNordik] = useState(false);
  //acabados
  const [txtfrente, setTxtF] = useState(txtacabados.acNatural);
  const [txtmodulo, setTxtM] = useState(txtacabados.acNatural);
  const [txtlateral, setTxtL] = useState(txtacabados.acNatural);
  const [txtencimera, setTxtE] = useState(txtacabados.acNatural);
  const [txtmueble, setTxtMu] = useState(txtacabados.acNatural);

  const handleClick = (acabado, setFunc, visible) => {
    setInicio2(true);
    SetMateriales(!materialesVisible);
    setFunc(!visible);
    if (frenteSelected && !visible) {
      setTxtF(txtacabados[`ac${acabado}`]);
    }
    if (lateralSelected && !visible) {
      setTxtL(txtacabados[`ac${acabado}`]);
    }
    if (encimeraSelected && !visible) {
      setTxtE(txtacabados[`ac${acabado}`]);
    }
    if (modulosSelected && !visible) {
      setTxtM(txtacabados[`ac${acabado}`]);
    }
  };
  const frontalesArray = [
    { name: "alluref", isVisible: allureVisible },
    { name: "berenf", isVisible: berenVisible },
    { name: "blancborgf", isVisible: blancborgVisible },
    { name: "blancinvf", isVisible: blancinvVisible },
    { name: "brazilf", isVisible: brazilVisible },
    { name: "calacattaf", isVisible: calacattaVisible },
    { name: "emef", isVisible: emeVisible },
    { name: "kendoCf", isVisible: kendocVisible },
    { name: "kendoLf", isVisible: kendolVisible },
    { name: "momaf", isVisible: momaVisible },
    { name: "negrof", isVisible: negroVisible },
    { name: "noonGf", isVisible: noonGVisible },
    { name: "noonSf", isVisible: noonsVisible },
    { name: "paladiof", isVisible: paladioVisible },
    { name: "syracf", isVisible: syracVisible },
  ];
  const modulosArray = [
    { name: "allurem", isVisible: allureVisible },
    { name: "berenm", isVisible: berenVisible },
    { name: "blancborgm", isVisible: blancborgVisible },
    { name: "blancinvm", isVisible: blancinvVisible },
    { name: "brazilm", isVisible: brazilVisible },
    { name: "calacattam", isVisible: calacattaVisible },
    { name: "emem", isVisible: emeVisible },
    { name: "kendoCm", isVisible: kendocVisible },
    { name: "kendoLm", isVisible: kendolVisible },
    { name: "momam", isVisible: momaVisible },
    { name: "negrom", isVisible: negroVisible },
    { name: "noonGm", isVisible: noonGVisible },
    { name: "noonSm", isVisible: noonsVisible },
    { name: "paladiom", isVisible: paladioVisible },
    { name: "syracm", isVisible: syracVisible },
  ];
  const menuMats = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      whileInView={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick("Allure", SetAllure, allureVisible);
            }}
          >
            <IconoMaterial src={iconos.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Beren", SetBeren, berenVisible);
            }}
          >
            <IconoMaterial src={iconos.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Blancborg", SetBlancborg, blancborgVisible);
            }}
          >
            <IconoMaterial src={iconos.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Blancinv", SetBlancinv, blancinvVisible);
            }}
          >
            <IconoMaterial src={iconos.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Brazil", SetBrazil, brazilVisible);
            }}
          >
            <IconoMaterial src={iconos.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Calacatta", SetCalacatta, calacattaVisible);
            }}
          >
            <IconoMaterial src={iconos.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacatta</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Eme", SetEme, emeVisible);
            }}
          >
            <IconoMaterial src={iconos.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("KendoC", SetKendoc, kendocVisible);
            }}
          >
            <IconoMaterial src={iconos.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("KendoL", SetKendol, kendolVisible);
            }}
          >
            <IconoMaterial src={iconos.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Moma", SetMoma, momaVisible);
            }}
          >
            <IconoMaterial src={iconos.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Negro", SetNegro, negroVisible);
            }}
          >
            <IconoMaterial src={iconos.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("NoonG", SetNoonG, noonGVisible);
            }}
          >
            <IconoMaterial src={iconos.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("NoonS", SetNoons, noonsVisible);
            }}
          >
            <IconoMaterial src={iconos.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Paladio", SetPaladio, paladioVisible);
            }}
          >
            <IconoMaterial src={iconos.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Syrac", SetSyrac, syracVisible);
            }}
          >
            <IconoMaterial src={iconos.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const iconosSeleccion = (
    <ContenedorIconos>
      <Icono1
        onClick={() => {
          SetModulos(!modulosSelected);
        }}
        src={icono_b}
        alt='modulo'
        style={{
          top: "40%",
          left: "17%",
        }}
      />
      <Icono1
        onClick={() => {
          SetEncimera(!encimeraSelected);
          SetLateral(false);
        }}
        src={icono_b}
        alt='encimera'
        style={{
          top: "45%",
          left: "72%",
        }}
      />
      <Icono1
        onClick={() => {
          SetFrente(!frenteSelected);
        }}
        src={icono_b}
        alt='frente'
        style={{
          top: "70%",
          left: "65%",
        }}
      />
      {encimeraSelected && (
        <Icono1
          onClick={() => {
            SetLateral(!lateralSelected);
          }}
          src={icono_b}
          alt='lateral'
          style={{
            top: "70%",
            left: "32%",
          }}
        />
      )}
    </ContenedorIconos>
  );
  return (
    <>
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
              setMuebleVisible(!muebleVisible);
            }}
          >
            <TextoIntro2>Pulsa para acceder al configurador</TextoIntro2>
          </ContenedorExpansor>
        )}
        {inicio2 && (
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
              height: "15%",
            }}
            onClick={() => {
              setInicio(false);
              setInicio2(false);
              setMuebleVisible(!muebleVisible);
              SetModulos(false);
              SetFrente(false);
              SetLateral(false);
              SetEncimera(false);
              SetAllure(false);
              SetBeren(false);
              SetBlancborg(false);
              SetBlancinv(false);
              SetBrazil(false);
              SetCalacatta(false);
              SetEme(false);
              SetKendoc(false);
              SetKendol(false);
              SetMoma(false);
              SetNegro(false);
              SetNoonG(false);
              SetNoons(false);
              SetPaladio(false);
              SetSyrac(false);
              SetNatural(false);
              SetAnthracita(false);
              SetBlanco(false);
              SetNordik(false);
              setTxtMu(txtacabados.acNatural);
              setTxtF(txtacabados.acNatural);
              setTxtM(txtacabados.acNatural);
              setTxtL(txtacabados.acNatural);
              setTxtE(txtacabados.acNatural);
            }}
          >
            {/* <img
              src={chevron}
              alt='chevron'
              style={{
                scale: "0.5",
                // height: "35%",
                // width: "20%",
                color: "#fff",
                filter: "invert(100%)",
              }}
            /> */}
            <TextoIntro2>Pulsa para acceder al configurador</TextoIntro2>
          </ContenedorExpansor>
        )}
        {isVisible && (
          <ContenedorMenu
            id='menu inferior'
            initial={{
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
              height: "20%",
            }}
          >
            <MenuIntrucciones>
              <BotonContinuar
                onClick={() => {
                  setIsVisible(!isVisible);
                  setMuebleVisible(!muebleVisible);
                  SetLateral(false);
                  SetEncimera(false);
                  SetModulos(false);
                  SetFrente(false);
                }}
              >
                <strong>{"<"} atras</strong>
              </BotonContinuar>
              <TextoIntro>
                <bold>Selecciona que partes quieres forrar</bold>
              </TextoIntro>
              <BotonContinuar
                onClick={() => {
                  SetMateriales(!materialesVisible);
                  setIsVisible(!isVisible);
                }}
              >
                <strong>continuar {">"}</strong>
              </BotonContinuar>
            </MenuIntrucciones>
          </ContenedorMenu>
        )}

        {muebleVisible && (
          <MenuMateriales
            id='menu inferior'
            initial={{
              height: "0%",
            }}
            whileInView={{
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
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetAnthracita(false);
                    SetBlanco(false);
                    SetNordik(false);
                    SetNatural(!Natural);
                    setTxtMu(txtacabados.acNatural);
                    setTxtF(txtacabados.acNatural);
                    setTxtM(txtacabados.acNatural);
                    setTxtL(txtacabados.acNatural);
                    setTxtE(txtacabados.acNatural);
                  }}
                >
                  <IconoMaterial src={iconos.naturalIco}></IconoMaterial>
                  <TextoMaterial>Natural</TextoMaterial>
                </ContIconText2>
                <ContIconText2
                  onClick={() => {
                    SetAnthracita(!Anthracita);
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetNordik(false);
                    SetNatural(false);
                    SetBlanco(false);
                    setTxtMu(txtacabados.acAntracite);
                    setTxtF(txtacabados.acAntracite);
                    setTxtM(txtacabados.acAntracite);
                    setTxtL(txtacabados.acAntracite);
                    setTxtE(txtacabados.acAntracite);
                  }}
                >
                  <IconoMaterial src={iconos.antracitaIco}></IconoMaterial>
                  <TextoMaterial>Anthracite</TextoMaterial>
                </ContIconText2>
                <ContIconText2
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetBlanco(!Blanco);
                    SetNordik(false);
                    SetNatural(false);
                    SetAnthracita(false);
                    setTxtMu(txtacabados.acBlanco);
                    setTxtF(txtacabados.acBlanco);
                    setTxtM(txtacabados.acBlanco);
                    setTxtL(txtacabados.acBlanco);
                    setTxtE(txtacabados.acBlanco);
                  }}
                >
                  <IconoMaterial src={iconos.blancoIco}></IconoMaterial>
                  <TextoMaterial>Blanco</TextoMaterial>
                </ContIconText2>
                <ContIconText2
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetNordik(!Nordik);
                    SetAnthracita(false);
                    SetBlanco(false);
                    SetNatural(false);
                    setTxtMu(txtacabados.acNordik);
                    setTxtF(txtacabados.acNordik);
                    setTxtM(txtacabados.acNordik);
                    setTxtL(txtacabados.acNordik);
                    setTxtE(txtacabados.acNordik);
                  }}
                >
                  <IconoMaterial src={iconos.nordikIco}></IconoMaterial>
                  <TextoMaterial>Nordik</TextoMaterial>
                </ContIconText2>
              </CajaMaterial>
            </ContenedorMateriales>
          </MenuMateriales>
        )}
        {materialesVisible && menuMats}

        {isVisible && iconosSeleccion}
        <ContenedorImagenBase
          id='fondo'
          descripcion='Mueble de madera sin forrar'
        >
          <Imagen src={base} alt='fondo' />
        </ContenedorImagenBase>
        {/* ------------------BASE MUEBLES------------------ */}
        {Anthracita && (
          <ContenedorImagen>
            <Imagen src={acabadosMueble.MuebleAntracite} alt='mueble' />
          </ContenedorImagen>
        )}
        {Blanco && (
          <ContenedorImagen>
            <Imagen src={acabadosMueble.MuebleBlanco} alt='mueble' />
          </ContenedorImagen>
        )}
        {Nordik && (
          <ContenedorImagen>
            <Imagen src={acabadosMueble.MuebleNordik} alt='mueble' />
          </ContenedorImagen>
        )}
        {/* ------------------Rojo------------------ */}
        {frenteSelected && (
          <ContenedorImagen id='pon-alluref' sitio='frontal'>
            <Imagen
              src={frontales.rojof}
              alt='frontal'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {modulosSelected && (
          <ContenedorImagen id='pon-alluref' sitio='modulo'>
            <Imagen src={modulos.rojom} alt='modulo' style={{ opacity: 0.3 }} />
          </ContenedorImagen>
        )}
        {encimeraSelected && (
          <ContenedorImagen id='pon-alluref' sitio='lateral'>
            <Imagen
              src={laterales.rojol}
              alt='lateral'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {lateralSelected && (
          <ContenedorImagen id='pon-alluref' sitio='tapa'>
            <Imagen src={laterales.rojot} alt='tapa' style={{ opacity: 0.3 }} />
          </ContenedorImagen>
        )}

        {/* ------------------FRONTALES------------------ */}
        {frenteSelected &&
          frontalesArray.map((frontal) => {
            if (frontal.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={frontales[frontal.name]} alt='frontal' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------MODULOS------------------ */}
        {modulosSelected &&
          modulosArray.map((modulo) => {
            if (modulo.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={modulos[modulo.name]} alt='frontal' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {modulosSelected && allureVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.allurem} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && berenVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.berenm} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && blancborgVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.blancborgm} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && blancinvVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.blancinvm} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && brazilVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.brazilm} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && calacattaVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.calacattam} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && emeVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.emem} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && kendocVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.kendoCm} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && kendolVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.kendoLm} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && momaVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.momam} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && negroVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.negrom} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && noonGVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.noonGm} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && noonsVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.noonSm} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && paladioVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.paladiom} alt='modulo' />
          </ContenedorImagen>
        )}
        {modulosSelected && syracVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.syracm} alt='modulo' />
          </ContenedorImagen>
        )}

        {/* ------------------encimera + lateral------------------ */}
        {encimeraSelected && lateralSelected && allureVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.allurel} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && berenVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.berenl} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && blancborgVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.blancborgl} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && blancinvVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.blancinvl} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && brazilVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.brazill} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && calacattaVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.calacattal} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && emeVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.emel} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && kendocVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.kendoCl} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && kendolVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.kendoLl} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && momaVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.momal} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && negroVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.negrol} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && noonGVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.noonGl} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && noonsVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.noonSl} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && paladioVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.paladiol} alt='combo' />
          </ContenedorImagen>
        )}
        {encimeraSelected && lateralSelected && syracVisible && (
          <ContenedorImagen>
            <Imagen src={laterales.syracl} alt='combo' />
          </ContenedorImagen>
        )}
        {/* ------------------tops------------------ */}

        {encimeraSelected && !lateralSelected && allureVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topAllure} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && berenVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topBeren} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && blancborgVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topBlancborg} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && blancinvVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topBlancinv} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && brazilVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topBrazil} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && calacattaVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topCalacatta} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && emeVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topEme} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && kendocVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topKendoC} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && kendolVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topKendoL} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && momaVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topMoma} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && negroVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topNegro} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && noonGVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topNoonG} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && noonsVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topNoonS} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && paladioVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topPaladio} alt='encimera' />
          </ContenedorImagen>
        )}
        {encimeraSelected && !lateralSelected && syracVisible && (
          <ContenedorImagen>
            <Imagen src={tops.topSyrac} alt='encimera' />
          </ContenedorImagen>
        )}
        {/* ------------------TODO Revisar------------------ */}
        {/* {!lateralSelected && encimeraSelected && (
          <ContenedorImagen>
            <Imagen src={laterales.maderal} alt='encimera' />
          </ContenedorImagen>
        )} */}
      </ContenedorIntercambiador>
      <WrapperTexto>
        <TxtSubimagen>
          acabado del mueble: <strong>{txtmueble}</strong>
          //&nbsp;
        </TxtSubimagen>
        <TxtSubimagen>
          mueble basyk frente: <strong>{txtfrente}</strong> //&nbsp;{" "}
        </TxtSubimagen>
        <TxtSubimagen>
          mueble basyk encimera: <strong>{txtencimera}</strong> //&nbsp;{" "}
        </TxtSubimagen>
        <TxtSubimagen>
          mueble basyk lateral: <strong>{txtlateral}</strong> //&nbsp;
        </TxtSubimagen>
        <TxtSubimagen>
          modulo basyk frente: <strong>{txtmodulo}</strong>
          //&nbsp;
        </TxtSubimagen>
      </WrapperTexto>
    </>
  );
};

export default Intercambiador;
