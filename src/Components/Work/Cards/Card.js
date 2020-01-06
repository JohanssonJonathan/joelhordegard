import React, { useState, useEffect, Fragment } from 'react'
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

  background-color: rgba(255, 255, 255, 0.07);
  @media screen and (min-width: 679px) {
    width: 49.6%;
    margin: 0.2%;
  }

  @media screen and (min-width: 1000px) {
    width: 31.13%;
    margin: 1%;
  }
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

  @media screen and (min-width:900px){
    
  :hover {
    opacity: 1;
  }
  }
`
const RatioBox = styled('div')`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width:900px){
    
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
    padding-bottom: 60.25%;
  }
`


const MobileTitle = styled("h5")` 

  text-align:center;
  background-color:black;
  padding:30px 0;

 @media screen and (min-width:900px){
    
  display:none;
  }
`

const Card = ({ videoId, title, onClick }) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
      .then(response => response.json())
      .then(jsondata => setImage(jsondata.thumbnail_url))
  }, [])

  const regexpSize = /_.+\./gm

  const size = image && image.match(regexpSize)
  const bigImage = image && image.replace(size, '_1195x966.')

  return (
    <Wrapper>
      <RatioBox onClick={onClick}>
        {bigImage && (
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
