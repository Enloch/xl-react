import React from "react";
import scrollTo from "../../../helpers/scrollTo";
import {
  Contenedor,
  ContenedorC1,
  ContenedorC2,
  ContenedorC3,
  Titulo,
  AreaListado,
  TituloListado,
  ContApartados,
  Apartado,
  TextoApartado,
  Cerrar,
} from "./descargasElements";

const DescargasBath = ({
  descargaEspTec,
  descargaTarifas,
  descargaAcabadosHD,
  descargasAmbHD,
  descargasXLBathHD,
  descargasModelos,
}) => {
  return (
    <Contenedor id='DescargasBath'>
      <Cerrar to='/bath'> X </Cerrar>
      <ContenedorC1>
        <Titulo>
          downloads // <br /> descargas
        </Titulo>
      </ContenedorC1>
      <ContenedorC2>
        <AreaListado>
          <TituloListado>especificaciones técnicas</TituloListado>
          <ContApartados>
            <Apartado href={descargaEspTec} download=''>
              <TextoApartado>acabados</TextoApartado>
            </Apartado>
            <Apartado href={descargaEspTec} download=''>
              <TextoApartado>XL top lisa</TextoApartado>
            </Apartado>
            <Apartado href={descargaEspTec} download=''>
              <TextoApartado>XL top plus</TextoApartado>
            </Apartado>
            <Apartado href={descargaEspTec} download=''>
              <TextoApartado>XL top integrity</TextoApartado>
            </Apartado>
            <Apartado href={descargaEspTec} download=''>
              <TextoApartado>XL top integrity plus</TextoApartado>
            </Apartado>
            <Apartado href={descargaEspTec} download=''>
              <TextoApartado>XL bath specials</TextoApartado>
            </Apartado>
            <Apartado href={descargaEspTec} download=''>
              <TextoApartado>XL light shower tray </TextoApartado>
            </Apartado>
            <Apartado href={descargaEspTec} download=''>
              <TextoApartado>XL panel </TextoApartado>
            </Apartado>
          </ContApartados>
        </AreaListado>
        <br />
        <br />
        <br />
        <AreaListado>
          <TituloListado>tarifas</TituloListado>
          <ContApartados>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>acabados</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL top lisa</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL top plus</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL top integrity</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL top integrity plus</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL drawer panel</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL copetes</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL frente</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL bath specials</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL light shower tray </TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL panel </TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL panel corte</TextoApartado>
            </Apartado>
            <Apartado href={descargaTarifas} download=''>
              <TextoApartado>XL panel corte + 4 orificios</TextoApartado>
            </Apartado>
          </ContApartados>
        </AreaListado>
      </ContenedorC2>
      <ContenedorC3>
        <AreaListado>
          <TituloListado>imágenes hd</TituloListado>
          <ContApartados>
            <Apartado href={descargaAcabadosHD} download=''>
              <TextoApartado>acabados</TextoApartado>
            </Apartado>
            <Apartado href={descargasAmbHD} download=''>
              <TextoApartado>ambientaciones</TextoApartado>
            </Apartado>
            <Apartado href={descargasXLBathHD} download=''>
              <TextoApartado>XL bath specials</TextoApartado>
            </Apartado>
            <Apartado href={descargasModelos} download=''>
              <TextoApartado>modelos 3D</TextoApartado>
            </Apartado>
          </ContApartados>
        </AreaListado>
      </ContenedorC3>
    </Contenedor>
  );
};

export default DescargasBath;
