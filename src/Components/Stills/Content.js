import React, { useState, useEffect, Fragment } from 'react'
import styled from '@emotion/styled/macro'
import Media from 'react-media'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
width:91.19%;
  margin: auto;

  @media screen and (min-width: 700px) {
    margin: 0;
    width:100%;
    
  }
`

const Image = styled('img')`
  align-self: flex-start;
  /* height:600px; */
  margin-bottom: 24px;
  width:100%;
  transition: opacity 1s ease;
  &.entering {
    opacity: 0;
    // margin-top: 20px;
  }
  &.entered {
    opacity: 1;
    // margin-top: 0px;
  }

  &.exited {
    opacity: 0;
    // margin-top: 0px;
  }
`

const Content = ({images, style, className}) => {
    const regexp = /src="(.+?)"/gm
  return (
    <Wrapper style={{...style}}>
      {images &&
        images.map(({ content }) => {
          const match = content.match(regexp)[0]
          const url = match.substring(5, match.length - 1)
          console.log('url :', url)
          return <Image  className={className} width="100%" src={url} alt="" />
        })}
    </Wrapper>
  )
}


export default Content