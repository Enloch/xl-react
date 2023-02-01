import React, { useState } from "react";

import {
  ContenedorIntercambiador,
  ContenedorImagenBase,
  ContenedorImagen,
  Imagen,
  ContenedorMenu,
  PestañaMenu,
  MenuIntrucciones,
  BotonExpandir,
  BotonContinuar,
  TextoIntro,
  ContenedorIconos,
  Icono1,
  MenuMateriales,
  ContenedorMateriales,
  IconoMaterial,
} from "./intercambiadorStyles";
import icono_b from "../../../assets/icons/botones/boton_b.png";
import chevron from "../../../assets/icons/botones/arrow-up.png";
import { frontales, modulos, laterales, iconos } from "./dataIntercambiador";
const Elementos = [{ id: 1 }];
const Intercambiador = ({ base }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [allureVisible, SetAllure] = useState(false);
  const [berenVisibe, SetBeren] = useState(false);
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
  const [rojoSelected, SetRojo] = useState(false);
  const [frenteSelected, SetFrente] = useState(false);
  const [modulosSelected, SetModulos] = useState(false);
  const [lateralSelected, SetLateral] = useState(false);
  const [encimeraSelected, SetEncimera] = useState(false);
  return (
    <>
      <ContenedorIntercambiador>
        <BotonExpandir onClick={() => setIsVisible(!isVisible)}>
          <img
            src={chevron}
            alt='chevron'
            style={{ height: "35%", width: "35%" }}
          />
        </BotonExpandir>
        {isVisible && (
          <ContenedorMenu
            id='menu inferior'
            initial={{
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              height: "12%",
            }}
          >
            <MenuIntrucciones>
              <TextoIntro>Selecciona que partes quieres forrar</TextoIntro>
              <BotonContinuar onClick={() => setIsVisible(!isVisible)}>
                <strong>Continuar</strong>
              </BotonContinuar>
            </MenuIntrucciones>
          </ContenedorMenu>
        )}
        <MenuMateriales>
          <ContenedorMateriales
            id='menu material'
            initial={{
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              height: "12%",
            }}
          >
            <IconoMaterial></IconoMaterial>
          </ContenedorMateriales>
        </MenuMateriales>
        {isVisible && (
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
          </ContenedorIconos>
        )}
        <ContenedorImagenBase
          id='fondo'
          descripcion='Mueble de madera sin forrar'
        >
          <Imagen src={base} alt='fondo' />
        </ContenedorImagenBase>
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
        {/* <ContenedorImagen>
          <Imagen src={frontales.berenf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.blancborgf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.blancinvf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.brazilf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.calacattaf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.emef} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.kendoCf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.kendoLf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.momaf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.negrof} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.noonGf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.noonSf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.paladiof} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen>
          <Imagen src={frontales.syracf} alt='frontal' />
        </ContenedorImagen> */}
        {/* ------------------MODULOS------------------ */}
        {modulosSelected && allureVisible && (
          <ContenedorImagen>
            <Imagen src={modulos.allurem} alt='modulo' />
          </ContenedorImagen>
        )}
      </ContenedorIntercambiador>
    </>
  );
};

export default Intercambiador;
