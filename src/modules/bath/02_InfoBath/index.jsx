import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImgGradient,
  ImgWrap,
  Img,
} from "./infoElements";
import config from "../04_MenuInteractivoBath/indicadores";
const InfoBath = ({ id, headLine, description, img, alt }) => {
  return (
    <>
      <InfoContainer id={id}>
        <TextWrapper>
          <Heading
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            {" "}
            {headLine}
          </Heading>
          <Subtitle
            initial={{ x: 300, opacity: 0 }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            {description[0]}
            <br />
            {description[1]}
          </Subtitle>
        </TextWrapper>
      </InfoContainer>
      <ImgGradient>
        <ImgWrap
          initial={{ x: 400, opacity: 0 }}
          whileInView={{
            transition: {
              duration: 0.9,
              ease: "easeIn",
            },
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <Img src={img} alt={"test"} />
        </ImgWrap>
      </ImgGradient>
    </>
  );
};

export default InfoBath;
