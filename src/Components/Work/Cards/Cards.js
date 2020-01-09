import React from 'react'
import Card from './Card'
import styled from '@emotion/styled/macro'



const Content = styled('div')`
  display: flex;
  width:100%;
  flex-direction: column;
`

const Cards = ({ data, fullScreen , style}) => {
 
  return (
      <Content style={{...style}} >
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
      </Content>

  )
}

export default Cards
