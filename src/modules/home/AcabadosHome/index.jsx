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
import { Acabados, LinkAcabados } from "./constructorAcabados";
const AcabadosHome = ({ id, titulo, subtitulo }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <ColecContainer id={id}>
        <ContentWrapper>
          <ImageBoxWrapper>{Acabados}</ImageBoxWrapper>
        </ContentWrapper>
      </ColecContainer>
    </>
  );
};

export default AcabadosHome;
