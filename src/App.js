import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Components/Work"
import LandingPage from "./Components/LandingPage"
import dummyDataPosts from "./dummyDataPosts";
import dummyDataMedia from "./dummyDataMedia.js";

class App extends Component {
  state = {
    media: [],
    posts: [],
    dummyDataPosts: dummyDataPosts,
    dummyDataMedia: dummyDataMedia,
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
      <Router>
        <Switch>
        <Route path="/work">
            <Home {...this.state}/>
          </Route>
          <Route path="/">
            <LandingPage media={media}/>
          </Route>
          
        </Switch>
      </Router>
    )

  }
}

export default App;
