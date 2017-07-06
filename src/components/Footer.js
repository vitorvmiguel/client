import React from 'react';

import logo from '../images/kitches.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import google from '../images/google.svg';

const Footer = () => {
    return (
        <footer className="container">
            <div className="row clearfix">
              <hr/>
              <div className="social pull-left col-xs-12 col-sm-6">
                <div className="logo col-xs-4">
                  <img src={logo} alt="" className="img-responsive" />
                </div>
                <ul className="list-inline col-xs-8">
                  <li className="col-xs-3"><a href="https://www.facebook.com/KitchES/">
                  <img src={facebook} alt="facebook" className="img-responsive" />
                  </a></li>
                  <li className="col-xs-3"><a href="https://www.facebook.com/KitchES/">
                  <img src={instagram} alt="instagram" className="img-responsive" />
                  </a></li>
                  <li className="col-xs-3"><a href="https://www.facebook.com/KitchES/">
                  <img src={twitter} alt="twitter" className="img-responsive" />
                  </a></li>
                  <li className="col-xs-3"><a href="https://www.facebook.com/KitchES/">
                  <img src={google} alt="google" className="img-responsive" />
                  </a></li>
                </ul>
              </div>
              <div className="extra pull-left col-xs-12 col-sm-6 text-center">
                <ul className="list-unstyled">
                  <li><a href="/">Homepage</a></li>
                  <li><a >Work with us</a></li>
                  <li><a >Privacy policy</a></li>
                  <li><a >Terms and conditions</a></li>
                </ul>
              </div>
                <div className="col-xs-12 text-center">
                    <p>Copyright &copy; Kitches 2017</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;