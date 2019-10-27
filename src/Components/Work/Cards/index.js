import React from "react";
import Card from "./Card";

const Cards = ({ media, title, showVideo }) => {
  return media.map(({ guid }, index) => {
    const src = guid.rendered;
    const iFrameVideo = title[index] && title[index].content.rendered;

    const cardProps = {
      src,
      index,
      iFrameVideo,
      showVideo: () => showVideo(iFrameVideo, index)
    };

    return <Card title={title} {...cardProps} />;
  });
};

export default Cards;
