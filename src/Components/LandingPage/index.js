import React, { Fragment } from 'react'
import { Link as BaseLink } from 'react-router-dom'
import myVideo from './backgroundVideo.mp4'
import mobileVideo from './backgroundVideoMobile.mp4'

import styled from '@emotion/styled/macro'
import Media from 'react-media'

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
  flex-wrap: wrap;
  text-align: center;
`
const Link = styled(BaseLink)`
  position: relative;
  font-style: italic;
  color: white;
  font-weight: 100;
  font-size: 20px;

  padding: 20px;
  transition: all 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    font-size: 21px;
  }

  @media screen and (min-width: 679px) {
    font-size: 30px;
    &:hover {
      font-size: 31px;
    }
  }
`

const Video = styled('video')`
  position: fixed;
  right: -20px;

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

    <Video id="background-video" autoPlay loop muted playsInline>
      <Media
        queries={{
          small: '(max-width:800px)',
        }}
      >
        {breakpoint => {
          console.log('breakpoint :>> ', breakpoint);
          return (
            <source
              src={breakpoint.small ? mobileVideo : myVideo}
              type="video/mp4"
            />
          )
        }}
      </Media>
      <source src={myVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
  </Fragment>
)

export default LandingPage
