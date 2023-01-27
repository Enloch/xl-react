import React from "react";
import { ImgWrap, Img } from "./intercambiadorElements";
const imagen = require("../../../assets/images/bath/intercambiador_forrado.png");
const InterForrado = (id, alt) => {
  return (
    <ImgWrap id={id}>
      <Img src={imagen} alt={alt} />
    </ImgWrap>
  );
};

export default InterForrado;
