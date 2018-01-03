import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from '../actions/index';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

class Signup extends Component {
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
        this.props.signup(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="signup-form-div">
                <h3 className="login-header">Sign up</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="name"
                        type="text"
                        placeholder="Name"
                        component={this.renderField}
                    />
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
                    <Field
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Password Confirmation"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-secondary signup-btn">Sign up</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.name || values.name.length < 5 || values.name.length > 50) {
        errors.name = "Name must be between 5 and 50 characters.";
    }
    if(!values.email) {
        errors.email = "Please enter a valid email address.";
    }
    if(!values.password || values.password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
    }
    if(!values.passwordConfirmation || values.passwordConfirmation.length < 8) {
        errors.passwordConfirmation = "Password must be at least 8 characters.";
    }
    if(values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = "Passwords must be the same."
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'SignupForm'
})(
    connect(null, { signup })(Signup)
);
