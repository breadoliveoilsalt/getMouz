import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

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

          <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/randomdots"> Random Dots </Link> </li>
            <li> <Link to="/rain"> Make It Rain </Link> </li>
            <li> <Link to="/moveit"> I like to move it move it </Link> </li>
          </ul>

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
