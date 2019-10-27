import React, { Component, Fragment } from "react";
import Cards from "./Cards"
import VideoFullScreen from "./VideoFullScreen"
import Vimeo from "@vimeo/player"

class Videos extends Component {
  state = {
    indexOfLastVideo: null,
    iFrameVideo: false,
    index: null,
    direction: null
  };

  componentDidMount() {
   

    // console.log("vimeo player: ", player)
    const { media, title } = this.props;
    const cardsWithVideo = media.filter(
      (_, index) => title[index] && title[index].content.rendered
    );
    this.setState({ indexOfLastVideo: cardsWithVideo.length - 1 });
  }

  updateVideo = next => {
    const { index, indexOfLastVideo } = this.state;
    const { title } = this.props;
    const newIndex = next ? index + 1 : index - 1;

    const iFrameVideo = title[newIndex] && title[newIndex].content.rendered;

    if (iFrameVideo) {
      this.setState({
        index: newIndex,
        iFrameVideo: iFrameVideo,
        direction: next ? "next" : "previous"
      });
    } else {
      this.setState({
        index: next ? 0 : indexOfLastVideo,
        iFrameVideo:
          title[next ? 0 : indexOfLastVideo] &&
          title[next ? 0 : indexOfLastVideo].content.rendered,
        direction: next ? "next" : "previous"
      });
    }
  };

  render() {
    const { media, title } = this.props;
    const { index, direction } = this.state;
    const regexpWidth = /width="[0-9]+"/gm;
    const regexpHeight = /height="[0-9]+"/gm;
    const iframe = /<iframe (.?)+<\/iframe>/gm
    const width =
      this.state.iFrameVideo && this.state.iFrameVideo.match(regexpWidth);
    const height =
      this.state.iFrameVideo && this.state.iFrameVideo.match(regexpHeight);
    const modifiedIFrameString =
      this.state.iFrameVideo &&
      this.state.iFrameVideo
        .replace(width[0], "")
        .replace(height[0], "")
        .replace("iframe", 'iframe class="big-video"')




    const videoFullScreen = {
      modifiedIFrameString,
      index,
      setDirection: this.updateVideo,
      direction,
      hideLargeScreen: () => this.setState({ iFrameVideo: false })
    };

    return (
      <Fragment>
        {this.state.iFrameVideo && <VideoFullScreen {...videoFullScreen} />}

        <Cards
          media={media}
          title={title}
          showVideo={(iFrameVideo, index) =>
            this.setState({ iFrameVideo, index })
          }
        />
      </Fragment>
    );
  }
}





export default Videos;
