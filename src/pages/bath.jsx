import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import NavbarBath from "../components/NavbarBath";
import SidebarBath from "../components/SidebarBath";
import HeroBath from "../modules/bath/01_HeroBath";
import InfoBath from "../modules/bath/02_InfoBath";
import ServicioBath from "../modules/bath/03_ServiciosBath";
import MenuInteractivo from "../modules/bath/04_MenuInteractivoBath";
import EncimeraTop from "../modules/bath/07_EncimeraTop";
import EncimeraAuto from "../modules/bath/09_EncimeraAuto";
import Frente from "../modules/bath/08_Frente";
import XLSpecial from "../modules/bath/10_XLSpecial";
import { heroBath } from "../modules/bath/01_HeroBath/Data";
import { infoBath } from "../modules/bath/02_InfoBath/Data";
import { serviciosbath } from "../modules/bath/03_ServiciosBath/Data";
import { menuIntObj } from "../modules/bath/04_MenuInteractivoBath/Data";
import { encimeratop } from "../modules/bath/07_EncimeraTop/Data";
import { encimeraauto } from "../modules/bath/09_EncimeraAuto/Data";
import { xlspecial } from "../modules/bath/10_XLSpecial/Data";
import { frenteObj } from "../modules/bath/08_Frente/Data";
import AcabadosBath from "../modules/bath/05_AcabadosBath";
import {
  Acabados_InfoGeneral,
  // eslint-disable-next-line no-unused-vars
  Acabados_Materiales,
} from "../modules/bath/05_AcabadosBath/data";
import AdaptBath from "../modules/bath/06_AdaptBath";
import { AdaptObj } from "../modules/bath/06_AdaptBath/data";
import FooterSection from "../modules/bath/FooterSection";
import { LandingFooter } from "../modules/bath/FooterSection/data";
import PlatosDucha from "../modules/bath/11_PlatosDucha";
import { platoObj } from "../modules/bath/11_PlatosDucha/Data";
import XLPanel from "../modules/bath/12_XLPanel";
import { xlpanelObj } from "../modules/bath/12_XLPanel/Data";
import RotadorWebGl from "../modules/bath/_RotadowWebgl";
import ScrollToTop from "../components/GoTopBttn/ScrollToTop";

const Bath = () => {
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
      <SidebarBath toggle={toggle} isOpen={isOpen} />
      <NavbarBath toggle={toggle} />
      {/* Agrega el botón de scroll hacia arriba usando el componente estilizado */}
      <ScrollUpButton onClick={handleScrollUp}>
        <MdOutlineKeyboardArrowUp />
      </ScrollUpButton>
      <ScrollToTop />
      <HeroBath {...heroBath} />
      <InfoBath {...infoBath} />
      <ServicioBath {...serviciosbath} />
      <MenuInteractivo {...menuIntObj} />
      <AcabadosBath {...Acabados_InfoGeneral} />
      <AdaptBath {...AdaptObj} />
      <EncimeraTop {...encimeratop} />
      <Frente {...frenteObj} />
      <EncimeraAuto {...encimeraauto} />
      <XLSpecial {...xlspecial} />
      <PlatosDucha {...platoObj} />
      <XLPanel {...xlpanelObj} />
      {/* <RotadorWebGl /> */}
      <FooterSection {...LandingFooter} />
    </>
  );
};

export default Bath;
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