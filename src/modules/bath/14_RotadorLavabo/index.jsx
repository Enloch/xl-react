import React from "react";
import { ImgWrap, Img } from "./rotadorStyle";
const imagen = require("../../../assets/images/bath/rotador lavabo.png");
const RotadorLavabo = (id, alt) => {
  return (
    <ImgWrap id={id}>
      <Img src={imagen} alt={alt} />
    </ImgWrap>
  );
};

export default RotadorLavabo;
