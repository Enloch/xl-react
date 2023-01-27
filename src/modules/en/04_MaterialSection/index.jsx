import React from "react";
import {
  MaterialContainer,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./MaterialElements";
const MaterialSection = ({ headLine, description, img, img2, alt }) => {
  return (
    <>
      <MaterialContainer id="materialesEN">
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
        <ImgWrap>
          <Img src={img} alt={"test"} />
        </ImgWrap>
      </MaterialContainer>
    </>
  );
};

export default MaterialSection;
