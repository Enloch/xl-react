import { useRef, useState } from "react";
import {
  ContenedorCentro,
  ContenedorPrincipal,
  ContenedorTituloPrincipal,
  ContenedorMenu,
  TituloPrincipal,
  ContenedorRotador,
  TituloSecundario,
  IconoPDF,
} from "./Styles";
import Menu from "./Menu";
import Rotador from "./Rotador";
import Logo7475 from "../../assets/configurador/iconos/7475.png";
import useModeloStore from "./modeloStore";
import PDFIcon from "../../assets/configurador/iconos/pdf.svg";
import { captureAndGeneratePDF } from "../PDF";
function Configurador() {
  const {
    modeloMostrado,
    materialSobre,
    setModeloMostrado,
    setModeloExtension,
    modeloExtension,
    setIsExtendido,
    setMaterialSobre,
    setMaterialBisel,
    setMaterialBastidor,
    setMaterialPatas,
    modeloOriginal,
    setModeloOriginal,
    setModeloMostradoNombre,
    setModeloSobre,
    setMaterialSobreNombre,
    setMaterialBiselNombre,
    setMaterialBastidorNombre,
    setMaterialPatasNombre,
  } = useModeloStore();
  const rotadorRef = useRef();
  // Función para introducir un retraso

  const handleCaptureAndGeneratePDF = async () => {
    captureAndGeneratePDF();
  };
  return (
    <ContenedorPrincipal>
      <ContenedorTituloPrincipal>
        <div>
          <TituloPrincipal></TituloPrincipal>
          <TituloSecundario></TituloSecundario>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "2.5%",
            right: "1%",
          }}
          onClick={handleCaptureAndGeneratePDF}
        >
          <IconoPDF src={PDFIcon} />
          <span style={{ color: "#a6a9ab", fontSize: "12px" }}>
            resumen / resume
          </span>
        </div>
      </ContenedorTituloPrincipal>
      <ContenedorCentro>
        <ContenedorMenu>
          <Menu
            setModeloMostrado={setModeloMostrado}
            setModeloExtension={setModeloExtension}
            setMaterialSobre={setMaterialSobre}
            setMaterialBisel={setMaterialBisel}
            setMaterialBastidor={setMaterialBastidor}
            setMaterialPatas={setMaterialPatas}
            modeloExtension={modeloExtension}
            setIsExtendido={setIsExtendido}
            setModeloOriginal={setModeloOriginal}
            modeloOriginal={modeloOriginal}
            setModeloMostradoNombre={setModeloMostradoNombre}
            setModeloSobre={setModeloSobre}
            setMaterialSobreNombre={setMaterialSobreNombre}
            setMaterialBiselNombre={setMaterialBiselNombre}
            setMaterialBastidorNombre={setMaterialBastidorNombre}
            setMaterialPatasNombre={setMaterialPatasNombre}
          />
        </ContenedorMenu>
        <ContenedorRotador>
          <Rotador
            rotadorRef={rotadorRef} // Aquí pasas la referencia
          />
        </ContenedorRotador>
      </ContenedorCentro>
      {/* <div style={{ display: "flex", gap: "5px" }}>
        <TextoSubtitulos
          style={{
            fontSize: "12px",
          }}
        >
          Herramienta desarrollada por
        </TextoSubtitulos>
        <a href='https://www.7475.es/'>
          <img src={Logo7475} style={{ height: "10px" }} />
        </a>
      </div> */}
    </ContenedorPrincipal>
  );
}
export default Configurador;
