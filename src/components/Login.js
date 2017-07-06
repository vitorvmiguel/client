import React, { Component, PropTypes } from 'react';

class Contact extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  render() {
    return (
      <div className="login-register-form-section">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="active"><a href="#login" data-toggle="tab" aria-expanded="true">Login</a></li>
                    <li className=""><a href="#register" data-toggle="tab" aria-expanded="false">Register</a></li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade active in" id="login">
                        <form className="form-horizontal" method="post" action="">
                            <div className="form-group ">
                                <div className="input-group">
                                    <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span></div>
                                    <input type="text" name="login_email" className="form-control" placeholder="Username or email" required="required" value=""/>
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="input-group">
                                    <div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></div>
                                    <input type="password" name="login_password" className="form-control" placeholder="Password" required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="rememberMe"/>
                                <label for="rememberMe">Remember Me</label>
                                <a href="#" className="pull-right">Forgot password?</a>
                            </div>  
                            <input type="submit" value="Login" className="btn btn-success btn-custom"/>

                        </form>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="register">
                        <form className="form-horizontal" method="post" action="">
                            <div className="form-group ">
                                <div className="input-group">
                                    <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span></div>
                                    <input type="text" name="register_username" className="form-control" placeholder="Username" required="required" value=""/>
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="input-group">
                                    <div className="input-group-addon"><span className="glyphicon glyphicon-info-sign"></span></div>
                                    <input type="text" name="register_fullname" className="form-control" placeholder="Full name" required="required" value=""/>
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="input-group">
                                    <div className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></div>
                                    <input type="email" name="register_email" className="form-control" placeholder="Email" required="required" value=""/>
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="input-group">
                                    <div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></div>
                                    <input type="password" name="register_password" className="form-control" placeholder="Password" required="required"/>
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="input-group">
                                    <div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></div>
                                    <input type="password" name="register_cpassword" className="form-control" placeholder="Confirm Password" required="required"/>
                                </div>
                            </div>
                            <input type="submit" value="Register" className="btn btn-success btn-custom"/>
                        </form>
                    </div>
                </div>
            </div>
    )
  }
}

export default Contact;