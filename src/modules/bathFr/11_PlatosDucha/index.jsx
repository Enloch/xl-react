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
            Télécharger les rapports de laboratoire des matériaux normalisés
            &nbsp; &nbsp;
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
          Bacs à douche avec largeur de 70 à 100cm par incréments de 5 cm dans
          les longueurs suivantes:
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
          *Tous nos bacs à douche comprennent bonde 60/80 et couvercle en
          céramique.
        </TituloAnimacion2>
        <TituloAnimacion>
          Positionnement de la bonde:
          <Linea />
        </TituloAnimacion>
        <WrapperAnim2>
          <AnimacionContainer>
            <Img src={fadeImages[2]} />
          </AnimacionContainer>
          <AnimacionContainer>
            <Frase>
              Nos bacs à douche peuvent être fabriqués de toute taille. Deux
              options sont disponibles pour la bonde, l' une avec la bonde
              centrée et l'autre avec la bonde déplacée. Concernant cette
              dernière option, nous devons prendre en compte lesmesures
              suivantes pour installer la bonde à l'intérieur de chaque bac à
              douche aux différentes dimensions. Voir tableau ci-joint.
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
                  Cliquez sur l'image pour accéder au rotateur des bacs à douche
                </TextoImagen>
              </WrapperTxtImg>
            </ImgWrap2>
          )}
          <iframe
            src='https://itch.io/embed-upload/7975121?color=333333'
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
