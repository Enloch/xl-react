import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ColecContainer,
  ContentWrapper,
  ImageBoxWrapper,
} from "./acabadosElements";
import { generateAcabados } from "./constructorAcabados";
const AcabadosHome = ({ id, data }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const AcabadosComponents = generateAcabados(data);
  return (
    <>
      <ColecContainer id={id}>
        <ContentWrapper>
          <ImageBoxWrapper>{AcabadosComponents}</ImageBoxWrapper>
        </ContentWrapper>
      </ColecContainer>
    </>
  );
};

export default AcabadosHome;
