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
      <hr/>
      <div className="row">

        <div className="about col-xs-12">
          <div className="row">
            <h2 className="text-center col-xs-8 col-xs-offset-2">BUT, <strong>HOW KITCHES WORKS?</strong></h2>
          </div>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-2">
              <div className="col-sm-2 about-card">
                <div className="circle"><p>1</p></div>
                <p className="text-center">Create an account</p>
              </div>
              <div className="col-sm-2 about-card">
                <div className="circle"><p>2</p></div>
                <p className="text-center">Check out who’s cooking what</p>
              </div>
              <div className="col-sm-2 about-card">
                <div className="circle"><p>3</p></div>
                <p className="text-center">Place your order</p>
              </div>
              <div className="col-sm-2 about-card">
                <div className="circle"><p>4</p></div>
                <p className="text-center">Pick it up or have it delivered</p>
              </div>
              <div className="col-sm-2 about-card">
                <div className="circle"><p>5</p></div>
                <p className="text-center">Enjoy!</p>
              </div>
            </div>       
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="about col-xs-12">
          <h2 className="text-center col-xs-8 col-xs-offset-2">ARE YOU A GOOD COOKER, OR AS WE CALL IT - <strong>GODSENT</strong>?</h2>
          <p className="text-center col-xs-8 col-xs-offset-2 about-card">
            Whether you are brilliant at Italian cuisine, 
            a master of Thai fusion or cook Mexican dishes
            like no one else, you have come to the right 
            place. Here at Kitches we love food from all 
            over the world. Simply register below, and get your kitchen ready!</p>
            <button href="/contact" className="btn btn-success btn-lg center-block">COOK WITH KITCHES</button>
        </div>
      </div>
    </div>
  );
}

export default About;