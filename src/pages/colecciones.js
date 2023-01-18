import React, { useEffect } from "react";
import {
  Colec_Header,
  Colec_Cemento,
} from "../modules/colecciones/01_nuestras_colec/data";
import NuestraColeccion from "../modules/colecciones/01_nuestras_colec";
const Colecciones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NuestraColeccion {...Colec_Header} {...Colec_Cemento} />
    </>
  );
};

export default Colecciones;
