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

  const menuMats = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      whileInView={{
        transition: {
          duration: 0.8,
          ease: "easeIn",
        },
        height: "30%",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetAllure(!allureVisible);
              if (frenteSelected && !allureVisible) {
                setTxtF(txtacabados.acAllure);
              }
              if (lateralSelected && !allureVisible) {
                setTxtL(txtacabados.acAllure);
              }
              if (encimeraSelected && !allureVisible) {
                setTxtE(txtacabados.acAllure);
              }
              if (modulosSelected && !allureVisible) {
                setTxtM(txtacabados.acAllure);
              }
            }}
          >
            <IconoMaterial src={iconos.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetBeren(!berenVisible);
              if (frenteSelected && !berenVisible) {
                setTxtF(txtacabados.acBeren);
              }
              if (lateralSelected && !berenVisible) {
                setTxtL(txtacabados.acBeren);
              }
              if (encimeraSelected && !berenVisible) {
                setTxtE(txtacabados.acBeren);
              }
              if (modulosSelected && !berenVisible) {
                setTxtM(txtacabados.acBeren);
              }
            }}
          >
            <IconoMaterial src={iconos.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetBlancborg(!blancborgVisible);
              if (frenteSelected && !blancborgVisible) {
                setTxtF(txtacabados.acBlancB);
              }
              if (lateralSelected && !blancborgVisible) {
                setTxtL(txtacabados.acBlancB);
              }
              if (encimeraSelected && !blancborgVisible) {
                setTxtE(txtacabados.acBlancB);
              }
              if (modulosSelected && !blancborgVisible) {
                setTxtM(txtacabados.acBlancB);
              }
            }}
          >
            <IconoMaterial src={iconos.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetBlancinv(!blancinvVisible);
              if (frenteSelected && !blancinvVisible) {
                setTxtF(txtacabados.acBlancinv);
              }
              if (lateralSelected && !blancinvVisible) {
                setTxtL(txtacabados.acBlancinv);
              }
              if (encimeraSelected && !blancinvVisible) {
                setTxtE(txtacabados.acBlancinv);
              }
              if (modulosSelected && !blancinvVisible) {
                setTxtM(txtacabados.acBlancinv);
              }
            }}
          >
            <IconoMaterial src={iconos.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetBrazil(!brazilVisible);
              if (frenteSelected && !brazilVisible) {
                setTxtF(txtacabados.acBrazil);
              }
              if (lateralSelected && !brazilVisible) {
                setTxtL(txtacabados.acBrazil);
              }
              if (encimeraSelected && !brazilVisible) {
                setTxtE(txtacabados.acBrazil);
              }
              if (modulosSelected && !brazilVisible) {
                setTxtM(txtacabados.acBrazil);
              }
            }}
          >
            <IconoMaterial src={iconos.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetCalacatta(!calacattaVisible);
              if (frenteSelected && !calacattaVisible) {
                setTxtF(txtacabados.acCalacatta);
              }
              if (lateralSelected && !calacattaVisible) {
                setTxtL(txtacabados.acCalacatta);
              }
              if (encimeraSelected && !calacattaVisible) {
                setTxtE(txtacabados.acCalacatta);
              }
              if (modulosSelected && !calacattaVisible) {
                setTxtM(txtacabados.acCalacatta);
              }
            }}
          >
            <IconoMaterial src={iconos.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacatta</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetEme(!emeVisible);
              if (frenteSelected && !emeVisible) {
                setTxtF(txtacabados.acEme);
              }
              if (lateralSelected && !emeVisible) {
                setTxtL(txtacabados.acEme);
              }
              if (encimeraSelected && !emeVisible) {
                setTxtE(txtacabados.acEme);
              }
              if (modulosSelected && !emeVisible) {
                setTxtM(txtacabados.acEme);
              }
            }}
          >
            <IconoMaterial src={iconos.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetKendoc(!kendocVisible);
              if (frenteSelected && !kendocVisible) {
                setTxtF(txtacabados.acKendoC);
              }
              if (lateralSelected && !kendocVisible) {
                setTxtL(txtacabados.acKendoC);
              }
              if (encimeraSelected && !kendocVisible) {
                setTxtE(txtacabados.acKendoC);
              }
              if (modulosSelected && !kendocVisible) {
                setTxtM(txtacabados.acKendoC);
              }
            }}
          >
            <IconoMaterial src={iconos.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetKendol(!kendolVisible);
              if (frenteSelected && !kendolVisible) {
                setTxtF(txtacabados.acKendoL);
              }
              if (lateralSelected && !kendolVisible) {
                setTxtL(txtacabados.acKendoL);
              }
              if (encimeraSelected && !kendolVisible) {
                setTxtE(txtacabados.acKendoL);
              }
              if (modulosSelected && !kendolVisible) {
                setTxtM(txtacabados.acKendoL);
              }
            }}
          >
            <IconoMaterial src={iconos.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetMoma(!momaVisible);
              if (frenteSelected && !momaVisible) {
                setTxtF(txtacabados.acMoma);
              }
              if (lateralSelected && !momaVisible) {
                setTxtL(txtacabados.acMoma);
              }
              if (encimeraSelected && !momaVisible) {
                setTxtE(txtacabados.acMoma);
              }
              if (modulosSelected && !momaVisible) {
                setTxtM(txtacabados.acMoma);
              }
            }}
          >
            <IconoMaterial src={iconos.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetNegro(!negroVisible);
              if (frenteSelected && !negroVisible) {
                setTxtF(txtacabados.acNegro);
              }
              if (lateralSelected && !negroVisible) {
                setTxtL(txtacabados.acNegro);
              }
              if (encimeraSelected && !negroVisible) {
                setTxtE(txtacabados.acNegro);
              }
              if (modulosSelected && !negroVisible) {
                setTxtM(txtacabados.acNegro);
              }
            }}
          >
            <IconoMaterial src={iconos.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetNoonG(!noonGVisible);
              if (frenteSelected && !noonGVisible) {
                setTxtF(txtacabados.acNoonG);
              }
              if (lateralSelected && !noonGVisible) {
                setTxtL(txtacabados.acNoonG);
              }
              if (encimeraSelected && !noonGVisible) {
                setTxtE(txtacabados.acNoonG);
              }
              if (modulosSelected && !noonGVisible) {
                setTxtM(txtacabados.acNoonG);
              }
            }}
          >
            <IconoMaterial src={iconos.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetNoons(!noonsVisible);
              if (frenteSelected && !noonsVisible) {
                setTxtF(txtacabados.acNoonS);
              }
              if (lateralSelected && !noonsVisible) {
                setTxtL(txtacabados.acNoonS);
              }
              if (encimeraSelected && !noonsVisible) {
                setTxtE(txtacabados.acNoonS);
              }
              if (modulosSelected && !noonsVisible) {
                setTxtM(txtacabados.acNoonS);
              }
            }}
          >
            <IconoMaterial src={iconos.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetPaladio(!paladioVisible);
              if (frenteSelected && !paladioVisible) {
                setTxtF(txtacabados.acPaladio);
              }
              if (lateralSelected && !paladioVisible) {
                setTxtL(txtacabados.acPaladio);
              }
              if (encimeraSelected && !paladioVisible) {
                setTxtE(txtacabados.acPaladio);
              }
              if (modulosSelected && !paladioVisible) {
                setTxtM(txtacabados.acPaladio);
              }
            }}
          >
            <IconoMaterial src={iconos.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              setInicio(true);
              SetMateriales(!materialesVisible);
              SetSyrac(!syracVisible);
              if (frenteSelected && !syracVisible) {
                setTxtF(txtacabados.acSyrac);
              }
              if (lateralSelected && !syracVisible) {
                setTxtL(txtacabados.acSyrac);
              }
              if (encimeraSelected && !syracVisible) {
                setTxtE(txtacabados.acSyrac);
              }
              if (modulosSelected && !syracVisible) {
                setTxtM(txtacabados.acSyrac);
              }
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
              opacity: "0",
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              opacity: "1",
              height: "10%",
            }}
          >
            <BotonExpandir
              onClick={() => {
                setInicio(false);
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
              <img
                src={chevron}
                alt='chevron'
                style={{ height: "35%", width: "35%", color: "white" }}
              />
            </BotonExpandir>
            <TextoIntro2>Pulsa para acceder al intercambiaor</TextoIntro2>
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
                duration: 0.8,
                ease: "easeIn",
              },
              height: "18%",
            }}
          >
            <MenuIntrucciones>
              <TextoIntro>Selecciona que partes quieres forrar</TextoIntro>
              <BotonContinuar
                onClick={() => {
                  SetMateriales(!materialesVisible);
                  setIsVisible(!isVisible);
                }}
              >
                <strong>Continuar</strong>
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
                duration: 0.8,
                ease: "easeIn",
              },
              height: "18%",
            }}
          >
            <ContenedorMateriales>
              <TextoIntro>Selecciona el acabado del mueble</TextoIntro>
              <CajaMaterial>
                <ContIconText
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
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
                </ContIconText>
                <ContIconText
                  onClick={() => {
                    SetAnthracita(!Anthracita);
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    setTxtMu(txtacabados.acAntracite);
                    setTxtF(txtacabados.acAntracite);
                    setTxtM(txtacabados.acAntracite);
                    setTxtL(txtacabados.acAntracite);
                    setTxtE(txtacabados.acAntracite);
                  }}
                >
                  <IconoMaterial src={iconos.antracitaIco}></IconoMaterial>
                  <TextoMaterial>Anthracite</TextoMaterial>
                </ContIconText>
                <ContIconText
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetBlanco(!Blanco);
                    setTxtMu(txtacabados.acBlanco);
                    setTxtF(txtacabados.acBlanco);
                    setTxtM(txtacabados.acBlanco);
                    setTxtL(txtacabados.acBlanco);
                    setTxtE(txtacabados.acBlanco);
                  }}
                >
                  <IconoMaterial src={iconos.blancoIco}></IconoMaterial>
                  <TextoMaterial>Blanco</TextoMaterial>
                </ContIconText>
                <ContIconText
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetNordik(!Nordik);
                    setTxtMu(txtacabados.acNordik);
                    setTxtF(txtacabados.acNordik);
                    setTxtM(txtacabados.acNordik);
                    setTxtL(txtacabados.acNordik);
                    setTxtE(txtacabados.acNordik);
                  }}
                >
                  <IconoMaterial src={iconos.nordikIco}></IconoMaterial>
                  <TextoMaterial>Nordik</TextoMaterial>
                </ContIconText>
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
        {frenteSelected && allureVisible && (
          <ContenedorImagen id='pon-alluref' sitio='frontal'>
            <Imagen src={frontales.alluref} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && berenVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.berenf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && blancborgVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.blancborgf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && blancinvVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.blancinvf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && brazilVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.brazilf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && calacattaVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.calacattaf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && emeVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.emef} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && kendocVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.kendoCf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && kendolVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.kendoLf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && momaVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.momaf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && negroVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.negrof} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && noonGVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.noonGf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && noonsVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.noonSf} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && paladioVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.paladiof} alt='frontal' />
          </ContenedorImagen>
        )}
        {frenteSelected && syracVisible && (
          <ContenedorImagen>
            <Imagen src={frontales.syracf} alt='frontal' />
          </ContenedorImagen>
        )}
        {/* ------------------MODULOS------------------ */}
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
