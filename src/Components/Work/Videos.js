import React, { Component, Fragment } from 'react'
import Cards from './Cards'
import VideoFullScreen from './VideoFullScreen'
import { Transition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'

class Videos extends Component {
  state = {
    indexOfLastVideo: null,
    iFrameVideo: false,
    index: null,
    direction: null,
    videoId: null,
    playing: false,
    animate: false,
  }

  componentDidMount() {
    const {
      videos,
      history: {
        location: { pathname },
      },
    } = this.props
    const iframeRegexp = /<iframe.*<\/iframe>/gim
    const cards = videos.filter(({ content }) => content.match(iframeRegexp))
    const length = cards.length

    this.setState({
      indexOfLastVideo: length - 1,
      animate: pathname === '/work' ? true : false,
    })
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
    const { index, direction, videoId, animate } = this.state

    const videoFullScreen = {
      videoId,
      index,
      setDirection: this.updateVideo,
      direction,
      hideLargeScreen: () => this.setState({ videoId: null, index: null }),
      playing: this.state.playing,
      self: this,
    }

    return (
      <Transition in={animate} timeout={200}>
        {animate => (
          <Fragment>
            {videoId && <VideoFullScreen {...videoFullScreen} />}

            <Cards
              animate={animate}
              videoId={videoId}
              data={videos}
              fullScreen={(videoId, index) =>{
                this.setState({ videoId, index })}}
            />
          </Fragment>
        )}
      </Transition>
    )
  }
}

export default withRouter(Videos)
