import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled/macro'
import {withRouter} from "react-router-dom";

const Container = styled('div')`
  font-style: italic;
  position: relative;
  /* left:3%; */
  margin-bottom:20px;
  color: white;
  display: flex;
  flex-direction: column;

  /* @media screen and (min-width:679px) {
    left:5%;

  } */
 
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
  position:relative;
  opacity: ${props=>props.path ? 1 : 0.6};
  
  margin-right: 10px;

  &:hover {
    opacity: 0.6;
    ::after{
      position:absolute;
      top:-5px;
      left:0;
      width:100%;
      height:1px;
      background-color:white;
      content:""
    }
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

const Header = ({history}) => {

  const [path, setPath] = useState("work");

  const route= history.location.pathname;

  useEffect(()=>{

    setPath(route)
  },[route])

  return (
    <Container>
      <Content>
        <Name>Joel Hördegård</Name>
        <Menu path={path === "/work" ? 1:0} onClick={()=>history.push("/work")}> work </Menu>
        <Menu path={path === "/stills" ? 1:0} onClick={()=>history.push("/stills")}> stills </Menu>
        <Menu path={path === "/contact" ? 1:0} onClick={()=>history.push("/contact")}> contact </Menu>
      </Content>
      <Description>Director of Photography</Description>
    </Container>
  )
}

export default withRouter(Header)
