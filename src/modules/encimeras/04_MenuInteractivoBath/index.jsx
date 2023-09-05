import React from "react";
import { MenuIntContainter, Heading, Subtitle, ImgWrap } from "./menuIntStyle";
import "react-tooltip/dist/react-tooltip.css";
import InterGrande from "./InterGrande";
// import { InterGrandeObj } from "./dataInterGrande";

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
        {/* <InterGrande {...InterGrandeObj} /> */}
        <InterGrande />
      </ImgWrap>
    </>
  );
};

export default MenuInteractivo;
