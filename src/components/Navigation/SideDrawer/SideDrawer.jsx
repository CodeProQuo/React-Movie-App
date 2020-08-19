import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  const {open, closed} = props;
  const attachedClasses = ["SideDrawer", open ? "Open" : "Closed"];
  return (
  <>
    <Backdrop show={open} clicked={closed}/>
    <div className={attachedClasses.join(' ')}>
      <ul className="NavList">
        <NavigationItem id="popular">Popular Movies</NavigationItem>
        <NavigationItem id="top_rated">Top Rated</NavigationItem>
        <NavigationItem id="upcoming">Upcoming</NavigationItem>
        <NavigationItem id="now_playing">Now Playing</NavigationItem>
        <NavigationItem id="favorites">Favorites</NavigationItem>
      </ul>
    </div>
  </>
);};

export default SideDrawer;
