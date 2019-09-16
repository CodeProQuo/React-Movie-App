import React from 'react';
import axios from 'axios';
import './FavoriteGrid.css';
import {Link} from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import {BASE_URL, API_KEY} from "../../httpStrings";

class FavoriteGrid extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.props.title("Favorites");
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    let id;
    if (favorites) {
      for (id of favorites.ids) {
        axios.get(BASE_URL + id + "?api_key=" + API_KEY).then(response => {
          let movies = this.state.movies;
          movies.push(response.data);
          this.setState({movies: movies});
        })
      }
    }
  }

  render() {
    const movies = this.state.movies.map(movie => {
      return (
        <Link to={'/movie/' + movie.id} key={movie.id}>
          <Movie
            id={movie.id}
            poster_path={movie.poster_path}
            original_title={movie.original_title}
          />
        </Link>)
    });

    return (
      <div>
        {movies}
      </div>
    );
  }
}

export default FavoriteGrid;