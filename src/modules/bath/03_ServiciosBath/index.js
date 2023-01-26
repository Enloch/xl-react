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
            <LiEl>
              XL bathroom adapt //
              <ul>Encimeras</ul>
              <ul>Forrado de muebles</ul>
              <ul>Forrado de módulos auxiliares</ul>
              <ul>Revestimiento de cajones y costados</ul>
              <ul>Etc..</ul>
            </LiEl>
          </Lista>
        </ListaUno>
        <ListaDos>
          <Lista>
            <LiEl>XL top // encimeras sobremueble</LiEl>
            <LiEl>XL frente</LiEl>
            <LiEl>Encimeras autoportantes</LiEl>
            <LiEl>XL shelf // baldas</LiEl>
            <LiEl>XL bath specials // lavabos</LiEl>
            <LiEl>Muebles de baño especiales</LiEl>
            <LiEl>XL light shower tray // platos de ducha medida</LiEl>
            <LiEl>XL shower panel // paneles de ducha a medida</LiEl>
          </Lista>
        </ListaDos>
      </CaraContainer>
    </>
  );
};

export default ServicioBath;
