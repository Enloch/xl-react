import React from "react";
import {
  CaraContainer,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./CaraElements";
const CaraSection = ({ headLine, description, img, img2, alt }) => {
  return (
    <>
      <CaraContainer id="caracteristica">
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
        <ImgWrap>
          <Img src={img} alt={alt} />
          <Img src={img2} alt={alt} />
        </ImgWrap>
      </CaraContainer>
    </>
  );
};

export default CaraSection;
