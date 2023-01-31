import React from "react";
import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  WrapperIframe,
} from "./xlSpecialStyle";
const XLSpecialBath = ({ id, headLine, description }) => {
  return (
    <>
      <InfoContainer id={id}>
        <TextWrapper>
          <Heading>{headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
        <WrapperIframe>
          <iframe
            src='https://itch.io/embed-upload/7225630?color=333333'
            allowfullscreen=''
            height={"100%"}
            width={"100%"}
            frameborder='0'
            title='Rotador'
          />
        </WrapperIframe>
      </InfoContainer>
    </>
  );
};

export default XLSpecialBath;
