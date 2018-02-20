import React from "react";

export default props => {
  return (
    <button className="button__pause" onClick={_ => props.audio.pause()}>
      <i className="icon ion-pause" />
    </button>
  );
};
