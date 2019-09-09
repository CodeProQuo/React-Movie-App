import React from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div>
        <main>
          <Route path="/" exact component={MoviesList}/>
          <Route path="/" component={MovieDetail}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

class Movie extends React.Component {
  render() {


    return (
      <Link to={{
        pathname: "/" + this.props.original_title,
        movie_id: this.props.id,
      }}>
        <img src={'http://image.tmdb.org/t/p/w185' + this.props.poster_path} alt={this.props.original_title}/>
      </Link>

    );
  }
}

class MovieDetail extends React.Component {
  render() {
    console.log(this.props.movie_id);
    return (
      <p>{this.props.movie_id}</p>
    );
  }
  componentDidMount() {
    console.log(this.props);
  }
}

class MoviesList extends React.Component {
  state = {
    movies: []
  }

  render() {
    const movies = this.state.movies.map(movie => {
      return <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} original_title={movie.original_title}/>
    });

    this.getMoviesPop();

    return (
      <div>
        {movies}
      </div>
    );
  }

  getMoviesPop() {
    axios.get('http://api.themoviedb.org/3/movie/popular?api_key=06cbaa9260ed2be2d7c6e61239a26ab8').then(
      response => this.setState({movies: response.data.results})
    );
  }
}

export default App;
