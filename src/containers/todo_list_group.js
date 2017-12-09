import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchSingleTodoList } from '../actions/index';

class TodoListGroup extends Component {
    constructor(props) {
        super(props);
    }

    renderTodoLists(list) {
        let id = list.id;
        let title = list.title;
        let category = list.category;

        return (
            <li key={id}
                className="list-group-item"
                onClick={() => this.props.fetchSingleTodoList(id)}>
                <div className="todo-list">
                    <h4>{title}</h4>
                    <p><i>{category}</i></p>
                </div>
            </li>
        );
    }

    render() {
        if(this.props.todoLists[0]) {
            return (
                <ul className="list-group">
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
    return bindActionCreators({ fetchSingleTodoList }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoListGroup);
