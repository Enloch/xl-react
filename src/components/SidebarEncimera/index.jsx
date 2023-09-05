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

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper2>
        {/* <SidebarLink2 to='/bath' onClick={toggle}>
          ES
        </SidebarLink2> */}
        {/* <SidebarLink2 to='/en/bath' onClick={toggle}>
          EN
        </SidebarLink2>
        <SidebarLink2 to='/fr/bath' onClick={toggle}>
          FR
        </SidebarLink2> */}
      </SidebarWrapper2>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='menuinteractivo' smooth={true} onClick={toggle}>
            Configurador de encimera interactivo
          </SidebarLink>
          <SidebarLink to='Acabados_InfoGeneral' smooth={true} onClick={toggle}>
            Nuestros Acabados
          </SidebarLink>
          {/* <SidebarLink to='/bath' smooth={true} onClick={toggle}>

          </SidebarLink> */}
          <SidebarRouter to='/' smooth={true} onClick={toggle}>
            XL Porcelánico
          </SidebarRouter>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
