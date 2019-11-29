import React from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";
import NavigationItem from "../NavigationItem/NavigationItem";

const homePage = (props) => {
  return (
    <div>
      <ul className="NavList">
        <NavigationItem id="popular">Popular Movies</NavigationItem>

        <NavigationItem id="top_rated">Top Rated</NavigationItem>

        <NavigationItem id="latest">Latest</NavigationItem>

        <NavigationItem id="upcoming">Upcoming</NavigationItem>

        <NavigationItem id="now_playing">Now Playing</NavigationItem>

        <NavigationItem id="favorites">Favorites</NavigationItem>
      </ul>
    </div>
  );
}

export default homePage;
