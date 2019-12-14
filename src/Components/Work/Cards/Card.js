import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled/macro'

const Image = styled('img')`
  height: 320px;
  position: relative;
  transition: transform 3s ease 0.2s;
`
const Container = styled('div')`
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  width: 320px;
  height: 252px;
  top: 100px;
  margin-bottom: 4px;

  &:hover > ${Image} {
    transform: scale(1.2);
  }

  @media screen and (min-width: 679px) {
    &:nth-child(odd) {
      margin-right: 4px;
    }
  }

  @media screen and (min-width: 999px) {
    &:nth-child(even) {
      margin-right: 4px;
    }
  }

  @media screen and (min-width: 1340px) {
    &:nth-child(odd) {
      margin-right: 4px;
    }
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
    <Container
      key={props.index}
      className="image-container"
      onClick={props.iFrameVideo && props.showVideo}
    >
      <Title>
        {props.title[props.index] && props.title[props.index].title.rendered}
      </Title>
      <Image src={bigImage} />
    </Container>
  )
}

export default Card
