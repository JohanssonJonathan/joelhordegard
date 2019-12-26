import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled/macro'
import './style.css'
import Arrows from './Arrows'
import Video from './Video'

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  transition: all 0.5s ease-in-out;
`

const Exit = styled('div')`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.4;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }

  :before,
  :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: white;
  }

  :before {
    transform: rotate(45deg);
  }

  :after {
    transform: rotate(-45deg);
  }
`

const VideoWrapper = styled('div')`
  position: fixed;
  z-index: 200;

  left: 0;
  right: 0;
  top: 5%;

  @media screen and (min-width: 400px) {
    top: 20%;
  }

  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
`

const VideoFullScreen = props => {
  const reference = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [width, setWidth] = useState(null)

  const disableScrolling = () => {
    var x = window.scrollX
    var y = window.scrollY
    window.onscroll = function() {
      window.scrollTo(x, y)
    }
  }

  useEffect(() => {
    disableScrolling()

    setWidth(window.innerWidth)
    document.addEventListener('keydown', e => {
      if (e.key === ' ') {
        const player = reference.current && reference.current.player
        player && player.play()
      }

      if (e.key === 'ArrowLeft') {
        props.direction === 'next' ||
          (props.direction === null && props.setDirection())
      } else if (e.key === 'ArrowRight') {
        props.direction === 'previous' ||
          (props.direction === null && props.setDirection('next'))
      }
    })

    return () => (window.onscroll = function() {})
  }, [props, reference])

  const videoProps = {
    reference,
    width: window.innerWidth + 'px',
    onPause: () => {
      const video = reference.current && reference.current.player

      document.addEventListener('keydown', e => {
        if (e.key === ' ') {
          video && video.play().catch(err => console.log('err :', err))
        }
      })
      setPlaying(false)
      window.focus()
    },
    onPlay: () => {
      const video = reference.current && reference.current.player
      document.addEventListener('keydown', e => {
        if (e.key === ' ') {
          video
            .pause()
            .then(data => console.log('data :', data))
            .catch(err => console.log('err :', err))
        }
      })
      setPlaying(true)
      window.focus()
    },
    video: `https://vimeo.com/${props.videoId}`,
  }

  return (
    <VideoWrapper>
      <Arrows playing={playing} setDirection={props.setDirection} />
      <Overlay
        style={{
          backgroundColor: playing ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.5)',
        }}
        onClick={() => props.hideLargeScreen()}
      >
        <Exit />
      </Overlay>
      <Video {...videoProps} />
    </VideoWrapper>
  )
}

export default VideoFullScreen
