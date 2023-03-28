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
            overflow='hidden'
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
          <Lista
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
          >
            <LinkSecciones to='forradomuebles' smooth={true}>
              <LiEl variants={item}>Revêtement de meubles</LiEl>
            </LinkSecciones>
            <LinkSecciones to='forradomuebles' smooth={true}>
              <LiEl variants={item}>Revêtement de modules auxiliaires</LiEl>
            </LinkSecciones>
            <LinkSecciones to='forradomuebles' smooth={true}>
              <LiEl variants={item}>Revêtement de tiroirs et côtés</LiEl>
            </LinkSecciones>
            <LinkSecciones to='encimerabath' smooth={true}>
              <LiEl variants={item}>XL top // plan de toilette</LiEl>
            </LinkSecciones>
            <LinkSecciones to='frentes' smooth={true}>
              <LiEl variants={item}>XL façade</LiEl>
            </LinkSecciones>
            <LinkSecciones to='xlshelf' smooth={true}>
              <LiEl variants={item}>XL étagères </LiEl>
            </LinkSecciones>
            <LinkSecciones to='xlspecial' smooth={true}>
              <LiEl variants={item}>
                XL bath specials // vasques et vasques totems
              </LiEl>
            </LinkSecciones>
            <LinkSecciones to='PlatosDuchas' smooth={true}>
              <LiEl variants={item}>XL bacs à douche sur mesure</LiEl>
            </LinkSecciones>
            <LinkSecciones to='xlpanel' smooth={true}>
              <LiEl variants={item}>XL panneau sur mesure</LiEl>
            </LinkSecciones>
          </Lista>
        </ListaUno>
      </CaraContainer>
    </>
  );
};

export default ServicioBath;
