import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import logoAntislip from "../../../assets/images/Antislip.svg";
import { medidas1, medidas2, medidas3 } from "./animacionesAncho";
import {
  TituloAnimacion,
  Linea,
  TituloAnimacion2,
  AnimacionContainer,
} from "./animacionesStyles";
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
  WrapperAnim2,
  ImgWrapper,
  WrapperIframe,
  Frase,
  Tabla,
  ContTabla,
  TextoImagen,
  WrapperTxtImg,
  ImgWrap2,
  Img2,
  LogoAntislip,
} from "./encimeraAutoStyles";
const fadeImages = [
  require("../../../assets/images/bath/XL light shower tray 01.webp"),
  require("../../../assets/images/bath/XL light shower tray 01.webp"),
  require("../../../assets/images/bath/platos/Icono Medidas Plato.png"),
];
const PlatosDucha = ({
  id,
  headLine,
  description,
  description2,
  description3,
  iconodescarga,
  img,
  alt,
}) => {
  const [isVisible, setIsVisible] = useState(true);
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
          <br />
          <br />
          {description3} <br />
          <br />
          <LogoAntislip src={logoAntislip} />
          <p style={{ fontSize: "12px", color: "white" }}>
            Download laboratory reports of standardised materials &nbsp; &nbsp;
            <a
              href={
                "/downloads/informes de laboratorio de materiales estandarizados C3.pdf"
              }
            >
              <img
                style={{ filter: "invert(1)", width: "25px", height: "auto" }}
                src={iconodescarga}
              ></img>
            </a>
          </p>
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
          Shower trays with widths from 70 to 100 cm in increments of 5 cm in
          the following lengths:
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
          *All our shower trays include a porcelain lid and a 60/80 Viega valve.
        </TituloAnimacion2>
        <TituloAnimacion>
          Drain placement:
          <Linea />
        </TituloAnimacion>
        <WrapperAnim2>
          <AnimacionContainer>
            <Img src={fadeImages[2]} />
          </AnimacionContainer>
          <AnimacionContainer>
            <Frase>
              Our shower trays can be manufactured in any size. We have two
              options for the drain, one with the drain centered and another
              with the drain displaced. For this last option We must take into
              account the following measures to place the drain inside each of
              the different sizes. See table attached.
            </Frase>
          </AnimacionContainer>
          <AnimacionContainer>
            <Tabla>
              <ContTabla>
                <strong>A</strong>
              </ContTabla>
              <ContTabla>
                <strong>B</strong>
              </ContTabla>
              <ContTabla>{"<"} 120 cm</ContTabla>
              <ContTabla>30 cm</ContTabla>
              <ContTabla>121-149 cm</ContTabla>
              <ContTabla>40 cm</ContTabla>
              <ContTabla>150-190 cm</ContTabla>
              <ContTabla>50 cm</ContTabla>
              <ContTabla>{">"} 190 cm</ContTabla>
              <ContTabla>60 cm</ContTabla>
            </Tabla>
          </AnimacionContainer>
        </WrapperAnim2>
        <ImgWrapper></ImgWrapper>
        <WrapperIframe>
          {isVisible && (
            <ImgWrap2 onClick={() => setIsVisible(!isVisible)}>
              <Img2 src={fadeImages[0]} />
              <WrapperTxtImg
                id='expansor'
                initial={{
                  height: "0%",
                }}
                whileInView={{
                  transition: {
                    duration: 0.3,
                    ease: "easeIn",
                  },
                  height: "100%",
                }}
              >
                <TextoImagen
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px black",
                  }}
                >
                  Click on the image to access the shower tray rotator
                </TextoImagen>
              </WrapperTxtImg>
            </ImgWrap2>
          )}
          <iframe
            src='https://itch.io/embed-upload/7974976?color=333333'
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
