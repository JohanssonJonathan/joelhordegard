import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled/macro'

import Media from 'react-media'

const HeaderImage = styled('div')`
  width: 90%;
  height: 400px;
  margin: auto;

  background-color: rgba(255, 255, 255, 0.07);
  @media screen and (min-width: 700px) {
    width: 60%;
  }
`

const Wrapper = styled('div')`
  display: flex;

  width: 100%;
  flex-wrap: wrap;
  margin: auto;
  @media screen and (min-width: 700px) {
    width: 60%;
  }
`

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;

  @media screen and (min-width: 700px) {
    margin: 0;

    width: 50%;
  }
`

const Background = styled('div')`
  height: ${props => props.height};
  background-color: rgba(255, 255, 255, 0.07);
  margin-top: 20px;
`
const LoadingImages = () => {
  return (
    <div style={{ marginTop: '50px' }}>
      <HeaderImage />

      <Media
        queries={{
          small: '(max-width:699px)',
          medium: '(min-width:700px)',
        }}
      >
        {matches => {
          if (matches.small) {
            const background = ['300px', '500px', '400px']
            return (
              <Wrapper>
                <Content>
                  {background &&
                    background.map(img => {
                      return (
                        <Background
                          width="100%"
                          height={img}
                          border="1px solid red"
                        />
                      )
                    })}
                </Content>
              </Wrapper>
            )
          }

          const firstColumn = ['300px', '500px', '400px']
          const secondColumn = ['500px', '300px', '400px']

          return (
            <Wrapper>
              <Content>
                {firstColumn &&
                  firstColumn.map(img => {
                    return (
                      <Background
                        width="100%"
                        height={img}
                        border="1px solid red"
                        style={{ marginRight: '6%' }}
                      />
                    )
                  })}
              </Content>
              <Content>
                {secondColumn &&
                  secondColumn.map(img => {
                    return <Background width="100%" height={img} />
                  })}
              </Content>
            </Wrapper>
          )
        }}
      </Media>
    </div>
  )
}

export default LoadingImages
