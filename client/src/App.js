import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from './components_container/header'
import NavBar from './components_container/navBar'
import GameWindowsContainer from './components_container/gameWindowsContainer'
import HomeComponent from './components_container/homeComponent'
import RandomDotsContainer from './components_container/randomDotsContainer'
import RainContainer from './components_container/rainContainer'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>

          <Header />
          <NavBar />

          <Switch>
            <Route path="/randomdots" exact component={RandomDotsContainer} />
            <Route path="/" exact component={GameWindowsContainer} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
