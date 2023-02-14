import React, { useState } from "react";
import {
  MenuIntContainter,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  TextoPrevio,
  TextoIntro2,
} from "./menuIntStyle";
import icono from "../../../assets/icons/botones/boton.png";
import icono_b from "../../../assets/icons/botones/boton_b.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import config from "./indicadores";
import InterGrande from "./InterGrande";
import {InterGrandeObj} from "./dataInterGrande";

const MenuInteractivo = ({ id, titulo, imgheader, subtitulo, alt }) => {
  return (
    <>
      <MenuIntContainter id={id}>
        <Heading
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeIn" },
          }}
          overflow='hidden'
          viewport={{ once: true }}
        >
          {titulo}
        </Heading>
        <Subtitle
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeIn" },
          }}
          overflow='hidden'
          viewport={{ once: true }}
        >
          {subtitulo}
        </Subtitle>
      </MenuIntContainter>
      <ImgWrap>
        <InterGrande {...InterGrandeObj} />
        {/* <Img
          src={imgheader}
          alt={alt}
          initial={{ opacity: 0.1 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, ease: "easeIn" },
          }}
          overflow='hidden'
          viewport={{ once: true }}
        />
        <TextoPrevio
          id='expansor'
          initial={{ height: "0%" }}
          whileInView={{
            height: "100%",
            transition: { duration: 0.3, ease: "easeIn" },
          }}
        >
          <TextoIntro2>
            Próximamente: <br />
            Intercambiador baño completo
          </TextoIntro2>
        </TextoPrevio> */}
      </ImgWrap>
    </>
  );
};

export default MenuInteractivo;
