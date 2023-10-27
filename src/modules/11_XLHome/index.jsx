import React from "react";
import { Link } from "react-router-dom";
import {
  ColecContainer,
  TextWrapper,
  Heading,
  Subtitle,
  Subtitle2,
} from "./XLBathElements";

const SeccionHome = ({ headLine, description, description2, description3 }) => {
  return (
    <>
      <ColecContainer id='home'>
        <TextWrapper>
          <Heading>{headLine}</Heading>
          <Subtitle>
            {description}
            <br />
            <br />
            {description3}
          </Subtitle>
          <a href='home' style={{ textDecoration: "none" }}>
            <Subtitle2 onClick={null}>{description2}</Subtitle2>
          </a>
        </TextWrapper>
      </ColecContainer>
    </>
  );
};

export default SeccionHome;
