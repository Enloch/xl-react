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
            <LinkSecciones to='forradomuebles' smooth={true}>
              <LiEl variants={item}>Forrado de módulos auxiliares</LiEl>
            </LinkSecciones>
            <LinkSecciones to='forradomuebles' smooth={true}>
              <LiEl variants={item}>Revestimiento de cajones y costados</LiEl>
            </LinkSecciones>
            <LinkSecciones to='encimerabath' smooth={true}>
              <LiEl variants={item}>XL top // encimeras</LiEl>
            </LinkSecciones>
            <LinkSecciones to='frentes' smooth={true}>
              <LiEl variants={item}>XL frente</LiEl>
            </LinkSecciones>
            <LinkSecciones to='xlshelf' smooth={true}>
              <LiEl variants={item}>XL shelf // baldas </LiEl>
            </LinkSecciones>
            <LinkSecciones to='xlspecial' smooth={true}>
              <LiEl variants={item}>XL bath specials // lavabos y tótems</LiEl>
            </LinkSecciones>
            <LinkSecciones to='' smooth={true}>
              <LiEl variants={item}>
                XL light shower tray // platos de ducha medida
              </LiEl>
            </LinkSecciones>
            <LinkSecciones to='' smooth={true}>
              <LiEl variants={item}>XL panel // paneles a medida</LiEl>
            </LinkSecciones>
          </Lista>
        </ListaUno>
      </CaraContainer>
    </>
  );
};

export default ServicioBath;
