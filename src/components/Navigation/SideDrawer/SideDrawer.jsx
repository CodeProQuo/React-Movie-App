import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Closed"]
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"]
  }
  return (
  <>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')}>
      <ul className="NavList">
        <NavigationItem id="popular">Popular Movies</NavigationItem>
        <NavigationItem id="top_rated">Top Rated</NavigationItem>
        <NavigationItem id="latest">Latest</NavigationItem>
        <NavigationItem id="upcoming">Upcoming</NavigationItem>
        <NavigationItem id="now_playing">Now Playing</NavigationItem>
        <NavigationItem id="favorites">Favorites</NavigationItem>
      </ul>
    </div>
  </>
);};

export default sideDrawer;
