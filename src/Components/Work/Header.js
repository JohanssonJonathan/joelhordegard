import React from 'react'
import styled from '@emotion/styled/macro'

const Container = styled('div')`
  font-style: italic;
  position: absolute;
  top: 45px;
  color: white;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 679px) {
    top: 25px;
  }
`

const Content = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 10px;

  @media screen and (max-width: 679px) {
    align-items: flex-start;
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
    margin-bottom: 7px;
  }
`

const Menu = styled('h5')`
  font-weight: 100;
  letter-spacing: 1.4px;
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  color: white;

  margin-right: 10px;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 679px) {
    margin-bottom: 5px;
  }
`

const Description = styled('h6')`
  opacity: 0.7;
  letter-spacing: 1.4px;
  font-weight: 100;
`

const Header = () => {
  return (
    <Container>
      <Content>
        <Name>Joel Hördegård</Name>
        <Menu> work </Menu>
        <Menu> stills </Menu>
        <Menu> contact </Menu>
      </Content>
      <Description>Director of Photography</Description>
    </Container>
  )
}

export default Header
