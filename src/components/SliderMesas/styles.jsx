import styled, { css } from "styled-components";

export const SliderContainerPequeño = styled.div`
  width: 100%;
  .image-gallery-thumbnails .image-gallery-thumbnails-container {
    text-align: left !important;
    /* Otras personalizaciones si las necesitas */
  }
  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:focus {
    outline: none;
    border: none;
  }
  .image-gallery-thumbnail:hover {
    outline: none;
    border: none;
  }
  .image-gallery-thumbnail {
    width: 150px !important; /* Ancho del thumbnail */
    height: 150px !important; /* Altura del thumbnail */

    img {
      width: 100%; /* Hacer que la imagen ocupe todo el espacio del thumbnail */
      height: 100%; /* Hacer que la imagen ocupe todo el espacio del thumbnail */
    }
  }
  .image-gallery-left-nav,
  .image-gallery-right-nav {
    box-shadow: none !important;
    filter: none !important;
    @media (min-width: 901px) {
      padding: 50px;
    }

    @media (max-width: 900px) {
      padding: 20px;
    }
  }
  .image-gallery-left-nav:hover,
  .image-gallery-right-nav:hover {
    box-shadow: none !important;
    filter: none !important;
    opacity: 1 !important;
  }
`;
export const SliderImagePequeño = styled.img`
  width: 100%;

  @media (min-width: 0px) {
    /* width: 300px; */
  }
  @media (min-width: 600px) {
    /* width: 500px; */
    /* width: 95%; */
  }
`;
export const BarraInferior = styled.div`
  color: #000;
  margin-top: 16px;
  /* background-color: #fffcf5; */
`;
export const Link = styled.a`
  /* text-decoration: none; */
  color: #000;
`;
