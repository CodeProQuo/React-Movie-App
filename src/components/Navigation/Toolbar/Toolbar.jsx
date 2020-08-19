import React from 'react';
import './Toolbar.css';
import {Link} from "react-router-dom";

const Toolbar = (props) => {
  const {title, clicked} = props;
  return (
  <header className="Toolbar">
    {title === "MovieDetail" ? (<Link to={'/'}><div className="arrow left"/></Link>) : null}
    <p>{title}</p>
    <div className="DrawerToggle" onClick={clicked}>
      <div/>
      <div/>
      <div/>
    </div>
  </header>)
};

export default Toolbar;
