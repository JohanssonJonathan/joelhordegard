import React, { Component } from "react";
import "./CSS/App.css";
import Header from "./Components/Header";
import Videos from "./Components/Videos";
import dummyDataPosts from "./dummyDataPosts";
import dummyDataMedia from "./dummyDataMedia.js";

class App extends Component {
  state = {
    media: [],
    posts: [],
    dummyDataPosts: dummyDataPosts,
    dummyDataMedia: dummyDataMedia,
    hideHeader: false
  };
  componentDidMount() {
    fetch("http://joelhordegard.local/wp-json/wp/v2/media")
      .then(response => response.json())
      .then(data => this.setState({ media: data }));
    fetch("http://joelhordegard.local/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    const { posts, media, dummyDataPosts, dummyDataMedia } = this.state;

 
    return media.length > 0 && posts.length > 0 ? (
      <div className={this.state.hideHeader === false &&"container" }>
        {this.state.hideHeader === false && <Header />}

        <Videos
          media={media}
          title={posts}
          hideHeader={() => this.setState({ hideHeader: !this.state.hideHeader })}
        />
      </div>
    ) : (
      <div className={this.state.hideHeader === false &&"container"}>
        {this.state.hideHeader === false && <Header />}
        <Videos
          media={dummyDataMedia}
          title={dummyDataPosts}
          hideHeader={() => this.setState({ hideHeader: !this.state.hideHeader })}
        />
      </div>
    );
  }
}

export default App;
