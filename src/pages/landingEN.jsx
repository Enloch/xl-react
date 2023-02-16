import React, { useState, useRef } from "react";
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
import { LandingFooter } from "../modules/FooterSection/data";
import ScrollToTop from "../components/GoTopBttn/ScrollToTop";
const HomeEN = () => {
  const indiceRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SidebarEN toggle={toggle} isOpen={isOpen} />
      <NavbarEN toggle={toggle} />
      <Introduccion indiceRef={indiceRef} />
      <ScrollToTop />
      <HeroSection {...heroObj} indiceRef={indiceRef} />
      <InfoSection {...homeObj} />
      <CaraSection {...caraObj} />
      <MaterialSection {...materialObj} />
      <VentajasSection {...ventajasObj} />
      <FormatoSection {...formatoObj} />
      <AcabadoSection {...acabadoObj} />
      <ColecSection {...colecObj} />
      {/* <FooterSection {...LandingFooter} /> */}

    </>
  );
};

export default HomeEN;
