import { Link } from "react-router-dom";
import {
  Colec_Cemento,
  Colec_Color,
  Colec_Marmol,
  Colec_Madera,
  Colec_Metal,
  Colec_Piedra,
} from "./data";
import { ImageBox, ImgMini, Text, LinkLista } from "./nuestraColecElements";
import { Colec_Header } from "./data";

const cementoMicro = Colec_Header.subtitle[0];
const coloresUni = Colec_Header.subtitle[1];
const marmoles = Colec_Header.subtitle[2];
const maderas = Colec_Header.subtitle[3];
const metales = Colec_Header.subtitle[4];
const piedras = Colec_Header.subtitle[5];
export const titulosSeries = {
  cementoMicro,
  coloresUni,
  marmoles,
  maderas,
  metales,
  piedras,
};
//CEMENTOS
export const Cementos = Colec_Cemento.map((cemento) => (
  <ImageBox>
    <Link key={cemento.id} to={cemento.url}>
      <ImgMini src={cemento.img} alt={cemento.alt} loading={"lazy"} />
    </Link>
    <Text>
      <b>{cemento.desc[0]}</b>
      <br />
      {cemento.desc[1]}
      <br />
      {cemento.desc[2]}
    </Text>
  </ImageBox>
));
export const LinkCementos = Colec_Cemento.map((enlances) => (
  <Link to={enlances.url} style={{ textDecoration: "none" }}>
    <LinkLista key={enlances.id}>{enlances.desc[0].slice(0, -3)}</LinkLista>
  </Link>
));

//COLORS
export const Colores = Colec_Color.map((color) => (
  <ImageBox key={color.id}>
    <Link to={color.url}>
      <ImgMini src={color.img} alt={color.alt} loading='lazy' />
    </Link>
    <Text>
      <b>{color.desc[0]}</b>
      <br />
      {color.desc[1]}
      <br />
      {color.desc[2]}
    </Text>
  </ImageBox>
));
export const LinkColor = Colec_Color.map((enlances) => (
  <Link to={enlances.url} style={{ textDecoration: "none" }}>
    <LinkLista key={enlances.id}>{enlances.desc[0].slice(0, -3)}</LinkLista>
  </Link>
));

//MARMOL
export const Marmoles = Colec_Marmol.map((marmol) => (
  <ImageBox key={marmol.id}>
    <Link to={marmol.url}>
      <ImgMini src={marmol.img} alt={marmol.alt} loading={"lazy"} />
    </Link>
    <Text>
      <b>{marmol.desc[0]}</b>
      <br />
      {marmol.desc[1]}
      <br />
      {marmol.desc[2]}
    </Text>
  </ImageBox>
));
export const LinkMarmol = Colec_Marmol.map((enlances) => (
  <Link to={enlances.url} style={{ textDecoration: "none" }}>
    <LinkLista key={enlances.id}>{enlances.desc[0].slice(0, -3)}</LinkLista>
  </Link>
));

//MADERA
export const Maderas = Colec_Madera.map((madera) => (
  <ImageBox key={madera.id}>
    <Link to={madera.url}>
      <ImgMini src={madera.img} alt={madera.alt} loading={"lazy"} />
    </Link>
    <Text>
      <b>{madera.desc[0]}</b>
      <br />
      {madera.desc[1]}
      <br />
      {madera.desc[2]}
    </Text>
  </ImageBox>
));
export const LinkMaderas = Colec_Madera.map((enlances) => (
  <Link to={enlances.url} style={{ textDecoration: "none" }}>
    <LinkLista key={enlances.id}>{enlances.desc[0].slice(0, -3)}</LinkLista>
  </Link>
));
//metal
export const Metales = Colec_Metal.map((metal) => (
  <ImageBox key={metal.id}>
    <Link to={metal.url}>
      <ImgMini src={metal.img} alt={metal.alt} loading={"lazy"} />
    </Link>
    <Text>
      <b>{metal.desc[0]}</b>
      <br />
      {metal.desc[1]}
      <br />
      {metal.desc[2]}
    </Text>
  </ImageBox>
));
export const LinkMetales = Colec_Metal.map((enlances) => (
  <Link to={enlances.url} style={{ textDecoration: "none" }}>
    <LinkLista key={enlances.id}>{enlances.desc[0].slice(0, -3)}</LinkLista>
  </Link>
));
//piedra
export const Piedras = Colec_Piedra.map((piedra) => (
  <ImageBox key={piedra.id}>
    <Link to={piedra.url}>
      <ImgMini src={piedra.img} alt={piedra.alt} loading={"lazy"} />
    </Link>
    <Text>
      <b>{piedra.desc[0]}</b>
      <br />
      {piedra.desc[1]}
      <br />
      {piedra.desc[2]}
    </Text>
  </ImageBox>
));
export const LinkPiedras = Colec_Piedra.map((enlances) => (
  <Link to={enlances.url} style={{ textDecoration: "none" }}>
    <LinkLista key={enlances.id}>{enlances.desc[0].slice(0, -3)}</LinkLista>
  </Link>
));
