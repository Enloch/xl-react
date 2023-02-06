import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./landing";
import HomeEN from "./landingEN";
import Colecciones from "./colecciones";
import ColeccionesEN from "./coleccionesEN";
import Bath from "./bath";
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
/*------------------------------------BATH ES------------------------------------*/
import { Consolidados } from "../modules/bath/05_AcabadosBath/acabadosConsolidados";
/*------------------------------------BATH EN------------------------------------*/

import PrivSection from "../modules/PrivacidadSection";
import { privObj } from "../modules/PrivacidadSection/data";
import LegalSection from "../modules/LegalSection";
import { legalObj } from "../modules/LegalSection/data";
import ContactoSection from "../modules/Contacto";
import { contactoObj } from "../modules/Contacto/data";
import Intercambiador from "./intercambiador";
import Rotador from "./rotador";
import ContactoSectionEN from "../modules/en/Contacto";
import { contactoObjEN } from "../modules/en/Contacto/data";
const PaginasColeccion = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/en' element={<HomeEN />} />
        <Route path='/colecciones/*' element={<Colecciones />} />
        <Route path='/en/colecciones/*' element={<ColeccionesEN />} />
        <Route path='/bath' element={<Bath />} />
        <Route path='/privacidad' element={<PrivSection {...privObj} />} />
        <Route path='/legal' element={<LegalSection {...legalObj} />} />
        <Route
          path='/contacto'
          element={<ContactoSection {...contactoObj} />}
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
        <Route
          path='/colecciones/arabescatto-corchia'
          element={<marmol.Arabescatto />}
        />
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
        <Route
          path='/colecciones/invisible-grey'
          element={<marmol.InvisibleGrey />}
        />
        <Route path='/colecciones/lilac' element={<marmol.Lilac />} />
        <Route
          path='/colecciones/negro-marquina'
          element={<marmol.NegroMarq />}
        />
        <Route path='/colecciones/nero-ardi' element={<marmol.NeroArdi />} />
        <Route path='/colecciones/paladio' element={<marmol.Paladio />} />
        <Route
          path='/colecciones/rosa-persia'
          element={<marmol.RosaPersia />}
        />
        <Route path='/colecciones/syrac' element={<marmol.Syrac />} />
        <Route path='/colecciones/volakas' element={<marmol.Volakas />} />
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
        <Route
          path='en/colecciones/arabescatto-corchia'
          element={<marmolEN.ArabescattoEN />}
        />
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
        <Route
          path='en/colecciones/invisible-grey'
          element={<marmolEN.InvisibleGreyEN />}
        />
        <Route path='en/colecciones/lilac' element={<marmolEN.LilacEN />} />
        <Route
          path='en/colecciones/negro-marquina'
          element={<marmolEN.NegroMarqEN />}
        />
        <Route
          path='en/colecciones/nero-ardi'
          element={<marmolEN.NeroArdiEN />}
        />
        <Route path='en/colecciones/paladio' element={<marmolEN.PaladioEN />} />
        <Route
          path='en/colecciones/rosa-persia'
          element={<marmolEN.RosaPersiaEN />}
        />
        <Route path='en/colecciones/syrac' element={<marmolEN.SyracEN />} />
        <Route path='en/colecciones/volakas' element={<marmolEN.VolakasEN />} />
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
      </Routes>
    </Router>
  );
};
export default PaginasColeccion;
