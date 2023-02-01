import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  WrapperIframe,
  ImgWrap,
  Img,
  TextoImagen,
  GeneralContainer,
  SliderWrapper,
  SliderContainer,
  Img2,
  WrapperTxtImg,
} from "./xlSpecialStyle";
const fadeImages = [
  require("../../../assets/images/bath/XL BATH web detalle lavabo 1_OK.webp"),
  require("../../../assets/images/bath/XL BATH web detalle lavabo 2_OK.webp"),
  require("../../../assets/images/bath/XL BATH web detalle lavabo 3_OK.webp"),
];
const XLSpecialBath = ({ id, headLine, description }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <InfoContainer id='xlspecial'>
        <TextWrapper>
          <Heading>{headLine}</Heading>
        </TextWrapper>
        <Subtitle>{description}</Subtitle>
        <GeneralContainer class='what?'>
          <SliderWrapper className='isthis'>
            <SliderContainer className='slide-container'>
              <Slide arrows={false} indicators={true}>
                <Img2 src={fadeImages[0]} />
                <Img2 src={fadeImages[1]} />
                <Img2 src={fadeImages[2]} />
              </Slide>
            </SliderContainer>
          </SliderWrapper>
        </GeneralContainer>
      </InfoContainer>
      <WrapperIframe>
        {isVisible && (
          <ImgWrap onClick={() => setIsVisible(!isVisible)}>
            <WrapperTxtImg
              id='textoTop'
              initial={{ y: 200, opacity: 0 }}
              whileInView={{
                transition: {
                  duration: 1,
                  ease: "easeIn",
                },
                y: 0,
                opacity: 1,
              }}
            >
              <TextoImagen
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 4px black",
                }}
              >
                Pulsa en la imagen para acceder al rotador de lavabos
              </TextoImagen>
            </WrapperTxtImg>
            <Img
              src={require("../../../assets/images/bath/XL BATH web detalle lavabo_ok.webp")}
            />
          </ImgWrap>
        )}
        <iframe
          src='https://itch.io/embed-upload/7263647?color=333333'
          allowfullscreen=''
          height={"100%"}
          width={"100%"}
          frameborder='0'
          title='Rotador'
        />
      </WrapperIframe>
    </>
  );
};

export default XLSpecialBath;
