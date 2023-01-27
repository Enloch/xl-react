import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarWrapper2,
  SidebarMenu,
  SidebarLink,
  SidebarLink2,
  SideBtnWrap,
  SidebarRouter,
} from "./SidebarElements";

export const SidebarBath = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {/* <SidebarWrapper2>
        <SidebarLink2 to="/" onClick={toggle}>
          ES
        </SidebarLink2>
        <SidebarLink2 to="en" onClick={toggle}>
          EN
        </SidebarLink2>
      </SidebarWrapper2> */}
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" smooth={true} onClick={toggle}>
            Sobre XL
          </SidebarLink>
          <SidebarLink to="caracteristica" smooth={true} onClick={toggle}>
            Características
          </SidebarLink>
          <SidebarLink to="materiales" smooth={true} onClick={toggle}>
            Materiales
          </SidebarLink>
          <SidebarLink to="ventajas" smooth={true} onClick={toggle}>
            Ventajas
          </SidebarLink>
          <SidebarLink to="formato" smooth={true} onClick={toggle}>
            Espesores y formatos
          </SidebarLink>
          <SidebarLink to="acabados" smooth={true} onClick={toggle}>
            Acabados
          </SidebarLink>
          <SidebarLink to="coleccion" smooth={true} onClick={toggle}>
            Nuestras Colecciones
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarBath;