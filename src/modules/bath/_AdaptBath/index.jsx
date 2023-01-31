import React from "react";
import Intercambiador from "./intercambiador";
import { Slide } from "react-slideshow-image";
import "./styles.css";
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
  Img3,
  GeneralContainer,
  SliderWrapper,
  SliderContainer,
} from "./adaptElements";
import { IntercambiadorObj } from "./dataIntercambiador";
const fadeImages = [
  require("../../../assets/images/bath/XL BATH detalle web 1_OK.webp"),
  require("../../../assets/images/acabado_mate_sr.webp"),
];
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
              Acabado cajón: <strong>datos aquí //</strong>
            </TxtSubimagen>
            <TxtSubimagen>
              Acabado encimera: <b>datos aquí //</b>
            </TxtSubimagen>
            <TxtSubimagen>
              Acabado lateral: <b>datos aquí //</b>
            </TxtSubimagen>
            <TxtSubimagen>
              Acabado forrado mueble: <b>datos aquí //</b>
            </TxtSubimagen>
          </WrapperTexto>
        </ImgWrapper>
      </MainContainer>
      <GeneralContainer>
        <SliderWrapper>
          <SliderContainer className='slide-container'>
            <Slide arrows={false} indicators={true}>
              <Img3 src={fadeImages[0]} />
              <Img3 src={fadeImages[1]} />
            </Slide>
          </SliderContainer>
        </SliderWrapper>
      </GeneralContainer>
    </>
  );
};
export default AdaptBath;
