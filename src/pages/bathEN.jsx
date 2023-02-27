import React, { useState, useRef } from "react";
import NavbarBath from "../components/NavbarBath";
import SidebarBath from "../components/SidebarBath";
import HeroBath from "../modules/bathEn/01_HeroBath";
import InfoBath from "../modules/bathEn/02_InfoBath";
import ServicioBath from "../modules/bathEn/03_ServiciosBath";
import MenuInteractivo from "../modules/bathEn/04_MenuInteractivoBath";
import EncimeraTop from "../modules/bathEn/07_EncimeraTop";
import EncimeraAuto from "../modules/bathEn/09_EncimeraAuto";
import Frente from "../modules/bathEn/08_Frente";
import XLSpecial from "../modules/bathEn/10_XLSpecial";
import { heroBath } from "../modules/bathEn/01_HeroBath/Data";
import { infoBath } from "../modules/bathEn/02_InfoBath/Data";
import { serviciosbath } from "../modules/bathEn/03_ServiciosBath/Data";
import { menuIntObj } from "../modules/bathEn/04_MenuInteractivoBath/Data";
import { encimeratop } from "../modules/bathEn/07_EncimeraTop/Data";
import { encimeraauto } from "../modules/bathEn/09_EncimeraAuto/Data";
import { xlspecial } from "../modules/bathEn/10_XLSpecial/Data";
import { frenteObj } from "../modules/bathEn/08_Frente/Data";
import AcabadosBath from "../modules/bathEn/05_AcabadosBath";
import {
  Acabados_InfoGeneral,
  // eslint-disable-next-line no-unused-vars
  Acabados_Materiales,
} from "../modules/bathEn/05_AcabadosBath/data";
import AdaptBath from "../modules/bathEn/06_AdaptBath";
import { AdaptObj } from "../modules/bathEn/06_AdaptBath/data";
import FooterSection from "../modules/bathEn/FooterSection";
import { LandingFooter } from "../modules/bathEn/FooterSection/data";
import PlatosDucha from "../modules/bathEn/11_PlatosDucha";
import { platoObj } from "../modules/bathEn/11_PlatosDucha/Data";
import XLPanel from "../modules/bathEn/12_XLPanel";
import { xlpanelObj } from "../modules/bathEn/12_XLPanel/Data";
import RotadorWebGl from "../modules/bathEn/_RotadowWebgl";
import SidebarBathEN from "../components/SidebarBathEn";

const BathEN = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SidebarBathEN toggle={toggle} isOpen={isOpen} />
      <NavbarBath toggle={toggle} />
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

export default BathEN;
