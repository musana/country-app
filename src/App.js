import React, { Component } from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Country from './components/country';
import CountryList from './components/countryList'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
              <Route component={CountryList} path='/' exact/>
              <Route component={About} path='/about' />
              <Route component={Contact} path='/contact' />
              <Route component={Country} path='/:name' />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}