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
  require("../../../assets/images/bath/XL BATH web detalle 2_OK.webp"),
];
const AdaptBath = ({
  titulo,
  subtitulo,
  subtitulo2,
  ImagenTemp,
  ImagenTemp2,
  acabados,
}) => {
  return (
    <>
      <MainContainer id='forradomuebles'>
        <Heading
          initial={{ x: -100, opacity: 0 }}
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
        <Subtitle
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
          {subtitulo}
          <br />
          {subtitulo2}
        </Subtitle>
        <ImgWrapper>
          <Intercambiador {...IntercambiadorObj} />
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
