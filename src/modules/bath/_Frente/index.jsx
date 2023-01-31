import React from "react";
import { Slide } from "react-slideshow-image";
import { medidas1, medidas2, medidas3 } from "./animacionesAncho";
import { TituloAnimacion, Linea } from "./animacionesStyles";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  GeneralContainer,
  SliderWrapper,
  SliderContainer,
  WrapperAnim,
} from "./encimeraAutoStyles";
const fadeImages = [
  require("../../../assets/images/bath/XL BATH web detalle frontal_OK.webp"),
  require("../../../assets/images/bath/XL BATH web detalle frontal PICADO_ok.webp"),
];

const Frente = ({ id, headLine, description, img, alt }) => {
  return (
    <>
      <InfoContainer id={id}>
        <TextWrapper>
          <Heading> {headLine}</Heading>
        </TextWrapper>
        <Subtitle>{description}</Subtitle>
        <GeneralContainer>
          <SliderWrapper>
            <SliderContainer className='slide-container'>
              <Slide arrows={false} indicators={true}>
                <Img src={fadeImages[0]} />
                <Img src={fadeImages[1]} />
              </Slide>
            </SliderContainer>
          </SliderWrapper>
        </GeneralContainer>
        <TituloAnimacion>
          frentes disponibles en las siguientes medidas
          <Linea />
        </TituloAnimacion>
        <WrapperAnim>
          {medidas1}
          {medidas2}
          {medidas3}
        </WrapperAnim>
      </InfoContainer>
    </>
  );
};

export default Frente;
