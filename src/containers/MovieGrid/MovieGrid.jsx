import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Movie from '../../components/Movie/Movie';
import {BASE_URL, API_KEY} from "../../httpStrings";

const MovieGrid = (props) => {
  const {title: setTitle} = props;
  const {nav} = props.match.params;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    queryMovies();
  }, [nav]);

  const queryMovies = () => {
    axios.get(`${BASE_URL}${nav}?api_key=${API_KEY}`).then(
      response => {
        console.log(response);
        setMovies(response.data.results);
      }
    );
  };

  const moviesLinks = movies.map(movie => {
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

  useEffect(() => {
    let title = "";
    switch (nav) {
      case "popular":
        title = "Popular Movies";
        break;
      case "top_rated":
        title = "Top Rated";
        break;
      case "upcoming":
        title = "Upcoming Movies";
        break;
      case "now_playing":
        title = "Now Playing";
        break;
      default:
        break;
    }
    setTitle(title);
  }, [moviesLinks]);

  return (
    <div>
      {moviesLinks}
    </div>
  );
};

export default MovieGrid;
