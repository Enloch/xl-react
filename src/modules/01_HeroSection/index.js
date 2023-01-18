import React from 'react'
import scrollTo from '../../helpers/scrollTo'
import { HeroContainer, Img } from './HeroElements'

const HeroSection = ({ img, indiceRef }) => {
  return (
    <HeroContainer>
      <Img ref={indiceRef} id="Jump" src={img} alt={'test'}></Img>
    </HeroContainer>
  )
}

export default HeroSection
