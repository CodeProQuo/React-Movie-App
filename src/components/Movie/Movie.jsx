import React from 'react';
import { IMAGES_BASE_URL} from "../../httpStrings";
import "./Movie.css";

const Movie = (props) => {
  const { poster_path, original_title} = props;
  return (
    <img
      className="Movie"
      src={IMAGES_BASE_URL + "w185" + poster_path}
      alt={original_title}/>
  );
};

export default Movie;
