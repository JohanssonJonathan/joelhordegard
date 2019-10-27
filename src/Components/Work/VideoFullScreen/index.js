import React, { Component } from "react";
import "../../../CSS/Videos.css";
import ReactHtmlParser from "react-html-parser";

class VideoFullScreen extends Component {
  enableScrolling = () => {
    window.onscroll = function() {};
  };
  disableScrolling = () => {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function() {
      window.scrollTo(x, y);
    };
  };

  componentWillMount() {
    document.addEventListener("click", this.handleClick, false);
  }

  componentDidMount() {
    const { direction, setDirection } = this.props;
    document.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") {
        direction === "next" ||
          (direction === null && setDirection());
      } else if (e.key === "ArrowRight") {
        direction === "previous" ||
          (direction === null && setDirection("next"));
      }
    });

    this.disableScrolling();
  }

  componentWillUnmount() {
    this.enableScrolling();
    document.removeEventListener("click", this.handleClick, false);
  }

  handleClick = e => {
    if (this.video.contains(e.target)) {
      this.props.hideLargeScreen();
      return;
    }
  };
  render() {
    const { modifiedIFrameString } = this.props;
    console.log("modifiedIFrameString: ", modifiedIFrameString)
    return (
      <div
        className="video"
        ref={video => {
          this.video = video;
        }}
      >
        <div className="video-box">{ReactHtmlParser(modifiedIFrameString)}</div>
      </div>
    );
  }
}

export default VideoFullScreen;
