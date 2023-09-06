import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./landing";
import HomeEN from "./landingEN";
import HomeFR from "./landingFR";
import Colecciones from "./colecciones";
import ColeccionesEN from "./coleccionesEN";
import ColeccionesFR from "./coleccionesFR";
import Bath from "./bath";
import BathEN from "./bathEN";
import BathFr from "./bathFR";
import Encimera from "./encimera";
/*------------------------------------Castellano----------------------------------------*/
import * as cemento from "../modules/colecciones/02_cemento/modulosCemento";
import * as color from "../modules/colecciones/03_color/coloresConsolidados";
import * as marmol from "../modules/colecciones/04_marmol/modulosMarmol";
import * as madera from "../modules/colecciones/05_madera/maderasConsolidados";
import * as metal from "../modules/colecciones/06_metal/metalConsolidados";
import * as piedra from "../modules/colecciones/07_piedra/piedrasConsolidados";
/*------------------------------------Ingles----------------------------------------*/
import * as cementoEN from "../modules/colecciones/en/02_cemento/modulosCemento";
import * as colorEN from "../modules/colecciones/en/03_color/coloresConsolidados";
import * as marmolEN from "../modules/colecciones/en/04_marmol/modulosMarmol";
import * as maderaEN from "../modules/colecciones/en/05_madera/maderasConsolidados";
import * as metalEN from "../modules/colecciones/en/06_metal/metalConsolidados";
import * as piedraEN from "../modules/colecciones/en/07_piedra/piedrasConsolidados";
/*------------------------------------Frances----------------------------------------*/
import * as cementoFR from "../modules/colecciones/fr/02_cemento/modulosCemento";
import * as colorFR from "../modules/colecciones/fr/03_color/coloresConsolidados";
import * as marmolFR from "../modules/colecciones/fr/04_marmol/modulosMarmol";
import * as maderaFR from "../modules/colecciones/fr/05_madera/maderasConsolidados";
import * as metalFR from "../modules/colecciones/fr/06_metal/metalConsolidados";
import * as piedraFR from "../modules/colecciones/fr/07_piedra/piedrasConsolidados";
/*------------------------------------BATH ES------------------------------------*/
import { Consolidados } from "../modules/bath/05_AcabadosBath/acabadosConsolidados";
/*------------------------------------BATH EN------------------------------------*/

import PrivSection from "../modules/PrivacidadSection";
import PrivSectionFR from "../modules/bathFr/PrivacidadSectionFR";
import { privObj } from "../modules/PrivacidadSection/data";
import { privObjFr } from "../modules/bathFr/PrivacidadSectionFR/data";
import LegalSection from "../modules/LegalSection";
import { legalObj } from "../modules/LegalSection/data";
import ContactoSection from "../modules/Contacto";
import { contactoObj } from "../modules/Contacto/data";
import ContactoSectionFR from "../modules/bathFr/Contacto";
import { contactoObjFR } from "../modules/bathFr/Contacto/data";
import Intercambiador from "./intercambiador";
import Rotador from "./rotador";
import ContactoSectionEN from "../modules/en/Contacto";
import { contactoObjEN } from "../modules/en/Contacto/data";
import DescargasBath from "../modules/bath/_Descargas/index";
import { descargasbathObj } from "../modules/bath/_Descargas/Data";
import Login from "../components/Login/login";
import PrivateRoute from "../components/PrivateRoute";

const PaginasColeccion = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/en' element={<HomeEN />} />
        <Route path='/fr' element={<HomeFR />} />
        <Route path='/colecciones/*' element={<Colecciones />} />
        <Route path='/en/colecciones/*' element={<ColeccionesEN />} />
        <Route path='/fr/colecciones/*' element={<ColeccionesFR />} />
        <Route path='/bath' element={<Bath />} />
        <Route path='/en/bath' element={<BathEN />} />
        <Route path='/fr/bath' element={<BathFr />} />
        <Route path='bath/login' element={<Login />} />
        <Route path='/kitchen' element={<Encimera />} />
        <Route element={<PrivateRoute />}>
          <Route
            path='bath/descargas'
            element={<DescargasBath {...descargasbathObj} />}
          />
        </Route>

        <Route path='/privacidad' element={<PrivSection {...privObj} />} />
        <Route
          path='/fr/privacidad'
          element={<PrivSectionFR {...privObjFr} />}
        />
        <Route path='/legal' element={<LegalSection {...legalObj} />} />
        <Route
          path='/contacto'
          element={<ContactoSection {...contactoObj} />}
        />
        <Route
          path='/fr/contacto'
          element={<ContactoSectionFR {...contactoObjFR} />}
        />
        <Route
          path='/en/contacto'
          element={<ContactoSectionEN {...contactoObjEN} />}
        />
        <Route path='/intercambiador' element={<Intercambiador />} />
        <Route path='/rotador' element={<Rotador />} />
        {/* ---------------------Cementos--------------------- */}
        <Route
          path='/colecciones/blue-stone-gris'
          element={<cemento.BlueStone />}
        />
        <Route path='/colecciones/kron-grey' element={<cemento.KronGrey />} />
        <Route path='/colecciones/moma-arena' element={<cemento.MomaArena />} />
        <Route path='/colecciones/moma-gris' element={<cemento.MomaGris />} />
        <Route
          path='/colecciones/mood-anthracite'
          element={<cemento.MoodAntra />}
        />
        <Route path='/colecciones/mood-grey' element={<cemento.MoodGrey />} />
        <Route
          path='/colecciones/titan-antracita'
          element={<cemento.TitanAnt />}
        />
        <Route
          path='/colecciones/titan-cemento'
          element={<cemento.TitanCem />}
        />
        <Route path='/colecciones/vulcano' element={<cemento.Vulcano />} />
        {/* ---------------------Color--------------------- */}
        <Route
          path='/colecciones/basic-blanco'
          element={<color.BasicBlanco />}
        />
        <Route path='/colecciones/basic-negro' element={<color.BasicNegro />} />
        <Route
          path='/colecciones/era-deep-black'
          element={<color.EraDeepB />}
        />
        <Route path='/colecciones/era-grey' element={<color.EraGrey />} />
        <Route
          path='/colecciones/era-infinity-white'
          element={<color.EraInfinityW />}
        />
        <Route path='/colecciones/era-white' element={<color.EraWhite />} />
        <Route
          path='/colecciones/pure-super-white'
          element={<color.PureWhite />}
        />
        <Route path='/colecciones/pure-black' element={<color.PureBlack />} />
        {/* ---------------------marmol--------------------- */}
        {/* <Route
          path='/colecciones/arabescatto-corchia'
          element={<marmol.Arabescatto />}
        /> */}
        <Route path='/colecciones/atlantis' element={<marmol.Atlantis />} />
        <Route
          path='/colecciones/blanc-arabescato'
          element={<marmol.BlancArabe />}
        />
        <Route
          path='/colecciones/blanc-borghini'
          element={<marmol.BlancBorg />}
        />
        <Route
          path='/colecciones/blanc-calacatta'
          element={<marmol.BlancCala />}
        />
        <Route
          path='/colecciones/blanc-calacatta-gold'
          element={<marmol.BlancCalaGold />}
        />
        <Route
          path='/colecciones/blanc-invisible'
          element={<marmol.BlancInv />}
        />
        <Route
          path='/colecciones/blanc-statuario-gold'
          element={<marmol.BlancStatGold />}
        />
        <Route
          path='/colecciones/blanc-statuarietto'
          element={<marmol.BlancStat />}
        />
        <Route
          path='/colecciones/brazil-super-white'
          element={<marmol.BrazilSuper />}
        />
        <Route path='/colecciones/calacatta' element={<marmol.Calacatta />} />
        <Route
          path='/colecciones/calacatta-gold'
          element={<marmol.CalacattaGold />}
        />
        <Route
          path='/colecciones/calacatta-paonazzo'
          element={<marmol.CalacattaPao />}
        />
        <Route path='/colecciones/corinto' element={<marmol.Corinto />} />
        <Route
          path='/colecciones/cuarzo-reno'
          element={<marmol.CuarzoReno />}
        />
        <Route path='/colecciones/estatuario' element={<marmol.Estatuario />} />
        <Route
          path='/colecciones/estatuario-bk-a'
          element={<marmol.EstatuarioBKA />}
        />
        <Route path='/colecciones/iceberg' element={<marmol.Iceberg />} />
        {/* <Route
          path='/colecciones/invisible-grey'
          element={<marmol.InvisibleGrey />}
        /> */}
        <Route path='/colecciones/lilac' element={<marmol.Lilac />} />
        <Route
          path='/colecciones/negro-marquina'
          element={<marmol.NegroMarq />}
        />
        <Route path='/colecciones/melbourne' element={<marmol.Melbourne />} />
        <Route path='/colecciones/nero-ardi' element={<marmol.NeroArdi />} />
        <Route path='/colecciones/paladio' element={<marmol.Paladio />} />
        {/* <Route
          path='/colecciones/rosa-persia'
          element={<marmol.RosaPersia />}
        /> */}
        <Route
          path='/colecciones/sahara-noir'
          element={<marmol.SaharaNoir />}
        />
        <Route
          path='/colecciones/saint-laurent'
          element={<marmol.SaintLauren />}
        />
        <Route path='/colecciones/syrac' element={<marmol.Syrac />} />
        {/* <Route path='/colecciones/volakas' element={<marmol.Volakas />} /> */}
        {/* ---------------------madera--------------------- */}
        <Route path='/colecciones/canada' element={<madera.Canada />} />
        <Route
          path='/colecciones/irati-abeto'
          element={<madera.IratiAlbedo />}
        />
        {/* ---------------------metal--------------------- */}
        <Route
          path='/colecciones/distrito-aluminio'
          element={<metal.DistritoAluminio />}
        />
        <Route
          path='/colecciones/distrito-marfil'
          element={<metal.DistritoMarfil />}
        />
        <Route path='/colecciones/lava-iron' element={<metal.LavaIron />} />
        {/* ---------------------piedra--------------------- */}
        <Route
          path='/colecciones/allure-anthracite'
          element={<piedra.AllureAntra />}
        />
        <Route
          path='/colecciones/allure-light-grey'
          element={<piedra.AllureLight />}
        />
        <Route
          path='/colecciones/amsterdam-grey'
          element={<piedra.AmsterdamGrey />}
        />
        <Route
          path='/colecciones/basalt-grey'
          element={<piedra.BasaltGrey />}
        />
        <Route
          path='/colecciones/basaltina-beige'
          element={<piedra.BasaltinaBeige />}
        />
        <Route
          path='/colecciones/bateig-blue'
          element={<piedra.BateigBlue />}
        />
        <Route path='/colecciones/bera-ice' element={<piedra.BeraIce />} />
        <Route
          path='/colecciones/beren-black'
          element={<piedra.BerenBlack />}
        />
        <Route
          path='/colecciones/beren-light-grey'
          element={<piedra.BerenLG />}
        />
        <Route
          path='/colecciones/camargue-arena'
          element={<piedra.CamargueArena />}
        />
        <Route
          path='/colecciones/camargue-blanco'
          element={<piedra.CamargueBlanco />}
        />
        <Route path='/colecciones/edra-grey' element={<piedra.EdraGrey />} />
        <Route path='/colecciones/edra-light' element={<piedra.EdraLight />} />
        <Route path='/colecciones/edra-sand' element={<piedra.EdraSand />} />
        <Route path='/colecciones/eme-light-grey' element={<piedra.EmeLG />} />
        <Route path='/colecciones/eme-grey' element={<piedra.EmeGrey />} />
        <Route
          path='/colecciones/kendo-classic'
          element={<piedra.KendoClassic />}
        />
        <Route
          path='/colecciones/kendo-light'
          element={<piedra.KendoLight />}
        />
        <Route path='/colecciones/noon-grey' element={<piedra.NoonGrey />} />
        <Route path='/colecciones/noon-sand' element={<piedra.NoonSand />} />
        <Route
          path='/colecciones/porfido-brown'
          element={<piedra.PorfidoBrown />}
        />
        <Route
          path='/colecciones/porfido-sand'
          element={<piedra.PorfidoSand />}
        />
        <Route path='/colecciones/wega-black' element={<piedra.WegaBlack />} />
        {/*---------------------------Ingles-------------------------------------------------------------------*/}
        {/* ---------------------Cementos--------------------- */}
        <Route
          path='en/colecciones/blue-stone-gris'
          element={<cementoEN.BlueStoneEN />}
        />
        <Route
          path='en/colecciones/moma-arena'
          element={<cementoEN.MomaArenaEN />}
        />
        <Route
          path='en/colecciones/moma-gris'
          element={<cementoEN.MomaGrisEN />}
        />
        <Route
          path='en/colecciones/kron-grey'
          element={<cementoEN.KronGreyEN />}
        />
        <Route
          path='en/colecciones/titan-antracita'
          element={<cementoEN.TitanAntEN />}
        />
        <Route
          path='en/colecciones/titan-cemento'
          element={<cementoEN.TitanCemEN />}
        />
        <Route
          path='en/colecciones/mood-anthracite'
          element={<cementoEN.MoodAntraEN />}
        />
        <Route
          path='en/colecciones/mood-grey'
          element={<cementoEN.MoodGreyEN />}
        />
        <Route
          path='en/colecciones/vulcano'
          element={<cementoEN.VulcanoEN />}
        />
        {/* ---------------------Color--------------------- */}
        <Route
          path='en/colecciones/basic-blanco'
          element={<colorEN.BasicBlancoEN />}
        />
        <Route
          path='en/colecciones/basic-negro'
          element={<colorEN.BasicNegroEN />}
        />
        <Route
          path='en/colecciones/era-deep-black'
          element={<colorEN.EraDeepBEN />}
        />
        <Route path='en/colecciones/era-grey' element={<colorEN.EraGreyEN />} />
        <Route
          path='en/colecciones/era-infinity-white'
          element={<colorEN.EraInfinityWEN />}
        />
        <Route
          path='en/colecciones/era-white'
          element={<colorEN.EraWhiteEN />}
        />
        <Route
          path='en/colecciones/pure-super-white'
          element={<colorEN.PureWhiteEN />}
        />
        <Route
          path='en/colecciones/pure-black'
          element={<colorEN.PureBlackEN />}
        />
        {/* ---------------------marmol--------------------- */}
        {/* <Route
          path='en/colecciones/arabescatto-corchia'
          element={<marmolEN.ArabescattoEN />}
        /> */}
        <Route
          path='en/colecciones/atlantis'
          element={<marmolEN.AtlantisEN />}
        />
        <Route
          path='en/colecciones/blanc-arabescato'
          element={<marmolEN.BlancArabeEN />}
        />
        <Route
          path='en/colecciones/blanc-borghini'
          element={<marmolEN.BlancBorgEN />}
        />
        <Route
          path='en/colecciones/blanc-calacatta'
          element={<marmolEN.BlancCalaEN />}
        />
        <Route
          path='en/colecciones/blanc-calacatta-gold'
          element={<marmolEN.BlancCalaGoldEN />}
        />
        <Route
          path='en/colecciones/blanc-invisible'
          element={<marmolEN.BlancInvEN />}
        />
        <Route
          path='en/colecciones/blanc-statuario-gold'
          element={<marmolEN.BlancStatGoldEN />}
        />
        <Route
          path='en/colecciones/blanc-statuarietto'
          element={<marmolEN.BlancStatEN />}
        />
        <Route
          path='en/colecciones/brazil-super-white'
          element={<marmolEN.BrazilSuperEN />}
        />
        <Route
          path='en/colecciones/calacatta'
          element={<marmolEN.CalacattaEN />}
        />
        <Route
          path='en/colecciones/calacatta-gold'
          element={<marmolEN.CalacattaGoldEN />}
        />
        <Route
          path='en/colecciones/calacatta-paonazzo'
          element={<marmolEN.CalacattaPaoEN />}
        />
        <Route path='en/colecciones/corinto' element={<marmolEN.CorintoEN />} />
        <Route
          path='en/colecciones/cuarzo-reno'
          element={<marmolEN.CuarzoRenoEN />}
        />
        <Route
          path='en/colecciones/estatuario'
          element={<marmolEN.EstatuarioEN />}
        />
        <Route
          path='en/colecciones/estatuario-bk-a'
          element={<marmolEN.EstatuarioBKAEN />}
        />
        <Route path='en/colecciones/iceberg' element={<marmolEN.IcebergEN />} />
        {/* <Route
          path='en/colecciones/invisible-grey'
          element={<marmolEN.InvisibleGreyEN />}
        /> */}
        <Route path='en/colecciones/lilac' element={<marmolEN.LilacEN />} />
        <Route
          path='en/colecciones/melbourne'
          element={<marmolEN.MelbourneEN />}
        />
        <Route
          path='en/colecciones/negro-marquina'
          element={<marmolEN.NegroMarqEN />}
        />
        <Route
          path='en/colecciones/nero-ardi'
          element={<marmolEN.NeroArdiEN />}
        />
        <Route path='en/colecciones/paladio' element={<marmolEN.PaladioEN />} />
        {/* <Route
          path='en/colecciones/rosa-persia'
          element={<marmolEN.RosaPersiaEN />}
        /> */}
        <Route
          path='en/colecciones/sahara-noir'
          element={<marmolEN.SaharaNoirEN />}
        />
        <Route
          path='en/colecciones/saint-laurent'
          element={<marmolEN.SaintLaurenEN />}
        />
        <Route path='en/colecciones/syrac' element={<marmolEN.SyracEN />} />
        {/* <Route path='en/colecciones/volakas' element={<marmolEN.VolakasEN />} /> */}
        {/* ---------------------madera--------------------- */}
        <Route path='en/colecciones/canada' element={<maderaEN.CanadaEN />} />
        <Route
          path='en/colecciones/irati-abeto'
          element={<maderaEN.IratiAlbedoEN />}
        />
        {/* ---------------------metal--------------------- */}
        <Route
          path='en/colecciones/distrito-aluminio'
          element={<metalEN.DistritoAluminioEN />}
        />
        <Route
          path='en/colecciones/distrito-marfil'
          element={<metalEN.DistritoMarfilEN />}
        />
        <Route
          path='en/colecciones/lava-iron'
          element={<metalEN.LavaIronEN />}
        />
        {/* ---------------------piedra--------------------- */}
        <Route
          path='en/colecciones/allure-anthracite'
          element={<piedraEN.AllureAntraEN />}
        />
        <Route
          path='en/colecciones/allure-light-grey'
          element={<piedraEN.AllureLightEN />}
        />
        <Route
          path='en/colecciones/amsterdam-grey'
          element={<piedraEN.AmsterdamGreyEN />}
        />
        <Route
          path='en/colecciones/basalt-grey'
          element={<piedraEN.BasaltGreyEN />}
        />
        <Route
          path='en/colecciones/basaltina-beige'
          element={<piedraEN.BasaltinaBeigeEN />}
        />
        <Route
          path='en/colecciones/bateig-blue'
          element={<piedraEN.BateigBlueEN />}
        />
        <Route
          path='en/colecciones/bera-ice'
          element={<piedraEN.BeraIceEN />}
        />
        <Route
          path='en/colecciones/beren-black'
          element={<piedraEN.BerenBlackEN />}
        />
        <Route
          path='en/colecciones/beren-light-grey'
          element={<piedraEN.BerenLGEN />}
        />
        <Route
          path='en/colecciones/camargue-arena'
          element={<piedraEN.CamargueArenaEN />}
        />
        <Route
          path='en/colecciones/camargue-blanco'
          element={<piedraEN.CamargueBlancoEN />}
        />
        <Route
          path='en/colecciones/edra-grey'
          element={<piedraEN.EdraGreyEN />}
        />
        <Route
          path='en/colecciones/edra-light'
          element={<piedraEN.EdraLightEN />}
        />
        <Route
          path='en/colecciones/edra-sand'
          element={<piedraEN.EdraSandEN />}
        />
        <Route
          path='en/colecciones/eme-light-grey'
          element={<piedraEN.EmeLGEN />}
        />
        <Route
          path='en/colecciones/eme-grey'
          element={<piedraEN.EmeGreyEN />}
        />
        <Route
          path='en/colecciones/kendo-classic'
          element={<piedraEN.KendoClassicEN />}
        />
        <Route
          path='en/colecciones/kendo-light'
          element={<piedraEN.KendoLightEN />}
        />
        <Route
          path='en/colecciones/noon-grey'
          element={<piedraEN.NoonGreyEN />}
        />
        <Route
          path='en/colecciones/noon-sand'
          element={<piedraEN.NoonSandEN />}
        />
        <Route
          path='en/colecciones/porfido-brown'
          element={<piedraEN.PorfidoBrownEN />}
        />
        <Route
          path='en/colecciones/porfido-sand'
          element={<piedraEN.PorfidoSandEN />}
        />
        <Route
          path='en/colecciones/wega-black'
          element={<piedraEN.WegaBlackEN />}
        />
        {/* ---------------------BATH--------------------- */}
        <Route
          path='bath/allure-anthracite'
          element={<Consolidados.AllureAntraAC />}
        />
        <Route
          path='bath/beren-light-grey'
          element={<Consolidados.BerenLGAC />}
        />
        <Route
          path='bath/blanc-borghini'
          element={<Consolidados.BlancBorgAC />}
        />
        <Route
          path='bath/blanc-invisible'
          element={<Consolidados.BlancInvAC />}
        />
        <Route
          path='bath/brazil-super-white'
          element={<Consolidados.BrazilSuperAC />}
        />
        <Route path='bath/calacatta' element={<Consolidados.CalacattaAC />} />
        <Route path='bath/eme-light-grey' element={<Consolidados.EmeLGAC />} />
        <Route
          path='bath/kendo-classic'
          element={<Consolidados.KendoClassicAC />}
        />
        <Route
          path='bath/kendo-light'
          element={<Consolidados.KendoLightcAC />}
        />
        <Route path='bath/moma-gris' element={<Consolidados.MomaGrisAC />} />
        <Route
          path='bath/negro-marquina'
          element={<Consolidados.NegroMarqAC />}
        />
        <Route path='bath/noon-grey' element={<Consolidados.NoonGreyAC />} />
        <Route path='bath/noon-sand' element={<Consolidados.NoonSandAC />} />
        <Route path='bath/paladio' element={<Consolidados.PaladioAC />} />
        <Route path='bath/syrac' element={<Consolidados.SyracAC />} />
        {/*---------------------------Frances-------------------------------------------------------------------*/}
        {/* ---------------------Cementos--------------------- */}
        <Route
          path='fr/colecciones/blue-stone-gris'
          element={<cementoFR.BlueStoneEN />}
        />
        <Route
          path='fr/colecciones/moma-arena'
          element={<cementoFR.MomaArenaEN />}
        />
        <Route
          path='fr/colecciones/moma-gris'
          element={<cementoFR.MomaGrisEN />}
        />
        <Route
          path='fr/colecciones/kron-grey'
          element={<cementoFR.KronGreyEN />}
        />
        <Route
          path='fr/colecciones/titan-antracita'
          element={<cementoFR.TitanAntEN />}
        />
        <Route
          path='fr/colecciones/titan-cemento'
          element={<cementoFR.TitanCemEN />}
        />
        <Route
          path='fr/colecciones/mood-anthracite'
          element={<cementoFR.MoodAntraEN />}
        />
        <Route
          path='fr/colecciones/mood-grey'
          element={<cementoFR.MoodGreyEN />}
        />
        <Route
          path='fr/colecciones/vulcano'
          element={<cementoFR.VulcanoEN />}
        />
        {/* ---------------------Color--------------------- */}
        <Route
          path='fr/colecciones/basic-blanco'
          element={<colorFR.BasicBlancoEN />}
        />
        <Route
          path='fr/colecciones/basic-negro'
          element={<colorFR.BasicNegroEN />}
        />
        <Route
          path='fr/colecciones/era-deep-black'
          element={<colorFR.EraDeepBEN />}
        />
        <Route path='fr/colecciones/era-grey' element={<colorFR.EraGreyEN />} />
        <Route
          path='fr/colecciones/era-infinity-white'
          element={<colorFR.EraInfinityWEN />}
        />
        <Route
          path='fr/colecciones/era-white'
          element={<colorFR.EraWhiteEN />}
        />
        <Route
          path='fr/colecciones/pure-super-white'
          element={<colorFR.PureWhiteEN />}
        />
        <Route
          path='fr/colecciones/pure-black'
          element={<colorFR.PureBlackEN />}
        />
        {/* ---------------------marmol--------------------- */}
        {/* <Route
          path='fr/colecciones/arabescatto-corchia'
          element={<marmolFR.ArabescattoEN />}
        /> */}
        <Route
          path='fr/colecciones/atlantis'
          element={<marmolFR.AtlantisEN />}
        />
        <Route
          path='fr/colecciones/blanc-arabescato'
          element={<marmolFR.BlancArabeEN />}
        />
        <Route
          path='fr/colecciones/blanc-borghini'
          element={<marmolFR.BlancBorgEN />}
        />
        <Route
          path='fr/colecciones/blanc-calacatta'
          element={<marmolFR.BlancCalaEN />}
        />
        <Route
          path='fr/colecciones/blanc-calacatta-gold'
          element={<marmolFR.BlancCalaGoldEN />}
        />
        <Route
          path='fr/colecciones/blanc-invisible'
          element={<marmolFR.BlancInvEN />}
        />
        <Route
          path='fr/colecciones/blanc-statuario-gold'
          element={<marmolFR.BlancStatGoldEN />}
        />
        <Route
          path='fr/colecciones/blanc-statuarietto'
          element={<marmolFR.BlancStatEN />}
        />
        <Route
          path='fr/colecciones/brazil-super-white'
          element={<marmolFR.BrazilSuperEN />}
        />
        <Route
          path='fr/colecciones/calacatta'
          element={<marmolFR.CalacattaEN />}
        />
        <Route
          path='fr/colecciones/calacatta-gold'
          element={<marmolFR.CalacattaGoldEN />}
        />
        <Route
          path='fr/colecciones/calacatta-paonazzo'
          element={<marmolFR.CalacattaPaoEN />}
        />
        <Route path='fr/colecciones/corinto' element={<marmolFR.CorintoEN />} />
        <Route
          path='fr/colecciones/cuarzo-reno'
          element={<marmolFR.CuarzoRenoEN />}
        />
        <Route
          path='fr/colecciones/estatuario'
          element={<marmolFR.EstatuarioEN />}
        />
        <Route
          path='fr/colecciones/estatuario-bk-a'
          element={<marmolFR.EstatuarioBKAEN />}
        />
        <Route path='fr/colecciones/iceberg' element={<marmolFR.IcebergEN />} />
        {/* <Route
          path='fr/colecciones/invisible-grey'
          element={<marmolFR.InvisibleGreyEN />}
        /> */}
        <Route path='fr/colecciones/lilac' element={<marmolFR.LilacEN />} />
        <Route
          path='en/colecciones/melbourne'
          element={<marmolFR.MelbourneEN />}
        />
        <Route
          path='fr/colecciones/negro-marquina'
          element={<marmolFR.NegroMarqEN />}
        />
        <Route
          path='fr/colecciones/nero-ardi'
          element={<marmolFR.NeroArdiEN />}
        />
        <Route path='fr/colecciones/paladio' element={<marmolFR.PaladioEN />} />
        {/* <Route
          path='fr/colecciones/rosa-persia'
          element={<marmolFR.RosaPersiaEN />}
        /> */}
        <Route
          path='fr/colecciones/sahara-noir'
          element={<marmolFR.SaharaNoirEN />}
        />
        <Route
          path='fr/colecciones/saint-laurent'
          element={<marmolFR.SaintLaurenEN />}
        />
        <Route path='fr/colecciones/syrac' element={<marmolFR.SyracEN />} />
        {/* <Route path='fr/colecciones/volakas' element={<marmolFR.VolakasEN />} /> */}
        {/* ---------------------madera--------------------- */}
        <Route path='fr/colecciones/canada' element={<maderaFR.CanadaEN />} />
        <Route
          path='fr/colecciones/irati-abeto'
          element={<maderaFR.IratiAlbedoEN />}
        />
        {/* ---------------------metal--------------------- */}
        <Route
          path='fr/colecciones/distrito-aluminio'
          element={<metalFR.DistritoAluminioEN />}
        />
        <Route
          path='fr/colecciones/distrito-marfil'
          element={<metalFR.DistritoMarfilEN />}
        />
        <Route
          path='fr/colecciones/lava-iron'
          element={<metalFR.LavaIronEN />}
        />
        {/* ---------------------piedra--------------------- */}
        <Route
          path='fr/colecciones/allure-anthracite'
          element={<piedraFR.AllureAntraEN />}
        />
        <Route
          path='fr/colecciones/allure-light-grey'
          element={<piedraFR.AllureLightEN />}
        />
        <Route
          path='fr/colecciones/amsterdam-grey'
          element={<piedraFR.AmsterdamGreyEN />}
        />
        <Route
          path='fr/colecciones/basalt-grey'
          element={<piedraFR.BasaltGreyEN />}
        />
        <Route
          path='fr/colecciones/basaltina-beige'
          element={<piedraFR.BasaltinaBeigeEN />}
        />
        <Route
          path='fr/colecciones/bateig-blue'
          element={<piedraFR.BateigBlueEN />}
        />
        <Route
          path='fr/colecciones/bera-ice'
          element={<piedraFR.BeraIceEN />}
        />
        <Route
          path='fr/colecciones/beren-black'
          element={<piedraFR.BerenBlackEN />}
        />
        <Route
          path='fr/colecciones/beren-light-grey'
          element={<piedraFR.BerenLGEN />}
        />
        <Route
          path='fr/colecciones/camargue-arena'
          element={<piedraFR.CamargueArenaEN />}
        />
        <Route
          path='fr/colecciones/camargue-blanco'
          element={<piedraFR.CamargueBlancoEN />}
        />
        <Route
          path='fr/colecciones/edra-grey'
          element={<piedraFR.EdraGreyEN />}
        />
        <Route
          path='fr/colecciones/edra-light'
          element={<piedraFR.EdraLightEN />}
        />
        <Route
          path='fr/colecciones/edra-sand'
          element={<piedraFR.EdraSandEN />}
        />
        <Route
          path='fr/colecciones/eme-light-grey'
          element={<piedraFR.EmeLGEN />}
        />
        <Route
          path='fr/colecciones/eme-grey'
          element={<piedraFR.EmeGreyEN />}
        />
        <Route
          path='fr/colecciones/kendo-classic'
          element={<piedraFR.KendoClassicEN />}
        />
        <Route
          path='fr/colecciones/kendo-light'
          element={<piedraFR.KendoLightEN />}
        />
        <Route
          path='fr/colecciones/noon-grey'
          element={<piedraFR.NoonGreyEN />}
        />
        <Route
          path='fr/colecciones/noon-sand'
          element={<piedraFR.NoonSandEN />}
        />
        <Route
          path='fr/colecciones/porfido-brown'
          element={<piedraFR.PorfidoBrownEN />}
        />
        <Route
          path='fr/colecciones/porfido-sand'
          element={<piedraFR.PorfidoSandEN />}
        />
        <Route
          path='fr/colecciones/wega-black'
          element={<piedraFR.WegaBlackEN />}
        />
      </Routes>
    </Router>
  );
};
export default PaginasColeccion;
