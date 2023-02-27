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
              <LiEl variants={item}>Furniture lining</LiEl>
            </LinkSecciones>
            <LinkSecciones to='forradomuebles' smooth={true}>
              <LiEl variants={item}>Lined auxiliary modules</LiEl>
            </LinkSecciones>
            <LinkSecciones to='forradomuebles' smooth={true}>
              <LiEl variants={item}>Drawer and side lining</LiEl>
            </LinkSecciones>
            <LinkSecciones to='encimerabath' smooth={true}>
              <LiEl variants={item}>XL top // countertops</LiEl>
            </LinkSecciones>
            <LinkSecciones to='frentes' smooth={true}>
              <LiEl variants={item}>XL frente</LiEl>
            </LinkSecciones>
            <LinkSecciones to='xlshelf' smooth={true}>
              <LiEl variants={item}>XL shelf // shelves </LiEl>
            </LinkSecciones>
            <LinkSecciones to='xlspecial' smooth={true}>
              <LiEl variants={item}>XL bath specials // sinks and totems</LiEl>
            </LinkSecciones>
            <LinkSecciones to='PlatosDuchas' smooth={true}>
              <LiEl variants={item}>
                XL light shower tray // custom made shower trays
              </LiEl>
            </LinkSecciones>
            <LinkSecciones to='xlpanel' smooth={true}>
              <LiEl variants={item}>XL panel // custom made panels</LiEl>
            </LinkSecciones>
          </Lista>
        </ListaUno>
      </CaraContainer>
    </>
  );
};

export default ServicioBath;
