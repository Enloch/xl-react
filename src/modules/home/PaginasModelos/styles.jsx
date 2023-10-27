import styled from "styled-components";

export const PaginasModelosContainer = styled.div``;

export const DivisorTop = styled.div`
  @media (min-width: 0px) {
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1200px) {
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const DivisorBottom = styled.div`
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 0px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 900px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const ContenidoBottom = styled.div`
  box-sizing: border-box;
  display: flex;
  @media (min-width: 0px) {
    padding-top: 0px;
    flex-direction: column;
  }
  @media (min-width: 900px) {
    padding-top: 30px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const ContenedorSlider = styled.div`
  width: 100%;
`;

export const ContenedorInterior = styled.div``;

export const Slider = styled.div`
  position: relative;
  /* width: 58.33vw;
  height: 39.37vw;
  margin-bottom: 16px; */
  @media (min-width: 0px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1200px) {
    width: 58.33vw;
    height: 39.37vw;
    margin-bottom: 16px;
  }
`;

export const ContenedorDatos = styled.div`
  width: 100%;
  @media (min-width: 0px) {
    margin: 0;
  }
  @media (min-width: 1200px) {
    margin: 0px 0px 0px 62px;
  }
`;

export const TituloMesa = styled.h2`
  margin: 0px 0px 50px;
  font-family: "Roboto", sans-serif !important;
  font-weight: 400;
  display: inline-flex;
  flex-wrap: wrap;
  @media (min-width: 0px) {
    letter-spacing: -0.02em;
    font-size: 27px;
    line-height: 28.35px;
  }
  @media (min-width: 900px) {
    letter-spacing: -0.03em;
    font-size: 56px;
    line-height: 56px;
  }
`;

export const SubtituloConPunto = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
  height: fit-content;
  align-items: flex-start;
  color: rgb(37, 35, 36);
`;

export const Punto = styled.div`
  position: relative;
  margin-top: 2.5px;
`;

export const ContenedorTextoPunto = styled.div`
  margin: 0px 0px 0px 7px;
`;
export const TextoPunto = styled.p`
  margin: 0px;
  font-family: "Roboto", sans-serif !important;
  font-weight: 400;
  position: relative; /* Necesario para el pseudo-elemento ::before */
  overflow: hidden; /* Necesario para el pseudo-elemento ::before */

  @media (min-width: 0px) {
    font-size: 14px;
    line-height: 19.6px;
  }

  @media (min-width: 900px) {
    font-size: 16px;
    line-height: 22.4px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #000; /* o cualquier otro color */
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    left: 0;
    right: auto;
  }

  &:not(:hover)::before {
    width: 0;
    left: auto;
    right: 0;
  }
`;

export const ParrafoSubtitulo = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif !important;
  font-weight: 400;
  max-width: 50%;
  @media (min-width: 0px) {
    margin-bottom: 60px;
    font-size: 14px;
    line-height: 19.6px;
  }
  @media (min-width: 900px) {
    margin-bottom: 80px;
    font-size: 16px;
    line-height: 22.4px;
  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Thumbnail = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-bottom: 3px;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 75px;
  margin-top: 10px;
  cursor: pointer;
  &.phantom {
    visibility: hidden;
  }
`;
export const TextosIconos = styled.a`
  text-decoration: none;
  color: #a6a9ab;
  font-family: "Roboto", sans-serif !important;
  font-size: 12px;
  font-weight: 400;
`;

export const ContenedorBoton = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  margin-top: 30px;
  row-gap: 20px;
`;

export const BotonAtras = styled.a`
  text-decoration: none;
  color: #a6a9ab;
  position: relative; /* Necesario para el pseudo-elemento ::before */
  overflow: hidden; /* Necesario para el pseudo-elemento ::before */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    color: #000000;
    background-color: #a6a9ab; /* o cualquier otro color */
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    left: 0;
    right: auto;
  }

  &:not(:hover)::before {
    width: 0;
    left: auto;
    right: 0;
  }
`;
