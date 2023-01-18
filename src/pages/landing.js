import React, { useState, useRef } from "react";
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
import FooterSection from "../modules/09_FooterSection";
import { heroObj } from "../modules/01_HeroSection/Data";
import { homeObj } from "../modules/02_InfoSection/Data";
import { caraObj } from "../modules/03_CaracteristicasSection/Data";
import { materialObj } from "../modules/04_MaterialSection/Data";
import { ventajasObj } from "../modules/05_VentajasSection/Data";
import { formatoObj } from "../modules/06_FormatoSection/Data";
import { acabadoObj } from "../modules/07_AcabadoSection/Data";
import { colecObj } from "../modules/08_ColecSection/Data";
import { LandingFooter } from "../modules/09_FooterSection/data";

import ScrollToTop from "../components/GoTopBttn/ScrollToTop";
const Home = () => {
  const indiceRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
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
      <FooterSection {...LandingFooter} />
    </>
  );
};

export default Home;
