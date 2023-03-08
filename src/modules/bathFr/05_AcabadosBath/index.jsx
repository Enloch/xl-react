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
const AcabadosBath = ({ id, titulo, subtitulo }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <ColecContainer id={id}>
        <ContentWrapper>
          <Heading
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              x: 0,
              opacity: 1,
            }}
            overflow='hidden'
            viewport={{ once: true }}
          >
            {titulo}
          </Heading>
          <SubtitleWrapper>
            <Subtitle>{subtitulo[0]}</Subtitle>
            <Subtitle>{subtitulo[1]}</Subtitle>
            <Subtitle>{subtitulo[2]}</Subtitle>
            <Subtitle>{subtitulo[3]}</Subtitle>
            <Subtitle>{subtitulo[4]}</Subtitle>
            <Subtitle>{subtitulo[5]}</Subtitle>
          </SubtitleWrapper>
          <ImageBoxWrapper>{Acabados}</ImageBoxWrapper>
          <LinkBox>
            <LinkHeader>{titulo}</LinkHeader>
            {LinkAcabados}
          </LinkBox>
        </ContentWrapper>
      </ColecContainer>
    </>
  );
};

export default AcabadosBath;
