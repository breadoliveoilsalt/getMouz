import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

import TestComponent from './components_container/testComponent'
// import AboutTestComponent from './components_presentational/aboutTestComponent'
import RandomDotsContainer from './components_container/randomDotsContainer'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>

          <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/randomdots"> Random Dots </Link> </li>
          </ul>

          <Switch>
            <Route path="/" exact component={TestComponent}/>
            <Route path="/about" exact component={RandomDotsContainer} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
