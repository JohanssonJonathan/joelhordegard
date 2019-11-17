import React from "react";
import Card from "./Card";

const Cards = ({ title, showVideo }) => {
  return title.map((item, index) => {
    const iframeRegexp = /<iframe.*<\/iframe>/gim;

    const iframeMatch = item && item.content.rendered.match(iframeRegexp);

    const cardProps = {
      index,
      item,
      iFrameVideo: iframeMatch && iframeMatch[0],
      showVideo: () => showVideo(iframeMatch && iframeMatch[0], index)
    };

    return <Card key={index} title={title} {...cardProps} />;
  });
};

export default Cards;
