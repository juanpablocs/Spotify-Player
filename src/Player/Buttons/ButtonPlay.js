import React from "react";

export default props => {
  return (
    <button className="button__play" onClick={_ => props.playAction()}>
      <i className="icon ion-play" />
    </button>
  );
};
