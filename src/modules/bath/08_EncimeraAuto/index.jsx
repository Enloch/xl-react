import React from "react";
import { Slide } from "react-slideshow-image";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  GeneralContainer,
  SliderWrapper,
  SliderContainer,
} from "./encimeraAutoStyles";
const fadeImages = [
  require("../../../assets/images/acabado_hond.webp"),
  require("../../../assets/images/acabado_mate_sr.webp"),
];
const EncimeraTop = ({ id, headLine, description, description2, img, alt }) => {
  return (
    <>
      <InfoContainer id='xlshelf'>
        <TextWrapper>
          <Heading> {headLine}</Heading>
        </TextWrapper>
        <Subtitle>
          {description2}
          <br />
          <br />
          {description}
        </Subtitle>
        <GeneralContainer>
          <SliderWrapper>
            <SliderContainer className='slide-container'>
              <Slide arrows={false} indicators={true}>
                <Img src={fadeImages[0]} />
                <Img src={fadeImages[1]} />
              </Slide>
            </SliderContainer>
          </SliderWrapper>
        </GeneralContainer>
      </InfoContainer>
    </>
  );
};

export default EncimeraTop;
