import React from 'react';
import play from "../../play.png";
import './Trailer.css';

class Trailer extends React.Component {
  state = {
    open: false,
  };

  handlePlay = () => {
    this.setState({open: !this.state.open})
  };

  render() {
    const { i, url_key } = this.props;
    return (
      <div className="TrailerWrapper">
        <div>
          <img onClick={this.handlePlay} className="Play" src={play} alt="Play"/>
          <p className="Trailer">{`Trailer ${i}`}</p>
        </div>
        <div >
        <iframe className={this.state.open ? "Video Open" : "Video Closed"}
                  src={"https://www.youtube.com/embed/" + url_key}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
        </div>
      </div>
    );
  }
}

export default Trailer;
