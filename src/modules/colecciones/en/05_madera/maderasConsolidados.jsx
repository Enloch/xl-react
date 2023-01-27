import React, { useEffect } from "react";
import {
  PagiMaderaStyle1,
  PagiMaderaStyle2,
} from "../01_nuestras_colec/constructorPaginas";

export const CanadaEN = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiMaderaStyle1[0]}</>;
};
export const IratiAlbedoEN = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiMaderaStyle2[1]}</>;
};
