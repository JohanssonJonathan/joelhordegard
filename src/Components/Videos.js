import React, { Component } from "react";
import "../CSS/Videos.css";
import ReactHtmlParser from "react-html-parser";

class Videos extends Component {
  state = {
    iFrameVideo: false,
    index: null
  };

  render() {
    const { media, title } = this.props;

    const regexpWidth = /width="[0-9]+"/gm;
    const regexpHeight = /height="[0-9]+"/gm;

    const width =
      this.state.iFrameVideo && this.state.iFrameVideo.match(regexpWidth);
    const height =
      this.state.iFrameVideo && this.state.iFrameVideo.match(regexpHeight);
    const modifiedIFrameString =
      this.state.iFrameVideo &&
      this.state.iFrameVideo
        .replace(width[0], "")
        .replace(height[0], "")
        .replace("iframe", 'iframe class="big-video"');

    return this.state.iFrameVideo ? (
      <VideoLarge
        modifiedIFrameString={modifiedIFrameString}
        index={this.state.index}
        hideLargeScreen={() => this.setState({ iFrameVideo: false })}
        {...this.props}
      />
    ) : (
      media.map(({ guid }, index) => {
        const src = guid.rendered;
        var iFrameVideo = title[index] && title[index].content.rendered;

        const newProps = {
          src,
          index,
          iFrameVideo,
          showVideo: () => this.setState({ iFrameVideo, index })
        };

        return <Card {...newProps} {...this.props} />;
      })
    );
  }
}

const VideoLarge = (props) => {
  return (
    <div className="video">
      <div>
        <div className="video-box">
          <h5
            className="close"
            onClick={() => {
              props.hideLargeScreen()
              props.hideHeader();
            }}
          >
            CLOSE WINDOW
          </h5>
          {ReactHtmlParser(props.modifiedIFrameString)}
        </div>
        <h5 className="title">{props.title[props.index].title.rendered} </h5>
      </div>
    </div>
  );
};

const Card = props => {
  return (
    <div
      key={props.index}
      className="image-container"
      onClick={() => {
        if (props.iFrameVideo) {
          props.hideHeader();
          props.showVideo();
        }
      }}
    >
      <span>
        {props.title[props.index] && props.title[props.index].title.rendered}
      </span>
      <img src={props.src} />
      <h2 id="play">Play</h2>
    </div>
  );
};
export default Videos;
