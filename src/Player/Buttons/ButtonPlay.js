import React from "react";

export default props => {
  return (
    <button className="button__play" onClick={_ => props.audio.play()}>
      <i className="icon ion-play" />
    </button>
  );
};
