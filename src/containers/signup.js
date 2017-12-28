import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordConfChange = this.onPasswordConfChange.bind(this);
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    onPasswordConfChange(event) {
        this.setState({ password_confirmation: event.target.value });
    }

    render() {
        return (
            <div className="signup-form-div">
                <h3 className="login-header">Sign up</h3>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name (min. 5 letters)"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onNameChange}
                            pattern="[A-Za-z\s]{5,50}"
                            required
                            title="Please enter at least 5 letters"
                        />
                    </div>
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
                            placeholder="Password (min. 8 chars)"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                            pattern="[A-Za-z\d]{8,}"
                            required
                            title="Passwords must be at least 8 characters (only letters and numbers)"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="form-control"
                            value={this.state.password_confirmation}
                            onChange={this.onPasswordConfChange}
                            pattern="[A-Za-z\d]{8,}"
                            required
                            title="Passwords must be at least 8 characters (only letters and numbers)"
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary signup-btn">Sign up</button>
                </form>
            </div>
        );
    }
}

export default Signup;
