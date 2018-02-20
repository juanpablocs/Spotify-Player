import React from "react";

const readableDuration = seconds => {
  let sec = Math.floor(seconds);
  let min = Math.floor(sec / 60);
  min = min >= 10 ? min : "0" + min;
  sec = Math.floor(sec % 60);
  sec = sec >= 10 ? sec : "0" + sec;
  return min + ":" + sec;
};

export default props => {
  const { duration, currentTime } = props;
  return (
    <div className="progress-container">
      <div className="duration">
        <div className="duration__current">{readableDuration(currentTime)}</div>
        <div className="duration__total">{readableDuration(duration)}</div>
      </div>
      <div className="progress">
        <div
          className="progress__bar"
          style={{ width: `${(currentTime + 0.25) / duration * 100}%` }}
        />
        <div className="progress__pointer" />
      </div>
    </div>
  );
};
