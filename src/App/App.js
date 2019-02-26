import React, { Component } from 'react';

import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import bgHelper from '../bgHelper';
import firebaseConnection from '../firebaseRequests/connection';
firebaseConnection();

class App extends Component {

  componentDidMount() {
    bgHelper('https://github.com/DrakeMorrison/portfolio-site/raw/master/media/CT%2014.jpg');
  }

  render () {
    return (
      <div className='App'>

        <div className='masthead clearfix'>
          <div className='inner'>

            <h3 className='masthead-brand'>Drake Morrison</h3>

            <nav>
              <ul className='nav masthead-nav'>

                <li className='active'>About Me</li>
                <li>Projects</li>
                <li>Contact</li>

              </ul>
            </nav>

          </div>
        </div>

        <div className='inner cover'>
          <AboutMe />
          <Projects />
        </div>

        <div className='mastfoot'>
          <Contact />
        </div>


      </div>
    );
  };
}

export default App;
