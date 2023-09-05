import React, { useEffect } from "react";
import {
  PagiMetalStyle1,
  PagiMetalStyle2,
  PagiMetalStyle3,
} from "../01_nuestras_colec/constructorPaginas";

export const DistritoAluminioEN = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiMetalStyle1[0]}</>;
};
export const DistritoMarfilEN = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiMetalStyle1[1]}</>;
};
export const LavaIronEN = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiMetalStyle1[2]}</>;
};
