import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import NavbarEN from "../components/NavbarEN";
import SidebarEN from "../components/SidebarEN";
import Introduccion from "../modules/fr/00_Intro";
import HeroSection from "../modules/fr/01_HeroSection";
import InfoSection from "../modules/fr/02_InfoSection";
import CaraSection from "../modules/fr/03_CaracteristicasSection";
import MaterialSection from "../modules/fr/04_MaterialSection";
import VentajasSection from "../modules/fr/05_VentajasSection";
import FormatoSection from "../modules/fr/06_FormatoSection";
import AcabadoSection from "../modules/fr/07_AcabadoSection";
import ColecSection from "../modules/fr/08_ColecSection";
import FooterSection from "../modules/FooterSection";
import { heroObj } from "../modules/fr/01_HeroSection/Data";
import { homeObj } from "../modules/fr/02_InfoSection/Data";
import { caraObj } from "../modules/fr/03_CaracteristicasSection/Data";
import { materialObj } from "../modules/fr/04_MaterialSection/Data";
import { ventajasObj } from "../modules/fr/05_VentajasSection/Data";
import { formatoObj } from "../modules/fr/06_FormatoSection/Data";
import { acabadoObj } from "../modules/fr/07_AcabadoSection/Data";
import { colecObj } from "../modules/fr/08_ColecSection/Data";
import XLBathSection from "../modules/fr/09_XLBath";
import { LandingFooter } from "../modules/FooterSection/data";
import ScrollToTop from "../components/GoTopBttn/ScrollToTop";
import { XlbathObj } from "../modules/fr/09_XLBath/Data";
const HomeFR = () => {
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

export default HomeFR;
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
