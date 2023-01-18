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
  SidebarLink3,
} from "./SidebarElements";

export const SidebarEN = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper2>
        <SidebarLink2 to="/" onClick={toggle}>
          ES
        </SidebarLink2>
        <SidebarLink2 to="en" onClick={toggle}>
          EN
        </SidebarLink2>
      </SidebarWrapper2>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="aboutEN" smooth={true} onClick={toggle}>
            About XL
          </SidebarLink>
          <SidebarLink to="caracteristicaEN" smooth={true} onClick={toggle}>
            Characteristics
          </SidebarLink>
          <SidebarLink to="materialesEN" smooth={true} onClick={toggle}>
            Materials
          </SidebarLink>
          <SidebarLink to="ventajasEN" smooth={true} onClick={toggle}>
            Advantages
          </SidebarLink>
          <SidebarLink to="formatoEN" smooth={true} onClick={toggle}>
            Thickness and formats
          </SidebarLink>
          <SidebarLink to="acabadosEN" smooth={true} onClick={toggle}>
            Finishes
          </SidebarLink>
          <SidebarLink to="coleccionEN" smooth={true} onClick={toggle}>
            Our Collections
          </SidebarLink>
          <SidebarLink3 to="contacto" onClick={null}>
            Contact
          </SidebarLink3>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarEN;
