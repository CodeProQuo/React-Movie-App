import React from 'react';
import './Toolbar.css';
import {Link} from "react-router-dom";

const toolbar = (props) => (
  <header className="Toolbar">
    {props.title === "MovieDetail" ? (<Link to={'/'}><div className="arrow left"></div></Link>) : null}
    <p>{props.title}</p>
    <div className="DrawerToggle" onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
);

export default toolbar;