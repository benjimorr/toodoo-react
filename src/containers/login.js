import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

class Login extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-warning' : ''}`

        return (
            <div className={className}>
                <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="form-control"
                    {...field.input}
                />
                <div className="help-block">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        //this === component
        this.props.login(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="login-form-div">
                <h3 className="login-header">Login</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        validate={email}
                        component={this.renderField}
                    />
                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-secondary login-btn">Login</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.email) {
        errors.email = "Please enter a valid email address.";
    }
    if(!values.password || values.password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(null, { login })(Login)
);
