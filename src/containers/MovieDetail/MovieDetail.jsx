import React, {useState, useEffect} from 'react';
import axios from "axios";
import './MovieDetail.css';
import Trailers from '../Trailers/Trailers';
import {BASE_URL, API_KEY, IMAGES_BASE_URL} from "../../httpStrings";

const MovieDetail = (props) => {
  const {title} = props;
  const {id} = props.match.params;
  const [movieDetail, setDetails] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    title("MovieDetail");
    const favorites = localStorage.getItem('favorites');
    if (id) {
      axios.get(`${BASE_URL}${id}?api_key=${API_KEY}`).then(response => {
        setDetails(response.data);
      })
    }
    if (favorites && favorites.includes(id)) {
      setFavorite(true);
    }
  }, []);

  const favRemove = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))["ids"];
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i] === movieDetail.id) {
        favorites.splice(i, 1);
      }
    }
    localStorage.setItem('favorites', JSON.stringify({ids: favorites}));
    setFavorite(false);
  };

  const favAdd = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites == null) {
      favorites = {ids: []};
    }
    favorites.ids.push(movieDetail.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setFavorite(true);
  };

  let movieDetailJsx = (
    <header className="MovieDetailHeader">
    </header>
  );
  if (movieDetail) {
    movieDetailJsx = (
      <div>
        <header className="MovieDetailHeader">
          <p className="MovieTitle">{movieDetail.original_title}</p>
        </header>
        <div className="Container">
          <div className="Wrapper">
            <img src={`${IMAGES_BASE_URL}w154${movieDetail.poster_path}`} alt={movieDetail.original_title}/>
            <div className="Info">
              <div className="ReleaseDate">
                {movieDetail.release_date.substr(0, 4)}
              </div>
              <div className="Runtime">
                {movieDetail.runtime} min
              </div>
              <div className="Rating">
                {movieDetail.vote_average}/10
              </div>
              <button onClick={favorite ? favRemove : favAdd}
                      className="Favorite">{favorite ? "UNFAVORITE" : "MARK AS FAVORITE"}</button>
            </div>
          </div>
          <p className="Overview">{movieDetail.overview}</p>
          <Trailers id={movieDetail.id}/>
        </div>
      </div>
    );
  }
  return movieDetailJsx;
};

export default MovieDetail;
