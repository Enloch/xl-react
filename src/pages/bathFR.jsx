import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import NavbarBath from "../components/NavbarBath";
import SidebarBath from "../components/SidebarBath";
import HeroBath from "../modules/bathFr/01_HeroBath";
import InfoBath from "../modules/bathFr/02_InfoBath";
import ServicioBath from "../modules/bathFr/03_ServiciosBath";
import MenuInteractivo from "../modules/bathFr/04_MenuInteractivoBath";
import EncimeraTop from "../modules/bathFr/07_EncimeraTop";
import EncimeraAuto from "../modules/bathFr/09_EncimeraAuto";
import Frente from "../modules/bathFr/08_Frente";
import XLSpecial from "../modules/bathFr/10_XLSpecial";
import { heroBath } from "../modules/bathFr/01_HeroBath/Data";
import { infoBath } from "../modules/bathFr/02_InfoBath/Data";
import { serviciosbath } from "../modules/bathFr/03_ServiciosBath/Data";
import { menuIntObj } from "../modules/bathFr/04_MenuInteractivoBath/Data";
import { encimeratop } from "../modules/bathFr/07_EncimeraTop/Data";
import { encimeraauto } from "../modules/bathFr/09_EncimeraAuto/Data";
import { xlspecial } from "../modules/bathFr/10_XLSpecial/Data";
import { frenteObj } from "../modules/bathFr/08_Frente/Data";
import AcabadosBath from "../modules/bathFr/05_AcabadosBath";
import {
  Acabados_InfoGeneral,
  // eslint-disable-next-line no-unused-vars
  Acabados_Materiales,
} from "../modules/bathFr/05_AcabadosBath/data";
import AdaptBath from "../modules/bathFr/06_AdaptBath";
import { AdaptObj } from "../modules/bathFr/06_AdaptBath/data";
import FooterSection from "../modules/bathFr/FooterSection";
import { LandingFooter } from "../modules/bathFr/FooterSection/data";
import PlatosDucha from "../modules/bathFr/11_PlatosDucha";
import { platoObj } from "../modules/bathFr/11_PlatosDucha/Data";
import XLPanel from "../modules/bathFr/12_XLPanel";
import { xlpanelObj } from "../modules/bathFr/12_XLPanel/Data";
import SidebarBathFr from "../components/SidebarBathFr";
import ScrollToTop from "../components/GoTopBttn/ScrollToTop";
const BathFr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Agrega una función que maneje el clic en el botón de scroll hacia arriba
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <SidebarBathFr toggle={toggle} isOpen={isOpen} />
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

export default BathFr;
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
