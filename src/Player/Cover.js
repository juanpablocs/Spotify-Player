import React, { Component } from 'react';

export default (props) => {
  return (
    <div className="cover">
      <img src={props.src}/>
    </div>
  );
}