import React from "react";
import { Slide } from "react-slideshow-image";

import { medidas1, medidas2, medidas3 } from "./animacionesAncho";
import { TituloAnimacion, Linea, TituloAnimacion2 } from "./animacionesStyles";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  Subtitle2,
  ImgWrap,
  Img,
  GeneralContainer,
  SliderWrapper,
  SliderContainer,
  WrapperAnim,
  ImgWrapper,
  WrapperIframe,
} from "./encimeraAutoStyles";
const fadeImages = [
  require("../../../assets/images/bath/XL light shower tray 01.webp"),
  require("../../../assets/images/bath/XL light shower tray 01.webp"),
];

const PlatosDucha = ({ id, headLine, description, description2, img, alt }) => {
  return (
    <>
      <InfoContainer id='PlatosDuchas'>
        <TextWrapper>
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
            {" "}
            {headLine}
          </Heading>
        </TextWrapper>
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
          {description}
          <br />
          <br />
          {description2}
        </Subtitle>
        <GeneralContainer
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
          Platos de ducha con anchos desde 70 hasta 100 cm en incrementos de 5
          cm en las siguientes longitudes:
          <Linea />
        </TituloAnimacion>
        <WrapperAnim>
          {medidas1}
          {medidas2}
          {medidas3}
        </WrapperAnim>
        <TituloAnimacion2
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
          *Todos nuestros platos incluyen tapa porcelánico y valvula viega
          60/80.
        </TituloAnimacion2>
        <ImgWrapper></ImgWrapper>
        <WrapperIframe>
          <iframe
            src='https://itch.io/embed-upload/7341966?color=333333'
            allowFullscreen=''
            height={"100%"}
            width={"100%"}
            frameborder='0'
            title='Rotador'
          />
        </WrapperIframe>
      </InfoContainer>
    </>
  );
};

export default PlatosDucha;
