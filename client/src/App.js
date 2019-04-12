import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from './components_container/header'
import NavBar from './components_container/navBar'
import GameContainerComponent from './components_container/gameContainerComponent'
import HomeComponent from './components_container/homeComponent'
// import AboutTestComponent from './components_presentational/aboutTestComponent'
import RandomDotsContainer from './components_container/randomDotsContainer'
import RainContainer from './components_container/rainContainer'
import MoveItContainer from './components_container/moveItContainer'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>

          <Header />
          <NavBar />
          <GameContainerComponent />

          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/randomdots" exact component={RandomDotsContainer} />
            <Route path="/rain" exact component={RainContainer} />
            <Route path="/moveit" exact component={MoveItContainer} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
