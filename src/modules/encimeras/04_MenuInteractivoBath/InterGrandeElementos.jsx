import styled from "styled-components";
import { motion } from "framer-motion";

export const ContenedorIntercambiador = styled.div`
  background-color: #d3cec9;
  width: 100vw;
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
  background-color: #303030c8;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const ContenedorExpansor = styled(motion.div)`
  background-color: #3030309b;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

export const BotonExpandir = styled.button`
  background-color: transparent;
  /* border: none; */
  scale: 0.5;
  z-index: 1;
  justify-self: center;
  align-self: center;
  font-size: 2rem;
  cursor: pointer;
`;
export const TextoIntro2 = styled.p`
  color: white;
  font-size: 2rem;
  justify-self: center;
  align-self: center;
  @media screen and (max-width: 1920px) {
  }
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const BotonContinuar = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  height: 100%;
  font-size: 1.5rem;
  cursor: pointer;
  align-self: center;
  @media screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TextoIntro = styled.p`
  color: white;
  font-size: 1.5rem;
  justify-self: center;
  align-self: center;
  text-align: center;

  @media screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 1rem;
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
export const Icono2 = styled.img`
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
    transform: translateY(10px);
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

  @media screen and (max-width: 1400px) {
  }

  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const ContenedorMateriales = styled.div`
  background-color: #303030c8;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  grid-template-columns: 3fr 7fr 3fr;
`;
export const CajaMaterial2 = styled.div`
  grid-column: 2;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  row-gap: 0.5rem;
  column-gap: 1.5rem;
  width: 100%;
  height: 100%;
`;
export const CajaMaterial = styled.div`
  grid-column: 2;

  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  row-gap: 0.5rem;
  column-gap: 0.2rem;
  flex-wrap: wrap;
  /* width: 100%; */
  height: 100%;
`;
export const ContenedorEncimera = styled.div`
  /* flex: 1 0 30%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const IconoEncimera = styled.img`
  height: 100px;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    height: 80px;
  }
  @media screen and (max-width: 980px) {
    height: 70px;
  }
  @media screen and (max-width: 480px) {
    height: 50px;
  }
`;
export const ContIconText = styled.div`
  flex: 1 0 11.1%;
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
export const ContIconText2 = styled.div`
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
export const IconoMaterial = styled.img`
  width: 64px;
  height: auto;
  border-radius: 50%;
  border: 1px solid #707070;
  @media screen and (max-width: 1400px) {
    width: 48px;
  }
  @media screen and (max-width: 980px) {
    width: 36px;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
  }
`;
export const TextoMaterial = styled.p`
  text-align: center;
  text-shadow: 0px 0px 2px #000;
  margin-top: 8px;
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
    text-shadow: 0px 0px 0.5px #000;
    font-size: 8px;
  }
`;
export const ContenedorAcabados = styled.div``;
export const WrapperTexto = styled.div`
  background-color: #d3cec9;
  padding-left: 3rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const TxtSubimagen = styled.p`
  font-size: 16px;
  /* max-width: auto; */
  color: #000000;
  /* text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); */
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
