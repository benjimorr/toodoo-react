import React, { Component } from 'react';

import Login from '../containers/login';
import Signup from '../containers/signup';

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginOpened: true,
            signupOpened: false
        };

        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
    }

    toggleLogin() {
        this.setState({
            loginOpened: true,
            signupOpened: false
        });
    }

    toggleSignup() {
        this.setState({
            loginOpened: false,
            signupOpened: true
        });
    }

    render() {
        return (
            <div className="auth-main">
                <div className="toodoo-logo">
                    <h1 className="toodoo-logo-text">TooDoo</h1>
                </div>

                <div className="login-signup-toggle">
                    <a className="login-button" onClick={this.toggleLogin}>Login</a>
                    &nbsp; or &nbsp;
                    <a className="signup-button" onClick={this.toggleSignup}>Sign up</a>
                </div>

                <div className="login-signup-show">
                    { this.state.loginOpened ? <Login history={this.props.history} /> : null }
                    { this.state.signupOpened ? <Signup history={this.props.history} /> : null }
                </div>
            </div>
        );
    }
}

export default Authentication;
