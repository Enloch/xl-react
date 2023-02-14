{
  /* <IconContainer>
          <LinkSecciones to={config[0].id} smooth={true}>
            <Icono1
              id={config[0].tooltip}
              src={icono}
              style={{
                top: config[0].top,
                left: config[0].left,
              }}
            />
            <Tooltip anchorId={config[0].tooltip} content={config[0].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[1].id} smooth={true}>
            <Icono1
              id={config[1].tooltip}
              src={icono}
              style={{
                top: config[1].top,
                left: config[1].left,
              }}
            />
            <Tooltip anchorId={config[1].tooltip} content={config[1].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[2].id} smooth={true}>
            <Icono1
              id={config[2].tooltip}
              src={icono}
              style={{
                top: config[2].top,
                left: config[2].left,
              }}
            />
            <Tooltip anchorId={config[2].tooltip} content={config[2].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[3].id} smooth={true}>
            <Icono1
              id={config[3].tooltip}
              src={icono_b}
              style={{
                top: config[3].top,
                left: config[3].left,
              }}
            />
            <Tooltip anchorId={config[3].tooltip} content={config[3].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[4].id} smooth={true}>
            <Icono1
              id={config[4].tooltip}
              src={icono}
              style={{
                top: config[4].top,
                left: config[4].left,
              }}
            />
            <Tooltip anchorId={config[4].tooltip} content={config[4].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[5].id} smooth={true}>
            <Icono1
              id={config[5].tooltip}
              src={icono_b}
              style={{
                top: config[5].top,
                left: config[5].left,
              }}
            />
            <Tooltip anchorId={config[5].tooltip} content={config[5].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[6].id} smooth={true}>
            <Icono1
              id={config[6].tooltip}
              src={icono_b}
              style={{
                top: config[6].top,
                left: config[6].left,
              }}
            />
            <Tooltip anchorId={config[6].tooltip} content={config[6].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[7].id} smooth={true}>
            <Icono1
              id={config[7].tooltip}
              src={icono_b}
              style={{
                top: config[7].top,
                left: config[7].left,
              }}
            />
            <Tooltip anchorId={config[7].tooltip} content={config[7].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[8].id} smooth={true}>
            <Icono1
              id={config[8].tooltip}
              src={icono}
              style={{
                top: config[8].top,
                left: config[8].left,
              }}
            />
            <Tooltip anchorId={config[8].tooltip} content={config[8].tooltip} />
          </LinkSecciones>
          <LinkSecciones to={config[9].id} smooth={true}>
            <Icono1
              id={config[9].tooltip}
              src={icono}
              style={{
                top: config[9].top,
                left: config[9].left,
              }}
            />
            <Tooltip anchorId={config[9].tooltip} content={config[9].tooltip} />
          </LinkSecciones>
          {/* <LinkSecciones to={config[10].id} scroll="smooth">
            <Icono1
              id={config[10].tooltip}
              src={icono}
              style={{
                top: config[10].top,
                left: config[10].left,
              }}
            />
            <Tooltip
              anchorId={config[10].tooltip}
              content={config[10].tooltip}
            />
          </LinkSecciones>
        </IconContainer>  */
}

{
  /* <ContIconText2
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetAntracita(false);
                    SetBlanco(false);
                    SetNordik(false);
                    SetNatural(!Natural);
                    setTxtMu(txtacabados.acNatural);
                    setTxtF(txtacabados.acNatural);
                    setTxtM(txtacabados.acNatural);
                    setTxtL(txtacabados.acNatural);
                    setTxtE(txtacabados.acNatural);
                  }}
                >
                  <IconoMaterial src={iconos.naturalIco}></IconoMaterial>
                  <TextoMaterial>Natural</TextoMaterial>
                </ContIconText2>
                <ContIconText2
                  onClick={() => {
                    SetAntracita(!Antracita);
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetNordik(false);
                    SetNatural(false);
                    SetBlanco(false);
                    setTxtMu(txtacabados.acAntracite);
                    setTxtF(txtacabados.acAntracite);
                    setTxtM(txtacabados.acAntracite);
                    setTxtL(txtacabados.acAntracite);
                    setTxtE(txtacabados.acAntracite);
                  }}
                >
                  <IconoMaterial src={iconos.antracitaIco}></IconoMaterial>
                  <TextoMaterial>Anthracite</TextoMaterial>
                </ContIconText2>
                <ContIconText2
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetBlanco(!Blanco);
                    SetNordik(false);
                    SetNatural(false);
                    SetAntracita(false);
                    setTxtMu(txtacabados.acBlanco);
                    setTxtF(txtacabados.acBlanco);
                    setTxtM(txtacabados.acBlanco);
                    setTxtL(txtacabados.acBlanco);
                    setTxtE(txtacabados.acBlanco);
                  }}
                >
                  <IconoMaterial src={iconos.blancoIco}></IconoMaterial>
                  <TextoMaterial>Blanco</TextoMaterial>
                </ContIconText2>
                <ContIconText2
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setMuebleVisible(!muebleVisible);
                    SetNordik(!Nordik);
                    SetAntracita(false);
                    SetBlanco(false);
                    SetNatural(false);
                    setTxtMu(txtacabados.acNordik);
                    setTxtF(txtacabados.acNordik);
                    setTxtM(txtacabados.acNordik);
                    setTxtL(txtacabados.acNordik);
                    setTxtE(txtacabados.acNordik);
                  }}
                >
                  <IconoMaterial src={iconos.nordikIco}></IconoMaterial>
                  <TextoMaterial>Nordik</TextoMaterial>
                </ContIconText2> */
}
