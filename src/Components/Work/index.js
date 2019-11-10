import React, { Component } from "react";
import Header from "./Header";
import Videos from "./Videos";

const Home = (props) => {
  return props.posts.length > 0 ? (
    <div className={"container"}>
      <Header />
      <Videos media={props.media} title={props.posts} />
    </div>
  ) : (
null
  );
}
 

export default Home;
