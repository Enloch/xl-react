import React from "react";
import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  ImgGradient,
  ImgWrap,
  Img,
} from "./InfoElements";
const InfoSection = ({ headLine, description, img, alt }) => {
  return (
    <>
      <InfoContainer id='about'>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
      </InfoContainer>
      <ImgGradient>
        <ImgWrap>
          <Img src={img} alt={"test"} />
        </ImgWrap>
      </ImgGradient>
    </>
  );
};

export default InfoSection;
