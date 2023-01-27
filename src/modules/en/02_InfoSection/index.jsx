import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImgGradient,
  ImgWrap,
  Img,
} from './InfoElements'
const InfoSection = ({ headLine, description, img, alt }) => {
  return (
    <>
      <InfoContainer id="aboutEN">
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
      </InfoContainer>
      <ImgGradient>
        <ImgWrap>
          <Img src={img} alt={'test'} />
        </ImgWrap>
      </ImgGradient>
    </>
  )
}

export default InfoSection
