import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'
import styled from '@emotion/styled/macro'

const Player = require('@vimeo/player/dist/player.min')

const Container = styled('div')`
  .video {
    position: fixed;
    overflow: hidden;
    margin: auto;
    display: flex;
    justify-content: center;
    width: 70%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 900px) {
    .video {
      width: 90%;
    }
  }
`

const Overlay = styled("div")` 
position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  transition: all 0.5s ease-in-out;
`

class VideoFullScreen extends Component {
  state = {
    playing: false,
  }
  enableScrolling = () => {
    window.onscroll = function() {}
  }
  disableScrolling = () => {
    var x = window.scrollX
    var y = window.scrollY
    window.onscroll = function() {
      window.scrollTo(x, y)
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false)
  }

  componentDidMount() {
    const { direction, setDirection } = this.props
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        direction === 'next' || (direction === null && setDirection())
        this.setState({ playing: false })
      } else if (e.key === 'ArrowRight') {
        direction === 'previous' || (direction === null && setDirection('next'))

        this.setState({ playing: false })
      }

      const iframe = document.getElementsByClassName('video')[0]

      if (!iframe) return null

      const player = new Player(iframe)
      player.getVideoId().then(function(id) {
        fetch(
          'https://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/262165847',
        )
          .then(response => response.json())
          .then(jsondata => console.log(jsondata))
      })

      const { playing } = this.state

      if (e.key === ' ') {
        if (playing) {
          player.pause()

          this.setState({ playing: false })
          return
        }

        player.play()
        this.setState({ playing: true })
      }
    })

    this.disableScrolling()
  }

  componentWillUnmount() {
    this.enableScrolling()
    document.removeEventListener('click', this.handleClick, false)
  }

  handleClick = e => {
    if (this.video.contains(e.target)) {
      this.props.hideLargeScreen()
      return
    }
  }
  render() {
    const { modifiedIFrameString } = this.props
    const { playing } = this.state

    const widthRegexp = /width=("|')\d+("|')/gm
    const heightRegexp = /height=("|')\d+("|')/gm
    const width = modifiedIFrameString.match(widthRegexp)
    const height = modifiedIFrameString.match(heightRegexp)

    const iframeReplaceWidth = modifiedIFrameString.replace(
      width[0],
      'width="840"',
    )
    const iframeWithReplacedHeightAndWith = iframeReplaceWidth.replace(
      height[0],
      'height="560"',
    )

    return (
      <Container
        className="video"
        ref={video => {
          this.video = video
        }}
      >
        <Overlay
          style={{
            backgroundColor: playing ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.7)',
          }}
        />
        {ReactHtmlParser(iframeWithReplacedHeightAndWith)}
      </Container>
    )
  }
}

export default VideoFullScreen
