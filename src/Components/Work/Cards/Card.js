import React from "react";

const Card = props => {
  return (
    <div
      key={props.index}
      className="image-container"
      onClick={props.iFrameVideo && props.showVideo}
    >
      <span>
        {props.title[props.index] && props.title[props.index].title.rendered}
      </span>
      <img src={props.src} />
      <h2 id="play">Play</h2>
    </div>
  );
};

export default Card;
