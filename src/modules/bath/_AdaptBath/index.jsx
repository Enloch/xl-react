import React from "react";
import {
  Heading,
  MainContainer,
  Subtitle,
  ImgWrapper,
  Img,
  WrapperTexto,
  TxtSubimagen,
  Caracteristics,
  ImgGradient,
  ImgWrap,
  Img2,
} from "./adaptElements";

const AdaptBath = ({
  titulo,
  subtitulo,
  subtitulo2,
  ImagenTemp,
  ImagenTemp2,
}) => {
  return (
    <>
      <MainContainer>
        <Heading>{titulo}</Heading>
        <Subtitle>{subtitulo}</Subtitle>
        <Subtitle>{subtitulo2}</Subtitle>
        <ImgWrapper>
          <Img src={ImagenTemp} />
          <Caracteristics>Abcd</Caracteristics>
          <WrapperTexto>
            <TxtSubimagen>
              Acabado cajón: <b>datos aquí</b> //
            </TxtSubimagen>
            <TxtSubimagen>
              Acabado encimera: <b>datos aquí</b> //
            </TxtSubimagen>
            <TxtSubimagen>
              Acabado lateral: <b>datos aquí</b> //
            </TxtSubimagen>
            <TxtSubimagen>
              Acabado forrado mueble: <b>datos aquí</b> //
            </TxtSubimagen>
          </WrapperTexto>
        </ImgWrapper>
      </MainContainer>
      <ImgGradient>
        <ImgWrap>
          <Img2 src={ImagenTemp2} alt={"test"} />
        </ImgWrap>
      </ImgGradient>
    </>
  );
};
export default AdaptBath;
