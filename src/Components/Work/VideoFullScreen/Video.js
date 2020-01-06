import React, { useEffect, useState } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import './style.css'
import debounce from 'lodash/debounce'
import styled from '@emotion/styled/macro'
import Media from 'react-media'

const Video = props => {
  const [width, setWidth] = useState(props.width)

  useEffect(() => {
    const handleWindowResize = debounce(
      () => setWidth(window.innerWidth + 'px'),
      500,
    )
    window.addEventListener('resize', handleWindowResize)
  }, [])

  return (
    <Media
      queries={{
        small: '(max-width:699px)',
        medium: '(min-width:700px)',
      }}
    >
      {matches => (

        <Vimeo
          ref={props.reference}
          className="video"
          width={width}
          height={matches.small ? "300px": "400px"}
          onPause={props.onPause}
          onPlay={props.onPlay}
          video={props.video}
        />
      )}
    </Media>
  )
}

export default Video
