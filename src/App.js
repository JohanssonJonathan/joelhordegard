import React, { Component } from "react";
import "./App.css";
import dummyDataPosts from "./dummyDataPosts";
import dummyDataMedia from "./dummyDataMedia.js";

const EachData = ({ data, title }) =>
  data.map(({ guid }, index) => {
    return (
      <li>
        <div>
          <span>
          {title[index].title.rendered}
          </span>
          <img src={guid.rendered} />
          <h2 id="play">Play</h2>
        </div>
      </li>
    );
  });

class App extends Component {
  state = {
    media: [],
    posts: [],
    dummyDataPosts: dummyDataPosts,
    dummyDataMedia:dummyDataMedia
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


    return (
      <div className="container">
        <div>
          <h1 id="name"> Joel Hördegård</h1>
          <ul>
            <li>
              <h4>/Contact</h4>
            </li>
          </ul>
        </div>

        {media.length > 0 && posts.length > 0 ? (
          <ul className="images">
            <EachData data={media} title={posts} />
          </ul>
        ) : (
          <ul className="images">
            <EachData data={dummyDataMedia} title={dummyDataPosts} />
          </ul>
        )}
      </div>
    );
  }
}

export default App;
