import React, { Component } from "react";
import { ButtonPlay, ButtonPause, ButtonPrev, ButtonNext } from "./Buttons";

export default props => {
  return (
    <div className="control-buttons">
      <ButtonPrev
        playlistPosition={props.playlistPosition}
        playlistTotal={props.playlistTotal}
        prevAction={props.prevAction}
      />
      {props.isPlaying ? (
        <ButtonPause pauseAction={props.pauseAction} />
      ) : (
        <ButtonPlay playAction={props.playAction} />
      )}
      <ButtonNext
        playlistPosition={props.playlistPosition}
        playlistTotal={props.playlistTotal}
        nextAction={props.nextAction}
      />
    </div>
  );
};
