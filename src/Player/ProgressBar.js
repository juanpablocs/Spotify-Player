import React from 'react';

export default class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  readableDuration(seconds) {
    let sec = Math.floor(seconds);
    let min = Math.floor(sec / 60);
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
  }
  render() {
    const {duration, currentTime} = this.props;
    return (
      <div className="progress-container">
        <div className="duration">
          <div className="duration__current">{this.readableDuration(currentTime)}</div>
          <div className="duration__total">{this.readableDuration(duration)}</div>
        </div>
        <div className="progress">
          <div className="progress__bar" style={{ 'width': `${(currentTime + .25) / duration * 100}%`}}></div>
          <div className="progress__pointer"></div>
        </div>
      </div>
    )
  }
}