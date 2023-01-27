import React, { useEffect } from "react";
import {
  PagiColorStyle1,
  PagiColorStyle3,
  PagiColorStyle4,
} from "../01_nuestras_colec/constructorPaginas";

export const BasicBlanco = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiColorStyle4[0]}</>;
};
export const BasicNegro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiColorStyle1[1]}</>;
};
export const EraDeepB = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiColorStyle1[2]}</>;
};
export const EraGrey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiColorStyle3[3]}</>;
};
export const EraInfinityW = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiColorStyle1[4]}</>;
};
export const EraWhite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiColorStyle1[5]}</>;
};
export const PureBlack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiColorStyle1[6]}</>;
};
export const PureWhite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{PagiColorStyle1[7]}</>;
};
