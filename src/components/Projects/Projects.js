import React from 'react';
import { Link } from 'react-router-dom';
import bgHelper from '../../bgHelper';
import projectRequests from '../../firebaseRequests/projectRequests';

class Projects extends React.Component {
  state = {
    projects: []
  }

  getProjects = () => {
    projectRequests.getRequest()
      .then(res => {
        this.setState({ projects: res });
      })
      .catch(console.error.bind(console));
  }

  componentDidMount() {
    bgHelper('https://github.com/DrakeMorrison/portfolio-site/raw/master/media/NH%2011.jpg');
    this.getProjects();
  }

  render () {
    return (
      <div className='AboutMe'>

        <div className='masthead clearfix'>
          <div className='inner'>

            <h3 className='masthead-brand'>Drake Morrison</h3>

            <nav>
              <ul className='nav masthead-nav'>

                <li><Link to='/'>About Me</Link></li>
                <li className='active'><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>

              </ul>
            </nav>

          </div>
        </div>

        <div className='inner cover'>

          <p>Projects Here: </p>

        </div>

      </div>
    );
  };
}

export default Projects;
