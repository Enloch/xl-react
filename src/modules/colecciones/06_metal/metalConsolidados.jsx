import React, { useEffect } from "react";
import {
  PagiMetalStyle1,
  PagiMetalStyle2,
  PagiMetalStyle3,
} from "../01_nuestras_colec/constructorPaginas";

export const DistritoAluminio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiMetalStyle1[0]}</>;
};
export const DistritoMarfil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiMetalStyle1[1]}</>;
};
export const LavaIron = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiMetalStyle1[2]}</>;
};
