import React from 'react';
import {Link} from 'react-router-dom';

class Contact extends React.Component {
  render () {
    return (
      <div className='AboutMe'>

        <div className='masthead clearfix'>
          <div className='inner'>

            <h3 className='masthead-brand'>Drake Morrison</h3>

            <nav>
              <ul className='nav masthead-nav'>

                <li><Link to='/'>About Me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li className='active'><Link to='/contact'>Contact</Link></li>

              </ul>
            </nav>

          </div>
        </div>

        <div className='inner cover'>

          <img src="https://github.com/DrakeMorrison/portfolio-site/raw/master/screenshots/2018_12_8_E7_00365_1.jpg" class="img-responsive img-circle" alt="Drake Morrison"/>

          <h1 className='cover-heading'>Hello!</h1>
          <p className='lead'>Drake Morrison is a Full Stack Software Developer who enjoys exploring the design of problem-solving strategies. Drake values simple, clear, and concise solutions to problems while working in a collaborative team environment. He loves to discover new ideas connected to the process of designing and crafting software.

            <br/> Away from computers he is fond of long hikes in the mountains, and practicing Martial Arts. A bookworm who takes pleasure in running games of Dungeons & Dragons for his friends, Drake is always trying out new mechanics to create an awesome experience for his players.

            <br /> Drake is a person who is deeply interested in “why?” Finding answers to those questions is a lifelong adventure and something that enhances both his professional and personal pursuits while bringing value to those around him. </p>
          <p className='lead'><Link to='/projects' className='btn btn-lg btn-default'>See what I built!</Link></p>

        </div>

        <div className='mastfoot'>
          <div className='inner'>
            <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
        </div>

      </div>
    );
  };
}

export default Contact;
