import React from 'react'
import styled from '@emotion/styled/macro'
import './style.css'

const LeftWrapper = styled('div')`
  bottom: 5%;
  left: 100px;
  display: flex;
  justify-content: center;

  z-index: 1990;

  align-items: center;

  @media screen and (min-width: 1000px) {
    bottom: 40%;
  }
`

const RightWrapper = styled('div')`
  bottom: 5%;
  right: 100px;
  display: flex;
  justify-content: center;

  z-index: 1990;

  align-items: center;

  @media screen and (min-width: 1000px) {
    bottom: 40%;
  }
`

const ArrowLeft = styled('div')`
  /* position: abso; */

  width: 30px;
  /* bottom:10%;
  left: 100px;
  bottom: 10%; */
  z-index: 1990;
  height: 30px;

  cursor: pointer;

  -webkit-transform: rotate(-45deg);
  border-left: 2px white solid;
  opacity: 0.7;
  border-top: 2px white solid;
  border-right: none;
  border-bottom: none;
  :hover {
    opacity: 0.9;
  }

  @media screen and (min-width: 700px) {
    bottom: 45%;
  }
`

const ArrowRight = styled('div')`
  width: 30px;
  z-index: 1990;
  height: 30px;

  cursor: pointer;

  -webkit-transform: rotate(-45deg);
  border-left: none;
  border-top: none;
  opacity: 0.7;
  border-right: 2px white solid;
  border-bottom: 2px white solid;

  :hover {
    opacity: 0.9;
  }
  @media screen and (min-width: 700px) {
    bottom: 45%;
  }
`

const Arrows = ({ playing, setDirection }) => (
  <div style={{ display: playing ? 'none' : 'block' }}>
    <LeftWrapper
      onClick={() => setDirection()}
      style={{ width: '100px', height: '100px', position: 'fixed' }}
    >
      <ArrowLeft />
    </LeftWrapper>
    <RightWrapper
      onClick={() => setDirection('next')}
      style={{ width: '100px', height: '100px', position: 'fixed' }}
    >
      <ArrowRight />
    </RightWrapper>
  </div>
)

export default Arrows
