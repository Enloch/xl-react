import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./forradoMueblesStyle";
const ForradoMueble = ({ id, headLine, description, img, alt }) => {
  return (
    <>
      <InfoContainer id={id}>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
      </InfoContainer>
    </>
  );
};

export default ForradoMueble;
