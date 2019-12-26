import React from 'react'
import styled from '@emotion/styled/macro'
import './style.css'

const ArrowLeft = styled('div')`
  position: fixed;
  width: 30px;
  left: 100px;
  bottom: 20px;
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
`

const ArrowRight = styled('div')`
  position: fixed;
  bottom: 20px;
  right: 100px;
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
`

const Arrows = ({ playing, setDirection }) => (
  <div style={{ display: playing ? 'none' : 'block' }}>
    <ArrowLeft onClick={setDirection} />
    <ArrowRight onClick={() => setDirection('next')} />
  </div>
)

export default Arrows
