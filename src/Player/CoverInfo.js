import React from "react";

export default props => {
  return (
    <div>
      <div className="cover">
        <img alt={props.song} src={props.src} />
      </div>
      <div className="songName">{props.song}</div>
      <div className="artistName">{props.artist}</div>
    </div>
  );
};
