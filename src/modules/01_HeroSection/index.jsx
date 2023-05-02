import React from "react";
import scrollTo from "../../helpers/scrollTo";
import { HeroContainer, Img, ImgLogo } from "./HeroElements";
import Logo from "../../assets/icons/introduccion/logo.png";

const HeroSection = ({ img, indiceRef }) => {
  return (
    <HeroContainer>
      {/* <ImgLogo src={Logo} alt={"test"}></ImgLogo> */}
      <Img ref={indiceRef} id='Jump' src={img} alt={"test"}></Img>
    </HeroContainer>
  );
};

export default HeroSection;
