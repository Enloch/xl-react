import React from 'react'
import {
  FormatosContainer,
  FormatosContainer2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Img3,
} from './FormatosElements'
const FormatoSection = ({ headLine, description, img, img2, img3, alt }) => {
  return (
    <>
      <FormatosContainer2>
        <Img3 src={img2} alt={alt} />
      </FormatosContainer2>
      <FormatosContainer id="formato">
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
        <ImgWrap>
          <Img src={img} alt={alt} />
        </ImgWrap>
      </FormatosContainer>
    </>
  )
}

export default FormatoSection
