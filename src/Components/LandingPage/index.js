import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../CSS/LandingPage.css";
import myVideo from "./backgroundVideo.mp4";

class LandingPage extends Component {
  state = {
    hover: false
  };

  slowDownVideo = enter => {
    // const video = document.getElementById("background-video");
    // video.playbackRate = enter ? 0.2 : 1;
    this.setState({ hover: !this.state.hover });
  };
 
  render() {

    const { hover } = this.state;

    return (
      <Fragment>
        <h1 className="name-and-work">
          <Link
            to="/work"
            className="link"
            onMouseEnter={() => this.slowDownVideo(true)}
            onMouseLeave={() => this.slowDownVideo()}
          >
            Joel Hördegård / director of photography
            {/* <span> {hover && "Go to work"}</span> */}
          </Link>
        </h1>

        <video id="background-video" loop autoPlay muted>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Fragment>
    );
  }
}



export default LandingPage;
