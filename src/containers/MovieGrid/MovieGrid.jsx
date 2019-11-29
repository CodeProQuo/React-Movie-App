import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Movie from '../../components/Movie/Movie';
import { BASE_URL, API_KEY} from "../../httpStrings";

class MovieGrid extends React.Component {
  state = {
    movies: []
  }

  queryMovies() {
    const {nav} = this.props.match.params;
    let title = "";
    switch (nav) {
      case "popular":
        title = "Popular Movies";
        break;
      case "top_rated":
        title = "Top Rated";
        break;
      case "latest":
        title = "Latest Movies";
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
    this.props.title(title);
    axios.get(BASE_URL + nav + "?api_key=" + API_KEY).then(
      response => this.setState({movies: response.data.results})
    );

  }

  componentDidMount() {
    this.queryMovies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.nav !== prevProps.match.params.nav) {
      this.queryMovies();
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

export default MovieGrid;
