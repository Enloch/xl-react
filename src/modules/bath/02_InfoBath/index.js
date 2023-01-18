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
} from "./InfoElements";
import config from "../04_EncimeraBath/indicadores";
const InfoBath = ({ id, headLine, description, img, alt }) => {
  return (
    <>
      <InfoContainer id={id}>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>
            {description[0]}
            <br />
            {description[1]}
          </Subtitle>
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

export default InfoBath;
