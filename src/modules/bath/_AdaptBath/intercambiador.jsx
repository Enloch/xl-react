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
} from "./intercambiadorStyles";
import icono_b from "../../../assets/icons/botones/boton_b.png";
import { frontales, modulos, laterales } from "./dataIntercambiador";
const Elementos = [{ id: 1 }];
const Intercambiador = ({ base }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [AllureVisible, SetAllure] = useState(false);
  const [BerenVisibe, SetBeren] = useState(false);
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
  return (
    <>
      <ContenedorIntercambiador>
        <BotonExpandir onClick={() => setIsVisible(!isVisible)}>
          ^
        </BotonExpandir>
        {isVisible && (
          <ContenedorMenu
            id='menu lateral'
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
              <BotonContinuar>
                <strong>Continuar</strong>
              </BotonContinuar>
            </MenuIntrucciones>
          </ContenedorMenu>
        )}
        {isVisible && (
          <ContenedorIconos>
            <Icono1
              src={icono_b}
              alt='modulo'
              style={{
                top: "40%",
                left: "17%",
              }}
            />
            <Icono1
              src={icono_b}
              alt='encimera'
              style={{
                top: "45%",
                left: "72%",
              }}
            />
            <Icono1
              src={icono_b}
              alt='frente'
              style={{
                top: "70%",
                left: "65%",
              }}
            />
          </ContenedorIconos>
        )}
        <ContenedorImagenBase id='fondo' descripcion='Mueble lacado en blanco.'>
          <Imagen src={base} alt='fondo' />
        </ContenedorImagenBase>
        <ContenedorImagen id='pon-alluref' sitio='frontal'>
          <Imagen src={frontales.alluref} alt='frontal' />
        </ContenedorImagen>
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
      </ContenedorIntercambiador>
    </>
  );
};

export default Intercambiador;
