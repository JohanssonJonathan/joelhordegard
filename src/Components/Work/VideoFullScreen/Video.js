import React from 'react'
import Vimeo from '@u-wave/react-vimeo'
import './style.css'

const Video = props => (
  <Vimeo
    ref={props.reference}
    className="video"
    width={props.width}
    height="500px"
    onPause={props.onPause}
    onPlay={props.onPlay}
    video={props.video}
  />
)

export default Video
