import React from 'react'
import Card from './Card'
import styled from '@emotion/styled/macro'

const Wrapper = styled('div')`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 679px) {
    width: 90%;
  }
  transition: opacity 0.2s ease;
  opacity: ${props => (props.animation ? 0 : 1)};
`

const Cards = ({ data, fullScreen, videoId }) => (
  <Wrapper animation={videoId ? 1 : 0}>
    {data.map(({ metafields, title }, index) => {
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
