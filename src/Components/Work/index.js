import React, { Component } from "react";
import Header from "./Header";
import Videos from "./Videos";

const Home = (props) =>
  props.media.length > 0 && props.posts.length > 0 ? (
    <div className={"container"}>
      <Header />

      <Videos media={props.media} title={props.posts} />
    </div>
  ) : (
    <div className={"container"}>
      <Header />
      <Videos
        media={props.dummyDataMedia}
        title={props.dummyDataPosts}
      />
    </div>
  );

export default Home;
