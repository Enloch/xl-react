import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import { theme } from "../../styles/Theme";
import { motion } from "framer-motion";
//-----------------Contenedores----------------
export const ContenedorPrincipal = styled.div`
  padding: 15px 15px 15px 30px;
  position: relative;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 1920px;
  height: auto;

  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
export const ContenedorTituloPrincipal = styled.div`
  /* border-top: 1px solid #a6a9ab; */
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;
export const ContenedorCentro = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ContenedorInferior = styled.div``;
export const ContenedorMenu = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  @media (max-width: 600px) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  @media (max-width: 1400px) {
    grid-column: 1 / 3;
  }
`;
export const ContenedorRotador = styled.div`
  /* height: 80%; */
  grid-column: 2 / 9;
  /* background-color: #99feaf; */
  @media (max-width: 600px) {
    grid-column: 1 / -1;
    grid-row: 1;
  }
  @media (max-width: 1400px) {
    grid-column: 3 / -1;
  }
`;
export const FondoRotador = styled.div``;

export const ContenedorFotos = styled.div`
  grid-column: 6 / 9;
  display: flex;
  flex-direction: column;
  /* background-color: #5d7362; */
`;

export const ContenedorDetalles = styled.div`
  flex-basis: 50%;
  /* background-color: #0d8d2b; */
`;
export const ContenedorAmbiente = styled.div`
  flex-basis: 50%;

  /* background-color: #0d768d; */
`;
//---------------Titulo----------------
export const TituloPrincipal = styled.p`
  margin: 10px 0px 0px;
  font-family: "Roboto", sans-serif !important;
  font-size: 46.6px;
  font-weight: 900;
  font-kerning: normal;
`;
export const TituloSecundario = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-size: 14px;
  font-weight: 500;
  font-kerning: normal;
`;

//---------------Menu----------------
export const MenuSelector = styled.div`
  flex-basis: 90%;

  /* background-color: #ffc293; */
`;

export const MenuDescargas = styled.div`
  flex-basis: 10%;
  /* background-color: #bcff93; */
`;

export const Section = styled.div`
  margin-bottom: 1rem;
`;

export const LinkDescargas = styled.a`
  text-decoration: none;
  color: ${theme.colors.secondaryTextColor};
  font-size: 12px;
  font-family: "Roboto", sans-serif !important;
  font-weight: 400;
  margin: 5px 0px 5px;
  &:hover {
    color: ${theme.colors.primaryTextColor};
    font-weight: 700;
  }
`;

export const SectionHeader = styled.div`
  display: flex; // Añadido para permitir el diseño en fila
  align-items: center; // Añadido para alinear elementos en el centro verticalmente
  justify-content: space-between;
  border-top: 1px solid #a6a9ab;
  cursor: pointer;
  padding: 10px 0 10px;
`;
export const SubsectionHeader = styled.div`
  display: flex; // Añadido para permitir el diseño en fila
  align-items: center; // Añadido para alinear elementos en el centro verticalmente
  justify-content: space-between;
  cursor: pointer;
  padding: 0px;
`;
export const SectionTitle = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 700;
`;
export const SubsectionTitle = styled.p`
  color: ${theme.colors.secondaryTextColor};
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0px 5px;
`;
export const SectionIcon = styled.img`
  width: 10px;
`;

export const SectionContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 200px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Thumbnail = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-bottom: 3px;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 75px;
  margin-top: 10px;
  cursor: pointer;
  &.phantom {
    visibility: hidden;
  }
`;

export const Textos = styled.a`
  text-decoration: none;
  color: ${theme.colors.secondaryTextColor};
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0px 5px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primaryTextColor};
    font-weight: 700;
  }
`;
export const TextosIconos = styled.a`
  text-decoration: none;
  color: ${theme.colors.secondaryTextColor};
  font-family: "Roboto", sans-serif !important;
  font-size: 12px;
  font-weight: 400;
`;

export const IconoPDF = styled.img`
  height: 30px;
  z-index: 10;
  cursor: pointer;
`;
