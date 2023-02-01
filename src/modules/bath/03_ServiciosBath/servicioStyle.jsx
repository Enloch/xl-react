import styled from "styled-components";
import { motion } from "framer-motion";

export const CaraContainer = styled.div`
  background: rgb(211, 206, 201);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 6rem 4rem 1rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const TextWrapper = styled.div`
  display: grid;
  height: auto;
  grid-column: 4 / span 7;
  width: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / span 12;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / span 12;
  }
`;

export const Heading = styled.p`
  max-width: 500px;
  font-size: 100px;
  line-height: 0.9;
  margin-right: 75px;
  margin-bottom: 77px;
  color: #303030;
  @media screen and (max-width: 1400px) {
    max-width: 450px;
    margin-right: 0;
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 980px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 480px) {
    max-width: 300px;
    margin-right: 0;
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 40px;
  line-height: 1.1;
  font-weight: 100;
  margin-left: 100px;
  margin-bottom: 35px;
  color: #303030;
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    margin-left: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    margin-left: 0;
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const ListaUno = styled(motion.div)`
  grid-column: 4 / span 4;
  margin-left: 125px;
  @media screen and (max-width: 1400px) {
    grid-column: 2 / 7;
  }
  @media screen and (max-width: 980px) {
    grid-column: 2/-1;
    margin-left: 0;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const ListaDos = styled(motion.div)`
  grid-column: 8 / span 4;

  @media screen and (max-width: 1400px) {
    margin-left: 70px;
    grid-column: 7 / 12;
  }
  @media screen and (max-width: 980px) {
    grid-column: 2/-1;
    margin-left: 0;
    margin-top: -15px;
  }
  @media screen and (max-width: 480px) {
    margin-top: -15px;
  }
`;
export const Lista = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 0.75rem;
`;
export const ListaInterna = styled.ul`
  color: #797979;
  font-size: 30px;
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    margin-left: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    margin-left: 0;
    font-size: 16px;
  }
`;
export const LiEl = styled(motion.li)`
  font-size: 30px;
  color: #303030;
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    margin-left: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    margin-left: 0;
    font-size: 16px;
  }
`;

export const ImgWrap = styled.div`
  display: grid;
  grid-row-gap: 3.125rem;
  grid-column-start: 4;
  grid-column-end: span 8;
  padding-left: 100px;
  max-width: 100%;
  //height: 776px;
  @media screen and (max-width: 980px) {
    padding-left: 0;
    grid-column-start: 1;
    grid-column-end: 5;
  }
  @media screen and (max-width: 480px) {
    padding-left: 0;
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 0;
`;
