import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cards from './Cards'
import styled from '@emotion/styled/macro'
import Card from './Cards/Card'

const Wrapper = styled('div')`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 679px) {
    width: 90%;
  }
  transition: opacity 0.2s ease;
  opacity: ${props => (props.animation ? 0 : 1)};
`

const LoadingVideos = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <Wrapper>
      {data.map(() => {
        return <Card />
      })}
    </Wrapper>
  )
}

export default LoadingVideos
