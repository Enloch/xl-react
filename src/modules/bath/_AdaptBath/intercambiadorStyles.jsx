import styled from "styled-components";
import { motion } from "framer-motion";

export const ContenedorIntercambiador = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ContenedorImagenBase = styled.div`
  width: 100%;
  position: relative;
  top: 0;
`;
export const ContenedorImagen = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`;
export const Imagen = styled.img`
  width: 100%;
`;

export const ContenedorMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 10%;
`;
export const MenuIntrucciones = styled.div`
  background-color: #303030;
  width: 100%;
  height: 100%;
  display: grid;
`;
export const BotonExpandir = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 1;
  bottom: 1%;
  width: 10%;
  /* height: 10%; */
  left: 45%;
  font-size: 2rem;
  cursor: pointer;
`;
export const BotonContinuar = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  height: 100%;
  font-size: 1rem;
  cursor: pointer;
  align-self: center;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const TextoIntro = styled.p`
  color: white;
  font-size: 1rem;
  justify-self: center;
  align-self: center;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ContenedorIconos = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    height: 92%;
    width: 94%;
  }
`;
export const Icono1 = styled.img`
  position: absolute;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    scale: 0.75;
  }
  @media screen and (max-width: 480px) {
    scale: 0.5;
  }
  transition: all 0.2s linear;
  :hover {
    transform: rotate(-45deg);
  }
`;
export const MenuMateriales = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 27%;
  /* visibility: hidden; */
`;
export const ContenedorMateriales = styled.div`
  background-color: #303030;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.25fr 2fr 1.25fr;
`;
export const CajaMaterial = styled.div`
  grid-column: 2;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  row-gap: 0.5rem;
  column-gap: 0.2rem;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
export const ContIconText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86px;
`;
export const IconoMaterial = styled(motion.img)`
  width: 64px;
  height: auto;
  border-radius: 50%;
`;
export const TextoMaterial = styled.p`
  text-align: center;
  color: white;
`;
