import React, { useEffect, useRef, useState } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from '@emotion/styled/macro'
import './style.css'

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  transition: all 0.5s ease-in-out;
`
const VideoWrapper = styled('div')`
  position: absolute;
  z-index: 200;

  left: 0;
  right: 0;
  top: 15%;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
`

const VideoFullScreen = props => {
  const reference = useRef(null)
  const [playing, setPlaying] = useState(false)

  const disableScrolling = () => {
    var x = window.scrollX
    var y = window.scrollY
    window.onscroll = function() {
      window.scrollTo(x, y)
    }
  }

  useEffect(() => {
    disableScrolling()

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
  }, [props])

  return (
    <VideoWrapper>
      <Overlay
        style={{
          backgroundColor: playing ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.7)',
        }}
        onClick={() => props.hideLargeScreen()}
      />
      <Vimeo
        ref={reference}
        className="test"
        width="900px"
        height="500px"
        onPause={() => {
          const player = reference.current && reference.current.player
          setPlaying(false)
          document.addEventListener('keydown', e => {
            if (e.key === ' ') {
              player.play()
            }
          })
          window.focus()
        }}
        onPlay={() => {
          setPlaying(true)
          const player = reference.current && reference.current.player

          document.addEventListener('keydown', e => {
            if (e.key === ' ') {
              player.pause()
            }
          })
          window.focus()
        }}
        video={`https://vimeo.com/${props.videoId}`}
      />
    </VideoWrapper>
  )
}


export default VideoFullScreen
