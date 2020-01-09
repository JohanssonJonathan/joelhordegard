import React, { Fragment } from 'react'
import styled from '@emotion/styled/macro'
import Card from './Cards/Card'
import Media from 'react-media'

const Wrapper = styled('div')`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 679px) {
    width: 90%;
  }
`

const Content = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const LoadingVideos = () => {
  const firstColumn = [1, 2, 3, 4]

  const secondColumn = [1, 2, 3, 4]
  const thirdColumn = [1, 2, 3, 4]
  return (
    <Wrapper>
      <Media
        queries={{
          small: '(max-width:699px)',
          medium: '(min-width:700px) and (max-width:1099px)',
          large: '(min-width:1100px)',
        }}
      >
        {matches => {
          if (matches.small) {
            return (
              <Content style={{ margin: '0 24px' }}>
                {firstColumn.map(() => {
                  return <Card loading />
                })}
              </Content>
            )
          }
          if (matches.medium) {
            return (
              <Fragment>
                <Content>
                  {firstColumn.map(() => {
                    return <Card loading />
                  })}
                </Content>
                <Content style={{ marginLeft: '24px' }}>
                  {secondColumn.map(() => {
                    return <Card loading />
                  })}
                </Content>
              </Fragment>
            )
          }

          if (matches.large) {
            return (
              <Fragment>
                <Content>
                  {firstColumn.map(() => {
                    return <Card loading />
                  })}
                </Content>
                <Content style={{ marginLeft: '24px' }}>
                  {secondColumn.map(() => {
                    return <Card loading />
                  })}
                </Content>
                <Content style={{ marginLeft: '24px' }}>
                  {thirdColumn.map(() => {
                    return <Card loading />
                  })}
                </Content>
              </Fragment>
            )
          }
          return null
        }}
      </Media>
    </Wrapper>
  )
}

export default LoadingVideos
