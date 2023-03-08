import { Link } from "react-router-dom";
import { ImageBox, ImgMini, Text, LinkLista } from "./acabadosElements";
import { Acabados_InfoGeneral, Acabados_Materiales } from "./data";
export const Acabados = Acabados_Materiales.map((acabados) => (
  <ImageBox>
    <Link key={acabados.id} to={acabados.url}>
      <ImgMini src={acabados.img} alt={acabados.alt} loading={"lazy"} />
    </Link>
    <Text>
      <b>{acabados.desc[0]}</b>
      <br />
      {acabados.desc[1]}
      <br />
      {acabados.desc[2]}
    </Text>
  </ImageBox>
));
export const LinkAcabados = Acabados_Materiales.map((acabados) => (
  <Link to={acabados.url} style={{ textDecoration: "none" }}>
    <LinkLista key={acabados.id}>{acabados.desc[0].slice(0, -3)}</LinkLista>
  </Link>
));
