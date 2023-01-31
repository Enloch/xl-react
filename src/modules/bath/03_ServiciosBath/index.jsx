import React from "react";
import {
  CaraContainer,
  TextWrapper,
  Heading,
  Subtitle,
  ListaUno,
  ListaDos,
  Lista,
  ListaInterna,
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
            <LiEl>XL bathroom adapt //</LiEl>
            <ListaInterna>Encimeras</ListaInterna>
            <ListaInterna>Forrado de muebles</ListaInterna>
            <ListaInterna>Forrado de módulos auxiliares</ListaInterna>
            <ListaInterna>Revestimiento de cajones y costados</ListaInterna>
            <ListaInterna>Etc..</ListaInterna>
          </Lista>
        </ListaUno>
        <ListaDos>
          <Lista>
            <LiEl>XL top // encimeras sobremueble</LiEl>
            <LiEl>XL frente</LiEl>
            <LiEl>XL shelf // baldas y encimeras autoportantes //</LiEl>
            <LiEl>XL bath specials // lavabos y tótems</LiEl>
            <LiEl>XL light shower tray // platos de ducha medida</LiEl>
            <LiEl>XL shower panel // paneles de ducha a medida</LiEl>
          </Lista>
        </ListaDos>
      </CaraContainer>
    </>
  );
};

export default ServicioBath;
