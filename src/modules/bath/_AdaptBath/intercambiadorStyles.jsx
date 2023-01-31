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
  /* visibility: hidden; */
  top: 0;
`;
export const ContenedorImagen = styled.div`
  width: 100%;
  position: absolute;
  visibility: hidden;
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
export const PestañaMenu = styled.div`
  background-color: #ff9a9a;
`;
export const MenuIntrucciones = styled.div`
  background-color: #303030;
  width: 100%;
  height: 100%;
`;
export const BotonExpandir = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 1;
  bottom: 1%;
  width: 10%;
  /* height: 10%; */
  left: 50%;
  font-size: 2rem;
  cursor: pointer;
`;
export const BotonContinuar = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
