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

    }

    render() {
        return (
            <div>
                <h3 className="main-menu-header">Sign in</h3>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Title (min. 3 letters)"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                            pattern="[A-Za-z\s]{3,}"
                            required
                            title="Please enter at least 3 letters"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Category (min. 5 letters)"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.onCategoryChange}
                            pattern="[A-Za-z\s]{5,}"
                            required
                            title="Please enter at least 5 letters"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;
