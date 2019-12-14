import React from "react";
import Card from "./Card";

const Cards = ({ showVideo, data }) => {
  const iframeRegexp = /<iframe.*<\/iframe>/gim;

  return data.map((video, index) => {

    const iframe = video.content.match(iframeRegexp);

    const props = {
      ...video,
      iFrameVideo: iframe && iframe[0],
      showVideo: () => showVideo(iframe && iframe[0], index)
    };

    return <Card key={index} {...props} />;
  });
};

export default Cards;
