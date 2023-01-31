import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimacionContainer = styled.div`
  width: 33%;
  float: left;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const TituloAnimacion = styled.div`
  font-size: 24px;
  grid-column: 5 / -1;
  padding: 50px 0px 0px 0px;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Linea = styled.div`
  background: #000;
  width: 100%;
  height: 1px;
  margin-top: 1rem;
  margin-bottom: 30px;
`;
export const Barra = styled(motion.div)`
  background: #000;
  color: #fff;
  height: 30px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 30px;
  padding-left: 10px;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
