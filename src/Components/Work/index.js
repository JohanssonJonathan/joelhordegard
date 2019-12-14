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
  position:relative;
  top:40px;

`

const Home = ({ videos }) => {


  return videos && videos.length > 0 ? (
    <Wrapper>
      <Header />
     
      <Videos videos={videos} />
    </Wrapper>
  ) : null
}

export default Home
