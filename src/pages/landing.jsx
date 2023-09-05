import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Introduccion from "../modules/00_Intro";
import HeroSection from "../modules/01_HeroSection";
import InfoSection from "../modules/02_InfoSection";
import CaraSection from "../modules/03_CaracteristicasSection";
import MaterialSection from "../modules/04_MaterialSection";
import VentajasSection from "../modules/05_VentajasSection";
import FormatoSection from "../modules/06_FormatoSection";
import AcabadoSection from "../modules/07_AcabadoSection";
import ColecSection from "../modules/08_ColecSection";
import DescargasSection from "../modules/09_Descargas";
import FooterSection from "../modules/FooterSection";
import { heroObj } from "../modules/01_HeroSection/Data";
import { homeObj } from "../modules/02_InfoSection/Data";
import { caraObj } from "../modules/03_CaracteristicasSection/Data";
import { materialObj } from "../modules/04_MaterialSection/Data";
import { ventajasObj } from "../modules/05_VentajasSection/Data";
import { formatoObj } from "../modules/06_FormatoSection/Data";
import { acabadoObj } from "../modules/07_AcabadoSection/Data";
import { colecObj } from "../modules/08_ColecSection/Data";
import { LandingFooter } from "../modules/FooterSection/data";
import { descargasObj } from "../modules/09_Descargas/Data";
import ScrollToTop from "../components/GoTopBttn/ScrollToTop";
import XLBathSection from "../modules/09_XLBath";
import { XlbathObj } from "../modules/09_XLBath/Data";
import XLEncimera from "../modules/10_XLEncimera";
import { XlencimeraObj } from "../modules/10_XLEncimera/Data";
const Home = () => {
  const indiceRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // Agrega una función que maneje el clic en el botón de scroll hacia arriba
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      {/* <Introduccion indiceRef={indiceRef} /> */}
      {/* Agrega el botón de scroll hacia arriba usando el componente estilizado */}
      <ScrollUpButton onClick={handleScrollUp}>
        <MdOutlineKeyboardArrowUp />
      </ScrollUpButton>
      <ScrollToTop />
      <HeroSection {...heroObj} indiceRef={indiceRef} />
      <InfoSection {...homeObj} />
      <CaraSection {...caraObj} />
      <MaterialSection {...materialObj} />
      <VentajasSection {...ventajasObj} />
      <FormatoSection {...formatoObj} />
      <AcabadoSection {...acabadoObj} />
      <ColecSection {...colecObj} />
      <XLBathSection {...XlbathObj} />
      <XLEncimera {...XlencimeraObj} />
      {/* <DescargasSection {...descargasObj} /> */}
      <FooterSection {...LandingFooter} />
    </>
  );
};

export default Home;
// Define un botón estilizado usando styled-components
const ScrollUpButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10; /* Asegúrate de que el botón esté siempre por encima del contenido */
`;
