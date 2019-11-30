import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './FavoriteGrid.css';
import {Link} from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import {BASE_URL, API_KEY} from "../../httpStrings";

const FavoriteGrid = (props) => {
  const {title} = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    title("Favorites");
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    let id;
    if (favorites) {
      for (id of favorites.ids) {
        axios.get(BASE_URL + id + "?api_key=" + API_KEY).then(response => {
          let updatedMovies = movies;
          updatedMovies.push(response.data);
          setMovies(updatedMovies);
        })
      }
    }
  }, []);

  const movieComponents = movies.map(movie => {
    const {id, poster_path, original_title} = movie;
    return (
      <Link to={`/movie/${id}`} key={id}>
        <Movie
          id={id}
          poster_path={poster_path}
          original_title={original_title}
        />
      </Link>)
  });

  return (
    <div>
      {movieComponents}
    </div>
  );
};

export default FavoriteGrid;
