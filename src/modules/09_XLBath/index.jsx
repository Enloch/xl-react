import React from "react";
import { Link } from "react-router-dom";
import {
  ColecContainer,
  TextWrapper,
  Heading,
  Subtitle,
  Subtitle2,
} from "./XLBathElements";

const XLBathSection = ({ headLine, description, description2, alt }) => {
  return (
    <>
      <ColecContainer id='bath'>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
          <a href='bath' style={{ textDecoration: "none" }}>
            <Subtitle2 onClick={null}>{description2}</Subtitle2>
          </a>
        </TextWrapper>
      </ColecContainer>
    </>
  );
};

export default XLBathSection;
