import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled/macro'

const Image = styled('img')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
`
const Wrapper = styled('div')`
  width: 100%;
  margin: 1% 1% 0;

  @media screen and (min-width: 679px) {
    width: 48.93%;
    margin: 0.5%;
  }

  @media screen and (min-width: 1000px) {
    width: 32.93%;
    margin: 0.2%;
  }
`

const Title = styled('span')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  font-size: 30px;
  opacity: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`
const RatioBox = styled('div')`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover > ${Image} {
    transform: scale(1.1);
  }

  &::after {
    display: block;
    content: '';
    /* 16:9 aspect ratio */
    padding-bottom: 56.25%;
  }
`

const Card = props => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    const videoid = props && props.metadata && props.metadata.videoid

    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoid}`)
      .then(response => response.json())
      .then(jsondata => setImage(jsondata.thumbnail_url))
  }, [])

  const regexpSize = /_.+\./gm
  const size = image && image.match(regexpSize)
  const bigImage = image && image.replace(size, '_1195x966.')

  return (
    <Wrapper>
      <RatioBox onClick={props.iFrameVideo && props.showVideo}>
        <Image src={bigImage} />
      </RatioBox>
    </Wrapper>
  )
}

export default Card
