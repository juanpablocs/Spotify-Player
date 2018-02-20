import React from "react";

export default props => {
  return (
    <button
      className="button__next"
      disabled={props.playlistPosition + 1 === props.playlistTotal}
      onClick={_ => props.nextAction()}>
      <i className="icon ion-ios-skipforward" />
    </button>
  );
};
