import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoContainer = styled.div`
  background: rgb(211, 206, 201);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 1.563rem;
  padding: 6rem 4rem 4rem 4rem;
  @media screen and (max-width: 1400px) {
    margin-top: -5%;
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
    margin-top: -7%;
  }
  @media screen and (max-width: 480px) {
    margin-top: -15%;
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-column: 5 / -1;
  @media screen and(max-width: 1920px) {
    //grid-column: 1/span 8;
  }
  @media screen and (max-width: 1400px) {
    grid-column: 4/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / -1;
    grid-row: 1;
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
    margin-bottom: 20px;
    font-size: 60px;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle = styled(motion.p)`
  font-size: 40px;
  font-weight: 100;
  color: #303030;
  grid-column: 2 / 5;
  @media screen and (max-width: 1400px) {
    padding-right: 0;
    margin-left: 0;
    grid-column: 1/ 5;
    font-size: 32px;
  }
  @media screen and (max-width: 980px) {
    grid-column: 2 / 10;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    grid-row: 2;
    grid-column: 1 / -1;
  }
`;

export const ImgWrap = styled.div`
  max-width: 100%;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Img = styled.img`
  width: 100%;
  max-height: 100%;
  position: absolute;
`;
export const WrapperIframe = styled.div`
  grid-column: 3 / -3;
  grid-row: 4;
  height: 100vh;
  width: 100%;
  position: relative;
  @media screen and (max-width: 1400px) {
    height: 75vh;
    grid-column: 3 / -3;
  }
  @media screen and (max-width: 1200px) {
    height: 82vh;
    grid-column: 3 / -3;
  }
  @media screen and (max-width: 1024px) {
    height: 50vh;
    grid-column: 3 / -3;
  }
  @media screen and (max-width: 980px) {
    height: 41vh;
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    height: 30vh;
  }
`;
export const WrapperTxtImg = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  @media screen and (max-width: 1400px) {
    height: 40px;
  }
  @media screen and (max-width: 980px) {
    height: 30px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 4fr 1fr;
    height: 20px;
  }
`;

export const TextoImagen = styled(motion.p)`
  font-size: 40px;
  color: #fff;
  text-align: center;
  grid-column: 2;
  top: 0;
  @media screen and (max-width: 1400px) {
    font-size: 24px;
  }
  @media screen and (max-width: 980px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
export const PanelInferior = styled.div``;
export const GeneralContainer = styled(motion.div)`
  /* background: linear-gradient(
    to bottom,
    rgba(211, 206, 201) 0%,
    rgba(211, 206, 201) 50%,
    rgba(85, 113, 119) 50%,
    rgba(85, 113, 119) 100%
  ); */
  /* height: auto; */
  grid-column: 5/-1;
  grid-row: 2;
  @media screen and (max-width: 1400px) {
    grid-row: 2;
  }
  @media screen and (max-width: 980px) {
    grid-row: 3;
    grid-column: 1/-1;
  }
  @media screen and (max-width: 480px) {
    grid-row: 3;
  }
`;
export const SliderWrapper = styled.div`
  width: 1200px;
  @media screen and (max-width: 1400px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const SliderContainer = styled.div``;

export const Img2 = styled.img`
  background-size: cover;
  height: 100%;
  width: 100%;
  //margin-left: auto;
  //margin-right: auto;
  /* width: 100vw;
  height: 100vh; */
  //min-width: 100%;
`;
