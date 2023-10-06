import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {
  SliderContainerPequeño,
  SliderImagePequeño,
  BarraInferior,
  Link,
} from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const CustomSliderPequeno = ({ images }) => {
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainerPequeño>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Link href={image.link}>
              <SliderImagePequeño src={image.img} alt={image.alt} />
              <BarraInferior>{image.text}</BarraInferior>
            </Link>
          </div>
        ))}
      </Slider>
    </SliderContainerPequeño>
  );
};
