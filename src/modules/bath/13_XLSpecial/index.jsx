import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  WrapperIframe,
  ImgWrap,
  Img,
  TextoImagen,
} from "./xlSpecialStyle";
const XLSpecialBath = ({ id, headLine, description }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <InfoContainer id='xlspecial'>
        <TextWrapper>
          <Heading>{headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
        <WrapperIframe>
          {isVisible && (
            <ImgWrap onClick={() => setIsVisible(!isVisible)}>
              <TextoImagen
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 4px black",
                }}
              >
                Pulsa en la imagen para acceder al rotador de lavabos
              </TextoImagen>
              <Img
                src={require("../../../assets/images/bath/XL BATH web detalle lavabo_ok.webp")}
              />
            </ImgWrap>
          )}
          <iframe
            src='https://itch.io/embed-upload/7225630?color=333333'
            allowfullscreen=''
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

export default XLSpecialBath;
