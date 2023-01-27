import React, { useState, useRef } from "react";
import NavbarBath from "../components/NavbarBath";
import SidebarBath from "../components/SidebarBath";
import HeroBath from '../modules/bath/01_HeroBath';
import InfoBath from "../modules/bath/02_InfoBath";
import ServicioBath from "../modules/bath/03_ServiciosBath";
import MenuInteractivo from "../modules/bath/04_MenuInteractivoBath";
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
import { menuIntObj } from "../modules/bath/04_MenuInteractivoBath/Data";
import { encimeratop } from "../modules/bath/06_EncimeraTop/Data";
import { encimeraauto } from "../modules/bath/08_EncimeraAuto/Data";
import { forradomuebles } from "../modules/bath/09_ForradoMuebles/Data";
import { inter1 } from "../modules/bath/10_IntercambiadorForrado/Data";
import { xlshelf } from "../modules/bath/11_XLShelf/Data";
import { xlspecial } from "../modules/bath/13_XLSpecial/Data";
import { inter2 } from "../modules/bath/14_RotadorLavabo/Data";
import AcabadosBath from "../modules/bath/_AcabadosBath";
import {
  Acabados_InfoGeneral,
  // eslint-disable-next-line no-unused-vars
  Acabados_Materiales,
} from "../modules/bath/_AcabadosBath/data";
import AdaptBath from "../modules/bath/_AdaptBath";
import { AdaptObj } from "../modules/bath/_AdaptBath/data";
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
      <AcabadosBath {...Acabados_InfoGeneral} />
      <MenuInteractivo {...menuIntObj} />
      <AdaptBath {...AdaptObj} />
      <EncimeraTop {...encimeratop} />
      <iframe
        src="https://itch.io/embed-upload/7225630?color=333333"
        allowfullscreen=""
        height={window.innerHeight}
        width={window.innerWidth}
        frameborder="0"
        title="Rotador"
      />
      <Slider1 />
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
