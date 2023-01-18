import React, { useState, useRef } from "react";
import NavbarBath from "../components/NavbarBath";
import SidebarBath from "../components/SidebarBath";
import HeroBath from "../modules/bath/01_HeroBath";
import InfoBath from "../modules/bath/02_InfoBath";
import ServicioBath from "../modules/bath/03_ServiciosBath";
import EncimeraBath from "../modules/bath/04_EncimeraBath";
import Slider1 from "../modules/bath/05_Slider1";
import EncimeraTop from "../modules/bath/06_EncimeraTop";
import Slider2 from "../modules/bath/07_Slider2";
import EncimeraAuto from "../modules/bath/08_EncimeraAuto";
import ForradoMueble from "../modules/bath/09_ForradoMuebles";
import InterForrado from "../modules/bath/10_IntercambiadorForrado";
import XLShelf from "../modules/bath/11_XLShelf";
import Slider3 from "../modules/bath/12_Slider3";
import XLSpecial from "../modules/bath/13_XLSpecial";
import RotadorLavabo from "../modules/bath/14_RotadorLavabo";
import { heroBath } from "../modules/bath/01_HeroBath/Data";
import { infoBath } from "../modules/bath/02_InfoBath/Data";
import { serviciosbath } from "../modules/bath/03_ServiciosBath/Data";
import { encimerabath } from "../modules/bath/04_EncimeraBath/Data";
import { encimeratop } from "../modules/bath/06_EncimeraTop/Data";
import { encimeraauto } from "../modules/bath/08_EncimeraAuto/Data";
import { forradomuebles } from "../modules/bath/09_ForradoMuebles/Data";
import { inter1 } from "../modules/bath/10_IntercambiadorForrado/Data";
import { xlshelf } from "../modules/bath/11_XLShelf/Data";
import { xlspecial } from "../modules/bath/13_XLSpecial/Data";
import { inter2 } from "../modules/bath/14_RotadorLavabo/Data";
const Bath = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <SidebarBath toggle={toggle} isOpen={isOpen} />
      <NavbarBath toggle={toggle} /> */}
      <HeroBath {...heroBath} />
      <InfoBath {...infoBath} />
      <ServicioBath {...serviciosbath} />
      <EncimeraBath {...encimerabath} />
      <Slider1 />
      <EncimeraTop {...encimeratop} />
      <EncimeraAuto {...encimeraauto} />
      <Slider2 />
      <ForradoMueble {...forradomuebles} />
      <InterForrado {...inter1} />
      <XLShelf {...xlshelf} />
      <Slider3 />
      <XLSpecial {...xlspecial} />
      <RotadorLavabo {...inter2} />
    </>
  );
};

export default Bath;
