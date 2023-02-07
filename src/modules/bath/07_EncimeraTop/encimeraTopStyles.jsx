import { motion } from "framer-motion";
import styled from "styled-components";

export const InfoContainer = styled.div`
  background: rgb(211, 206, 201);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  padding: 2rem 4rem 4rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const TextWrapper = styled.div`
  grid-column: 4 / span 8;
  @media screen and(max-width: 1920px) {
    //grid-column: 1/span 8;
  }
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / -1;
  }
`;

export const Heading = styled(motion.p)`
  margin-right: 10%;
  font-size: 100px;
  line-height: 0.9;
  margin-bottom: 77px;
  justify-content: center;
  color: #303030;
  //grid-column: 4 / span 8;
  @media screen and (max-width: 1920px) {
    margin-right: 30%;
  }
  @media screen and (max-width: 1400px) {
    margin-right: 0;
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle = styled(motion.p)`
  font-size: 40px;
  line-height: 1.1;
  font-weight: 100;
  margin-left: 100px;
  color: #303030;
  @media screen and (max-width: 1400px) {
    margin-left: 0;
    font-size: 36px;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ImgWrap = styled.div`
  display: grid;
  padding-left: 100px;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1400px) {
    padding-left: 0;
  }
  @media screen and (max-width: 980px) {
    margin-top: 3%;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  grid-column: 4 / -2;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and(max-width: 1920px) {
    //grid-column: 1/span 8;
  }
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / -1;
  }
`;

export const WrapperAnim = styled.div`
  grid-column: 4 / -2;
  display: flex;
  flex-direction: row;
  /* height: 100%; */
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    /* flex-direction: column; */
    grid-column: 1 / -1;
  }
`;

export const BloqueTitulo = styled(motion.p)`
  height: 72px;
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 2rem;
  align-items: center;
  @media screen and (max-width: 1400px) {
    height: 48px;
  }
  @media screen and (max-width: 980px) {
    height: 40px;
  }
  @media screen and (max-width: 480px) {
    height: 32px;
  }
`;
export const WrapperTitulo = styled.div`
  font-size: 60px;
  color: #303030;
  align-self: center;

  @media screen and (max-width: 1400px) {
    font-size: 40px;
    margin-left: 0;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
export const ImagenTitulo = styled.img`
  margin-left: 1.5rem;
  height: 45px;
  width: auto;
  @media screen and (max-width: 1400px) {
    height: 40px;
  }
  @media screen and (max-width: 980px) {
    height: 32px;
  }
  @media screen and (max-width: 480px) {
    height: 24px;
  }
`;

export const BloqueDescarga = styled.div`
  grid-column: 2;
  justify-self: end;
  display: grid;
  align-items: center;
`;
export const TextoDescarga = styled.a`
  grid-column: 1;
  margin-right: 1rem;
  font-size: 1rem;
  color: #303030;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
export const LinkDescarga = styled.a`
  justify-self: end;
  grid-column: 2;
`;
export const IconoDescarga = styled.img`
  //grid-column: 2;
  height: auto;
  width: 2rem;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    width: 1.2rem;
  }
`;
export const BloqueSubtitulo = styled(motion.p)`
  font-size: 30px;
  color: #303030;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const ContenedorEncimera = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: space-evenly;
  gap: 2rem;
`;
export const BloqueEncimeras3 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 27%;
  @media screen and (max-width: 380px) {
    max-width: 25%;
  }
`;
export const IconoEncimera = styled.img`
  height: 150px;
  width: 380px;
  @media screen and (max-width: 1400px) {
    height: 112px;
    width: 355.9px;
  }
  @media screen and (max-width: 980px) {
    height: 110px;
  }
  @media screen and (max-width: 480px) {
    width: 116px;
    height: 56px;
  }
`;
export const DetalleEncimera = styled.img`
  width: auto;
  height: auto;
  margin-top: 2rem;
`;
export const InfoEncimera = styled.p`
  font-size: 24px;
  height: auto;
  margin-top: 1rem;
  color: #303030;

  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;
