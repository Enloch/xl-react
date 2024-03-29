import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import NavbarEN from "../components/NavbarEN";
import SidebarEN from "../components/SidebarEN";
import Introduccion from "../modules/en/00_Intro";
import HeroSection from "../modules/en/01_HeroSection";
import InfoSection from "../modules/en/02_InfoSection";
import CaraSection from "../modules/en/03_CaracteristicasSection";
import MaterialSection from "../modules/en/04_MaterialSection";
import VentajasSection from "../modules/en/05_VentajasSection";
import FormatoSection from "../modules/en/06_FormatoSection";
import AcabadoSection from "../modules/en/07_AcabadoSection";
import ColecSection from "../modules/en/08_ColecSection";
import FooterSection from "../modules/FooterSection";
import { heroObj } from "../modules/en/01_HeroSection/Data";
import { homeObj } from "../modules/en/02_InfoSection/Data";
import { caraObj } from "../modules/en/03_CaracteristicasSection/Data";
import { materialObj } from "../modules/en/04_MaterialSection/Data";
import { ventajasObj } from "../modules/en/05_VentajasSection/Data";
import { formatoObj } from "../modules/en/06_FormatoSection/Data";
import { acabadoObj } from "../modules/en/07_AcabadoSection/Data";
import { colecObj } from "../modules/en/08_ColecSection/Data";
import XLBathSection from "../modules/en/09_XLBath";
import { LandingFooter } from "../modules/FooterSection/data";
import ScrollToTop from "../components/GoTopBttn/ScrollToTop";
import { XlbathObj } from "../modules/en/09_XLBath/Data";
const HomeEN = () => {
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
      <SidebarEN toggle={toggle} isOpen={isOpen} />
      <NavbarEN toggle={toggle} />
      {/* <Introduccion indiceRef={indiceRef} /> */}
      <ScrollToTop />
      {/* Agrega el botón de scroll hacia arriba usando el componente estilizado */}
      <ScrollUpButton onClick={handleScrollUp}>
        <MdOutlineKeyboardArrowUp />
      </ScrollUpButton>
      <HeroSection {...heroObj} indiceRef={indiceRef} />
      <InfoSection {...homeObj} />
      <CaraSection {...caraObj} />
      <MaterialSection {...materialObj} />
      <VentajasSection {...ventajasObj} />
      <FormatoSection {...formatoObj} />
      <AcabadoSection {...acabadoObj} />
      <ColecSection {...colecObj} />
      <XLBathSection {...XlbathObj} />

      {/* <FooterSection {...LandingFooter} /> */}
    </>
  );
};

export default HomeEN;
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
