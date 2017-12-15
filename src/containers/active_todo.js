import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoItems from '../components/todo_items';
import { AUTH_TOKEN, ROOT_URL, fetchSingleTodoList } from '../actions/index';

class ActiveTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    onInputChange(event) {
        this.setState({ name: event.target.value });
    }

    createItem(event) {
        event.preventDefault();
        const props = this.props;

        const request = axios({
            method: 'post',
            url: ROOT_URL + `/todos/${this.props.singleTodoList.todo_id}/items`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTH_TOKEN
            },
            data: {
                name: this.state.name
            }
        })
        .then(function(response) {
            props.fetchSingleTodoList(props.singleTodoList.todo_id);
        })
        .catch(function(err) {
            console.log(err);
        });

        this.setState({ name: "" });
    }

    render() {
        if(this.props.singleTodoList) {
            return (
                <div className="active-todo-list">
                    <h1 className="todo-list-title">{this.props.singleTodoList.title}</h1>

                    <form onSubmit={this.createItem} className="input-group new-item-name">
                        <input
                            placeholder="Add item to list..."
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onInputChange}
                        />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-secondary">Add</button>
                        </span>
                    </form>
                    <p className="new-todo-item-desc">(Todo list items will be automatically removed after 7 days)</p>

                    <TodoItems todoId={this.props.singleTodoList.todo_id} items={this.props.singleTodoList.items} />
                </div>
            );
        } else {
            return (
                <div>
                    <h2 className="todo-list-title">Please select a todo list to view</h2>
                </div>
            );
        }
    }
}

function mapStateToProps({ singleTodoList }) {
    return { singleTodoList };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSingleTodoList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTodo);
