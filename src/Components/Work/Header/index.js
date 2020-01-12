import React, { useState, useEffect, Fragment } from 'react'
import styled from '@emotion/styled/macro'
import { withRouter } from 'react-router-dom'
import Media from 'react-media'
import Menu from './Menu'
const Container = styled('div')`
  font-style: italic;
  position: relative;
  margin-bottom: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 679px) {
    left:6%;
    width: 94%;

      /* margin: auto; */

  }
`

const Content = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 10px;


  @media screen and (max-width: 679px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 0px;
  }
`

const Name = styled('h1')`
  margin-right: 10px;
  line-height: 25px;
  font-weight: 100;
  letter-spacing: 0.7px;
  color: white;
  @media screen and (max-width: 679px) {
    margin-bottom: 10px;
  }
`



const Description = styled('h6')`
  opacity: 0.7;
  margin-top:40px;
  letter-spacing: 1.4px;
  font-weight: 100;
  display:flex;
  justify-content:center;

  @media screen and (min-width:679px){
    justify-content:flex-start;
    margin-top:0;

  }
`

const Header = ({ history }) => {
  const [path, setPath] = useState('work')

  const route = history.location.pathname

  useEffect(() => {
    setPath(route)
  }, [route])
  return (
    <Container>
      <Content>
        <Name>Joel Hördegård</Name>

        <Media
          queries={{
            small: '(max-width:699px)',
            medium: '(min-width:700px)',
          }}
        >
          <Menu path={path}/>
        </Media>
      </Content>
      <Media
          queries={{
            medium: '(min-width:700px)',
          }}
        >

      {({medium})=>medium &&<Description>Director of Photography</Description>}
      </Media>
    </Container>
  )
}

export default withRouter(Header)
