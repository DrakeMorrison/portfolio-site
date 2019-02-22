import React from 'react';
import { Link } from 'react-router-dom';
import bgHelper from '../../bgHelper';
import projectRequests from '../../firebaseRequests/projectRequests';
import Slider from 'react-slick';

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

    const projectCards = this.state.projects.map(project => {
      return (
        <div class="media">
          <div class="media-left">
            <img class="media-object img-responsive img-rounded" src={project.thumbnail} alt="..." />
          </div>
          <div class="media-body">
            <h4 class="media-heading">{project.title}</h4>
            {project.description}
          </div>
        </div>
      );
    });

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      pauseOnHover: true,
      autoPlaySpeed: 3000
    };

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

          <Slider {...settings}>
            {projectCards}
          </Slider>

        </div>

      </div>
    );
  };
}

export default Projects;
