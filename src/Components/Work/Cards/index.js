import React, { Fragment } from 'react'
import styled from '@emotion/styled/macro'
import Cards from './Cards.js'
import Media from 'react-media'

const Wrapper = styled('div')`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 679px) {
    width: 90%;
  }

  transition: margin-top 0.2s ease-in;

  opacity: ${props => (props.animation ? 0 : 1)};

  &.entering {
    opacity: 0;
    margin-top: 20px;
  }
  &.entered {
    opacity: 1;
    margin-top: 0px;
  }
`

const Content = ({ data, fullScreen, videoId, animate }) => {
  const twoColumns = {
    firstColumn: data.filter((item, index) => index % 2 === 0 && item),
    secondColumn: data.filter((item, index) => index % 2 && item),
  }

  const threeColumns = {
    firstColumn: data.filter((item, index) => index % 3 === 0 && item),
    secondColumn: data.filter((item, index) => index % 3 === 1 && item),
    thirdColumn: data.filter((item, index) => index % 3 === 2 && item),
  }

  console.log('data.length :>> ', data.length);
  console.log('twoColumns :>> ', twoColumns);
  return (
    <Wrapper className={animate} animation={videoId ? 1 : 0}>
      <Media
        queries={{
          small: '(max-width:699px)',
          medium: '(min-width:700px) and (max-width:1099px)',
          large: '(min-width:1099px)',
        }}
      >
        {matches => {
          if (matches.small) {
            return (
              <Cards
                animate={animate}
                style={{ margin: '0 24px' }}
                data={data}
                fullScreen={fullScreen}
              />
            )
          }
          if (matches.medium) {
            return (
              <Fragment>
                <Cards
                  animate={animate}
                  data={twoColumns.firstColumn}
                  fullScreen={fullScreen}
                />
                <Cards
                  style={{ marginLeft: '24px' }}
                  animate={animate}
                  data={twoColumns.secondColumn}
                  fullScreen={fullScreen}
                />
              </Fragment>
            )
          }

          if (matches.large) {
            return (
              <Fragment>
                <Cards
                  animate={animate}
                  data={threeColumns.firstColumn}
                  fullScreen={fullScreen}
                />
                <Cards
                  animate={animate}
                  style={{ marginLeft: '24px' }}
                  data={threeColumns.secondColumn}
                  fullScreen={fullScreen}
                />
                <Cards
                  animate={animate}
                  style={{ marginLeft: '24px' }}
                  data={threeColumns.thirdColumn}
                  fullScreen={fullScreen}
                />
              </Fragment>
            )
          }
          return null
        }}
      </Media>
    </Wrapper>
  )
}

export default Content
