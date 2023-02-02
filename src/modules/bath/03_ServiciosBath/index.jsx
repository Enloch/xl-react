import React from "react";
import {
  CaraContainer,
  TextWrapper,
  Heading,
  Subtitle,
  ListaUno,
  ListaDos,
  Lista,
  ListaInterna,
  LiEl,
  ImgWrap,
  Img,
} from "./servicioStyle";
const ServicioBath = ({ id, headLine, description }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.8,
        delayChildren: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <CaraContainer id={id}>
        <TextWrapper>
          <Heading
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            {" "}
            {headLine}
          </Heading>
          <Subtitle
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            {description}
          </Subtitle>
        </TextWrapper>
        <ListaUno>
          <Lista variants={container} initial='hidden' whileInView='show'>
            <LiEl variants={item}>XL bathroom adapt //</LiEl>
            <ListaInterna variants={item}>Encimeras</ListaInterna>
            <ListaInterna variants={item}>Forrado de muebles</ListaInterna>
            <ListaInterna variants={item}>
              Forrado de módulos auxiliares
            </ListaInterna>
            <ListaInterna>Revestimiento de cajones y costados</ListaInterna>
            <ListaInterna>Etc..</ListaInterna>
          </Lista>
        </ListaUno>
        <ListaDos>
          <Lista variants={container} initial='hidden' whileInView='show'>
            <LiEl variants={item}>XL top // encimeras sobremueble</LiEl>
            <LiEl variants={item}>XL frente</LiEl>
            <LiEl variants={item}>
              XL shelf // baldas y encimeras autoportantes //
            </LiEl>
            <LiEl variants={item}>XL bath specials // lavabos y tótems</LiEl>
            <LiEl variants={item}>
              XL light shower tray // platos de ducha medida
            </LiEl>
            <LiEl variants={item}>
              XL shower panel // paneles de ducha a medida
            </LiEl>
          </Lista>
        </ListaDos>
      </CaraContainer>
    </>
  );
};

export default ServicioBath;
