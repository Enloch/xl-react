import React, { useEffect, useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { SliderContainerPequeño } from "./styles";
import { ReactComponent as FlechaIzq } from "../../assets/icons/leftSlider.svg";
import { ReactComponent as FlechaDer } from "../../assets/icons/rightSlider.svg";

export const CustomSliderMesas = ({ images }) => {
  const imageSet = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Personalizar el botón izquierdo
  const renderLeftNav = (onClick, disabled) => {
    return (
      <button
        type='button'
        className='image-gallery-icon image-gallery-left-nav'
        disabled={disabled}
        onClick={onClick}
      >
        <FlechaIzq
          width={isMobile ? "30" : "55"}
          height={isMobile ? "30" : "55"}
        />
      </button>
    );
  };

  // Personalizar el botón derecho
  const renderRightNav = (onClick, disabled) => {
    return (
      <button
        type='button'
        className='image-gallery-icon image-gallery-right-nav'
        disabled={disabled}
        onClick={onClick}
      >
        <FlechaDer
          width={isMobile ? "30" : "55"}
          height={isMobile ? "30" : "55"}
        />
      </button>
    );
  };

  return (
    <SliderContainerPequeño>
      <Gallery
        items={imageSet}
        showPlayButton={false}
        autoPlay={true}
        showFullscreenButton={false}
        slideInterval={4000}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
      />
    </SliderContainerPequeño>
  );
};
