/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import topL from "../../../assets/images/bath/encimerastop/top-lisa-blanco.png";
import topIn from "../../../assets/images/bath/encimerastop/top-int-blanco.png";
import topInPlus from "../../../assets/images/bath/encimerastop/top-intplus-blanco.png";
import {
  ContenedorIntercambiador,
  ContenedorImagenBase,
  ContenedorImagen,
  Imagen,
  ContenedorMenu,
  MenuIntrucciones,
  BotonExpandir,
  BotonContinuar,
  TextoIntro,
  ContenedorIconos,
  Icono1,
  MenuMateriales,
  ContenedorMateriales,
  IconoMaterial,
  CajaMaterial,
  ContIconText,
  TextoMaterial,
  WrapperTexto,
  TxtSubimagen,
  ContenedorExpansor,
  TextoIntro2,
  ContIconText2,
  IconoEncimera,
  ContenedorEncimera,
  CajaMaterial2,
} from "./InterGrandeElementos";

import {
  FRONTALES,
  ACABADOMUEBLE,
  PAVIMENTOS,
  PLATOS,
  REVESTIMIENTOS,
  ENCIMERAXL,
  XLFRONTALCAJON,
  FRENTESXLMODULO,
  XLLATERAL,
  XLLAVABO,
  ICONOS,
  txtacabados,
  EncimeraTopInt,
  EncimeraTopIntPlus,
} from "./dataInterGrande";
import icono_b from "../../../assets/icons/botones/boton_b.png";
import icono from "../../../assets/icons/botones/boton.png";
import icono_retroceso from "../../../assets/icons/botones/undo-svgrepo-com.svg";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const InterGrande = ({ base }) => {
  const [inicio, setInicio] = useState(true);
  const [inicio2, setInicio2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [iconos, setIconos] = useState(false);
  const [muebleVisible, setMuebleVisible] = useState(false);
  const [materialesVisible, SetMateriales] = useState(false);
  const [MatModulo, SetMaterialesModulo] = useState(false);
  const [MatEncimera, SetMaterialesEncimera] = useState(false);
  const [MatCajon, SetMaterialesCajon] = useState(false);
  const [MatFrente, SetMaterialesFrente] = useState(false);
  const [MatPavimento, SetMaterialesPavimento] = useState(false);
  const [MatRevestimiento, SetMaterialesRevestimiento] = useState(false);
  const [MatPlato, SetMaterialesPlato] = useState(false);
  const [MatLavabo, SetMaterialesLavabo] = useState(false);
  //modulo
  const [allureModulo, SetAllureM] = useState(false);
  const [berenModulo, SetBerenM] = useState(false);
  const [blancborgModulo, SetBlancborgM] = useState(false);
  const [blancinvModulo, SetBlancinvM] = useState(false);
  const [brazilModulo, SetBrazilM] = useState(false);
  const [calacattaModulo, SetCalacattaM] = useState(false);
  const [emeModulo, SetEmeM] = useState(false);
  const [kendocModulo, SetKendocM] = useState(false);
  const [kendolModulo, SetKendolM] = useState(false);
  const [momaModulo, SetMomaM] = useState(false);
  const [negroModulo, SetNegroM] = useState(false);
  const [noonGModulo, SetNoonGM] = useState(false);
  const [noonsModulo, SetNoonsM] = useState(false);
  const [paladioModulo, SetPaladioM] = useState(false);
  const [syracModulo, SetSyracM] = useState(false);
  //Encimera
  const [allureEncimera, SetAllureEn] = useState(false);
  const [berenEncimera, SetBerenEn] = useState(false);
  const [blancborgEncimera, SetBlancborgEn] = useState(false);
  const [blancinvEncimera, SetBlancinvEn] = useState(false);
  const [brazilEncimera, SetBrazilEn] = useState(false);
  const [calacattaEncimera, SetCalacattaEn] = useState(false);
  const [emeEncimera, SetEmeEn] = useState(false);
  const [kendocEncimera, SetKendocEn] = useState(false);
  const [kendolEncimera, SetKendolEn] = useState(false);
  const [momaEncimera, SetMomaEn] = useState(false);
  const [negroEncimera, SetNegroEn] = useState(false);
  const [noonGEncimera, SetNoonGEn] = useState(false);
  const [noonsEncimera, SetNoonsEn] = useState(false);
  const [paladioEncimera, SetPaladioEn] = useState(false);
  const [syracEncimera, SetSyracEn] = useState(false);
  //Cajon
  const [allureCajon, SetAllureCaj] = useState(false);
  const [berenCajon, SetBerenCaj] = useState(false);
  const [blancborgCajon, SetBlancborgCaj] = useState(false);
  const [blancinvCajon, SetBlancinvCaj] = useState(false);
  const [brazilCajon, SetBrazilCaj] = useState(false);
  const [calacattaCajon, SetCalacattaCaj] = useState(false);
  const [emeCajon, SetEmeCaj] = useState(false);
  const [kendocCajon, SetKendocCaj] = useState(false);
  const [kendolCajon, SetKendolCaj] = useState(false);
  const [momaCajon, SetMomaCaj] = useState(false);
  const [negroCajon, SetNegroCaj] = useState(false);
  const [noonGCajon, SetNoonGCaj] = useState(false);
  const [noonsCajon, SetNoonsCaj] = useState(false);
  const [paladioCajon, SetPaladioCaj] = useState(false);
  const [syracCajon, SetSyracCaj] = useState(false);
  //Frente
  const [allureFrente, SetAllureFre] = useState(false);
  const [berenFrente, SetBerenFre] = useState(false);
  const [blancborgFrente, SetBlancborgFre] = useState(false);
  const [blancinvFrente, SetBlancinvFre] = useState(false);
  const [brazilFrente, SetBrazilFre] = useState(false);
  const [calacattaFrente, SetCalacattaFre] = useState(false);
  const [emeFrente, SetEmeFre] = useState(false);
  const [kendocFrente, SetKendocFre] = useState(false);
  const [kendolFrente, SetKendolFre] = useState(false);
  const [momaFrente, SetMomaFre] = useState(false);
  const [negroFrente, SetNegroFre] = useState(false);
  const [noonGFrente, SetNoonGFre] = useState(false);
  const [noonsFrente, SetNoonsFre] = useState(false);
  const [paladioFrente, SetPaladioFre] = useState(false);
  const [syracFrente, SetSyracFre] = useState(false);
  //Pavimento
  const [allurePavimento, SetAllurePav] = useState(false);
  const [berenPavimento, SetBerenPav] = useState(false);
  const [blancborgPavimento, SetBlancborgPav] = useState(false);
  const [blancinvPavimento, SetBlancinvPav] = useState(false);
  const [brazilPavimento, SetBrazilPav] = useState(false);
  const [calacattaPavimento, SetCalacattaPav] = useState(false);
  const [emePavimento, SetEmePav] = useState(false);
  const [kendocPavimento, SetKendocPav] = useState(false);
  const [kendolPavimento, SetKendolPav] = useState(false);
  const [momaPavimento, SetMomaPav] = useState(false);
  const [negroPavimento, SetNegroPav] = useState(false);
  const [noonGPavimento, SetNoonGPav] = useState(false);
  const [noonsPavimento, SetNoonsPav] = useState(false);
  const [paladioPavimento, SetPaladioPav] = useState(false);
  const [syracPavimento, SetSyracPav] = useState(false);
  //Revestimiento
  const [allureRevestimiento, SetAllureRev] = useState(false);
  const [berenRevestimiento, SetBerenRev] = useState(false);
  const [blancborgRevestimiento, SetBlancborgRev] = useState(false);
  const [blancinvRevestimiento, SetBlancinvRev] = useState(false);
  const [brazilRevestimiento, SetBrazilRev] = useState(false);
  const [calacattaRevestimiento, SetCalacattaRev] = useState(false);
  const [emeRevestimiento, SetEmeRev] = useState(false);
  const [kendocRevestimiento, SetKendocRev] = useState(false);
  const [kendolRevestimiento, SetKendolRev] = useState(false);
  const [momaRevestimiento, SetMomaRev] = useState(false);
  const [negroRevestimiento, SetNegroRev] = useState(false);
  const [noonGRevestimiento, SetNoonGRev] = useState(false);
  const [noonsRevestimiento, SetNoonsRev] = useState(false);
  const [paladioRevestimiento, SetPaladioRev] = useState(false);
  const [syracRevestimiento, SetSyracRev] = useState(false);
  //Plato
  const [allurePlato, SetAllurePla] = useState(false);
  const [berenPlato, SetBerenPla] = useState(false);
  const [blancborgPlato, SetBlancborgPla] = useState(false);
  const [blancinvPlato, SetBlancinvPla] = useState(false);
  const [brazilPlato, SetBrazilPla] = useState(false);
  const [calacattaPlato, SetCalacattaPla] = useState(false);
  const [emePlato, SetEmePla] = useState(false);
  const [kendocPlato, SetKendocPla] = useState(false);
  const [kendolPlato, SetKendolPla] = useState(false);
  const [momaPlato, SetMomaPla] = useState(false);
  const [negroPlato, SetNegroPla] = useState(false);
  const [noonGPlato, SetNoonGPla] = useState(false);
  const [noonsPlato, SetNoonsPla] = useState(false);
  const [paladioPlato, SetPaladioPla] = useState(false);
  const [syracPlato, SetSyracPla] = useState(false);
  //Lavabo
  const [allureLavabo, SetAllureLav] = useState(false);
  const [berenLavabo, SetBerenLav] = useState(false);
  const [blancborgLavabo, SetBlancborgLav] = useState(false);
  const [blancinvLavabo, SetBlancinvLav] = useState(false);
  const [brazilLavabo, SetBrazilLav] = useState(false);
  const [calacattaLavabo, SetCalacattaLav] = useState(false);
  const [emeLavabo, SetEmeLav] = useState(false);
  const [kendocLavabo, SetKendocLav] = useState(false);
  const [kendolLavabo, SetKendolLav] = useState(false);
  const [momaLavabo, SetMomaLav] = useState(false);
  const [negroLavabo, SetNegroLav] = useState(false);
  const [noonGLavabo, SetNoonGLav] = useState(false);
  const [noonsLavabo, SetNoonsLav] = useState(false);
  const [paladioLavabo, SetPaladioLav] = useState(false);
  const [syracLavabo, SetSyracLav] = useState(false);
  //partes mueble
  const [frenteSelected, SetFrente] = useState(false);
  const [modulosSelected, SetModulos] = useState(false);
  const [lateralSelected, SetLateral] = useState(false);
  const [encimeraSelected, SetEncimera] = useState(false);
  //partes extras
  const [frontalSelected, SetFrontal] = useState(false);
  const [platoSelected, SetPlato] = useState(false);
  const [lavaboSelected, SetLavabo] = useState(false);
  const [revestimientoSelected, SetRevestimiento] = useState(false);
  const [pavimentoSelected, SetPavimento] = useState(false);
  //Acabados Mueble
  const [Natural, SetNatural] = useState(false);
  const [Antracita, SetAntracita] = useState(false);
  const [Blanco, SetBlanco] = useState(false);
  const [Nordik, SetNordik] = useState(false);
  // tipo de encimera
  const [menuTop, SetMenuTop] = useState(false);
  const [toplisa, SetTopLisa] = useState(false);
  const [topInt, SetTopInt] = useState(false);
  const [topIntPlus, SetTopIntPlus] = useState(false);
  const [lavaboON, SetLavaboON] = useState(true);
  //acabados
  const [txtfrente, setTxtF] = useState(txtacabados.acNordik);
  const [txtmodulo, setTxtM] = useState(txtacabados.acNordik);
  const [txtlateral, setTxtL] = useState(txtacabados.acNordik);
  const [txtencimera, setTxtE] = useState(txtacabados.acNordik);
  const [txtmueble, setTxtMu] = useState(txtacabados.acNordik);
  const [txtcajon, setTxtC] = useState(txtacabados.acNordik);
  const [txtpavimento, setTxtP] = useState(txtacabados.acMoma);
  const [txtrevestimiento, setTxtR] = useState(txtacabados.acMoma);
  const [txtplato, setTxtPlato] = useState(txtacabados.acMoma);
  const [txtfrontal, setTxtFrontal] = useState(txtacabados.acSinFrente);
  const [txtlavabo, setTxtLavabo] = useState(txtacabados.acSinLavabo);

  const handleClick = (acabado, setFunc, mat, setFunc2, visible2) => {
    setIconos(true);
    setFunc2(!visible2);
    setFunc(!mat);
    if (visible2 === MatCajon && !mat) {
      setTxtC(txtacabados[`ac${acabado}`]);
    }
    if (visible2 === MatEncimera && lateralSelected && !mat) {
      setTxtL(txtacabados[`ac${acabado}`]);
    }
    if (visible2 === MatEncimera && !mat) {
      setTxtE(txtacabados[`ac${acabado}`]);
    }
    if (visible2 === MatModulo && !mat) {
      setTxtM(txtacabados[`ac${acabado}`]);
    }
    if (visible2 === MatPavimento && !mat) {
      setTxtP(txtacabados[`ac${acabado}`]);
    }
    if (visible2 === MatRevestimiento && !mat) {
      setTxtR(txtacabados[`ac${acabado}`]);
    }
    if (visible2 === MatFrente && !mat) {
      setTxtFrontal(txtacabados[`ac${acabado}`]);
    }
    if (visible2 === MatPlato && !mat) {
      setTxtPlato(txtacabados[`ac${acabado}`]);
    }
    if (visible2 === MatLavabo && !mat) {
      setTxtLavabo(txtacabados[`ac${acabado}`]);
    }
  };

  const clickAcabado = (finish) => {
    setIconos(true);
    setMuebleVisible(!muebleVisible);
    SetNatural(finish === "Natural");
    SetAntracita(finish === "Antracita");
    SetBlanco(finish === "Blanco");
    SetNordik(finish === "Nordik");

    if (
      txtmodulo === txtacabados.acNatural ||
      txtmodulo === txtacabados.acNordik ||
      txtmodulo === txtacabados.acAntracita ||
      txtmodulo === txtacabados.acBlanco
    ) {
      setTxtM(txtacabados[`ac${finish}`]);
    } else {
      setTxtM(txtmodulo);
    }
    if (
      txtencimera === txtacabados.acNatural ||
      txtencimera === txtacabados.acNordik ||
      txtencimera === txtacabados.acAntracita ||
      txtencimera === txtacabados.acBlanco
    ) {
      setTxtE(txtacabados[`ac${finish}`]);
    } else {
      setTxtE(txtencimera);
    }
    if (
      txtlateral === txtacabados.acNatural ||
      txtlateral === txtacabados.acNordik ||
      txtlateral === txtacabados.acAntracita ||
      txtlateral === txtacabados.acBlanco
    ) {
      setTxtL(txtacabados[`ac${finish}`]);
    } else {
      setTxtL(txtlateral);
    }
    if (
      txtfrente === txtacabados.acNatural ||
      txtfrente === txtacabados.acNordik ||
      txtfrente === txtacabados.acAntracita ||
      txtfrente === txtacabados.acBlanco
    ) {
      setTxtF(txtacabados[`ac${finish}`]);
    } else {
      setTxtF(txtfrente);
    }
    setTxtMu(txtacabados[`ac${finish}`]);
  };

  const encimerasArray = [
    { name: "allureXLE", isVisible: allureEncimera },
    { name: "berenXLE", isVisible: berenEncimera },
    { name: "blancborgXLE", isVisible: blancborgEncimera },
    { name: "blancinvXLE", isVisible: blancinvEncimera },
    { name: "brazilXLE", isVisible: brazilEncimera },
    { name: "calacattaXLE", isVisible: calacattaEncimera },
    { name: "emeXLE", isVisible: emeEncimera },
    { name: "kendoCXLE", isVisible: kendocEncimera },
    { name: "kendoLXLE", isVisible: kendolEncimera },
    { name: "momaXLE", isVisible: momaEncimera },
    { name: "negroXLE", isVisible: negroEncimera },
    { name: "noonGXLE", isVisible: noonGEncimera },
    { name: "noonSXLE", isVisible: noonsEncimera },
    { name: "paladioXLE", isVisible: paladioEncimera },
    { name: "syracXLE", isVisible: syracEncimera },
  ];
  const encimerasTopArray = [
    { name: "allureTI", isVisible: allureEncimera },
    { name: "berenTI", isVisible: berenEncimera },
    { name: "blancborgTI", isVisible: blancborgEncimera },
    { name: "blancinvTI", isVisible: blancinvEncimera },
    { name: "brazilTI", isVisible: brazilEncimera },
    { name: "calacattaTI", isVisible: calacattaEncimera },
    { name: "emeTI", isVisible: emeEncimera },
    { name: "kendoCTI", isVisible: kendocEncimera },
    { name: "kendoLTI", isVisible: kendolEncimera },
    { name: "momaTI", isVisible: momaEncimera },
    { name: "negroTI", isVisible: negroEncimera },
    { name: "noonGTI", isVisible: noonGEncimera },
    { name: "noonSTI", isVisible: noonsEncimera },
    { name: "paladioTI", isVisible: paladioEncimera },
    { name: "syracTI", isVisible: syracEncimera },
  ];
  const encimerasTopPlusArray = [
    { name: "allureTIP", isVisible: allureEncimera },
    { name: "berenTIP", isVisible: berenEncimera },
    { name: "blancborgTIP", isVisible: blancborgEncimera },
    { name: "blancinvTIP", isVisible: blancinvEncimera },
    { name: "brazilTIP", isVisible: brazilEncimera },
    { name: "calacattaTIP", isVisible: calacattaEncimera },
    { name: "emeTIP", isVisible: emeEncimera },
    { name: "kendoCTIP", isVisible: kendocEncimera },
    { name: "kendoLTIP", isVisible: kendolEncimera },
    { name: "momaTIP", isVisible: momaEncimera },
    { name: "negroTIP", isVisible: negroEncimera },
    { name: "noonGTIP", isVisible: noonGEncimera },
    { name: "noonSTIP", isVisible: noonsEncimera },
    { name: "paladioTIP", isVisible: paladioEncimera },
    { name: "syracTIP", isVisible: syracEncimera },
  ];
  const modulosArray = [
    { name: "allureXlM", isVisible: allureModulo },
    { name: "berenXlM", isVisible: berenModulo },
    { name: "blancBorghiniXlM", isVisible: blancborgModulo },
    { name: "blancInvisibleXlM", isVisible: blancinvModulo },
    { name: "brazilXlM", isVisible: brazilModulo },
    { name: "calacattaXlM", isVisible: calacattaModulo },
    { name: "emeXlM", isVisible: emeModulo },
    { name: "kendoCXlM", isVisible: kendocModulo },
    { name: "kendoLXlM", isVisible: kendolModulo },
    { name: "momaXlM", isVisible: momaModulo },
    { name: "negroXlM", isVisible: negroModulo },
    { name: "noonGXlM", isVisible: noonGModulo },
    { name: "noonSXlM", isVisible: noonsModulo },
    { name: "paladioXlM", isVisible: paladioModulo },
    { name: "syracXlM", isVisible: syracModulo },
  ];
  const lateralesArray = [
    { name: "allureXLL", isVisible: allureEncimera },
    { name: "berenXLL", isVisible: berenEncimera },
    { name: "blancborgXLL", isVisible: blancborgEncimera },
    { name: "blancinvXLL", isVisible: blancinvEncimera },
    { name: "brazilXLL", isVisible: brazilEncimera },
    { name: "calacattaXLL", isVisible: calacattaEncimera },
    { name: "emeXLL", isVisible: emeEncimera },
    { name: "kendoCXLL", isVisible: kendocEncimera },
    { name: "kendoLXLL", isVisible: kendolEncimera },
    { name: "momaXLL", isVisible: momaEncimera },
    { name: "negroXLL", isVisible: negroEncimera },
    { name: "noonGXLL", isVisible: noonGEncimera },
    { name: "noonSXLL", isVisible: noonsEncimera },
    { name: "paladioXLL", isVisible: paladioEncimera },
    { name: "syracXLL", isVisible: syracEncimera },
  ];
  const cajonesArray = [
    { name: "allureXLF", isVisible: allureCajon },
    { name: "berenXLF", isVisible: berenCajon },
    { name: "blancborgXLF", isVisible: blancborgCajon },
    { name: "blancinvXLF", isVisible: blancinvCajon },
    { name: "brazilXLF", isVisible: brazilCajon },
    { name: "calacattaXLF", isVisible: calacattaCajon },
    { name: "emeXLF", isVisible: emeCajon },
    { name: "kendoCXLF", isVisible: kendocCajon },
    { name: "kendoLXLF", isVisible: kendolCajon },
    { name: "momaXLF", isVisible: momaCajon },
    { name: "negroXLF", isVisible: negroCajon },
    { name: "noonGXLF", isVisible: noonGCajon },
    { name: "noonSXLF", isVisible: noonsCajon },
    { name: "paladioXLF", isVisible: paladioCajon },
    { name: "syracXLF", isVisible: syracCajon },
  ];
  const frenteArray = [
    { name: "alluref", isVisible: allureFrente },
    { name: "berenf", isVisible: berenFrente },
    { name: "blancborgf", isVisible: blancborgFrente },
    { name: "blancinvf", isVisible: blancinvFrente },
    { name: "brazilf", isVisible: brazilFrente },
    { name: "calacattaf", isVisible: calacattaFrente },
    { name: "emef", isVisible: emeFrente },
    { name: "kendoCf", isVisible: kendocFrente },
    { name: "kendoLf", isVisible: kendolFrente },
    { name: "momaf", isVisible: momaFrente },
    { name: "negrof", isVisible: negroFrente },
    { name: "noonGf", isVisible: noonGFrente },
    { name: "noonSf", isVisible: noonsFrente },
    { name: "paladiof", isVisible: paladioFrente },
    { name: "syracf", isVisible: syracFrente },
  ];
  const pavimentos = [
    { name: "allurePAV", isVisible: allurePavimento },
    { name: "berenPAV", isVisible: berenPavimento },
    { name: "blancborgPAV", isVisible: blancborgPavimento },
    { name: "blancinvPAV", isVisible: blancinvPavimento },
    { name: "brazilPAV", isVisible: brazilPavimento },
    { name: "calacattaPAV", isVisible: calacattaPavimento },
    { name: "emePAV", isVisible: emePavimento },
    { name: "kendoCPAV", isVisible: kendocPavimento },
    { name: "kendoLPAV", isVisible: kendolPavimento },
    { name: "momaPAV", isVisible: momaPavimento },
    { name: "negroPAV", isVisible: negroPavimento },
    { name: "noonGPAV", isVisible: noonGPavimento },
    { name: "noonSPAV", isVisible: noonsPavimento },
    { name: "paladioPAV", isVisible: paladioPavimento },
    { name: "syracPAV", isVisible: syracPavimento },
  ];
  const revestimientos = [
    { name: "allureREV", isVisible: allureRevestimiento },
    { name: "berenREV", isVisible: berenRevestimiento },
    { name: "blancborgREV", isVisible: blancborgRevestimiento },
    { name: "blancinvREV", isVisible: blancinvRevestimiento },
    { name: "brazilREV", isVisible: brazilRevestimiento },
    { name: "calacattaREV", isVisible: calacattaRevestimiento },
    { name: "emeREV", isVisible: emeRevestimiento },
    { name: "kendoCREV", isVisible: kendocRevestimiento },
    { name: "kendoLREV", isVisible: kendolRevestimiento },
    { name: "momaREV", isVisible: momaRevestimiento },
    { name: "negroREV", isVisible: negroRevestimiento },
    { name: "noonGREV", isVisible: noonGRevestimiento },
    { name: "noonSREV", isVisible: noonsRevestimiento },
    { name: "paladioREV", isVisible: paladioRevestimiento },
    { name: "syracREV", isVisible: syracRevestimiento },
  ];
  const platos = [
    { name: "allurePLAT", isVisible: allurePlato },
    { name: "berenPLAT", isVisible: berenPlato },
    { name: "blancborgPLAT", isVisible: blancborgPlato },
    { name: "blancinvPLAT", isVisible: blancinvPlato },
    { name: "brazilPLAT", isVisible: brazilPlato },
    { name: "calacattaPLAT", isVisible: calacattaPlato },
    { name: "emePLAT", isVisible: emePlato },
    { name: "kendoCPLAT", isVisible: kendocPlato },
    { name: "kendoLPLAT", isVisible: kendolPlato },
    { name: "momaPLAT", isVisible: momaPlato },
    { name: "negroPLAT", isVisible: negroPlato },
    { name: "noonGPLAT", isVisible: noonGPlato },
    { name: "noonSPLAT", isVisible: noonsPlato },
    { name: "paladioPLAT", isVisible: paladioPlato },
    { name: "syracPLAT", isVisible: syracPlato },
  ];
  const lavabos = [
    { name: "allureXLLAV", isVisible: allureLavabo },
    { name: "berenXLLAV", isVisible: berenLavabo },
    { name: "blancborgXLLAV", isVisible: blancborgLavabo },
    { name: "blancinvXLLAV", isVisible: blancinvLavabo },
    { name: "brazilXLLAV", isVisible: brazilLavabo },
    { name: "calacattaXLLAV", isVisible: calacattaLavabo },
    { name: "emeXLLAV", isVisible: emeLavabo },
    { name: "kendoCXLLAV", isVisible: kendocLavabo },
    { name: "kendoLXLLAV", isVisible: kendolLavabo },
    { name: "momaXLLAV", isVisible: momaLavabo },
    { name: "negroXLLAV", isVisible: negroLavabo },
    { name: "noonGXLLAV", isVisible: noonGLavabo },
    { name: "noonSXLLAV", isVisible: noonsLavabo },
    { name: "paladioXLLAV", isVisible: paladioLavabo },
    { name: "syracXLLAV", isVisible: syracLavabo },
  ];
  const menuModulo = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick(
                "Allure",
                SetAllureM,
                allureModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Beren",
                SetBerenM,
                berenModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancborg",
                SetBlancborgM,
                blancborgModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancinv",
                SetBlancinvM,
                blancinvModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Brazil",
                SetBrazilM,
                brazilModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Calacatta",
                SetCalacattaM,
                calacattaModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacata</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Eme",
                SetEmeM,
                emeModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoC",
                SetKendocM,
                kendocModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoL",
                SetKendolM,
                kendolModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Moma",
                SetMomaM,
                momaModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Negro",
                SetNegroM,
                negroModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonG",
                SetNoonGM,
                noonGModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonS",
                SetNoonsM,
                noonsModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Paladio",
                SetPaladioM,
                paladioModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Syrac",
                SetSyracM,
                syracModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const menuEncimera = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick(
                "Allure",
                SetAllureEn,
                allureEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Beren",
                SetBerenEn,
                berenEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancborg",
                SetBlancborgEn,
                blancborgEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancinv",
                SetBlancinvEn,
                blancinvEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Brazil",
                SetBrazilEn,
                brazilEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Calacatta",
                SetCalacattaEn,
                calacattaEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacata</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Eme",
                SetEmeEn,
                emeEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoC",
                SetKendocEn,
                kendocEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoL",
                SetKendolEn,
                kendolEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Moma",
                SetMomaEn,
                momaEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Negro",
                SetNegroEn,
                negroEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonG",
                SetNoonGEn,
                noonGEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonS",
                SetNoonsEn,
                noonsEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Paladio",
                SetPaladioEn,
                paladioEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Syrac",
                SetSyracEn,
                syracEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const menuPavimmento = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick(
                "Allure",
                SetAllurePav,
                allurePavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Beren",
                SetBerenPav,
                berenPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancborg",
                SetBlancborgPav,
                blancborgPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancinv",
                SetBlancinvPav,
                blancinvPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Brazil",
                SetBrazilPav,
                brazilPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Calacatta",
                SetCalacattaPav,
                calacattaPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacata</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Eme",
                SetEmePav,
                emePavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoC",
                SetKendocPav,
                kendocPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoL",
                SetKendolPav,
                kendolPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Moma",
                SetMomaPav,
                momaPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Negro",
                SetNegroPav,
                negroPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonG",
                SetNoonGPav,
                noonGPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonS",
                SetNoonsPav,
                noonsPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Paladio",
                SetPaladioPav,
                paladioPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Syrac",
                SetSyracPav,
                syracPavimento,
                SetMaterialesPavimento,
                MatPavimento
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const menuRevestimiento = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick(
                "Allure",
                SetAllureRev,
                allureRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Beren",
                SetBerenRev,
                berenRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancborg",
                SetBlancborgRev,
                blancborgRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancinv",
                SetBlancinvRev,
                blancinvRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Brazil",
                SetBrazilRev,
                brazilRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Calacatta",
                SetCalacattaRev,
                calacattaRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacata</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Eme",
                SetEmeRev,
                emeRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoC",
                SetKendocRev,
                kendocRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoL",
                SetKendolRev,
                kendolRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Moma",
                SetMomaRev,
                momaRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Negro",
                SetNegroRev,
                negroRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonG",
                SetNoonGRev,
                noonGRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonS",
                SetNoonsRev,
                noonsRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Paladio",
                SetPaladioRev,
                paladioRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Syrac",
                SetSyracRev,
                syracRevestimiento,
                SetMaterialesRevestimiento,
                MatRevestimiento
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const menuCajon = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick(
                "Allure",
                SetAllureCaj,
                allureCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Beren",
                SetBerenCaj,
                berenCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancborg",
                SetBlancborgCaj,
                blancborgCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancinv",
                SetBlancinvCaj,
                blancinvCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Brazil",
                SetBrazilCaj,
                brazilCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Calacatta",
                SetCalacattaCaj,
                calacattaCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacatta</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Eme",
                SetEmeCaj,
                emeCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoC",
                SetKendocCaj,
                kendocCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoL",
                SetKendolCaj,
                kendolCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Moma",
                SetMomaCaj,
                momaCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Negro",
                SetNegroCaj,
                negroCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonG",
                SetNoonGCaj,
                noonGCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonS",
                SetNoonsCaj,
                noonsCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Paladio",
                SetPaladioCaj,
                paladioCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Syrac",
                SetSyracCaj,
                syracCajon,
                SetMaterialesCajon,
                MatCajon
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const menuFrente = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick(
                "Allure",
                SetAllureFre,
                allureFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Beren",
                SetBerenFre,
                berenFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancborg",
                SetBlancborgFre,
                blancborgFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancinv",
                SetBlancinvFre,
                blancinvFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Brazil",
                SetBrazilFre,
                brazilFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Calacatta",
                SetCalacattaFre,
                calacattaFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacatta</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Eme",
                SetEmeFre,
                emeFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoC",
                SetKendocFre,
                kendocFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoL",
                SetKendolFre,
                kendolFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Moma",
                SetMomaFre,
                momaFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Negro",
                SetNegroFre,
                negroFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonG",
                SetNoonGFre,
                noonGFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonS",
                SetNoonsFre,
                noonsFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Paladio",
                SetPaladioFre,
                paladioFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Syrac",
                SetSyracFre,
                syracFrente,
                SetMaterialesFrente,
                MatFrente
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const menuPlato = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick(
                "Allure",
                SetAllurePla,
                allurePlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Beren",
                SetBerenPla,
                berenPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancborg",
                SetBlancborgPla,
                blancborgPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancinv",
                SetBlancinvPla,
                blancinvPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Brazil",
                SetBrazilPla,
                brazilPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Calacatta",
                SetCalacattaPla,
                calacattaPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacatta</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Eme",
                SetEmePla,
                emePlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoC",
                SetKendocPla,
                kendocPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoL",
                SetKendolPla,
                kendolPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Moma",
                SetMomaPla,
                momaPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Negro",
                SetNegroPla,
                negroPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonG",
                SetNoonGPla,
                noonGPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonS",
                SetNoonsPla,
                noonsPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Paladio",
                SetPaladioPla,
                paladioPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Syrac",
                SetSyracPla,
                syracPlato,
                SetMaterialesPlato,
                MatPlato
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const menuLavabo = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClick(
                "Allure",
                SetAllureLav,
                allureLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Beren",
                SetBerenLav,
                berenLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancborg",
                SetBlancborgLav,
                blancborgLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Blancinv",
                SetBlancinvLav,
                blancinvLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Brazil",
                SetBrazilLav,
                brazilLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Calacatta",
                SetCalacattaLav,
                calacattaLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacatta</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Eme",
                SetEmeLav,
                emeLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoC",
                SetKendocLav,
                kendocLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "KendoL",
                SetKendolLav,
                kendolLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Moma",
                SetMomaLav,
                momaLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Negro",
                SetNegroLav,
                negroLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonG",
                SetNoonGLav,
                noonGLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "NoonS",
                SetNoonsLav,
                noonsLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Paladio",
                SetPaladioLav,
                paladioLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClick(
                "Syrac",
                SetSyracLav,
                syracLavabo,
                SetMaterialesLavabo,
                MatLavabo
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const seleccionEncimera = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      animate={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial2>
          <ContenedorEncimera
            onClick={() => {
              SetEncimera(true); //IMPORTANTE
              SetTopLisa(true);
              SetTopInt(false);
              SetTopIntPlus(false);
              SetMenuTop(!menuTop);
              SetLavabo(true);
              SetMaterialesEncimera(!MatEncimera);
              SetLavaboON(true);
            }}
          >
            <IconoEncimera src={topL} />
            <TextoMaterial>XL top lisa</TextoMaterial>
          </ContenedorEncimera>
          <ContenedorEncimera
            onClick={() => {
              SetEncimera(true); //IMPORTANTE
              SetTopLisa(false);
              SetTopInt(true);
              SetTopIntPlus(false);
              SetMenuTop(!menuTop);
              SetLavabo(false);
              SetMaterialesEncimera(!MatEncimera);
              SetLavaboON(false);
            }}
          >
            <IconoEncimera src={topIn} />
            <TextoMaterial>XL top integrity</TextoMaterial>
          </ContenedorEncimera>
          <ContenedorEncimera
            onClick={() => {
              SetEncimera(true); //IMPORTANTE
              SetTopLisa(false);
              SetTopInt(false);
              SetTopIntPlus(true);
              SetMenuTop(!menuTop);
              SetLavabo(false);
              SetMaterialesEncimera(!MatEncimera);
              SetLavaboON(false);
            }}
          >
            <IconoEncimera src={topInPlus} />
            <TextoMaterial>XL top integrity plus</TextoMaterial>
          </ContenedorEncimera>
        </CajaMaterial2>
      </ContenedorMateriales>
    </MenuMateriales>
  );
  const iconosSeleccion = (
    <ContenedorIconos>
      <Tooltip anchorId={"modulo"} content={"frontal módulo"} />
      <Tooltip anchorId={"encimera"} content={"encimera"} />
      <Tooltip anchorId={"lateralm"} content={"lateral"} />
      <Tooltip anchorId={"frentemueble"} content={"frontal cajón"} />
      <Tooltip anchorId={"frente"} content={"frente"} />
      <Tooltip anchorId={"revestimiento"} content={"revestimiento pared"} />
      <Tooltip anchorId={"plato de ducha"} content={"plato de ducha"} />
      <Tooltip anchorId={"mueble"} content={"mueble"} />
      <Tooltip anchorId={"plato de ducha"} content={"plato de ducha"} />
      <Tooltip anchorId={"pavimento"} content={"pavimento"} />
      <Tooltip anchorId={"lavabo"} content={"lavabo"} />
      <Tooltip anchorId={"reiniciar"} content={"reiniciar"} />
      {/*--------------botones--------------*/}
      <Icono1 id='modulo'
        onClick={() => {
          setIconos(!iconos);
          SetModulos(true); //IMPORTANTE
          SetMaterialesModulo(!MatModulo);
          SetAllureM(false);
          SetBerenM(false);
          SetBlancborgM(false);
          SetBlancinvM(false);
          SetBrazilM(false);
          SetCalacattaM(false);
          SetEmeM(false);
          SetKendocM(false);
          SetKendolM(false);
          SetMomaM(false);
          SetNegroM(false);
          SetNoonGM(false);
          SetNoonsM(false);
          SetPaladioM(false);
          SetSyracM(false);
        }}
        src={icono_b}
        alt='modulo'

        style={{
          top: "38%",
          left: "11%",
        }}
      />
      <Icono1 id='encimera'
        onClick={() => {
          setIconos(!iconos);
          SetMenuTop(!menuTop);
          SetLateral(false);
          SetAllureEn(false);
          SetBerenEn(false);
          SetBlancborgEn(false);
          SetBlancinvEn(false);
          SetBrazilEn(false);
          SetCalacattaEn(false);
          SetEmeEn(false);
          SetKendocEn(false);
          SetKendolEn(false);
          SetMomaEn(false);
          SetNegroEn(false);
          SetNoonGEn(false);
          SetNoonsEn(false);
          SetPaladioEn(false);
          SetSyracEn(false);
        }}
        src={icono}
        alt='encimera'

        style={{
          top: "58%",
          left: "27%",
        }}
      />
      {encimeraSelected && (
        <Icono1 id='lateralm'
          onClick={() => {
            SetLateral(!lateralSelected);
            if (lateralSelected === true) { setTxtL(txtmueble) }
            else { setTxtL(txtencimera) }
          }}
          src={icono}
          alt='lateralm'
          style={{
            top: "70%",
            left: "23%",
          }}
        />
      )}
      <Icono1 id='frentemueble'
        onClick={() => {
          setIconos(!iconos);
          SetFrente(true);
          SetMaterialesCajon(!MatCajon);
          SetAllureCaj(false);
          SetBerenCaj(false);
          SetBlancborgCaj(false);
          SetBlancinvCaj(false);
          SetBrazilCaj(false);
          SetCalacattaCaj(false);
          SetEmeCaj(false);
          SetKendocCaj(false);
          SetKendolCaj(false);
          SetMomaCaj(false);
          SetNegroCaj(false);
          SetNoonGCaj(false);
          SetNoonsCaj(false);
          SetPaladioCaj(false);
          SetSyracCaj(false);
        }}
        src={icono_b}
        alt='frentemueble'
        style={{
          top: "70%",
          left: "40%",
        }}
      />
      <Icono1 id='frente'
        onClick={() => {
          setIconos(!iconos);
          SetFrontal(true);
          SetMaterialesFrente(!MatFrente);
          SetAllureFre(false);
          SetBerenFre(false);
          SetBlancborgFre(false);
          SetBlancinvFre(false);
          SetBrazilFre(false);
          SetCalacattaFre(false);
          SetEmeFre(false);
          SetKendocFre(false);
          SetKendolFre(false);
          SetMomaFre(false);
          SetNegroFre(false);
          SetNoonGFre(false);
          SetNoonsFre(false);
          SetPaladioFre(false);
          SetSyracFre(false);
        }}
        src={icono_b}
        alt='frente'
        style={{
          top: "50%",
          left: "23%",
        }}
      />
      <Icono1 id='revestimiento'
        onClick={() => {
          setIconos(!iconos);
          SetRevestimiento(true);
          SetMaterialesRevestimiento(!MatRevestimiento);
          SetAllureRev(false);
          SetBerenRev(false);
          SetBlancborgRev(false);
          SetBlancinvRev(false);
          SetBrazilRev(false);
          SetCalacattaRev(false);
          SetEmeRev(false);
          SetKendocRev(false);
          SetKendolRev(false);
          SetMomaRev(false);
          SetNegroRev(false);
          SetNoonGRev(false);
          SetNoonsRev(false);
          SetPaladioRev(false);
          SetSyracRev(false);
        }}
        src={icono_b}
        alt='revestimiento'
        style={{
          top: "52%",
          left: "70%",
        }}
      />
      <Icono1 id='plato de ducha'
        onClick={() => {
          setIconos(!iconos);
          SetPlato(true);
          SetMaterialesPlato(!MatPlato);
          SetAllurePla(false);
          SetBerenPla(false);
          SetBlancborgPla(false);
          SetBlancinvPla(false);
          SetBrazilPla(false);
          SetCalacattaPla(false);
          SetEmePla(false);
          SetKendocPla(false);
          SetKendolPla(false);
          SetMomaPla(false);
          SetNegroPla(false);
          SetNoonGPla(false);
          SetNoonsPla(false);
          SetPaladioPla(false);
          SetSyracPla(false);
        }}
        src={icono_b}
        alt='plato de ducha'

        style={{
          top: "90% ",
          left: "70%",
        }}
      />
      <Icono1 id='pavimento'
        onClick={() => {
          setIconos(!iconos);
          SetPavimento(true);
          SetMaterialesPavimento(!MatPavimento);
          SetAllurePav(false);
          SetBerenPav(false);
          SetBlancborgPav(false);
          SetBlancinvPav(false);
          SetBrazilPav(false);
          SetCalacattaPav(false);
          SetEmePav(false);
          SetKendocPav(false);
          SetKendolPav(false);
          SetMomaPav(false);
          SetNegroPav(false);
          SetNoonGPav(false);
          SetNoonsPav(false);
          SetPaladioPav(false);
          SetSyracPav(false);
        }}
        src={icono_b}
        alt='pavimento'

        style={{
          top: "92.5% ",
          left: "42.5%",
        }}
      />
      <Icono1 id='mueble'
        onClick={() => {
          setIconos(!iconos);
          setMuebleVisible(!muebleVisible);
        }}
        src={icono_b}
        alt='mueble'

        style={{
          top: "59%",
          left: "45%",
        }}
      />
      {lavaboON && (
        <Icono1 id='lavabo'
          onClick={() => {
            setIconos(!iconos);
            SetLavabo(true);
            SetMaterialesLavabo(!MatLavabo);
            SetAllureLav(false);
            SetBerenLav(false);
            SetBlancborgLav(false);
            SetBlancinvLav(false);
            SetBrazilLav(false);
            SetCalacattaLav(false);
            SetEmeLav(false);
            SetKendocLav(false);
            SetKendolLav(false);
            SetMomaLav(false);
            SetNegroLav(false);
            SetNoonGLav(false);
            SetNoonsLav(false);
            SetPaladioLav(false);
            SetSyracLav(false);
          }}
          src={icono}
          alt='lavabo'

          style={{
            top: "53%",
            left: "38%",
          }}
        />
      )}
      <Icono1 id='reiniciar'
        onClick={() => {
          SetLateral(false);
          SetEncimera(false);
          SetLavabo(false);
          SetPavimento(false);
          SetPlato(false);
          SetRevestimiento(false);
          SetModulos(false);
          SetFrente(false);
          SetFrontal(false);
          SetTopLisa(false);
          SetTopInt(false);
          SetTopIntPlus(false);
          SetLavaboON(true);
          SetNatural(false);
          SetAntracita(false);
          SetNordik(false);
          SetBlanco(false);
          setTxtF(txtacabados.acNordik);
          setTxtM(txtacabados.acNordik);
          setTxtL(txtacabados.acNordik);
          setTxtE(txtacabados.acNordik);
          setTxtMu(txtacabados.acNordik);
          setTxtC(txtacabados.acNordik);
          setTxtP(txtacabados.acMoma);
          setTxtR(txtacabados.acMoma);
          setTxtPlato(txtacabados.acMoma);
          setTxtFrontal(txtacabados.acSinFrente);
          setTxtLavabo(txtacabados.acSinLavabo);


          //------------

        }}
        src={icono_retroceso}
        alt='reiniciar'

        style={{
          top: "92%",
          left: "95%",
        }}
      />
    </ContenedorIconos>
  );
  return (
    <>
      <ContenedorIntercambiador>
        {inicio && (
          <ContenedorExpansor
            id='expansor'
            initial={{
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
              height: "100%",
            }}
            onClick={() => {
              setInicio(false);
              setIconos(!iconos);

              // setIsVisible(!isVisible);
            }}
          >
            <TextoIntro2>Pulsa para acceder al configurador</TextoIntro2>
          </ContenedorExpansor>
        )}
        {isVisible && (
          <ContenedorMenu
            id='menu inferior'
            initial={{
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
              height: "20%",
            }}
          >
            <MenuIntrucciones>
              <BotonContinuar
                onClick={() => {
                  setIsVisible(!isVisible);
                  setMuebleVisible(!muebleVisible);
                  SetLateral(false);
                  SetEncimera(false);
                  SetModulos(false);
                  SetFrente(false);
                }}
              >
                <strong>{"<"} atras</strong>
              </BotonContinuar>
              <TextoIntro>
                <bold>Selecciona las partes que quieres cambiar</bold>
              </TextoIntro>
              <BotonContinuar
                onClick={() => {
                  SetMateriales(!materialesVisible);
                  setIsVisible(!isVisible);
                }}
              >
                <strong>continuar {">"}</strong>
              </BotonContinuar>
            </MenuIntrucciones>
          </ContenedorMenu>
        )}
        {muebleVisible && (
          <MenuMateriales
            id='menu inferior'
            initial={{
              height: "0%",
            }}
            animate={{
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
              height: "20%",
            }}
          >
            <ContenedorMateriales>
              <TextoIntro>
                <bold>elige el color del mueble {">"}</bold>
              </TextoIntro>
              <CajaMaterial>
                <ContIconText2 onClick={() => clickAcabado("Natural")}>
                  <IconoMaterial src={ICONOS.naturalIco} />
                  <TextoMaterial>Natural</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Antracita")}>
                  <IconoMaterial src={ICONOS.antracitaIco} />
                  <TextoMaterial>Antracita</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Blanco")}>
                  <IconoMaterial src={ICONOS.blancoIco} />
                  <TextoMaterial>Blanco</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Nordik")}>
                  <IconoMaterial src={ICONOS.nordikIco} />
                  <TextoMaterial>Nordik</TextoMaterial>
                </ContIconText2>
              </CajaMaterial>
            </ContenedorMateriales>
          </MenuMateriales>
        )}
        {MatModulo && menuModulo}
        {MatEncimera && menuEncimera}
        {MatCajon && menuCajon}
        {MatPavimento && menuPavimmento}
        {MatFrente && menuFrente}
        {MatRevestimiento && menuRevestimiento}
        {MatPlato && menuPlato}
        {menuTop && seleccionEncimera}
        {MatLavabo && menuLavabo}


        {iconos && iconosSeleccion}
        <ContenedorImagenBase
          id='fondo'
          descripcion='Mueble de madera sin forrar'
        >
          <Imagen src={base} alt='fondo' />
        </ContenedorImagenBase>
        {/* ------------------BASE MUEBLES------------------ */}
        {Antracita && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.anthraciteM} alt='mueble' />
          </ContenedorImagen>
        )}
        {Blanco && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.blancoM} alt='mueble' />
          </ContenedorImagen>
        )}
        {Natural && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.naturalM} alt='mueble' />
          </ContenedorImagen>
        )}
        {/* ------------------Rojo------------------ */}
        {frontalSelected && (
          <ContenedorImagen>
            <Imagen
              src={FRONTALES.rojof}
              alt='pavimento'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {frenteSelected && (
          <ContenedorImagen>
            <Imagen
              src={XLFRONTALCAJON.rojoXLF}
              alt='frontal'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {modulosSelected && (
          <ContenedorImagen>
            <Imagen
              src={FRENTESXLMODULO.rojoXlM}
              alt='modulo'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {encimeraSelected && (
          <ContenedorImagen>
            <Imagen
              src={ENCIMERAXL.rojoXLE}
              alt='lateral'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {lateralSelected && (
          <ContenedorImagen>
            <Imagen
              src={XLLATERAL.rojoXLL}
              alt='tapa'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {pavimentoSelected && (
          <ContenedorImagen>
            <Imagen
              src={PAVIMENTOS.rojoPAV}
              alt='pavimento'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {revestimientoSelected && (
          <ContenedorImagen>
            <Imagen
              src={REVESTIMIENTOS.rojoREV}
              alt='pavimento'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {platoSelected && (
          <ContenedorImagen>
            <Imagen
              src={PLATOS.rojoPLAT}
              alt='pavimento'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {/* ------------------PAVIMENTOS------------------ */}
        {pavimentoSelected &&
          pavimentos.map((mod) => {
            if (mod.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={PAVIMENTOS[mod.name]} alt='pavimento' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------REVESTIMIENTOS------------------ */}
        {revestimientoSelected &&
          revestimientos.map((mod) => {
            if (mod.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={REVESTIMIENTOS[mod.name]} alt='revestimiento' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------PLATOS------------------ */}
        {platoSelected &&
          platos.map((mod) => {
            if (mod.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={PLATOS[mod.name]} alt='Platos' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------MODULOS------------------ */}
        {modulosSelected &&
          modulosArray.map((mod) => {
            if (mod.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={FRENTESXLMODULO[mod.name]} alt='modulo' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------Frentes------------------ */}
        {frontalSelected &&
          frenteArray.map((frontal) => {
            if (frontal.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={FRONTALES[frontal.name]} alt='frontal pared' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------tops------------------ */}
        {toplisa &&
          encimerasArray.map((top) => {
            if (top.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={ENCIMERAXL[top.name]} alt='encimera' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {topInt &&
          encimerasTopArray.map((top) => {
            if (top.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={EncimeraTopInt[top.name]} alt='encimera' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {topIntPlus &&
          encimerasTopPlusArray.map((top) => {
            if (top.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={EncimeraTopIntPlus[top.name]} alt='encimera' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------FRONTALES------------------ */}
        {frenteSelected &&
          cajonesArray.map((cajon) => {
            if (cajon.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={XLFRONTALCAJON[cajon.name]} alt='cajon' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------LAVABO------------------ */}
        {lavaboSelected &&
          lavabos.map((lavabo) => {
            if (lavabo.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={XLLAVABO[lavabo.name]} alt='lavabo' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------lateral------------------ */}
        {lateralSelected &&
          lateralesArray.map((lat) => {
            if (lat.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={XLLATERAL[lat.name]} alt='laterales' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
      </ContenedorIntercambiador>
      <WrapperTexto>
        <TxtSubimagen>
          acabado del mueble: <strong>{txtmueble}</strong> //&nbsp;
          <br />
          cajon: <strong>{txtcajon}</strong> //&nbsp; <br />
          encimera: <strong>{txtencimera}</strong> //&nbsp; <br />
          lateral: <strong>{txtlateral}</strong> //&nbsp;
          <br />
          lavabo: <strong>{txtlavabo}</strong> //&nbsp;
          <br />
          frente módulo: <strong>{txtmodulo}</strong> //&nbsp;
          <br />
          frente: <strong>{txtfrontal}</strong> //&nbsp;
          <br />
          plato de ducha: <strong>{txtplato}</strong> //&nbsp;
          <br />
          pavimento: <strong>{txtpavimento}</strong> //&nbsp;
          <br />
          revestimiento: <strong>{txtrevestimiento}</strong> //&nbsp;
        </TxtSubimagen>
      </WrapperTexto>
    </>
  );
};
export default InterGrande;
