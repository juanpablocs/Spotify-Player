import React, { Component } from "react";

import ButtonsBar from "./ButtonsBar";
import CoverInfo from "./CoverInfo";
import ProgressBar from "./ProgressBar";

export default class Player extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isPlaying: false,
      position: 0,
      duration: 0,
      currentTime: 0
    };

    //binds
    this.onTimer = this.onTimer.bind(this);
    this.onPlaying = this.onPlaying.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onLoadedMetadata = this.onLoadedMetadata.bind(this);
    this.playAction = this.playAction.bind(this);
    this.pauseAction = this.pauseAction.bind(this);
    this.prevAction = this.prevAction.bind(this);
    this.nextAction = this.nextAction.bind(this);
  }

  nextAction() {
    this.setState({
      position: this.state.position + 1,
      isPlaying: false,
      duration: 0,
      currentTime: 0
    });
    this.audioLoad();
  }

  prevAction() {
    this.setState({
      position: this.state.position - 1,
      isPlaying: false,
      duration: 0,
      currentTime: 0
    });
    this.audioLoad();
  }

  pauseAction() {
    this.audio.pause();
  }

  playAction() {
    this.audio.play();
  }

  audioLoad() {
    this.audio.pause();
    setTimeout(() => {
      this.audio.load();
      this.audio.play();
    }, 500);
  }

  onLoadedMetadata() {
    this.setState({ duration: this.audio.duration });
  }

  onTimer(e) {
    this.setState({
      currentTime: this.audio.currentTime
    });
  }

  onPlaying() {
    this.setState({ isPlaying: true });
  }

  onPause() {
    this.setState({ isPlaying: false });
  }

  render() {
    const { position } = this.state;
    const { name, artistName, cover, mp3 } = this.props.playlists[position];

    return (
      <div className="player">
        <CoverInfo src={cover} artist={artistName} song={name} />

        <ProgressBar
          duration={this.state.duration}
          currentTime={this.state.currentTime}
        />

        <ButtonsBar
          playlistPosition={position}
          playlistTotal={this.props.playlists.length}
          prevAction={this.prevAction}
          nextAction={this.nextAction}
          playAction={this.playAction}
          pauseAction={this.pauseAction}
          isPlaying={this.state.isPlaying}
        />

        <audio
          ref={audio => (this.audio = audio)}
          src={mp3}
          onTimeUpdate={this.onTimer}
          onPlaying={this.onPlaying}
          onPause={this.onPause}
          onLoadedMetadata={this.onLoadedMetadata}
        />
      </div>
    );
  }
}
