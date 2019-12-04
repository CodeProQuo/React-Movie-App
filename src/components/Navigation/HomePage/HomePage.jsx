import React from 'react';
import './HomePage.css';
import NavigationItem from "../NavigationItem/NavigationItem";

const HomePage = (props) => {
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
};

export default HomePage;
