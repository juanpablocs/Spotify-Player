import React, { Component } from "react";
import { ButtonPlay, ButtomPause, ButtonPrev, ButtonNext } from "./Buttons";

export default props => {
  return (
    <div className="control-buttons">
      <ButtonPrev
        playlistPosition={props.playlistPosition}
        playlistTotal={props.playlistTotal}
        prevAction={props.prevAction}
      />
      {props.isPlaying ? (
        <ButtomPause audio={props.audio} />
      ) : (
        <ButtonPlay audio={props.audio} />
      )}
      <ButtonNext
        playlistPosition={props.playlistPosition}
        playlistTotal={props.playlistTotal}
        nextAction={props.nextAction}
      />
    </div>
  );
};
