import React from 'react'
import Header from './Header'
import Videos from './Videos'
import styled from '@emotion/styled/macro'

const Wrapper = styled('div')`
  display: flex;
  justify-content: flex-start;
  position: relative;
  list-style: none;
  color: white;
  flex-wrap: wrap;
  padding: 0;
  margin: auto;

  @media screen and (max-width: 679px) {
    width: 320px;
  }

  @media screen and (min-width: 679px) {
    width: 644px;
  }

  @media screen and (min-width: 999px) {
    width: 972px;
  }

  @media screen and (min-width: 1340px) {
    width: 1296px;
  }
`

const Home = ({ videos }) => {
  return videos && videos.length > 0 ? (
    <Wrapper className={'container'}>
      <Header />
      <Videos videos={videos} />
    </Wrapper>
  ) : null
}

export default Home
