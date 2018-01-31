import React, { Component } from 'react';

const PlayButton = (props)=>{
  return <button className="button__play" onClick={props.onClick}><i className="icon ion-play"></i></button>
}

const PauseButton = (props) => {
  return <button className="button__pause" onClick={props.onClick}><i className="icon ion-pause"></i></button>
}

const PrevButton = (props) => {
  return <button className="button__prev" disabled={!props.playlistPosition} onClick={props.onClick}><i className="icon ion-ios-skipbackward"></i></button>
}

const NextButton = (props) => {
  return <button className="button__next" disabled={(props.playlistPosition+1) === props.playlistTotal} onClick={props.onClick}><i className="icon ion-ios-skipforward"></i></button>
}


export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  playClick() {
    this.props.audio.play();
  }

  pauseClick() {
    this.props.audio.pause();
  }

  prevClick() {
    this.props.prevAction();
  }

  nextClick() {
    this.props.nextAction();
  }
  render() {
    return (
      <div className="control-buttons">
        <PrevButton playlistPosition={this.props.playlistPosition} playlistTotal={this.props.playlistTotal} onClick={this.prevClick.bind(this)} />
        {this.props.isPlaying ? (
          <PauseButton onClick={this.pauseClick.bind(this)} />
        ) : (
            <PlayButton onClick={this.playClick.bind(this)} />
          )}
        <NextButton playlistPosition={this.props.playlistPosition} playlistTotal={this.props.playlistTotal} onClick={this.nextClick.bind(this)} />  
      </div>
    )
  }
}
