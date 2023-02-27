import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "./styles.css";

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
        </Subtitle>
        <GeneralContainer
          class='what?'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            transition: {
              duration: 1,
              ease: "easeIn",
            },
            x: 0,
            opacity: 1,
          }}
          overflow='hidden'
          viewport={{ once: true }}
        >
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
            <Img
              src={require("../../../assets/images/bath/XL BATH web detalle lavabo_ok.webp")}
            />
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
                Click on the image to access the sink rotator
              </TextoImagen>
            </WrapperTxtImg>
          </ImgWrap>
        )}
        <iframe
          src='https://itch.io/embed-upload/7430083?color=333333'
          allowFullscreen=''
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
