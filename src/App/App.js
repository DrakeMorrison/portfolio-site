import React, { Component } from 'react';
import {Route, BrowserRouter, Switch}  from 'react-router-dom';

import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='cover-container'>
          <BrowserRouter>
            <Switch>
              <Route
                path='/'
                exact
                component={AboutMe}
              />
              <Route
                path='/projects'
                component={Projects}
              />
              <Route
                path='/contact'
                component={Contact}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
