import React, { useState, useRef } from "react";
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
import RotadorWebGl from "../modules/bath/_RotadowWebgl";
const Bath = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SidebarBath toggle={toggle} isOpen={isOpen} />
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
      {/* <RotadorWebGl /> */}
    </>
  );
};

export default Bath;
