import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Movie/>
    </div>
  );
}

class Movie extends React.Component {
  render() {
    return (
      <div onClick={this.getMoviesPop()}>
        <h1>Hey hey</h1>
      </div>
    );
  }

  getMoviesPop() {
    axios.get('http://api.themoviedb.org/3/movie/popular?api_key=06cbaa9260ed2be2d7c6e61239a26ab8').then(response => console.log(response));
  }
}

export default App;
