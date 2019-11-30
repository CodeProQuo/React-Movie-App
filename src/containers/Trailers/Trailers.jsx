import React, {useState, useEffect} from 'react';
import './Trailers.css';
import Trailer from '../../components/Trailer/Trailer';
import axios from "axios";
import {API_KEY, BASE_URL} from "../../httpStrings";

const Trailers = (props) => {
  const { id } = props;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}${id}/videos?api_key=${API_KEY}`).then(
      response => setVideos(response.data.results)
    );
  }, []);

  let index = 0;
  const trailers = videos.filter(
    video => {
      const {type} = video;
      return type === "Trailer"
    }).map(
    trailer => {
      const {id, key} = trailer;
      index++;
      return <Trailer key={id} url_key={key} index={index}/>
    });

  if (trailers) {
    return (
      <div>
        <hr/>
        <h4 id="Trailers">Trailers:</h4>
        {trailers}
      </div>
    );
  }
};

export default Trailers;
