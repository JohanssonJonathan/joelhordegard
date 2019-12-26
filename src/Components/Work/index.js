import React from 'react'
import Header from './Header'
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
  position: relative;
  top: 40px;
  flex-direction:column;
`

const Home = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

export default Home
