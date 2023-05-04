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
  descargaInformeMateriales,
}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const puedeVerTarifas = user && user.permisos.includes("ver_tarifas");
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
          <TituloListado>
            especificaciones técnicas e <br /> informes de materiales
          </TituloListado>
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
            <Apartado href={descargaInformeMateriales} download=''>
              <TextoApartado>informes de laboratorio</TextoApartado>
            </Apartado>
          </ContApartados>
        </AreaListado>
        <br />
        <br />
        <br />
        {puedeVerTarifas && (
          <AreaListado>
            <TituloListado>tarifas</TituloListado>
            <ContApartados>
              <Apartado href={descargaTarifas} download=''>
                <TextoApartado>tarifas 2023</TextoApartado>
              </Apartado>
            </ContApartados>
          </AreaListado>
        )}
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
