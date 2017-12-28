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
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onEmailChange(event) {
        this.setState({ title: event.target.value });
    }

    render() {
        return (
            <div>
                <h3 className="main-menu-header">Login</h3>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}"
                            required
                            title="Please enter a valid email address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Category (min. 5 letters)"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.onCategoryChange}
                            pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}"
                            required
                            title="Please enter at least 5 letters"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
