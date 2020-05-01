import React from 'react'
import Header from './Header'
import styled from '@emotion/styled/macro'
import { withRouter } from 'react-router-dom'

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
  flex-direction: column;
`

const Home = ({ children, history }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

export default withRouter(Home)
