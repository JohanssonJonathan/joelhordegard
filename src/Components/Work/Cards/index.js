import React from 'react'
import Card from './Card'
import styled from '@emotion/styled/macro'

const Wrapper = styled('div')`
  width: 100%;
  margin: auto;
  display: flex;
  /* background-color:red; */
  flex-wrap: wrap;
  @media screen and (min-width: 679px) {
    width: 90%;
  }
`

const Cards = ({ data, fullScreen }) => (
  <Wrapper>
    {data.map(({ metafields }, index) => {
      const videoId = metafields[0].value

      return (
        <Card
          key={index}
          videoId={videoId}
          onClick={() => fullScreen(videoId, index)}
        />
      )
    })}
  </Wrapper>
)

export default Cards
