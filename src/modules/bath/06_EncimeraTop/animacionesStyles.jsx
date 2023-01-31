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
  padding: 50px 0px 20px 0px;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Linea = styled.div`
  background: #000;
  width: 80%;
  height: 1px;
  margin-bottom: 30px;
`;
export const Barra = styled(motion.div)`
  background: #000;
  color: #fff;
  height: 40px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 50px;
  padding-left: 10px;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
