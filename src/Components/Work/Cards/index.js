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
 
`

const Cards = ({ showVideo, data }) => {
  const iframeRegexp = /<iframe.*<\/iframe>/gim

  return (
    <Wrapper>
      {data.map((video, index) => {
        const iframe = video.content.match(iframeRegexp)

        const props = {
          ...video,
          iFrameVideo: iframe && iframe[0],
          showVideo: () => showVideo(iframe && iframe[0], index),
        }

        return <Card key={index} {...props} />
      })}
    </Wrapper>
  )
}

export default Cards
