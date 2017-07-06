import React, { Component, PropTypes } from 'react';

class Contact extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="well">
            <h4>Contact Us</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required type="text" className="form-control" id="name" ref="name" placeholder="Your Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input required type="email" className="form-control" id="email" ref="email" placeholder="Your E-mail"/>
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <textarea required className="form-control" rows="3" id="comments" ref="comments" placeholder="Your Comments"></textarea>
              </div>
              <button type="submit" className="btn btn-warning" onClick={() => {this.context.router.push('/');}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;