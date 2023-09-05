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

export const SidebarBathEN = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper2>
        <SidebarLink2 to='/bath' onClick={toggle}>
          ES
        </SidebarLink2>
        <SidebarLink2 to='/en/bath' onClick={toggle}>
          EN
        </SidebarLink2>
        <SidebarLink2 to='/fr/bath' onClick={toggle}>
          FR
        </SidebarLink2>
      </SidebarWrapper2>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='infobath' smooth={true} onClick={toggle}>
            What's XL Bath
          </SidebarLink>
          <SidebarLink to='serviciosbath' smooth={true} onClick={toggle}>
            Our Services
          </SidebarLink>
          <SidebarLink to='Acabados_InfoGeneral' smooth={true} onClick={toggle}>
            Our Finishes
          </SidebarLink>
          <SidebarLink to='menuinteractivo' smooth={true} onClick={toggle}>
            Interactive bath configurator
          </SidebarLink>
          <SidebarLink to='forradomuebles' smooth={true} onClick={toggle}>
            XL Bathroom Adapt
          </SidebarLink>
          <SidebarLink to='encimerabath' smooth={true} onClick={toggle}>
            XL Top
          </SidebarLink>
          <SidebarLink to='frentes' smooth={true} onClick={toggle}>
            XL Front
          </SidebarLink>
          <SidebarLink to='xlshelf' smooth={true} onClick={toggle}>
            XL Shelf and self-supporting countertops
          </SidebarLink>
          <SidebarLink to='xlspecial' smooth={true} onClick={toggle}>
            XL Bath specials
          </SidebarLink>
          <SidebarLink to='xlspecial' smooth={true} onClick={toggle}>
            XL light shower tray
          </SidebarLink>
          <SidebarLink to='xlpanel' smooth={true} onClick={toggle}>
            XL Panel
          </SidebarLink>
          <SidebarRouter to='/bath/login' smooth={true} onClick={toggle}>
            Downloads
          </SidebarRouter>
          <SidebarRouter to='/en' smooth={true} onClick={toggle}>
            XL Porcelánico
          </SidebarRouter>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarBathEN;
