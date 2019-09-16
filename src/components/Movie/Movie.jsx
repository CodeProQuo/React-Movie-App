import React from 'react';
import { IMAGES_BASE_URL} from "../../httpStrings";
import "./Movie.css";

const movie = (props)=> (
  <img
    className="Movie"
    src={IMAGES_BASE_URL + "w185" + props.poster_path}
    alt={props.original_title}/>
  );

export default movie;