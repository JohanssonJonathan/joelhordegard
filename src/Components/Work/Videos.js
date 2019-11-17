import React, { Component, Fragment } from "react";
import Cards from "./Cards";
import VideoFullScreen from "./VideoFullScreen";

class Videos extends Component {
  state = {
    indexOfLastVideo: null,
    iFrameVideo: false,
    index: null,
    direction: null
  };

  componentDidMount() {
    const { title } = this.props;

    

    const iframeRegexp = /<iframe.*<\/iframe>/gmi;

    const cardsWithVideo = title.filter(
      (item) => item.content.rendered.match(iframeRegexp)
    );

    const length = cardsWithVideo.length

    this.setState({ indexOfLastVideo:length -1});
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

    const regexp = /<iframe.*<\/iframe>/gmi;


    
    const video =
      this.state.iFrameVideo &&
      this.state.iFrameVideo.replace("iframe", "iframe class='video'");

    const videoList = video && video.match(regexp);

    const videoFullScreen = {
      modifiedIFrameString: videoList[0],
      index,
      setDirection: this.updateVideo,
      direction,
      hideLargeScreen: () => this.setState({ iFrameVideo: false })
    };

    return (
      <Fragment>
        {this.state.iFrameVideo && <VideoFullScreen {...videoFullScreen} />}


        <Cards
          videoList={videoList}
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
