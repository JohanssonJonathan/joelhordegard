import React, { useState, useEffect, Fragment } from 'react'
import styled from '@emotion/styled/macro'
import { Transition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'

const Wrapper = styled('div')`
  width: 90%;
  height: calc(80vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  text-align: center;
  @media screen and (max-width: 700px) {
    margin-top: 50px;
    height: auto;
  }

  transition: opacity 0.2s ease;

  &.entering {
    opacity: 0;
  }
  &.entered {
    opacity: 1;

  } 

  
  &.exited {
    opacity: 0;

  } 
`

const Heading = styled('h4')`
  font-weight: normal;
  /* font-size:32px; */
  margin-bottom: 20px;
  /* font-size:14px; */
`

const SubHeading = styled('h5')`
  font-weight: normal;
  margin-bottom: 10px;
  font-size: 16px;
`

const Adress = styled('h5')`
  font-weight: normal;
  font-size: 16px;
`

const Information = styled('div')`
  margin-bottom: 10px;
  line-height: 23px;
  font-weight: normal;
  font-size: 16px;
`

const Contact = ({history:{location:{pathname}}}) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(pathname === '/contact' ? true : false)
  }, [])

  return (
    <Transition in={animate} timeout={200}>
      {state => {
        return (
          <Wrapper className={state}>
            <Heading>Represented by The Talent Group</Heading>
            <SubHeading>Contact</SubHeading>
            <Information>
              <a href="mailto:klaara@ttg.se">
                <Adress> klaara@ttg.se</Adress>
              </a>
              <a style={{ fontSize: '15' }} href="tel:+46 70 925 15 44">
                +46 70 925 15 44
              </a>
            </Information>

            <Information>
              <a href="mailto:klaara@ttg.se">
                <Adress>felicia@ttg.se</Adress>
              </a>
              <a style={{ fontSize: '15' }} href="tel:+46709115720">
                +46 709 115 720
              </a>
            </Information>
          </Wrapper>
        )
      }}
    </Transition>
  )
}

export default withRouter(Contact)
