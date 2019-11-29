import React, { useState } from 'react';
import play from "../../play.png";
import './Trailer.css';

const Trailer = (props) => {
  const { i, url_key } = props;
  const [ open, handlePlay ] = useState(false);
  return (
    <div className="TrailerWrapper">
      <div>
        <img onClick={() => handlePlay(!open)} className="Play" src={play} alt="Play"/>
        <p className="Trailer">{`Trailer ${i}`}</p>
      </div>
      <div >
        <iframe className={open ? "Video Open" : "Video Closed"}
                src={"https://www.youtube.com/embed/" + url_key}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </div>
    </div>
  );
};

export default Trailer;
