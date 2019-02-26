import React, { Fragment } from 'react';

class AboutMe extends React.Component {
  render () {
    return (
      <Fragment>
        <div className='img-container center-block'>
          <img src="https://github.com/DrakeMorrison/portfolio-site/raw/master/media/2018_12_8_E7_00365_1.jpg" className="img-responsive img-rounded" alt="Drake Morrison"/>
        </div>

        <h1 className='cover-heading'>Hello!</h1>
        <p className='lead'>Drake Morrison is a Full Stack Software Developer who enjoys exploring the design of problem-solving strategies. Drake values simple, clear, and concise solutions to problems while working in a collaborative team environment. He loves to discover new ideas connected to the process of designing and crafting software.

          <br/><br /> Away from computers he is fond of long hikes in the mountains, and practicing Martial Arts. A bookworm who takes pleasure in running games of Dungeons & Dragons for his friends, Drake is always trying out new mechanics to create an awesome experience for his players.

          <br /><br /> Drake is a person who is deeply interested in “why?” Finding answers to those questions is a lifelong adventure and something that enhances both his professional and personal pursuits while bringing value to those around him. </p>
        <p className='lead'><button className='btn btn-lg btn-default'>See what I built!</button></p>
      </Fragment>
    );
  };
}

export default AboutMe;
