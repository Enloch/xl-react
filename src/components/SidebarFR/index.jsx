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

export const SidebarFR = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper2>
        <SidebarLink2 to='/' onClick={toggle}>
          ES
        </SidebarLink2>
        <SidebarLink2 to='en' onClick={toggle}>
          EN
        </SidebarLink2>
        <SidebarLink2 to='fr' onClick={toggle}>
          FR
        </SidebarLink2>
      </SidebarWrapper2>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='aboutEN' smooth={true} onClick={toggle}>
            À propos de XL
          </SidebarLink>
          <SidebarLink to='caracteristicaEN' smooth={true} onClick={toggle}>
            Caractéristiques
          </SidebarLink>
          <SidebarLink to='materialesEN' smooth={true} onClick={toggle}>
            Matériaux
          </SidebarLink>
          <SidebarLink to='ventajasEN' smooth={true} onClick={toggle}>
            Avantages
          </SidebarLink>
          <SidebarLink to='formatoEN' smooth={true} onClick={toggle}>
            Épaisseur et formats
          </SidebarLink>
          <SidebarLink to='acabadosEN' smooth={true} onClick={toggle}>
            Finitions
          </SidebarLink>
          <SidebarLink to='coleccionEN' smooth={true} onClick={toggle}>
            Nos collections
          </SidebarLink>
          <SidebarLink to='bathEN' smooth={true} onClick={toggle}>
            XL Bath
          </SidebarLink>
          <SidebarLink3 to='contacto' onClick={null}>
            Contact
          </SidebarLink3>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarFR;
