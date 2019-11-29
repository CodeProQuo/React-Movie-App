import React from 'react';
import axios from "axios";
import './MovieDetail.css';
import Trailers from '../Trailers/Trailers';
import {BASE_URL, API_KEY, IMAGES_BASE_URL} from "../../httpStrings";

class MovieDetail extends React.Component {
  state = {
    movieDetail: null,
    favorite: false,
  }

  componentDidMount() {
    this.props.title("MovieDetail");
    const {id} = this.props.match.params;
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (id) {
      axios.get(BASE_URL + this.props.match.params.id + "?api_key=" + API_KEY).then(response => {
        this.setState({movieDetail: response.data});
      })
    }
    if (favorites && favorites.movies.filter(( movie ) => {
      return movie.id === id;
    }).length) {
      this.setState({favorite: true})
    }
  }

  favRemove = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')).movies;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === this.state.movieDetail.id) {
        favorites.splice(i, 1);
      }
    }
    localStorage.setItem('favorites', JSON.stringify({movies: favorites}));
    this.setState({favorite: false});
  }

  favAdd = () => {
    const {id, poster_path, original_title} = this.state.movieDetail;
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites == null) {
      favorites = {movies: []};
    }
    favorites.movies.push({
      id: id,
      poster_path: poster_path,
      original_title: original_title
    });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.setState({favorite: true});
  }

  render() {
    const movieDetail = this.state.movieDetail;
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
              <img src={IMAGES_BASE_URL + "w154" + movieDetail.poster_path} alt={movieDetail.original_title}/>
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
                <button onClick={this.state.favorite ? this.favRemove :
                  this.favAdd
                }
                        className="Favorite">{this.state.favorite ? "UNFAVORITE" : "MARK AS FAVORITE"}</button>
              </div>
            </div>
            <p className="Overview">{movieDetail.overview}</p>
            <Trailers id={movieDetail.id}/>
          </div>
        </div>
      );
    }
    return movieDetailJsx;
  }
}

export default MovieDetail;
