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
  require("../../../assets/images/bath/nero_ardi_1.webp"),
  require("../../../assets/images/bath/beren_black_1.webp"),
  require("../../../assets/images/bath/era_deep_black_1.webp"),
];
const XLPanel = ({ id, headLine, description, description2, img, alt }) => {
  return (
    <>
      <InfoContainer id='xlpanel'>
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
            {" "}
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
                <Img src={fadeImages[0]} />
                <Img src={fadeImages[1]} />
                <Img src={fadeImages[2]} />
              </Slide>
            </SliderContainer>
          </SliderWrapper>
        </GeneralContainer>
      </InfoContainer>
    </>
  );
};

export default XLPanel;
