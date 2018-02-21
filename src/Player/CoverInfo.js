import React from "react";

export default class CoverInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.createCover(nextProps.src);
    }
  }

  componentDidMount() {
    this.createCover(this.props.src);
  }

  createCover(src) {
    this.setState({
      cover:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    });
    const img = new Image();
    img.src = src;
    img.onload = _ => this.setState({ cover: src });
  }

  render() {
    return (
      <div>
        <div
          className="cover--poster"
          style={{ backgroundImage: `url(${this.props.src})` }}
        />
        <div className="cover">
          <img width="100%" alt={this.props.song} src={this.state.cover} />
        </div>
        <div className="songName">{this.props.song}</div>
        <div className="artistName">{this.props.artist}</div>
      </div>
    );
  }
}
