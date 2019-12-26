import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled/macro'

const Image = styled('img')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease;
`
const Wrapper = styled('div')`
  width: 100%;
  margin: 1% 1% 0;

  @media screen and (min-width: 679px) {
    width: 49.6%;
    margin: 0.2%;
  }

  @media screen and (min-width: 1000px) {
    width: 31.13%;
    margin: 1%;
  }
`


const Title= styled("h5")` 

  opacity:0;

  position:absolute;
  left:0;
  right:0;
  top:-20px;
  bottom:0;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  font-size:20px;
  transition-property: opactiy,top;
  transition-duration:0.1s;
  /* transition-delay:0.1s; */
  transition-timing-function: ease;


`
const RatioBox = styled('div')`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover > ${Image} {
    transform: scale(1.1);
  }

  &:hover > ${Title}{
      opacity:1;
      top:0;
  } 

  &::after {
    display: block;
    content: '';
    /* 16:9 aspect ratio */
    padding-bottom: 60.25%;
  }
`



const Card = ({videoId,title, onClick}) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
      .then(response => response.json())
      .then(jsondata => setImage(jsondata.thumbnail_url))
  },[]);

  const regexpSize = /_.+\./gm;

  const size = image && image.match(regexpSize);
  const bigImage = image && image.replace(size, '_1195x966.');

  return (
    <Wrapper>
      <RatioBox onClick={onClick}>
        <Image src={bigImage} />
        <Title>{title}</Title>
      </RatioBox>
    </Wrapper>
  )
}

export default Card
