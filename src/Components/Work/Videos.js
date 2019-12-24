import React, { Component, Fragment, useState, useEffect } from 'react'
import Cards from './Cards'
import VideoFullScreen from './VideoFullScreen'

class Videos extends Component {
  state = {
    indexOfLastVideo: null,
    iFrameVideo: false,
    index: null,
    direction: null,
    videoId: null,
  }

  componentDidMount() {
    const { videos } = this.props
    const iframeRegexp = /<iframe.*<\/iframe>/gim
    const cards = videos.filter(({ content }) => content.match(iframeRegexp))
    const length = cards.length
    this.setState({ indexOfLastVideo: length - 1 })
  }

  updateVideo = next => {
    const { index, indexOfLastVideo } = this.state
    const { videos } = this.props
    const newIndex = next ? index + 1 : index - 1
    const video = videos[newIndex] && videos[newIndex].metafields[0].value

    if (video) {
      this.setState({
        index: newIndex,
        videoId: videos[newIndex].metafields[0].value,
        direction: next ? 'next' : 'previous',
      })
    } else {
      this.setState({
        index: next ? 0 : indexOfLastVideo,
        videoId: next
          ? videos[0].metafields[0].value
          : videos[indexOfLastVideo].metafields[0].value,
        direction: next ? 'next' : 'previous',
      })
    }
  }

  render() {
    const { videos } = this.props
    const { index, direction, videoId } = this.state

    const videoFullScreen = {
      videoId,
      index,
      setDirection: this.updateVideo,
      direction,
      hideLargeScreen: () => this.setState({ videoId: null }),
    }

    return (
      <Fragment>
        {videoId && <VideoFullScreen {...videoFullScreen} />}
        <Cards
          data={videos}
          fullScreen={(videoId, index) => this.setState({ videoId, index })}
        />
      </Fragment>
    )
  }
}

export default Videos
