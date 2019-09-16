import React from 'react';
import './Trailers.css';
import Trailer from '../../components/Trailer/Trailer';
import axios from "axios";
import {API_KEY, BASE_URL} from "../../httpStrings";

class Trailers extends React.Component {
  state = {
    trailers: []
  }

  render() {
    let i = 0;
    const trailers = this.state.trailers.filter(
      videos => {
        return videos.type === "Trailer"
      }).map(
      trailer => {
        i++;
        return <Trailer key={trailer.id} url_key={trailer.key} i={i}/>
      });

    if (trailers) {
      return (
        <div>
          <hr/>
          <h4 id="Trailers">Trailers:</h4>
          {trailers}
        </div>
      );
    }
  }

  componentDidMount() {
    axios.get(BASE_URL + this.props.id + "/videos?api_key=" + API_KEY).then(
      response => this.setState({trailers: response.data.results})
    );
  }
}

export default Trailers;