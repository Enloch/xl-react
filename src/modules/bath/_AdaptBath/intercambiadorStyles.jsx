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
export const ContenedorExpansor = styled(motion.div)`
  background-color: #30303040;
  width: 100%;
  z-index: 2;
  position: absolute;
  right: 0;
  bottom: 0;
  @media screen and (max-width: 480px) {
    background-color: #303030;
  }
`;

export const BotonExpandir = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 1;
  bottom: 15%;
  width: 10%;
  /* height: 10%; */
  left: 45%;
  font-size: 2rem;
  cursor: pointer;
`;
export const TextoIntro2 = styled.p`
  color: white;
  position: absolute;
  bottom: 10%;
  left: 40%;
  font-size: 1rem;
  justify-self: center;
  align-self: center;
  @media screen and (max-width: 1400px) {
    left: 40%;
  }
  @media screen and (max-width: 1400px) {
    left: 36%;
  }
  @media screen and (max-width: 980px) {
    left: 36%;
  }
  @media screen and (max-width: 480px) {
    left: 25%;
    font-size: 12px;
  }
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
  @media screen and (max-width: 1920px) {
    height: 30%;
  }
  @media screen and (max-width: 1400px) {
  }
  /* @media screen and (max-width: 1200px) {
    height: 30%;
  } */
  @media screen and (max-width: 1024px) {
    height: 37%;
  }

  @media screen and (max-width: 980px) {
    height: 35%;
  }
  @media screen and (max-width: 480px) {
    height: 27%;
  }
  @media screen and (max-width: 380px) {
    height: 35%;
  }
`;
export const ContenedorMateriales = styled.div`
  background-color: #303030;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.25fr 2fr 1.25fr;
  @media screen and (max-width: 1920px) {
    grid-template-columns: 1fr 3fr 0.8fr;
  }
  @media screen and (max-width: 1400px) {
    align-content: center;
    grid-template-columns: 1.2fr 3fr 1.2fr;
  }
  @media screen and (max-width: 1200px) {
    align-content: center;
    grid-template-columns: 1fr 3fr 1fr;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 60px 280px 60px;
  }
  @media screen and (max-width: 380px) {
    grid-template-columns: 0.3fr 3fr 0.1fr;
  }
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
  cursor: pointer;
  @media screen and (max-width: 1920px) {
    width: 80px;
  }
  @media screen and (max-width: 1400px) {
    width: 72px;
  }
  @media screen and (max-width: 1024px) {
    width: 60px;
  }
  @media screen and (max-width: 980px) {
    width: 45px;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
export const IconoMaterial = styled(motion.img)`
  width: 64px;
  height: auto;
  border-radius: 50%;
  @media screen and (max-width: 1920px) {
    width: 48px;
  }
  @media screen and (max-width: 1400px) {
    width: 48px;
  }
  @media screen and (max-width: 980px) {
    width: 36px;
  }
  @media screen and (max-width: 480px) {
    width: 24px;
  }
`;
export const TextoMaterial = styled.p`
  text-align: center;
  color: #fff;
  @media screen and (max-width: 1920px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1400px) {
    font-size: 12px;
  }
  @media screen and (max-width: 980px) {
    font-size: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 0;
  }
`;
export const WrapperTexto = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const TxtSubimagen = styled.p`
  font-size: 16px;
  /* max-width: auto; */
  color: #fff;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  /* cursor: pointer; */

  /* :hover {
    color: rgba(85, 113, 119);
    //transform: translateX(20px);
    transition: 0.2s ease-in-out;
  } */

  @media screen and (max-width: 980px) {
    max-width: auto;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    max-width: auto;
    font-size: 12px;
  }
`;
