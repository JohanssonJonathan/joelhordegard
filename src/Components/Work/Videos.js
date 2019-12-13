import React, { Component, Fragment} from "react";
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
    const { videos } = this.props;
    const iframeRegexp = /<iframe.*<\/iframe>/gim;
    const cards = videos.filter(({ content }) => content.match(iframeRegexp));
    const length = cards.length;
    this.setState({ indexOfLastVideo: length - 1 });
  }

  updateVideo = next => {
    const { index, indexOfLastVideo } = this.state;
    const { videos } = this.props;
    const newIndex = next ? index + 1 : index - 1;

    const iFrameVideo = videos[newIndex] && videos[newIndex].content;

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
          videos[next ? 0 : indexOfLastVideo] &&
          videos[next ? 0 : indexOfLastVideo].content,
        direction: next ? "next" : "previous"
      });
    }
  };

  render() {
    const { videos } = this.props;
    const { index, direction } = this.state;

    const regexp = /<iframe.*<\/iframe>/gim;

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
          data={videos}
          showVideo={(iFrameVideo, index) =>
            this.setState({ iFrameVideo, index })
          }
        />
      </Fragment>
    );
  }
}

export default Videos;
