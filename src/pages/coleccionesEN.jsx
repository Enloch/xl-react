import React, { useEffect } from "react";
import {
  Colec_Header,
  Colec_Cemento,
} from "../modules/colecciones/en/01_nuestras_colec/data";
import NuestraColeccionEN from "../modules/colecciones/en/01_nuestras_colec";
const ColeccionesEN = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NuestraColeccionEN {...Colec_Header} {...Colec_Cemento} />
    </>
  );
};

export default ColeccionesEN;
