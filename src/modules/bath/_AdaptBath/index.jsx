import React from "react";
import Intercambiador from "./intercambiador";
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
import { IntercambiadorObj } from "./dataIntercambiador";

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
        <Subtitle>
          {subtitulo}
          <br />
          {subtitulo2}
        </Subtitle>
        <ImgWrapper>
          <Intercambiador {...IntercambiadorObj} />
          {/* <Img src={ImagenTemp} /> */}
          <Caracteristics></Caracteristics>
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
