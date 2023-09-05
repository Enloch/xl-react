import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";
import NavbarBath from "../components/NavbarBath";
import Sidebar from "../components/SidebarEncimera";
import HeroBath from "../modules/bath/01_HeroBath";
import MenuInteractivo from "../modules/encimeras/04_MenuInteractivoBath";
import { heroBath } from "../modules/bath/01_HeroBath/Data";
import { menuIntObj } from "../modules/encimeras/04_MenuInteractivoBath/Data";
import {
  Colec_Header,
  Colec_Cemento,
} from "../modules/coleccionesEncimera/01_nuestras_colec/data";
import NuestraColeccion from "../modules/coleccionesEncimera/01_nuestras_colec";

import FooterSection from "../modules/bath/FooterSection";
import { LandingFooter } from "../modules/bath/FooterSection/data";

import ScrollToTop from "../components/GoTopBttn/ScrollToTop";

const Encimera = () => {
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
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavbarBath toggle={toggle} />
      {/* Agrega el botón de scroll hacia arriba usando el componente estilizado */}
      <ScrollUpButton onClick={handleScrollUp}>
        <MdOutlineKeyboardArrowUp />
      </ScrollUpButton>
      <ScrollToTop />
      {/* <HeroBath {...heroBath} /> */}
      <MenuInteractivo {...menuIntObj} />
      <NuestraColeccion {...Colec_Header} {...Colec_Cemento} />
      <FooterSection {...LandingFooter} />
    </>
  );
};

export default Encimera;
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
