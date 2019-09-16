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
    if (nav === "popular") {
      title = "Popular Movies";
    } else if (nav === "top_rated") {
      title = "Top Rated";
    }
    this.props.title(title);
    axios.get(BASE_URL + nav + "?api_key=" + API_KEY).then(
      response => this.setState({movies: response.data.results})
    );

  }

  componentDidMount() {
    this.queryMovies();
    console.log("API KEY:" + API_KEY);
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