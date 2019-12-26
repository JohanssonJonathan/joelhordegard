import React from 'react'
import Card from './Card'
import styled from '@emotion/styled/macro'

const Wrapper = styled('div')`
  width: 100%;
  margin: auto;
  display: flex;
  /* background-color:rgba(255,255,255,0.6); */
  flex-wrap: wrap;
  @media screen and (min-width: 679px) {
    width: 90%;
  }
`

const Cards = ({ data, fullScreen }) => (
  <Wrapper>
    {data.map(({ metafields, title }, index) => {
      console.log('metafields :', metafields);
      const videoId = metafields[0].value

      return (
        <Card
          key={index}
          title={title}
          videoId={videoId}
          onClick={() => fullScreen(videoId, index)}
        />
      )
    })}
  </Wrapper>
)

export default Cards
