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
      <CaraContainer id="caracteristicaEN">
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
        <ImgWrap>
          <Img src={img} alt={"imagen1"} />
          <Img src={img2} alt={"imagen2"} />
        </ImgWrap>
      </CaraContainer>
    </>
  );
};

export default CaraSection;
