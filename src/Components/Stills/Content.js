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
`

const Content = ({images, style}) => {
    const regexp = /src="(.+?)"/gm

  return (
    <Wrapper style={{...style}}>
      {images &&
        images.map(({ content }) => {
          const match = content.match(regexp)[0]
          const url = match.substring(5, match.length - 1)
          console.log('url :', url)
          return <Image width="100%" src={url} alt="" />
        })}
    </Wrapper>
  )
}


export default Content