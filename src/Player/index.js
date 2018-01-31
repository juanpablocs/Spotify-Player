import React, { Component } from "react";

import Buttons from "./Buttons";
import Cover from "./Cover";
import ProgressBar from "./ProgressBar";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      position: 0,
      audio: null,
      duration: 0,
      currentTime: 0
    };
    this.playlist = props.playlists[this.state.position];
  }

  nextAction() {
    this.setState({ 
      position: this.state.position + 1,
      isPlaying:false,
      duration:0,
      currentTime:0
    });
    this.audioLoad();
  }
  prevAction() {
    this.setState({ 
      position: this.state.position - 1,
      isPlaying:false,
      duration: 0,
      currentTime: 0
    });
    this.audioLoad();
  }

  audioLoad() {
    this.state.audio.pause();
    setTimeout(() => {
      this.state.audio.load();
      this.state.audio.play();
    }, 500);
  }

  timer(e) {
    this.setState({
      currentTime: this.audio.currentTime
    });
  }

  componentDidMount() {
    this.setState({ audio: this.audio });
  }
  loadData() {
    this.setState({ duration: this.state.audio.duration });
  }
  pause() {
    this.setState({ isPlaying: false });
  }
  playing() {
    this.setState({ isPlaying: true });
  }
  render() {
    const { position } = this.state;
    const { name, artistName, cover, mp3 } = this.props.playlists[position];

    return (
      <div className="player">
        <p>
          Playing: <b>{this.state.isPlaying.toString()}</b>
        </p>
        <Cover src={cover} />

        <div className="songName">{name}</div>
        <div className="artistName">{artistName}</div>

        <ProgressBar
          duration={this.state.duration}
          currentTime={this.state.currentTime}
        />

        <Buttons
          audio={this.state.audio}
          playlistPosition={position}
          playlistTotal={this.props.playlists.length}
          prevAction={this.prevAction.bind(this)}
          nextAction={this.nextAction.bind(this)}
          isPlaying={this.state.isPlaying}
        />

        <audio
          ref={audio => {
            this.audio = audio;
          }}
          src={mp3}
          onTimeUpdate={this.timer.bind(this)}
          onPlaying={this.playing.bind(this)}
          onPause={this.pause.bind(this)}
          onLoadedMetadata={this.loadData.bind(this)}
        />
      </div>
    );
  }
}
