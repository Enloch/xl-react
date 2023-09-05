import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ColecContainer,
  ContentWrapper,
  SubtitleWrapper,
  Heading,
  Subtitle,
  ImageBoxWrapper,
  LinkBox,
  LinkHeader,
} from "./nuestraColecElements";
import {
  titulosSeries,
  Cementos,
  LinkCementos,
  Colores,
  LinkColor,
  Marmoles,
  LinkMarmol,
  Maderas,
  LinkMaderas,
  Metales,
  LinkMetales,
  Piedras,
  LinkPiedras,
} from "./constructColecc";
const NuestraColeccion = ({ headLine, subtitle, footer, footerImg }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [seleccionada, setSeleccionada] = useState(Cementos);
  const [linkseleccion, setLink] = useState(LinkCementos);
  const [tituloseleccion, setTitle] = useState(titulosSeries.cementoMicro);
  const navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination, { state: { from: "/encimera" } });
  };
  return (
    <>
      <ColecContainer>
        <ContentWrapper>
          <Heading>{headLine}</Heading>
          <SubtitleWrapper>
            <Subtitle
              onClick={() => {
                setSeleccionada(Cementos);
                setLink(LinkCementos);
                setTitle(titulosSeries.cementoMicro);
              }}
            >
              {subtitle[0]}
            </Subtitle>
            <Subtitle
              onClick={() => {
                setSeleccionada(Colores);
                setLink(LinkColor);
                setTitle(titulosSeries.coloresUni);
              }}
            >
              {subtitle[1]}
            </Subtitle>
            <Subtitle
              onClick={() => {
                setSeleccionada(Marmoles);
                setLink(LinkMarmol);
                setTitle(titulosSeries.marmoles);
              }}
            >
              {subtitle[2]}
            </Subtitle>
            <Subtitle
              onClick={() => {
                setSeleccionada(Maderas);
                setLink(LinkMaderas);
                setTitle(titulosSeries.maderas);
              }}
            >
              {subtitle[3]}
            </Subtitle>
            <Subtitle
              onClick={() => {
                setSeleccionada(Metales);
                setLink(LinkMetales);
                setTitle(titulosSeries.metales);
              }}
            >
              {subtitle[4]}
            </Subtitle>
            <Subtitle
              onClick={() => {
                setSeleccionada(Piedras);
                setLink(LinkPiedras);
                setTitle(titulosSeries.piedras);
              }}
            >
              {subtitle[5]}
            </Subtitle>
          </SubtitleWrapper>
          <ImageBoxWrapper>{seleccionada}</ImageBoxWrapper>
          <LinkBox>
            <LinkHeader>{tituloseleccion}</LinkHeader>
            {linkseleccion}
          </LinkBox>
        </ContentWrapper>
      </ColecContainer>
    </>
  );
};

export default NuestraColeccion;
