import React from "react";
import { InfoContainer, TextWrapper, Heading, Subtitle } from "./xlShelfStyle";
const XLShelf = ({ id, headLine, description }) => {
  return (
    <>
      <InfoContainer id={id}>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
      </InfoContainer>
    </>
  );
};

export default XLShelf;
