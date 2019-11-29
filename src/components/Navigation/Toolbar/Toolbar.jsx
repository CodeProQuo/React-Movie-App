import React from 'react';
import './Toolbar.css';
import {Link} from "react-router-dom";
import { createBrowserHistory} from 'history';

class Toolbar extends React.Component {
  goBack = () => createBrowserHistory().goBack();

  render() {
    return (
      <header className="Toolbar">
        {this.props.title === "MovieDetail" ? (<Link to={'/'}>
          <div onClick={this.goBack} className="arrow left" />
        </Link>) : null}
        <p>{this.props.title}</p>
        <div className="DrawerToggle" onClick={this.props.clicked}>
          <div />
          <div />
          <div />
        </div>
      </header>
    );
  }
}

export default Toolbar;
