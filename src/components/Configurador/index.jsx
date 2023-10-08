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
import Rotador, { TextoSubtitulos } from "./Rotador";
import Logo7475 from "../../assets/configurador/iconos/7475.png";
import useModeloStore from "./modeloStore";
import PDFIcon from "../../assets/configurador/iconos/pdf.svg";
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
        >
          <IconoPDF src={PDFIcon} />
          <p style={{ color: "#a6a9ab", fontSize: "12px" }}>resumen / resume</p>
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
            modeloMostrado={modeloMostrado}
            materialSobre={materialSobre}
          />
        </ContenedorRotador>
      </ContenedorCentro>{" "}
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
