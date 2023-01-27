import React from "react";
import { Heading, MainContainer, Subtitle } from "./adaptElements";

const AdaptBath = ({ titulo, subtitulo }) => {
  return (
    <MainContainer>
      <Heading>{titulo}</Heading>
      <Subtitle>{subtitulo}</Subtitle>
    </MainContainer>
  );
};
export default AdaptBath;
