import React from "react";
import {
  Heading,
  MainContainer,
  Subtitle,
  ImgWrapper,
  Img,
  TxtSubimagen,
} from "./adaptElements";

const AdaptBath = ({ titulo, subtitulo, ImagenTemp }) => {
  return (
    <MainContainer>
      <Heading>{titulo}</Heading>
      <Subtitle>{subtitulo}</Subtitle>
      <ImgWrapper>
        <Img src={ImagenTemp} />
        <TxtSubimagen> Acabado cajón: <b>datos aquí</b> </TxtSubimagen>
        <TxtSubimagen> Acabado encimera: <b>datos aquí</b> </TxtSubimagen>
        <TxtSubimagen> Acabado lateral: <b>datos aquí</b> </TxtSubimagen>
        <TxtSubimagen> Acabado forrado mueble: <b>datos aquí</b> </TxtSubimagen>
      </ImgWrapper>
    </MainContainer>
  );
};
export default AdaptBath;
