import React, { useState, useEffect, Fragment } from 'react'
import styled from '@emotion/styled/macro'

const Image = styled('img')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: transform 0.2s ease;
`
const Wrapper = styled('div')`
  width: 100%;
  margin-bottom: 24px;
`

const Title = styled('h5')`
  opacity: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: -20px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-style: italic;

  transition-property: opactiy, top;
  transition-duration: 0.1s;
  transition-timing-function: ease;
`

const View = styled('h5')`
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 0;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-style: italic;
`

const Info = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  @media screen and (min-width: 900px) {
    :hover {
      opacity: 1;
    }
  }
`
const RatioBox = styled('div')`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  background-color: rgba(255, 255, 255, 0.05);
  @media screen and (min-width: 900px) {
    &:hover > ${Image} {
      transform: scale(1.1);
    }

    &:hover > ${Info} {
      opacity: 1;
      top: 0;
    }
  }

  &::after {
    display: block;
    content: '';
    /* 16:9 aspect ratio */
    padding-bottom: 53.25%;
  }
`

const Card = ({ videoId, title, onClick, loading }) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (!loading) {
      fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`,
      )
        .then(response => response.json())
        .then(jsondata => setImage(jsondata.thumbnail_url))
    }
  }, [videoId])

  const regexpSize = /_.+\./gm

  const size = image && image.match(regexpSize)
  const bigImage = image && image.replace(size, '_1180x644.')

  return (
    <Wrapper>
      <RatioBox onClick={onClick}>
        {bigImage && !loading && (
          <Fragment>
            <Image src={bigImage} />

            <Info>
              <Title>{title}</Title>
              <View>- play - </View>
            </Info>
          </Fragment>
        )}
      </RatioBox>
    </Wrapper>
  )
}

export default Card
