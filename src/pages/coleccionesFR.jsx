import React, { useEffect } from "react";
import {
  Colec_Header,
  Colec_Cemento,
} from "../modules/colecciones/fr/01_nuestras_colec/data";
import NuestraColeccionFR from "../modules/colecciones/fr/01_nuestras_colec";
const ColeccionesFR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NuestraColeccionFR {...Colec_Header} {...Colec_Cemento} />
    </>
  );
};

export default ColeccionesFR;
