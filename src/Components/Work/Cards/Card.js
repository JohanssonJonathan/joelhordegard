import React, { Component } from "react";

class Card extends Component {
  state = {
    src: null
  };
  componentDidMount() {
    const { item } = this.props;
    const videoIdRegexp = /(?<=<p>)(.*?)(?=<\/p>)/gm;

    const content = item.content && item.content.rendered;

    const match = content.match(videoIdRegexp);

    if (match) {
      fetch(
        `https://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/${match[0]}`
      )
        .then(response => response.json())
        .then(jsondata => this.setState({ src: jsondata.thumbnail_url }));
    }
  }

  render() {
    return (
      <div
        key={this.props.index}
        className="image-container"
        onClick={this.props.iFrameVideo && this.props.showVideo}
      >
        <span>
          {this.props.title[this.props.index] &&
            this.props.title[this.props.index].title.rendered}
        </span>
        <img src={this.state.src} />
        <h2 id="play">Play</h2>
      </div>
    );
  }
}

export default Card;
