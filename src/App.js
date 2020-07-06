import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Components/header';
import AllBeers from './AllBeers';
import EachBeer from './EachBeer';
import RandomBeer from './RandomBeer';

class App extends Component() {
  render() {
    return (
      <div>
        <Home />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/all-beers" render={() => <AllBeers />} />
          <Route exact path="/random-beer" />
          <Route exact path="/new-beer" />
          <Route exact path="/beers/:id" />
        </Switch>
      </div>
    );
  }
}

export default App;
