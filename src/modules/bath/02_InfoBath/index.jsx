import React from "react";
import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  ImgGradient,
  ImgWrap,
  Img,
  Subtitle2,
} from "./infoElements";
const InfoBath = ({ id, headLine, description, img, alt }) => {
  return (
    <>
      <InfoContainer id={id}>
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
            {description[0]}
            <br />
            {description[1]}
          </Subtitle>
          <br />
          <br />
          <Subtitle2
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
            {description[2]}
          </Subtitle2>
        </TextWrapper>
      </InfoContainer>
      <ImgGradient>
        <ImgWrap
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            transition: {
              duration: 0.9,
              ease: "easeIn",
            },
            x: 0,
            opacity: 1,
          }}
          overflow='hidden'
          viewport={{ once: true }}
        >
          <Img src={img} alt={"test"} />
        </ImgWrap>
      </ImgGradient>
    </>
  );
};

export default InfoBath;
