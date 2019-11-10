import React, { Component } from "react";
import "../../../CSS/Videos.css";
import ReactHtmlParser from "react-html-parser";
const Player = require("@vimeo/player/dist/player.min");

class VideoFullScreen extends Component {
  state = {
    playing: false
  };
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
    const { index } = this.props;

    const { direction, setDirection } = this.props;
    document.addEventListener("keydown", e => {

      if (e.key === "ArrowLeft") {
        direction === "next" || (direction === null && setDirection());
        this.setState({ playing: false });
      } else if (e.key === "ArrowRight") {
        direction === "previous" ||
          (direction === null && setDirection("next"));

        this.setState({ playing: false });
      }

      const iframe = document.getElementsByClassName("video")[0];

      
      if (!iframe) return null;

      
      const player = new Player(iframe);

      const { playing } = this.state;

      if (e.key === " ") {
        if (playing) {
          player.pause();

          this.setState({ playing: false });
          return;
        }

        player.play();
        this.setState({ playing: true });
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
    const { playing } = this.state;

    return (
      <div
        className="video"
        ref={video => {
          this.video = video;
        }}
      >
        <div
          className="overlay"
          style={{
            backgroundColor: playing ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.7)"
          }}
        />
        {ReactHtmlParser(modifiedIFrameString)}
      </div>
    );
  }
}

export default VideoFullScreen;
