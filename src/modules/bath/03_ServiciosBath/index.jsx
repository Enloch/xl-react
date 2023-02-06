import React from "react";
import {
  CaraContainer,
  TextWrapper,
  Heading,
  Subtitle,
  ListaUno,
  Lista,
  LiEl,
  LinkSecciones,
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
            <LinkSecciones to='forradomuebles' smooth={true}>
              <LiEl variants={item}>Forrado de muebles</LiEl>
            </LinkSecciones>
            <LiEl variants={item}>Forrado de módulos auxiliares</LiEl>
            <LiEl variants={item}>Revestimiento de cajones y costados</LiEl>
            <LiEl variants={item}>XL top // encimeras</LiEl>
            <LiEl variants={item}>XL frente</LiEl>
            <LiEl variants={item}>XL shelf // baldas </LiEl>
            <LiEl variants={item}>XL bath specials // lavabos y tótems</LiEl>
            <LiEl variants={item}>
              XL light shower tray // platos de ducha medida
            </LiEl>
            <LiEl variants={item}>XL panel // paneles a medida</LiEl>
          </Lista>
        </ListaUno>
      </CaraContainer>
    </>
  );
};

export default ServicioBath;
