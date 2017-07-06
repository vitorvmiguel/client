import React from 'react';

import chef from '../images/chef.png';
import earth from '../images/earth.png';
import stew from '../images/stew.png';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="about col-xs-12">
          <h2 className="text-center">TRY <strong>HOME-COOKED</strong> CUISINE</h2>
          <div className="about-card col-xs-12 col-sm-4">
            <img src={chef} alt="chef" className="img-responsive center-block" />
            <p className="text-center">
              <strong>HOME-COOKED</strong><br/>
              For anyone that wants to explore 
              home-cooked meals, Kitches is the community that 
              connects people with home chefs in Barcelona</p>
          </div>
          <div className="about-card col-xs-12 col-sm-4">
            <img src={earth} alt="earth" className="img-responsive center-block" />
            <p className="text-center">
              <strong>INTERNATIONAL</strong><br/>
              Unlike your everyday takeout, Kitches offers meals 
              made with love by real people, who are working with 
              the whole world as their source of inspiration</p>
          </div>
          <div className="about-card col-xs-12 col-sm-4">
            <img src={stew} alt="stew" className="img-responsive center-block" />
            <p className="text-center">
              <strong>SOMETHING NEW</strong><br/>
              What’s cooking in your neighbour’s kitchen 
              tonight? Maybe some Brazilian feijoada, or 
              Hong Kong style noodles will make your taste buds dance?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;