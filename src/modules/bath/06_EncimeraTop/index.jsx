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
} from "./encimeraTopStyles";
const EncimeraTop = ({ id, headLine, description, img, alt }) => {
  return (
    <>
      <InfoContainer id={id}>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
          <ImgWrap>
          <Img src={img} alt={alt} />
          </ImgWrap>
        </TextWrapper>
      </InfoContainer>
    </>
  );
};

export default EncimeraTop;
