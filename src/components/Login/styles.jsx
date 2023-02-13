import styled from "styled-components";
import { Link, Link as LinkRouter } from "react-router-dom";
export const Fondo = styled.div`
  background-color: #000;
  height: 100vh;
`;

export const Formulario = styled.form`
  position: absolute;
  top: 45%;
  left: 47.5%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    left: 41%;
  }
  @media screen and (max-width: 980px) {
    left: 36.6%;
  }
  @media screen and (max-width: 480px) {
    left: 22%;
  }
`;

export const Entradas = styled.input`
  background-color: #000;
  color: #fff;
  border: 0;
  border-bottom: 1px solid #fff;
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const Error = styled.div`
  color: red;
  margin: 10px 0;
  align-self: center;
`;

export const BottonLogin = styled.button`
  background-color: #000000;
  color: #fff;
  font-size: 1.2rem;
  border: 0;
  cursor: pointer;
  :hover {
    color: #557177;
  }
`;

export const Cerrar = styled(LinkRouter)`
  position: absolute;
  right: 80px;
  top: 80px;
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
`;
