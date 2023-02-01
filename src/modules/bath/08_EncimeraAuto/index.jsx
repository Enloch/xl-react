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
  require("../../../assets/images/bath/XL BATH web Encimera Autoportante DETALLE 2_OK.webp"),
  require("../../../assets/images/bath/XL BATH web Encimera Autoportante_OK.webp"),
  require("../../../assets/images/bath/XL BATH web Encimera Autoportante DETALLE 3_OK.webp"),
  require("../../../assets/images/bath/XL BATH web Encimera Autoportante DETALLE_OK.webp"),
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
        <GeneralContainer class='what?'>
          <SliderWrapper className='isthis'>
            <SliderContainer className='slide-container'>
              <Slide arrows={false} indicators={true}>
                <Img src={fadeImages[0]} />
                <Img src={fadeImages[1]} />
                <Img src={fadeImages[2]} />
                <Img src={fadeImages[3]} />
              </Slide>
            </SliderContainer>
          </SliderWrapper>
        </GeneralContainer>
      </InfoContainer>
    </>
  );
};

export default EncimeraTop;
