import React from "react";
import { Slide } from "react-slideshow-image";
import "./styles.css";
import { SliderContainer, Img, indicator } from "./SliderElements";
const fadeImages = [
  require("../../../assets/images/acabado_hond.webp"),
  require("../../../assets/images/acabado_mate_sr.webp"),
  require("../../../assets/images/acabado_mate.webp"),
];

const Slider1 = () => {
  return (
    <SliderContainer className="slide-container">
      <Slide arrows={false} indicators={true}>
        <Img src={fadeImages[0]} />
        <Img src={fadeImages[1]} />
        <Img src={fadeImages[2]} />
      </Slide>
    </SliderContainer>
  );
};

export default Slider1;
