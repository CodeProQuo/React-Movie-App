import React from 'react';
import './FavoriteGrid.css';
import {Link} from "react-router-dom";
import Movie from "../../components/Movie/Movie";

class FavoriteGrid extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.props.title("Favorites");
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      this.setState({movies: favorites.movies});
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
