import React from "react";
import { Link } from "react-router-dom";
import {
  ColecContainer,
  TextWrapper,
  Heading,
  Subtitle,
  Subtitle2,
} from "./ColecElements";

const ColecSection = ({ headLine, description, description2, alt }) => {
  return (
    <>
      <ColecContainer id="coleccionEN">
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
          <Link to="colecciones" style={{ textDecoration: "none" }}>
            <Subtitle2 onClick={null}>{description2}</Subtitle2>
          </Link>
        </TextWrapper>
      </ColecContainer>
    </>
  );
};

export default ColecSection;
