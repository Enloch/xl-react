import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ColecContainer,
  ContentWrapper,
  SubtitleWrapper,
  Heading,
  Subtitle,
  ImageBoxWrapper,
  LinkBox,
  LinkHeader,
} from "./acabadosElements";
import { generateAcabados, generateLinkAcabados } from "./constructorAcabados";
const AcabadosHome = ({ id, titulo, subtitulo, data }) => {
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
