import React, { Component } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AUTH_TOKEN, ROOT_URL, fetchTodoLists } from '../actions/index';

class NewTodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: ""
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.createList = this.createList.bind(this);
    }

    onTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    onCategoryChange(event) {
        this.setState({ category: event.target.value });
    }

    createList(event) {
        event.preventDefault();
        const props = this.props;

        const request = axios({
            method: 'post',
            url: ROOT_URL + `/todos`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTH_TOKEN
            },
            data: {
                title: this.state.title,
                category: this.state.category
            }
        })
        .then(function(response) {
            props.fetchTodoLists(() => {
                this.props.history.push('/login');
            });
            NotificationManager.success(response.data.message, 'Success');
        })
        .catch(function(err) {
            console.log(err.message);
            NotificationManager.error("There was an unexpected error. Please try again.");
        });

        this.setState({
            title: "",
            category: ""
        });
    }

    render() {
        return (
            <div>
                <h3 className="new-todo-list-title">Create a new to-do list:</h3>
                <form onSubmit={this.createList}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="listtitle"
                            placeholder="Title (min. 3 letters)"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                            pattern="[A-Za-z\s]{3,50}"
                            required
                            title="Please enter at least 3 letters"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="listcategory"
                            placeholder="Category (min. 5 letters)"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.onCategoryChange}
                            pattern="[A-Za-z\s]{5,50}"
                            required
                            title="Please enter at least 5 letters"
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary new-todo-list-btn">Create</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTodoLists }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewTodoList);
