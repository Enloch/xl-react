import React from "react";
import { Link } from "react-router-dom";
import {
  DescargasContainer,
  TextWrapper,
  Heading,
  ContCat,
  Catalogo,
} from "./DescargasElements";

const DescargasSection = ({ headLine, description, description2, alt }) => {
  return (
    <>
      <DescargasContainer id="descargas">
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <ContCat>
            <Catalogo></Catalogo>
            <Catalogo></Catalogo>
            <Catalogo></Catalogo>
            <Catalogo></Catalogo>
          </ContCat>
        </TextWrapper>
      </DescargasContainer>
    </>
  );
};

export default DescargasSection;
