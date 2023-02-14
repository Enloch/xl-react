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
} from "./InterGrandeElementos";

import {
  FRONTALES,
  ACABADOMUEBLE,
  PAVIMENTOS,
  PLATOS,
  REVESTIMIENTOS,
  ENCIMERAXL,
  XLFRONTALCAJON,
  FRENTESXLMODULO,
  XLLATERAL,
  XLLAVABO,
  ICONOS,
  txtacabados,
} from "./dataInterGrande";
import icono_b from "../../../assets/icons/botones/boton_b.png";
const InterGrande = ({ base }) => {
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
  const [frontalSelected, SetFrontal] = useState(false);
  const [frenteSelected, SetFrente] = useState(false);
  const [modulosSelected, SetModulos] = useState(false);
  const [lateralSelected, SetLateral] = useState(false);
  const [encimeraSelected, SetEncimera] = useState(false);
  //Acabados Mueble
  const [Natural, SetNatural] = useState(false);
  const [Antracita, SetAntracita] = useState(false);
  const [Blanco, SetBlanco] = useState(false);
  const [Nordik, SetNordik] = useState(false);
  //acabados
  const [txtfrente, setTxtF] = useState(txtacabados.acNatural);
  const [txtmodulo, setTxtM] = useState(txtacabados.acNatural);
  const [txtlateral, setTxtL] = useState(txtacabados.acNatural);
  const [txtencimera, setTxtE] = useState(txtacabados.acNatural);
  const [txtmueble, setTxtMu] = useState(txtacabados.acNatural);
  const [txtpavimento, setTxtP] = useState(txtacabados.acBeren);

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

  const clickAcabado = (finish) => {
    setIsVisible(!isVisible);
    setMuebleVisible(!muebleVisible);
    SetNatural(finish === "Natural");
    SetAntracita(finish === "Antracita");
    SetBlanco(finish === "Blanco");
    SetNordik(finish === "Nordik");
    setTxtMu(txtacabados[`ac${finish}`]);
    setTxtF(txtacabados[`ac${finish}`]);
    setTxtM(txtacabados[`ac${finish}`]);
    setTxtL(txtacabados[`ac${finish}`]);
    setTxtE(txtacabados[`ac${finish}`]);
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
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Beren", SetBeren, berenVisible);
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Blancborg", SetBlancborg, blancborgVisible);
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Blancinv", SetBlancinv, blancinvVisible);
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Brazil", SetBrazil, brazilVisible);
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Calacatta", SetCalacatta, calacattaVisible);
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacatta</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Eme", SetEme, emeVisible);
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("KendoC", SetKendoc, kendocVisible);
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("KendoL", SetKendol, kendolVisible);
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Moma", SetMoma, momaVisible);
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Negro", SetNegro, negroVisible);
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("NoonG", SetNoonG, noonGVisible);
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("NoonS", SetNoons, noonsVisible);
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Paladio", SetPaladio, paladioVisible);
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick("Syrac", SetSyrac, syracVisible);
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
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
              SetAntracita(false);
              SetBlanco(false);
              SetNordik(false);
              setTxtMu(txtacabados.acNatural);
              setTxtF(txtacabados.acNatural);
              setTxtM(txtacabados.acNatural);
              setTxtL(txtacabados.acNatural);
              setTxtE(txtacabados.acNatural);
            }}
          >
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
                <bold>Selecciona las partes que quieres cambiar</bold>
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
                <ContIconText2 onClick={() => clickAcabado("Natural")}>
                  <IconoMaterial src={ICONOS.naturalIco} />
                  <TextoMaterial>Natural</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Antracita")}>
                  <IconoMaterial src={ICONOS.antracitaIco} />
                  <TextoMaterial>Antracita</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Blanco")}>
                  <IconoMaterial src={ICONOS.blancoIco} />
                  <TextoMaterial>Blanco</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Nordik")}>
                  <IconoMaterial src={ICONOS.nordikIco} />
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
        {Antracita && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.anthraciteM} alt='mueble' />
          </ContenedorImagen>
        )}
        {Blanco && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.blancoM} alt='mueble' />
          </ContenedorImagen>
        )}
        {Natural && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.naturalM} alt='mueble' />
          </ContenedorImagen>
        )}
      </ContenedorIntercambiador>
      <WrapperTexto>
        <TxtSubimagen>
          acabado del mueble: <strong>{txtmueble}</strong> //&nbsp;
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
          modulo basyk frente: <strong>{txtmodulo}</strong> //&nbsp;
        </TxtSubimagen>
      </WrapperTexto>
    </>
  );
};
export default InterGrande;
