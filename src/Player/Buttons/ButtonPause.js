import React from "react";

export default props => {
  return (
    <button className="button__pause" onClick={_ => props.pauseAction()}>
      <i className="icon ion-pause" />
    </button>
  );
};
