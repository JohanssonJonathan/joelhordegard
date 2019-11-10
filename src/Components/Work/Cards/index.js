import React from "react";
import Card from "./Card";

const Cards = ({ media, title, showVideo, videoList }) => {

  return title.map((item, index) => {
    // console.log("item: ", item && item.content)
    const regexp = /(?<=(img src=["'])).+(?=["'])/gmi;
    const iframeRegexp = /<iframe.*<\/iframe>/gmi;

    
    const iframeMatch = item && item.content.rendered.match(iframeRegexp)
    // console.log("hey: ", videoList)
    const match = item && item.content.rendered.match(regexp);

    const hey = match && match[0].split('"')


    // return null
    const cardProps = {
      src: hey && hey[0],
      index,
      iFrameVideo:iframeMatch && iframeMatch[0],
      showVideo: () => showVideo(iframeMatch && iframeMatch[0], index)
    };

    return <Card key={index} title={title} {...cardProps} />;
  });
};

export default Cards;
