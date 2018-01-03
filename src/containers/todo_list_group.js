import React, { Component } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AUTH_TOKEN, ROOT_URL, fetchSingleTodoList, fetchTodoLists } from '../actions/index';

class TodoListGroup extends Component {
    constructor(props) {
        super(props);

        this.renderTodoLists = this.renderTodoLists.bind(this);
        this.deleteList = this.deleteList.bind(this);
    }

    deleteList(id, e) {
        e.stopPropagation();
        let conf = confirm("Are you sure you want to delete this list?");
        if(conf) {
            const props = this.props;

            const request = axios({
                method: 'delete',
                url: ROOT_URL + `/todos/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': AUTH_TOKEN
                }
            })
            .then(function(response) {
                props.fetchTodoLists(() => {
                    this.props.history.push('/login');
                });
                props.fetchSingleTodoList(null);
                NotificationManager.info(response.data.message);
            })
            .catch(function(err) {
                console.log(err.message);
                NotificationManager.error("There was an unexpected error. Please try again.");
            });
        }
    }

    renderTodoLists(list) {
        let id = list.id;
        let title = list.title;
        let category = list.category;

        return (
            <li key={id} className="list-group-item" onClick={() => this.props.fetchSingleTodoList(id)}>
                <div className="todo-list">
                    <h4>{title}</h4>
                    <p><i>{category}</i></p>
                </div>
                <div className="delete-todo-list">
                    <button type="submit" onClick={(e) => this.deleteList(id, e)} className="btn btn-danger delete-list-btn"><i className="glyphicon glyphicon-trash"></i></button>
                </div>
            </li>
        );
    }

    render() {
        if(this.props.todoLists[0]) {
            if(this.props.todoLists[0].length === 0) {
                return (
                    <ul className="list-group">
                        <li className="list-group-item"><h4>No Lists</h4></li>
                    </ul>
                );
            }
            return (
                <ul className="list-group todo-lists-list">
                    {this.props.todoLists[0].map(item => this.renderTodoLists(item))}
                </ul>
            );
        } else {
            return (
                <ul className="list-group">
                    <li className="list-group-item"><h4>Loading...</h4></li>
                </ul>
            );
        }
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTodoLists, fetchSingleTodoList }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoListGroup);
