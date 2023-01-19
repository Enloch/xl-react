import React from "react";
// import { Link } from "react-router-dom";
import {
  DescargasContainer,
  TextWrapper,
  Heading,
  ContCat,
  Catalogo,
  CatalogoLink,
  CatalogoImg,
  CatalogoTexto,
} from "./DescargasElements";

const DescargasSection = ({ headLine, description, description2, alt }) => {
  return (
    <>
      <DescargasContainer id="descargas">
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <ContCat>
            <Catalogo>
              <CatalogoLink>
                <CatalogoImg></CatalogoImg>
                <CatalogoTexto>Test 1233</CatalogoTexto>
              </CatalogoLink>
            </Catalogo>
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
