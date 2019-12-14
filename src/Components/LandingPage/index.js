import React, { Fragment } from 'react'
import { Link as BaseLink } from 'react-router-dom'
import myVideo from './backgroundVideo.mp4'
import styled from '@emotion/styled/macro'

const Title = styled('h1')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`
const Link = styled(BaseLink)`
  position: relative;
  font-style: italic;
  color: white;
  font-weight: 100;
  font-size: 30px;
  transition: all 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    font-size: 31px;
  }
`

const Video = styled('video')`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`

const LandingPage = () => (
  <Fragment>
    <Title>
      <Link to="/work" className="link">
        Joel Hördegård / director of photography
      </Link>
    </Title>

    <Video id="background-video" loop autoPlay muted>
      <source src={myVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
  </Fragment>
)

export default LandingPage
