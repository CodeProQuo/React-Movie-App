import React, {useState} from 'react';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import {Redirect, Route} from "react-router";
import {Switch} from "react-router-dom";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieDetail from "../MovieDetail/MovieDetail";
import FavoriteGrid from '../FavoriteGrid/FavoriteGrid';
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, sideDrawerHandler] = useState(false);
  const [title, titleHandler] = useState("");

  return (
    <>
      <div>
        <Toolbar
          clicked={() => sideDrawerHandler(true)}
          title={title}/>
        <SideDrawer
          open={showSideDrawer}
          closed={() => sideDrawerHandler(false)}/>
      </div>
      <main>
        <Switch>
          <Route path="/" exact><Redirect to={'/popular'}/></Route>
          <Route path="/favorites" exact
                 render={(props) => <FavoriteGrid {...props} title={(newTitle) => titleHandler(newTitle)}/>}/>
          <Route path="/:nav" exact
                 render={(props) => <MovieGrid {...props} title={(newTitle) => titleHandler(newTitle)}/>}/>
          <Route path="/movie/:id" exact
                 render={(props) => <MovieDetail {...props} title={(newTitle) => titleHandler(newTitle)}/>}/>
        </Switch>
      </main>
    </>
  );
};

export default Layout;
