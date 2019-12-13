import React from "react";
import Header from "./Header";
import Videos from "./Videos";

const Home = ({videos}) => {
  return videos && videos.length > 0 ? (
    <div className={"container"}>
      <Header />
      <Videos videos={videos}/>
    </div>
  ) : null;
};

export default Home;
