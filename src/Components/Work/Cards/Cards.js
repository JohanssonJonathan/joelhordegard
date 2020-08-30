import React from 'react'
import Card from './Card'
import styled from '@emotion/styled/macro'

const Content = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  transition: opacity 0.2s ease;

  &.entering {
    opacity: 0;
    margin-top: 20px;
  }
  &.entered {
    opacity: 1;
    margin-top: 0px;
  }
`

const Cards = ({ data, fullScreen, style, animate }) => {
  return (
    <Content className={animate} style={{ ...style }}>
      {data.map(({ metafields, title, order }, index) => {
        const videoId = metafields[0].value


        return (
          <Card
            key={title}
            title={title}
            videoId={videoId}
            onClick={() => fullScreen(videoId, order)}
          />
        )
      })}
    </Content>
  )
}

export default Cards
