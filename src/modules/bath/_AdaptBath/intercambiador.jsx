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
} from "./intercambiadorStyles";
import { frontales, modulos, laterales } from "./dataIntercambiador";
const Intercambiador = ({ base }) => {
  const [isVisible, setIsVisible] = useState(false);
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
              height: "10%",
            }}
          >
            <PestañaMenu></PestañaMenu>
            <MenuIntrucciones>
              <button onClick={() => setIsVisible(!isVisible)}>hola</button>
              <BotonContinuar>Continuar</BotonContinuar>
            </MenuIntrucciones>
          </ContenedorMenu>
        )}
        <ContenedorImagenBase id='fondo' descripcion='Mueble lacado en blanco.'>
          <Imagen src={base} alt='fondo' />
        </ContenedorImagenBase>
        {/* <ContenedorImagen
        id='pon-muebleFondo'
        descripcion='Mueble lacado en blanco.'
      ></ContenedorImagen> */}
        <ContenedorImagen
          id='pon-alluref'
          sitio='frontal'
          //style={{ visibility: "visible" }}
        >
          <Imagen src={frontales.alluref} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-berenf'
          sitio='frontal'
          //style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.berenf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-blancborgf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.blancborgf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-blancinvf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.blancinvf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-brazilf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.brazilf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-calacattaf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.calacattaf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-emef'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.emef} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-kendoCf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.kendoCf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-kendoLf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.kendoLf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-momaf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.momaf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-negrof'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.negrof} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-noonGf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.noonGf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-noonSf'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.noonSf} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-paladiof'
          sitio='frontal'
          // style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.paladiof} alt='frontal' />
        </ContenedorImagen>
        <ContenedorImagen
          id='pon-syracf'
          sitio='frontal'
          //style={{ visibility: "visible" }}
          descripcion='Mueble en madera de roble malla fina.'
        >
          <Imagen src={frontales.syracf} alt='frontal' />
        </ContenedorImagen>
      </ContenedorIntercambiador>
    </>
  );
};

export default Intercambiador;
