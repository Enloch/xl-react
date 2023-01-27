import React from "react";
import scrollTo from "../../../helpers/scrollTo";
import { HeroContainer, Img } from "./HeroElements";

const HeroBath = ({ img, indiceRef }) => {
  return (
    <HeroContainer id="herobath">
      <Img ref={indiceRef} id="Jump" src={img} alt={"test"}></Img>
    </HeroContainer>
  );
};

export default HeroBath;
