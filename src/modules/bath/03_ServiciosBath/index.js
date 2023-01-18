import React from "react";
import {
  CaraContainer,
  TextWrapper,
  Heading,
  Subtitle,
  ListaUno,
  ListaDos,
  Lista,
  LiEl,
  ImgWrap,
  Img,
} from "./servicioStyle";
const ServicioBath = ({ id, headLine, description }) => {
  return (
    <>
      <CaraContainer id={id}>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
          <ListaUno>
            <Lista>
              <LiEl>Encimeras sobremueble</LiEl>
              <LiEl>Encimeras autoportantes</LiEl>
              <LiEl>Frentes</LiEl>
              <LiEl>Baldas</LiEl>
              <LiEl>Forrado de muebles</LiEl>
              <LiEl>Forrado de módulos auxiliares</LiEl>
            </Lista>
          </ListaUno>
          <ListaDos>
            <Lista>
              <LiEl>Revestimiento de cajones y costados</LiEl>
              <LiEl>Lavabos</LiEl>
              <LiEl>Muebles de baño especiales</LiEl>
              <LiEl>Platos de ducha</LiEl>
              <LiEl>Paneles de ducha</LiEl>
            </Lista>
          </ListaDos>
      </CaraContainer>
    </>
  );
};

export default ServicioBath;
