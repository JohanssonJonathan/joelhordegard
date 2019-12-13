import React, {useState, useEffect } from "react";

const Card = props => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const videoid = props && props.metadata && props.metadata.videoid;

    fetch(`https://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/${videoid}`)
      .then(response => response.json())
      .then(jsondata => setImage(jsondata.thumbnail_url));
  }, []);

  return (
    <div
      key={props.index}
      className="image-container"
      onClick={props.iFrameVideo && props.showVideo}
    >
      <span>
        {props.title[props.index] && props.title[props.index].title.rendered}
      </span>
      <img src={image} />
      <h2 id="play">Play</h2>
    </div>
  );
};

export default Card;
