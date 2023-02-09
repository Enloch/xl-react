import React from "react";
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
          <SidebarLink to='infobath' smooth={true} onClick={toggle}>
            Qué es XL Bath
          </SidebarLink>
          <SidebarLink to='serviciosbath' smooth={true} onClick={toggle}>
            Nuestros Servicios
          </SidebarLink>
          <SidebarLink to='Acabados_InfoGeneral' smooth={true} onClick={toggle}>
            Nuestros Acabados
          </SidebarLink>
          <SidebarLink to='menuinteractivo' smooth={true} onClick={toggle}>
            Menú Interactivo
          </SidebarLink>
          <SidebarLink to='forradomuebles' smooth={true} onClick={toggle}>
            XL Bathroom Adapt
          </SidebarLink>
          <SidebarLink to='encimerabath' smooth={true} onClick={toggle}>
            XL Top
          </SidebarLink>
          <SidebarLink to='frentes' smooth={true} onClick={toggle}>
            XL Frente
          </SidebarLink>
          <SidebarLink to='xlshelf' smooth={true} onClick={toggle}>
            XL Shelf y encimeras autoportantes
          </SidebarLink>
          <SidebarLink to='xlspecial' smooth={true} onClick={toggle}>
            XL Bath specials
          </SidebarLink>
          <SidebarLink to='xlspecial' smooth={true} onClick={toggle}>
            XL light shower tray
          </SidebarLink>
          <SidebarLink to='xlpanel' smooth={true} onClick={toggle}>
            XL panel
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarBath;
