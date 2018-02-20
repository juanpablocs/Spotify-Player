import React from "react";

export default props => {
  return (
    <button
      className="button__prev"
      disabled={!props.playlistPosition}
      onClick={_ => props.prevAction()}>
      <i className="icon ion-ios-skipbackward" />
    </button>
  );
};
