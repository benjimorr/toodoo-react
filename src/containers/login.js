import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="login-form-div">
                <h3 className="login-header">Login</h3>
                <form>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            required
                            title="Please enter a valid email address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                            pattern="[A-Za-z\d]{8,}"
                            required
                            title="Passwords must be at least 8 characters (only letters and numbers)"
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary login-btn">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
