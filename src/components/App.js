import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <div className="row">    
              {this.props.children}        
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
