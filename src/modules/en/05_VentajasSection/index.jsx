import React from 'react'
import {
  VentajasContainer,
  VentajasContainer2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Img2,
} from './VentajasElements'
const VentajasSection = ({ headLine, description, img, img2, img3, alt }) => {
  return (
    <>
      <VentajasContainer2>
        <ImgWrap>
          <Img2 src={img} alt={'test'} />
        </ImgWrap>
      </VentajasContainer2>
      <VentajasContainer id="ventajasEN">
        <TextWrapper>
          <Heading> {headLine}</Heading>
        </TextWrapper>
        <ImgWrap>
          <Img src={img2} alt={'test'} />
        </ImgWrap>
      </VentajasContainer>
    </>
  )
}

export default VentajasSection
