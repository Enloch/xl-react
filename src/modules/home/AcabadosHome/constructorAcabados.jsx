import { Link } from "react-router-dom";
import { ImageBox, ImgMini, Text, LinkLista } from "./acabadosElements";

export const generateAcabados = (
  data,
  setSelectedImage,
  setSelectedName,
  setModalOpen
) =>
  data.map((item) => (
    <ImageBox key={item.id}>
      <div
        onClick={() => {
          setSelectedImage(item.full);
          setSelectedName(item.desc[0]); // Asume que desc[0] contiene el nombre del material
          setModalOpen(true);
        }}
      >
        <ImgMini src={item.img} alt={item.alt} loading={"lazy"} />
      </div>
      <Text>
        <b>{item.desc[0]}</b>
        <br />
        {item.desc[1]}
        <br />
        {item.desc[2]}
      </Text>
    </ImageBox>
  ));


export const generateLinkAcabados = (data) =>
  data.map((item) => (
    <Link key={item.id} to={item.url} style={{ textDecoration: "none" }}>
      <LinkLista>{item.desc[0].slice(0, -3)}</LinkLista>
    </Link>
  ));
