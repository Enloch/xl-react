import styled from "styled-components";
import { Link, Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { BsX } from "react-icons/bs";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  top: 0;
  left: 0;
  transition: 1.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(12, 1fr);
    /* This is better for small screens, once min() is better supported */
    /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
    gap: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(12, 1fr);
    /* This is better for small screens, once min() is better supported */
    /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
    gap: 1rem;
  }
`;

export const CloseIcon = styled(BsX)`
  color: #fff;
  :hover {
    color: rgba(85, 113, 119);
    transition: 0.2s ease-in-out;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  counter-reset: counter -1;
  grid-column: 4/ 6;
  grid-row-start: 2;
  color: #fff;
  @media screen and (max-width: 1400px) {
    grid-column: 3/7;
  }
  @media screen and (max-width: 980px) {
    margin-left: 40px;
    margin-right: 40px;
    grid-column: 3 / span 8;
  }
  @media screen and (max-width: 480px) {
    margin-left: 40px;
    margin-right: 40px;
    grid-column: 1/-2;
  }
`;
export const SidebarWrapper2 = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  display: flex;
  justify-content: end;
  color: #fff;
  @media screen and (max-width: 980px) {
    margin-left: 40px;
    margin-right: 40px;
    grid-column: 1 / span 3;
    grid-row-start: 2;
  }
  @media screen and (max-width: 480px) {
    margin-left: 40px;
    margin-right: 40px;
    grid-column-start:-5;
    grid-row-start: 1;
  }
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(13, 60px);
  text-align: left;
  @media screen and (max-width: 1400px) {
    grid-template-rows: repeat(13, 40px);
  }
  @media screen and (max-width: 980px) {
    grid-template-rows: repeat(13, 38px);
  }
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(13, 40px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  ::before {
    content: counter(counter, decimal-leading-zero);
    counter-increment: counter;

    position: absolute;
    right: calc(100% + 20px);

    border-top: 1px solid transparent; // para que tenga el mismo tamaño que el a de StyledElementoLista
    padding: 0.625rem 0;

    color: #fff;
  }
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 1.5rem;
  transition: 0.4s ease-in-out;
  color: #fff;
  cursor: pointer;
  border-top: 1px solid #fff;

  :hover {
    color: rgba(85, 113, 119);
    transform: translateX(20px);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 1400px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const SidebarLink2 = styled(Link)`
  text-decoration: none;
  margin: 1rem;
  font-size: 1.5rem;
  transition: 0.4s ease-in-out;
  color: #fff;
  cursor: pointer;

  :hover {
    color: rgba(85, 113, 119);
    transform: translateX(1rem);
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRouter = styled(LinkRouter)`
  ::before {
    content: counter(counter, decimal-leading-zero);
    counter-increment: counter;

    position: absolute;
    right: calc(100% + 20px);

    border-top: 1px solid transparent; // para que tenga el mismo tamaño que el a de StyledElementoLista
    padding: 0.625rem 0;

    color: #fff;
  }
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 1.5rem;
  transition: 0.4s ease-in-out;
  color: #fff;
  cursor: pointer;
  border-top: 1px solid #fff;
  text-decoration: none;

  :hover {
    color: rgba(85, 113, 119);
    transform: translateX(20px);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 1400px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
  }
`;
