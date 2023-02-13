import styled from "styled-components";
import { Link, Link as LinkRouter } from "react-router-dom";

export const Contenedor = styled.section`
  display: grid;
  background-color: #000;
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 25% 75%;
  column-gap: 1.5rem;
`;

export const ContenedorC1 = styled.div`
  grid-column: 1/5;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / -1;
  }
`;
export const ContenedorC2 = styled.div`
  grid-column: 5/9;
  grid-row: 2;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-row: 2;
    grid-column: 2/-1;
  }
`;
export const ContenedorC3 = styled.div`
  grid-column: 9/-1;
  grid-row: 2;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-row: 3;
    grid-column: 2/-1;
  }
`;

export const Titulo = styled.p`
  color: white;
  font-size: 32px;
  grid-column: 3;
  align-self: end;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-column: 2/-1;
  }
`;

export const AreaListado = styled.div`
  color: #fff;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  display: grid;
`;
export const TituloListado = styled.p`
  color: #fff;
  font-size: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
  grid-column: 1/4;
`;
export const ContApartados = styled.div`
  margin-top: 2rem;
  grid-row: 2;
  display: flex;
  flex-direction: column;
`;
export const Apartado = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const TextoApartado = styled.p`
  font-size: 18;
  margin: 0.25rem 0 0.25rem 0;
  cursor: pointer;
  :hover {
    color: rgba(85, 113, 119);
  }
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
    margin: 0;
  }
`;

export const Cerrar = styled(LinkRouter)`
  position: absolute;
  right: 80px;
  top: 80px;
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    right: 20px;
    top: 20px;
  }
`;
