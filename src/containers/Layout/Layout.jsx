import React from 'react';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import {Redirect, Route} from "react-router";
import {Switch} from "react-router-dom";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieDetail from "../MovieDetail/MovieDetail";
import FavoriteGrid from '../FavoriteGrid/FavoriteGrid';
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
    title: "",
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true})
  }

  titleHandler = (title) => {
    this.setState({title: title})
  }

  render() {
    return (
      <>
        <div>
          <Toolbar
            clicked={this.sideDrawerOpenHandler}
            title={this.state.title}/>
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>
        </div>
        <main>
          <Switch>
            <Route path="/" exact><Redirect to={'/popular'}/></Route>
            <Route path="/favorites" exact render={(props) => <FavoriteGrid {...props} title={this.titleHandler}/>}/>
            <Route path="/:nav" exact render={(props) => <MovieGrid {...props} title={this.titleHandler}/>}/>
            <Route path="/movie/:id" exact render={(props) => <MovieDetail {...props} title={this.titleHandler}/>}/>
          </Switch>
        </main>
      </>
    );
  }
}

export default Layout;